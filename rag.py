import requests
import numpy as np
import re
import json
from pathlib import Path

OLLAMA = "http://localhost:11434/api"
EMMED_MODEL = "nomic-embed-text"
CHAT_MODEL = "qwen3:4b"

def embed_text(texts):
    r = requests.post(
        f"{OLLAMA}/embed",
        json={
        "model": EMMED_MODEL, 
        "input": texts})
    return np.array(r.json()["embeddings"])

def ask_llm(prompt):
    r = requests.post(
        f"{OLLAMA}/chat",
        json={"model": CHAT_MODEL,
        "stream": False,
        "think": False,
        "messages": [{"role": "user", "content": prompt}]}
    )
    r.raise_for_status()
    text = r.json()["message"]["content"]
    return re.sub(r"^.*?</think>\s*", "", text, flags=re.DOTALL).strip()

def parse_plant_js(filepath: Path) -> list[dict]:
    content = filepath.read_text(encoding="utf-8")
    match = re.search(r"const\s+plants\s*=\s*(\[[\s\S]*?\]);", content, re.DOTALL)
    if not match: 
       return []
    js_array = match.group(1)
    json_str = re.sub(r'([{\s,])(\w+)\s*:', r'\1"\2":', js_array)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    return json.loads(json_str)

def format_plant_text(plant: dict) -> str:
    clean_sources = re.sub(r"<[^>]+>", "", plant.get("sources", ""))
    keywords = ", ".join(plant.get("keywords", []))
    return (
            f"Plant Name: {plant['commonName']} ({plant['scientificName']})\n"
            f"Keywords: {keywords}\n"
            f"Summary: {plant['summary']}\n"
            f"Habitat: {plant['habitat']}\n"
            f"Lore: {plant['lore']}\n"
            f"Recipes & Uses: {plant['recipes']}\n"
            f"Growing Tips: {plant['growingTips']}\n"
            f"Safety Cautions: {plant['cautions']}\n"
            f"Sources: {clean_sources}"
        ) 


chunks = []
all_plant_names = []
for file in Path("docs").glob("*.js"):
    plants = parse_plant_js(file)
    chunks += [format_plant_text(plant) for plant in plants]
    all_plant_names += [plant["commonName"] for plant in plants]

summary_chunk = (
    f"Garden Catalog Overview: The LPIRG Roots of Growth garden currently has "
    f"{len(chunks)} cataloged plant species in total. "
    f"The full list of plants in the garden includes: {', '.join(all_plant_names)}."
)
chunks.append(summary_chunk)

print(f"Loaded {len(chunks)} plant entries from docs/*.js")

chunk_vectors = embed_text(chunks)
print(f"Indexed {len(chunk_vectors)} chunks\n")

def retrieve(question, k=3):
    q = embed_text([question])[0]
    scores = chunk_vectors @ q / (np.linalg.norm(chunk_vectors, axis=1) * np.linalg.norm(q))
    return [chunks[i] for i in np.argsort(scores)[::-1][:k]]


while True:
    question = input("\nEnter your question (or 'exit' to quit): ")
    if question.lower() == "exit":
        break
    relevant_chunks = retrieve(question)
    context = "\n\n".join(relevant_chunks)
    prompt = f"""You are the Roots of Growth Garden Assistant for LPIRG. Answer the question using ONLY the context below. Always include the safety cautions if the user asks about eating, harvesting, or medicinal uses. If the answer is not in the context, say you do not have that information.

Context:
{context}

Question: {question}"""
    print("\n" + ask_llm(prompt))