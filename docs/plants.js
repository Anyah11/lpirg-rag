const plants = [
  {
    id: "saskatoon-bush",
    commonName: "Saskatoon Bush",
    scientificName: "Amelanchier alnifolia",
    keywords: ["berry", "shrub", "food", "prairie", "recipes"],
    summary: "A hardy native shrub known for sweet purple berries and spring blossoms.",
    habitat: "Prairie edges, coulees, open woods, and dry slopes.",
    lore: "Saskatoon berries have long been valued as a nourishing local food and are strongly associated with prairie place, memory, and seasonal gathering.",
    recipes: "Use berries in pies, jams, syrups, muffins, sauces, or dried fruit mixes.",
    growingTips: "Plant in full sun to part shade. Water young plants until established. Prune lightly after fruiting.",
    cautions: "Correct identification matters. Do not eat wild plants unless you are certain of the plant and preparation.",
    sources: "Add local and scholarly sources here.",
	image: "saskatoon-front.png"
  },
  {
    id: "lodgepole-pine",
    commonName: "Lodgepole Pine",
    scientificName: "Pinus contorta",
    keywords: ["tree", "evergreen", "pine", "forest", "shelter"],
    summary: "A tall, straight evergreen often found in western forests and mountain regions.",
    habitat: "Montane and foothill forests, especially in cooler western regions.",
    lore: "Lodgepole pine is associated with shelter, structure, fire ecology, and forest renewal.",
    recipes: "Young needles may be used for educational demonstrations of aromatic teas, but only with expert confirmation and appropriate cautions.",
    growingTips: "Prefers well-drained soil and full sun. Give it room; mature trees can become large.",
    cautions: "Avoid consuming resinous plant parts without expert guidance. Some preparations can irritate skin or stomach.",
    sources: "Add local and scholarly sources here.",
	image: "lodgepole.png"
  },
  {
    id: "willow-tree",
    commonName: "Willow Tree",
    scientificName: "Salix species",
    keywords: ["tree", "water", "riparian", "medicine", "basketry"],
    summary: "A flexible, water-loving tree or shrub often found along streams and wetlands.",
    habitat: "Riverbanks, wetlands, coulees, and other moist places.",
    lore: "Willow is often linked with water, flexibility, weaving, shelter, and traditional plant knowledge.",
    recipes: "This entry is for education only. Add safe, locally approved uses or recipes here if appropriate.",
    growingTips: "Willows like moist soil and sun. Many species root easily from cuttings, but check local guidance before planting near pipes or foundations.",
    cautions: "Willow contains salicylates. People with aspirin sensitivity, bleeding disorders, or certain medications should avoid medicinal use.",
    sources: "Add local and scholarly sources here.",
	image: "willow.png"
  },
  {
    id: "poplar-tree",
    commonName: "Poplar Tree",
    scientificName: "Populus species",
    keywords: ["tree", "cottonwood", "aspen", "riparian", "shelter"],
    summary: "A fast-growing native tree group that includes aspens and cottonwoods.",
    habitat: "River valleys, shelterbelts, open woods, and moist lowlands.",
    lore: "Poplars are often connected with wind, trembling leaves, riparian life, and habitat for birds and insects.",
    recipes: "This entry is for education only. Add safe, verified recipes or uses here if appropriate.",
    growingTips: "Plant with space. Poplars grow quickly and may send up suckers. They often prefer moist soil and full sun.",
    cautions: "Roots can be aggressive near drains, foundations, and sidewalks. Confirm species before use.",
    sources: "Add local and scholarly sources here.",
	image: "poplar.png"
  },



{
  id: "pasque-flower",
  commonName: "Pasque Flower",
  scientificName: "Pulsatilla patens",
  keywords: ["wildflower", "prairie", "native", "spring", "pasque flower", "crocus", "pollinator"],
  summary: "One of the earliest spring wildflowers, recognized by its silky purple blossoms and finely divided foliage.",
  habitat: "Native prairies, open grasslands, coulees, and well-drained hillsides throughout southern Alberta and the Canadian Prairies.",
  lore: "Often called the Prairie Crocus in Alberta, the Pasque Flower is a cherished symbol of spring's arrival. Its fuzzy stems and leaves help protect the plant from chilly prairie winds and late frosts.",
  recipes: "This entry is for education only. The Pasque Flower is not considered an edible plant and should not be used for food.",
  growingTips: "Prefers full sun and well-drained soils. Once established it is drought tolerant and thrives in naturalized prairie gardens. Avoid disturbing mature plants, as they develop deep taproots.",
  cautions: "All parts of the fresh plant contain compounds that can irritate the skin and digestive system if handled or consumed improperly. Enjoy this beautiful wildflower without picking or eating it.",
  sources: "Alberta Native Plant Council; Flora of North America; Government of Alberta.",
  image: "pasque-flower.png"
},



{
  id: "gooseberry",
  commonName: "Gooseberry",
  scientificName: "Ribes oxyacanthoides",
  keywords: ["shrub", "gooseberry", "native", "berries", "thorny", "wildlife"],
  summary: "A hardy native shrub with thorny stems, small greenish flowers, and tart berries enjoyed by both people and wildlife.",
  habitat: "Coulees, river valleys, woodland edges, shrublands, and open forests throughout southern Alberta.",
  lore: "Gooseberry shrubs provide important nesting cover for birds, while their fruit has long been gathered by Indigenous peoples and early settlers for food and preserves.",
  recipes: "The tart berries may be eaten fresh when ripe or used in pies, jams, jellies, sauces, and syrups. Harvest only from correctly identified plants growing in clean locations.",
  growingTips: "Prefers full sun to partial shade and moderately moist, well-drained soil. Hardy, adaptable, and suitable for wildlife-friendly landscapes.",
  cautions: "Branches are armed with sharp thorns. Wash berries thoroughly before eating and avoid harvesting from roadsides or contaminated areas.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "gooseberry.png"
},

{
  id: "golden-currant",
  commonName: "Golden Currant",
  scientificName: "Ribes aureum",
  keywords: ["shrub", "currant", "native", "berries", "yellow flowers", "wildlife"],
  summary: "A fragrant native shrub bearing bright yellow spring flowers followed by sweet berries that range from golden to deep purple when ripe.",
  habitat: "Coulees, streambanks, woodland edges, shelterbelts, and open shrublands throughout southern Alberta.",
  lore: "The sweetly scented blossoms attract early pollinators, while the colorful berries provide an important food source for birds and mammals throughout the summer.",
  recipes: "The ripe berries may be eaten fresh or used in jams, jellies, pies, syrups, and sauces. Harvest only from correctly identified plants in clean locations.",
  growingTips: "Thrives in full sun to partial shade and adapts well to a variety of well-drained soils. Drought tolerant once established.",
  cautions: "Although the fruit is edible, avoid consuming unripe berries. Wash harvested fruit thoroughly before eating.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "golden-currant.png"
},

{
  id: "canada-anemone",
  commonName: "Canada Anemone",
  scientificName: "Anemone canadensis",
  keywords: ["wildflower", "anemone", "native", "white flowers", "meadow", "pollinator"],
  summary: "A graceful native perennial with bright white flowers that spread to form attractive colonies in moist meadows and streamside habitats.",
  habitat: "Moist prairies, wet meadows, streambanks, coulees, and open woodlands throughout southern Alberta.",
  lore: "Canada Anemone spreads by underground rhizomes, creating beautiful carpets of white blossoms in early summer. Its flowers attract a variety of native pollinating insects.",
  recipes: "This entry is for education only. Canada Anemone is not considered an edible plant and should not be used for food.",
  growingTips: "Prefers full sun to partial shade with consistently moist, well-drained soil. Excellent for naturalized gardens and rain gardens where it has room to spread.",
  cautions: "Fresh plant tissues may cause skin irritation in sensitive individuals and should not be consumed.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "canada-anemone.png"
},

{
  id: "blazing-star",
  commonName: "Blazing Star",
  scientificName: "Liatris punctata",
  keywords: ["wildflower", "blazing star", "gayfeather", "native", "prairie", "purple flowers", "pollinator"],
  summary: "A striking native prairie perennial with tall spikes of vivid purple flower heads that bloom from late summer into early autumn.",
  habitat: "Dry mixed-grass prairies, open hillsides, coulees, and well-drained grasslands throughout southern Alberta.",
  lore: "One of the prairie's latest-blooming wildflowers, Blazing Star provides valuable nectar for butterflies, native bees, and other pollinators preparing for autumn.",
  recipes: "This entry is for education only. Blazing Star is not generally considered an edible plant and should not be used for food.",
  growingTips: "Requires full sun and excellent drainage. Extremely drought tolerant once established and an outstanding choice for prairie restoration and pollinator gardens.",
  cautions: "Avoid digging wild plants from native prairie. Purchase nursery-grown plants or grow from responsibly sourced seed.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "blazing-star.png"
},





{
  id: "small-leaf-pussytoes",
  commonName: "Small-leaf Pussytoes",
  scientificName: "Antennaria parvifolia",
  keywords: ["wildflower", "prairie", "native", "groundcover", "pussytoes", "pollinator"],
  summary: "A low-growing native perennial with soft, silvery foliage and fuzzy white flower clusters that resemble tiny cat's paws.",
  habitat: "Dry prairies, grasslands, open hillsides, coulees, and well-drained rocky soils throughout southern Alberta.",
  lore: "Its soft flower heads inspired the name 'pussytoes.' The plant is valued as a hardy prairie species that provides early-season nectar for native insects.",
  recipes: "This entry is for education only. Add safe, verified recipes or traditional uses here if appropriate.",
  growingTips: "Thrives in full sun and dry, well-drained soil. Excellent for native gardens, rock gardens, and naturalized prairie landscapes.",
  cautions: "Avoid overwatering. While generally easy to grow, proper identification is recommended before using any wild plant.",
  sources: "Alberta Native Plant Council; Flora of North America; Government of Alberta.",
  image: "toes2.png"
},

{
  id: "slender-cinquefoil",
  commonName: "Slender Cinquefoil",
  scientificName: "Potentilla gracilis",
  keywords: ["wildflower", "cinquefoil", "prairie", "native", "yellow flowers", "pollinator"],
  summary: "A graceful native wildflower with bright yellow five-petaled blossoms that bloom throughout much of the summer.",
  habitat: "Prairies, open meadows, grasslands, roadsides, and lightly wooded areas with well-drained soils.",
  lore: "Cinquefoils have long symbolized strength and endurance. Their star-like yellow flowers brighten prairie landscapes during the growing season.",
  recipes: "This entry is for education only. Add safe, verified recipes or traditional uses here if appropriate.",
  growingTips: "Prefers full sun to light shade and tolerates drought once established. Performs well in native and pollinator gardens.",
  cautions: "Many cinquefoil species appear similar. Confirm identification before harvesting or using any wild specimen.",
  sources: "Flora of North America; Alberta Native Plant Council; USDA PLANTS Database.",
  image: "cinquefoil.png"
},




{
  id: "harebell",
  commonName: "Harebell",
  scientificName: "Campanula rotundifolia",
  keywords: ["wildflower", "harebell", "bellflower", "native", "prairie", "blue flowers", "pollinator"],
  summary: "A delicate native wildflower with slender stems and nodding blue, bell-shaped blossoms that bloom from early summer into autumn.",
  habitat: "Native prairies, coulees, open hillsides, grasslands, rocky outcrops, and open forests with well-drained soils throughout southern Alberta.",
  lore: "Harebell has long been admired for its graceful beauty despite its fragile appearance. The flowers sway in the prairie breeze and provide nectar for bees, butterflies, and other pollinating insects.",
  recipes: "This entry is for education only. Harebell is not generally considered an edible plant and should not be harvested for food.",
  growingTips: "Prefers full sun to partial shade and well-drained soil. Once established it is drought tolerant and thrives in rock gardens, native plantings, and naturalized prairie landscapes.",
  cautions: "Although common in many areas, avoid collecting plants from the wild. Support local ecosystems by purchasing nursery-propagated plants or growing from responsibly sourced seed.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "bluebell.png"
},



{
  id: "prairie-smoke",
  commonName: "Prairie Smoke",
  scientificName: "Geum triflorum",
  keywords: ["wildflower", "prairie", "native", "pink flowers", "seed heads", "pollinator"],
  summary: "A charming native prairie wildflower known for its nodding pink blossoms and feathery seed heads that resemble wisps of smoke.",
  habitat: "Native prairies, open grasslands, coulees, and well-drained hillsides throughout southern Alberta.",
  lore: "After flowering, the long silky seed plumes create the smoky appearance that gives the plant its common name. It is a favorite of native plant enthusiasts for its long season of interest.",
  recipes: "This entry is for education only. Prairie Smoke is not generally considered an edible plant and should not be used for food.",
  growingTips: "Thrives in full sun and well-drained soil. Extremely hardy and drought tolerant once established, making it an excellent choice for prairie gardens.",
  cautions: "Avoid collecting plants from the wild. Purchase nursery-grown specimens or grow from responsibly sourced seed.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "prairie-smoke.png"
},

{
  id: "yarrow",
  commonName: "Yarrow",
  scientificName: "Achillea millefolium",
  keywords: ["wildflower", "yarrow", "native", "white flowers", "pollinator", "medicinal"],
  summary: "A hardy native perennial with finely divided foliage and broad clusters of white flowers that bloom throughout the summer.",
  habitat: "Prairies, meadows, roadsides, coulees, open woodlands, and disturbed ground across southern Alberta.",
  lore: "Named after the Greek hero Achilles, yarrow has been associated with healing and resilience for thousands of years. It is an important nectar source for many beneficial insects.",
  recipes: "Young leaves have occasionally been used sparingly as a culinary herb or tea. This entry is for education only. Use only verified recipes and proper identification.",
  growingTips: "Prefers full sun and well-drained soil. Extremely adaptable, drought tolerant, and excellent for pollinator gardens.",
  cautions: "Some people experience skin irritation when handling yarrow. Avoid medicinal use without appropriate knowledge or professional guidance.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "yarrow.png"
},

{
  id: "wild-strawberry",
  commonName: "Wild Strawberry",
  scientificName: "Fragaria virginiana",
  keywords: ["wildflower", "strawberry", "native", "berries", "groundcover", "pollinator"],
  summary: "A low-growing native perennial producing white blossoms followed by small, sweet, intensely flavorful strawberries.",
  habitat: "Prairies, open woodlands, forest edges, meadows, and coulees with well-drained soils throughout southern Alberta.",
  lore: "Wild strawberries have long been enjoyed by Indigenous peoples and settlers alike. Though much smaller than cultivated strawberries, their flavor is often considered richer and sweeter.",
  recipes: "The berries may be eaten fresh or used in jams, desserts, and syrups. Leaves have also been used to prepare herbal teas.",
  growingTips: "Prefers full sun to partial shade with moderately moist, well-drained soil. Spreads naturally by runners to form attractive groundcover.",
  cautions: "Harvest only from areas free of pesticides and roadside contamination. Wash fruit thoroughly before eating.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "wild-strawberry.png"
},

{
  id: "bearberry",
  commonName: "Bearberry",
  scientificName: "Arctostaphylos uva-ursi",
  keywords: ["shrub", "bearberry", "kinnikinnick", "native", "evergreen", "berries"],
  summary: "A low-growing evergreen shrub with glossy leaves, pink spring flowers, and bright red berries that persist into winter.",
  habitat: "Dry sandy soils, rocky slopes, open forests, and well-drained hillsides throughout Alberta.",
  lore: "Also known as kinnikinnick, bearberry has a long history of traditional use by many Indigenous peoples. Its berries provide food for bears, birds, and other wildlife.",
  recipes: "This entry is for education only. Although the berries are technically edible, they are dry and mealy and are seldom eaten fresh. Traditional preparations should be followed only from reliable sources.",
  growingTips: "Requires full sun to partial shade and excellent drainage. An outstanding evergreen groundcover for dry, challenging sites.",
  cautions: "Avoid medicinal use without appropriate knowledge. Do not harvest wild populations where they are limited.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "bearberry.png"
},

{
  id: "maximilian-sunflower",
  commonName: "Maximilian Sunflower",
  scientificName: "Helianthus maximiliani",
  keywords: ["wildflower", "sunflower", "native", "prairie", "yellow flowers", "pollinator"],
  summary: "A tall native sunflower with numerous bright yellow blooms that provide spectacular late-season color across the prairie.",
  habitat: "Native prairies, grasslands, roadsides, and open meadows with well-drained soils throughout the Great Plains, including southern Alberta.",
  lore: "Named in honor of Prince Maximilian of Wied, this sunflower is an important late-season nectar source for bees and butterflies while providing seeds for birds.",
  recipes: "Seeds may be eaten after proper preparation, although they are much smaller than those of cultivated sunflowers. This entry is for education only.",
  growingTips: "Thrives in full sun and tolerates drought once established. Best planted where its tall stems have room to spread naturally.",
  cautions: "Can spread by underground rhizomes and form colonies in favorable conditions.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "max-sunflower.png"
},

{
  id: "silvery-lupine",
  commonName: "Silvery Lupine",
  scientificName: "Lupinus argenteus",
  keywords: ["wildflower", "lupine", "native", "prairie", "purple flowers", "legume", "nitrogen fixer"],
  summary: "A beautiful native lupine with silvery foliage and upright spikes of blue to violet flowers that brighten prairie landscapes in early summer.",
  habitat: "Dry prairies, foothills, open forests, and rocky slopes with well-drained soils throughout southern Alberta.",
  lore: "Like many members of the pea family, silvery lupine enriches prairie soils through nitrogen-fixing bacteria living on its roots. Its flowers are especially attractive to native bees.",
  recipes: "This entry is for education only. Silvery Lupine is not considered edible and should not be used for food.",
  growingTips: "Requires full sun and excellent drainage. Once established it is drought tolerant and well suited to native prairie restoration and pollinator gardens.",
  cautions: "Seeds and foliage contain alkaloids and may be poisonous if consumed by people or livestock.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "silvery-lupine.png"
},




































{
  id: "buffalo-berry",
  commonName: "Buffalo Berry",
  scientificName: "Shepherdia canadensis",
  keywords: ["shrub", "buffalo berry", "soapberry", "native", "berries", "wildlife"],
  summary: "A hardy native shrub producing bright red berries that provide an important food source for wildlife and have a long history of traditional use.",
  habitat: "Open woodlands, coulees, forest edges, foothills, and well-drained slopes throughout southern Alberta.",
  lore: "Buffalo berry has long been valued by Indigenous peoples, who traditionally prepared the berries in a frothy dessert sometimes called 'Indian ice cream.' The shrub also provides excellent habitat and food for birds and mammals.",
  recipes: "The berries have traditionally been used in sauces, jellies, and whipped berry desserts after proper preparation. This entry is for education only. Use only verified recipes from reliable sources.",
  growingTips: "Prefers full sun to partial shade and well-drained soils. Extremely hardy and drought tolerant once established, making it well suited to naturalized landscapes.",
  cautions: "The berries are very tart and contain naturally occurring compounds that can cause stomach upset if eaten in large quantities. Consume only properly prepared fruit.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "buffalo-berry.png"
},

{
  id: "prickly-wild-rose",
  commonName: "Prickly Wild Rose",
  scientificName: "Rosa acicularis",
  keywords: ["shrub", "wild rose", "rose", "native", "rose hips", "pollinator"],
  summary: "A hardy native rose with fragrant pink blossoms and bright red hips that support wildlife and brighten woodland edges.",
  habitat: "Open forests, coulees, streambanks, forest margins, and sheltered grasslands throughout Alberta.",
  lore: "The Prickly Wild Rose is Alberta's provincial flower and has long symbolized beauty, resilience, and renewal. Its flowers attract many native pollinators while its hips provide food for birds and mammals.",
  recipes: "Rose hips may be used in teas, syrups, jellies, and preserves after removing the seeds and irritating hairs. Petals may also be used in desserts and beverages.",
  growingTips: "Thrives in full sun to partial shade and well-drained soils. Once established it is hardy, drought tolerant, and spreads gradually by underground shoots.",
  cautions: "Stems are densely prickled. Properly clean rose hips before use, and avoid consuming the irritating hairs surrounding the seeds.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "prickly-wild-rose.png"
},

{
  id: "snowberry",
  commonName: "Snowberry",
  scientificName: "Symphoricarpos albus",
  keywords: ["shrub", "snowberry", "native", "white berries", "wildlife", "hedgerow"],
  summary: "A compact native shrub recognized by its clusters of white berries that persist well into winter and provide valuable wildlife habitat.",
  habitat: "Open woodlands, coulees, streambanks, forest edges, and shrubby slopes throughout southern Alberta.",
  lore: "The bright white berries have made snowberry a symbol of winter. Dense thickets provide excellent shelter for birds and small mammals year-round.",
  recipes: "This entry is for education only. Snowberry fruit is not considered edible and should not be used for food.",
  growingTips: "Prefers full sun to partial shade and adapts to a wide range of soils. An excellent choice for erosion control, wildlife gardens, and naturalized landscapes.",
  cautions: "The berries contain compounds that may cause nausea or vomiting if eaten. Keep fruit away from children and pets.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "snowberry.png"
},

{
  id: "nodding-onion",
  commonName: "Nodding Onion",
  scientificName: "Allium cernuum",
  keywords: ["wildflower", "onion", "native", "prairie", "edible", "pollinator", "pink flowers"],
  summary: "A graceful native onion with nodding clusters of pink flowers that bloom in midsummer and attract numerous pollinators.",
  habitat: "Dry prairies, rocky slopes, open woodlands, coulees, and well-drained grasslands throughout southern Alberta.",
  lore: "The graceful drooping flower heads distinguish this species from other native onions. It has long been appreciated for both its ornamental beauty and traditional food value.",
  recipes: "Leaves and bulbs have a mild onion flavor and have traditionally been used fresh or cooked. Harvest only from abundant populations or cultivated plants, and use verified identification.",
  growingTips: "Prefers full sun and well-drained soils. Easy to grow from seed or bulbs and well suited to native gardens and pollinator plantings.",
  cautions: "Proper identification is essential, as some poisonous plants resemble wild onions before flowering. A true onion scent is an important identifying characteristic.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "nodding-onion.png"
},

{
  id: "narrow-leaf-coneflower",
  commonName: "Narrow-leaf Coneflower",
  scientificName: "Echinacea angustifolia",
  keywords: ["wildflower", "coneflower", "native", "prairie", "purple flowers", "pollinator", "medicinal"],
  summary: "A striking prairie wildflower with rosy-purple petals surrounding a prominent cone, prized for its beauty and ecological importance.",
  habitat: "Native mixed-grass prairies, dry hillsides, and well-drained grasslands throughout the Great Plains, including parts of southern Alberta.",
  lore: "Narrow-leaf Coneflower has a long history of traditional use by several Indigenous nations and later became one of North America's best-known medicinal prairie plants. Its flowers are highly attractive to bees and butterflies.",
  recipes: "This entry is for education only. Although the plant has documented traditional medicinal uses, it should not be consumed without appropriate knowledge and professional guidance.",
  growingTips: "Requires full sun and excellent drainage. Extremely drought tolerant once established and an outstanding choice for prairie restoration and pollinator gardens.",
  cautions: "Avoid harvesting wild populations, as they may be locally uncommon. Purchase nursery-grown plants or responsibly sourced seed whenever possible.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "narrow-leaf-coneflower.png"
},



{
  id: "heartleaf-alexanders",
  commonName: "Heartleaf Alexanders",
  scientificName: "Zizia aptera",
  keywords: ["wildflower", "native", "prairie", "alexanders", "pollinator", "umbel"],
  summary: "A native perennial with clusters of small yellow flowers and distinctive heart-shaped basal leaves.",
  habitat: "Moist prairies, open woodlands, coulees, and streamside meadows across parts of the Canadian Prairies.",
  lore: "As an early-blooming member of the carrot family, it provides valuable nectar for native bees and beneficial insects emerging in spring.",
  recipes: "This entry is for education only. Add safe, verified recipes or traditional uses here if appropriate.",
  growingTips: "Prefers full sun to partial shade and moderately moist, well-drained soils. A good choice for naturalized prairie gardens.",
  cautions: "Members of the carrot family can resemble poisonous species. Never harvest unless identification is absolutely certain.",
  sources: "Flora of North America; Alberta Native Plant Council; USDA PLANTS Database.",
  image: "heartleaf.png"
},

{
  id: "golden-bean",
  commonName: "Golden Bean",
  scientificName: "Thermopsis rhombifolia",
  keywords: ["wildflower", "legume", "prairie", "native", "yellow flowers", "nitrogen fixer"],
  summary: "A striking native legume with bright golden pea-like flowers that bloom in late spring and early summer.",
  habitat: "Dry prairies, coulees, hillsides, and open grasslands with well-drained soils throughout southern Alberta.",
  lore: "Like many legumes, golden bean helps enrich prairie soils through its association with nitrogen-fixing bacteria, supporting healthy grassland ecosystems.",
  recipes: "This entry is for education only. This species is not considered edible and should not be used as food.",
  growingTips: "Thrives in full sun and dry conditions. Once established it is drought tolerant and well suited to prairie restoration projects.",
  cautions: "All parts of the plant contain alkaloids and may be poisonous if consumed by people or livestock.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "goldenbean.png"
},

{
  id: "northern-sweetvetch",
  commonName: "Northern Sweetvetch",
  scientificName: "Hedysarum boreale",
  keywords: ["wildflower", "legume", "sweetvetch", "prairie", "native", "pollinator"],
  summary: "A native perennial legume with rosy pink flower spikes and segmented seed pods that support prairie pollinators.",
  habitat: "Native grasslands, open slopes, coulees, foothills, and dry meadows across western Canada.",
  lore: "Sweetvetch has long been valued by Indigenous peoples, who traditionally harvested the nutritious roots of some populations as a food source.",
  recipes: "Some Indigenous communities traditionally prepared the roots of correctly identified plants. This entry is for education only. Add locally appropriate, verified information before suggesting food uses.",
  growingTips: "Prefers full sun and well-drained soils. Drought tolerant once established and beneficial for native pollinators and soil health.",
  cautions: "Proper identification is essential before considering any traditional food use, as similar legumes may not be edible.",
  sources: "Flora of North America; Alberta Native Plant Council; Indigenous ethnobotanical references.",
  image: "northern-sweetvetch.png"
},




{
  id: "smooth-aster",
  commonName: "Smooth Aster",
  scientificName: "Symphyotrichum laeve",
  keywords: ["wildflower", "aster", "prairie", "native", "pollinator", "late season"],
  summary: "A hardy native perennial with smooth bluish leaves and lavender-blue daisy-like flowers that bloom late in the prairie season.",
  habitat: "Native prairies, open hillsides, coulees, dry grasslands, and open woodland edges across western Canada.",
  lore: "Late-blooming asters symbolize resilience and the changing seasons, providing one of the final nectar sources before winter.",
  recipes: "This species is not generally used as a food plant. This entry is for education only.",
  growingTips: "Thrives in full sun and well-drained soils. Drought tolerant once established and excellent for late-season pollinators.",
  cautions: "Not considered edible. Avoid harvesting wild plants unless properly identified.",
  sources: "Flora of North America; Alberta Native Plant Council; Native Plant Trust.",
  image: "smooth-aster.png"
},
{
  id: "stiff-goldenrod",
  commonName: "Stiff Goldenrod",
  scientificName: "Solidago rigida",
  keywords: ["wildflower", "goldenrod", "prairie", "native", "pollinator"],
  summary: "A striking native perennial with broad leaves and flat-topped clusters of brilliant golden flowers.",
  habitat: "Dry prairies, open grasslands, coulees, and sunny hillsides throughout the Canadian Prairies.",
  lore: "Goldenrods have long symbolized abundance and resilience, brightening late summer landscapes and supporting countless insects.",
  recipes: "Not generally used as a food plant. This entry is for education only.",
  growingTips: "Prefers full sun and dry to moderately moist, well-drained soils. Excellent for native bees and butterflies.",
  cautions: "Goldenrods are often mistaken for ragweed, but they are not the primary cause of seasonal allergies.",
  sources: "Flora of North America; Alberta Native Plant Council; USDA Plants Database.",
  image: "stiff-goldenrod.png"
},
{
  id: "missouri-goldenrod",
  commonName: "Missouri Goldenrod",
  scientificName: "Solidago missouriensis",
  keywords: ["wildflower", "goldenrod", "prairie", "native", "pollinator"],
  summary: "A low-growing native goldenrod producing dense clusters of bright yellow flowers that attract a wide variety of pollinators.",
  habitat: "Native prairie, dry grasslands, roadsides, coulees, and open slopes across western Canada.",
  lore: "Its cheerful blooms have traditionally signaled the approach of autumn on the prairie.",
  recipes: "Not generally used as a food plant. This entry is for education only.",
  growingTips: "Very drought tolerant. Grows best in full sun and well-drained soils with little maintenance.",
  cautions: "Avoid confusing goldenrod with ragweed, which flowers at the same time.",
  sources: "Flora of North America; Alberta Native Plant Council; USDA Plants Database.",
  image: "missouri-goldenrod.png"
},
{
  id: "anise-hyssop",
  commonName: "Anise Hyssop",
  scientificName: "Agastache foeniculum",
  keywords: ["wildflower", "mint", "native", "pollinator", "fragrant", "herb"],
  summary: "A fragrant native mint with spikes of lavender flowers and leaves scented like licorice or anise.",
  habitat: "Prairies, open meadows, woodland edges, and sunny coulees throughout western Canada.",
  lore: "Traditionally valued by several Indigenous peoples and later herbalists for its pleasant fragrance and tea-making qualities.",
  recipes: "The aromatic leaves are commonly brewed into herbal tea. Always use correctly identified plants from clean locations.",
  growingTips: "Prefers full sun to partial shade and moderately well-drained soil. Excellent for bees, butterflies, and hummingbirds.",
  cautions: "Harvest only correctly identified plants and avoid roadside populations.",
  sources: "Flora of North America; Alberta Native Plant Council; Indigenous ethnobotanical references.",
  image: "anise-hyssop.png"
},
{
  id: "wild-bergamot",
  commonName: "Wild Bergamot",
  scientificName: "Monarda fistulosa",
  keywords: ["wildflower", "mint", "bergamot", "native", "pollinator", "herb"],
  summary: "A showy native mint with lavender flower heads that attract bees, butterflies, and hummingbirds throughout summer.",
  habitat: "Prairies, open woodlands, meadows, coulees, and sunny hillsides across western Canada.",
  lore: "Many Indigenous peoples traditionally used wild bergamot in teas and other cultural practices, and its aromatic leaves remain widely appreciated.",
  recipes: "Leaves and flowers are commonly used for herbal tea when properly identified and harvested from clean locations.",
  growingTips: "Grows best in full sun with well-drained soil. Spreads gradually and supports many native pollinators.",
  cautions: "Proper identification is recommended before using any wild herbs.",
  sources: "Flora of North America; Alberta Native Plant Council; Indigenous ethnobotanical references.",
  image: "wild-bergamot.png"
},
{
  id: "prairie-coneflower",
  commonName: "Prairie Coneflower",
  scientificName: "Ratibida columnifera",
  keywords: ["wildflower", "coneflower", "prairie", "native", "pollinator"],
  summary: "A distinctive prairie wildflower with drooping yellow or reddish petals surrounding a tall central cone.",
  habitat: "Dry prairies, grasslands, roadsides, coulees, and open sunny slopes across western Canada.",
  lore: "Its unusual flower shape makes it one of the iconic blooms of the northern prairie landscape.",
  recipes: "This species is not commonly used as a food plant. This entry is for education only.",
  growingTips: "Thrives in full sun and dry, well-drained soils. Highly drought tolerant and excellent for pollinator gardens.",
  cautions: "Not intended for culinary use. Avoid harvesting from protected natural areas.",
  sources: "Flora of North America; Alberta Native Plant Council; USDA Plants Database.",
  image: "coneflower.png"
},
{
  id: "smooth-fleabane",
  commonName: "Smooth Fleabane",
  scientificName: "Erigeron glabellus",
  keywords: ["wildflower", "fleabane", "prairie", "native", "pollinator"],
  summary: "A graceful native perennial with soft lavender daisy-like flowers that bloom from late spring into summer.",
  habitat: "Prairies, open meadows, foothills, coulees, and woodland edges across western Canada.",
  lore: "Members of the fleabane family were once believed to discourage insects when dried and hung indoors, giving rise to their common name.",
  recipes: "Not generally used as a food plant. This entry is for education only.",
  growingTips: "Prefers full sun to light shade and well-drained soils. Easy to grow and valuable for native pollinators.",
  cautions: "Proper identification is recommended before collecting any wild plants.",
  sources: "Flora of North America; Alberta Native Plant Council; USDA Plants Database.",
  image: "smooth-fleabane.png"
},


{
  id: "dark-throat-shooting-star",
  commonName: "Dark-throat Shooting Star",
  scientificName: "Dodecatheon pulchellum",
  keywords: ["wildflower", "shooting star", "prairie", "native", "spring", "pollinator", "wet meadow"],
  summary: "A graceful native perennial with nodding magenta flowers whose swept-back petals reveal a distinctive dark center and golden stamens.",
  habitat: "Moist prairies, wet meadows, streambanks, seepage areas, and open woodland edges throughout southern Alberta and western North America.",
  lore: "The unusual flowers resemble tiny shooting stars falling from the sky, giving the plant its memorable common name. Bumblebees pollinate the blossoms through buzz pollination, vibrating the flowers to release pollen.",
  recipes: "This entry is for education only. This species is not considered edible and should not be used for food.",
  growingTips: "Prefers full sun to partial shade with moist, well-drained soil during spring growth. Once dormant in summer, it tolerates drier conditions. An excellent choice for naturalized wildflower and rain gardens.",
  cautions: "Avoid digging wild plants, as natural populations can be sensitive to disturbance. Propagate from nursery-grown stock or responsibly collected seed.",
  sources: "Flora of North America; Alberta Native Plant Council; Government of Alberta.",
  image: "dark-throat-shooting-star.png"
},




























  {
id: "prairie-sage",
commonName: "Prairie Sage",
scientificName: "Artemisia ludoviciana",
keywords: ["sage", "prairie", "medicine", "ceremony", "silver", "native plant"],
summary: "A fragrant silver-leaved perennial native to the prairies, valued for its deep cultural significance.",
habitat: "Dry prairies, grasslands, roadsides, open hillsides, and well-drained soils throughout southern Alberta.",
lore: "Prairie Sage is one of the four sacred medicines used by many Indigenous Nations, including the Blackfoot. It has long been gathered for ceremony, purification, prayer, and traditional healing, and should always be harvested respectfully and sustainably.",
recipes: "Prairie Sage is traditionally prepared as a tea or infusion for specific cultural and medicinal purposes by knowledgeable practitioners. Because identification and preparation are important, avoid consuming wild plants without reliable guidance.",
growingTips: "Plant in full sun with well-drained soil. Once established it is highly drought tolerant, spreads slowly by rhizomes, and requires little maintenance.",
cautions: "Do not confuse Prairie Sage with culinary sage (Salvia officinalis). Harvest sparingly from healthy wild populations and avoid collecting from protected areas or roadsides where plants may be contaminated.",
sources: "Alberta Native Plant Council; Hellson & Gadd, <i>Ethnobotany of the Blackfoot Indians (1974)</i>; Government of Alberta native plant resources; Flora of North America.",
	image: "prairiesage.png"

  }

];
