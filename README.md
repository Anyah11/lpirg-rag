# LPIRG Roots of Growth — Local Plant Catalog RAG

A lightweight Retrieval-Augmented Generation (RAG) assistant built for the **Lethbridge Public Interest Research Group (LPIRG) Roots of Growth** garden project. It parses structured plant records directly from JavaScript catalog files, generates vector embeddings locally via **Ollama**, and answers visitor questions about native southern Alberta plants using cosine similarity search and grounded LLM responses.

---

## Features

- **Zero-Database In-Memory Vector Search:** Uses NumPy dot products and cosine similarity over 35 native plant entries (plus an auto-generated garden catalog overview chunk) without external vector database infrastructure.
- **Direct JS Data Ingestion:** Extracts, normalizes, and cleans structured plant objects (`commonName`, `scientificName`, `habitat`, `lore`, `recipes`, `growingTips`, `cautions`, and `sources`) straight from `docs/plant.js`.
- **100% Local Execution:** Runs offline on Apple Silicon / local hardware using Ollama (`nomic-embed-text` for embeddings and `qwen3:4b` for grounded response generation).
- **Safety-First Prompt Guardrails:** Enforces strict context grounding so safety cautions are always surfaced for edible, foraging, or medicinal queries without hallucinating unverified plant uses.

---

## Project Structure

```text
lpirg-rag/
├── docs/
│   └── plant.js          # Source catalog of 35 native Alberta garden plants
├── rag.py                # Ingestion, embedding, cosine retrieval, and CLI chat loop
├── pyproject.toml        # Project metadata and dependencies (managed via uv)
├── .gitignore            # Excludes .venv/, __pycache__/, and OS artifacts
└── README.md
```

---

## Prerequisites

1. **Python 3.11+** and [`uv`](https://docs.astral.sh/uv/)
2. **Ollama** installed and running locally (`http://localhost:11434`)

Pull the required local models before running the script:

```bash
ollama pull nomic-embed-text
ollama pull qwen3:4b
```

---

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anyah11/lpirg-rag.git
   cd lpirg-rag
   ```

2. **Install dependencies:**
   ```bash
   uv sync
   ```

3. **Run the interactive garden assistant:**
   ```bash
   uv run rag.py
   ```

---

## Example Queries

- *"How many plants are in the garden?"*
- *"Which plants in the garden have edible berries and what are the cautions?"*
- *"What native wildflowers grow well in dry prairie soil and attract pollinators?"*
- *"Tell me about the cultural significance of Prairie Sage."*

---

## Roadmap

- [ ] Persist generated embeddings to a static `plants_vectors.json` cache to skip re-indexing on startup.
- [ ] Wrap retrieval and generation in a lightweight FastAPI / serverless endpoint for integration with the LPIRG Roots of Growth website.
- [ ] Return matched plant image filenames (`image`) alongside answers to render visual plant cards in the web UI.