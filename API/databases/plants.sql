-- database schema
create table plants (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    scientific_name VARCHAR(50),
    sunlight VARCHAR(50),
    water VARCHAR(50),
    soil VARCHAR(50)
)

-- data
INSERT INTO plants (id, name, scientific_name, sunlight, water, soil)
VALUES
    (nextval('PLANT_ID_SEQ'), 'jungle rose', 'geoppertia roseopicta', 'full shade', 'moist soil, distilled water, high humidity', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'prayer plant', 'maranta leuconereura', 'full shade', 'dry out halfway between waterings, distilled water, high humidity', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'common asparagus fern', 'asparagus setaceus', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'never never plant', 'scenanthre setosa', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'heart of jesus', 'caladium bicolour', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'rubber plant', 'ficus elastica', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'pineapple', 'ananas comosus', 'full sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'devils ivy', 'epripremnum aureum', 'full shade', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'corn plant', 'dracaena fragrans', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'rattlesnake plant', 'geoppertia lancifolia', 'full shade', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'mexican snow ball', 'echeveria elegans', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'swiss cheese plant', 'monstera deliciosa', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'jade plant', 'crassula ovata',  'partial sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'swiss cheese plant', 'monstera adansonii', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'weeping fig', 'ficus benjamina', 'partial sun', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'arrowhead plant - pink', 'syngonium podophyllum', 'full shade', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'arrowhead plant - green', 'syngonium podophyllum', 'full shade', '', 'potting mix soil, peat moss mix soil'),
    (nextval('PLANT_ID_SEQ'), 'tradescantia nanouk', 'tradescantia cerinthoides', 'partial sun', '', 'loam, sandy loam'),
    (nextval('PLANT_ID_SEQ'), 'lizard tail', 'gasteraloe beguinii', 'partial sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'tiger aloe', 'aloe veriegata', 'partial sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'lipstick echeveria', 'echeveria agavoides', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'eves pin', 'austrocylindropuntia subutala', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'mother-in-laws tongue | fernwood', 'sansevieria trifasciata', 'full sun or shade', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'old man cactus', 'cephalocereus senilis', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'old lady cactus', 'mammillaria hahniana', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'fairy castle cactus', 'cereus tetragonus', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'ball cactus', 'parodia magnifica', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'toothpick cactus', 'stetsonia coryne', 'full', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'pincushion cactus', 'mammillaria crinita', 'full sun', '', 'succulent & cactus soil'),
    (nextval('PLANT_ID_SEQ'), 'dumb cane', 'dieffenbachia seguine', 'full shade', '', 'potting mix soil, peat moss mix soil')