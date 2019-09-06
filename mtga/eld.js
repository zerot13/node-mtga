const { CardPool, Card } = require('./models.js')

let throne_of_eldraine = new CardPool({name: "throne_of_eldraine", cards: []})

throne_of_eldraine.addCard(new Card({ mtgaID: 70149, setNumber: 2, name: "all_that_glitters", prettyName: "All That Glitters", cardType: "Enchantment", set: "ELD", subTypes: "Aura", colorIdentity: ['W'], colors: ['White'], rarity: "Uncommon", cost: ['1', 'W'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70176, setNumber: 29, name: "shining_armor", prettyName: "Shining Armor", cardType: "Artifact", set: "ELD", subTypes: "Equipment", colorIdentity: ['W'], colors: ['White'], rarity: "Common", cost: ['1', 'W'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70182, setNumber: 35, name: "venerable_knight", prettyName: "Venerable Knight", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['W'], colors: ['White'], rarity: "Uncommon", cost: ['W'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70185, setNumber: 38, name: "animating_faerie", prettyName: "Animating Faerie", cardType: "Creature", set: "ELD", subTypes: "Faerie", colorIdentity: ['U'], colors: ['Blue'], rarity: "Uncommon", cost: ['2', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70188, setNumber: 41, name: "corridor_monitor", prettyName: "Corridor Monitor", cardType: "Artifact Creature", set: "ELD", subTypes: "Construct", colorIdentity: ['U'], colors: ['Blue'], rarity: "Common", cost: ['1', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70192, setNumber: 45, name: "faerie_vandal", prettyName: "Faerie Vandal", cardType: "Creature", set: "ELD", subTypes: "Faerie Rogue", colorIdentity: ['U'], colors: ['Blue'], rarity: "Uncommon", cost: ['1', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70194, setNumber: 47, name: "frogify", prettyName: "Frogify", cardType: "Enchantment", set: "ELD", subTypes: "Aura", colorIdentity: ['U'], colors: ['Blue'], rarity: "Uncommon", cost: ['1', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70209, setNumber: 62, name: "run_away_together", prettyName: "Run Away Together", cardType: "Instant", set: "ELD", subTypes: "", colorIdentity: ['U'], colors: ['Blue'], rarity: "Common", cost: ['1', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70221, setNumber: 74, name: "witching_well", prettyName: "Witching Well", cardType: "Artifact", set: "ELD", subTypes: "", colorIdentity: ['U'], colors: ['Blue'], rarity: "Common", cost: ['U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70223, setNumber: 76, name: "bake_into_a_pie", prettyName: "Bake into a Pie", cardType: "Instant", set: "ELD", subTypes: "", colorIdentity: ['B'], colors: ['Black'], rarity: "Common", cost: ['2', 'B', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70225, setNumber: 78, name: "belle_of_the_brawl", prettyName: "Belle of the Brawl", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['B'], colors: ['Black'], rarity: "Uncommon", cost: ['2', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70237, setNumber: 90, name: "foulmire_knight", prettyName: "Foulmire Knight", cardType: "Creature", set: "ELD", subTypes: "Zombie Knight", colorIdentity: ['B'], colors: ['Black'], rarity: "Uncommon", cost: ['B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70246, setNumber: 99, name: "order_of_midnight", prettyName: "Order of Midnight", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['B'], colors: ['Black'], rarity: "Uncommon", cost: ['1', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70252, setNumber: 105, name: "smitten_swordmaster", prettyName: "Smitten Swordmaster", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['B'], colors: ['Black'], rarity: "Common", cost: ['1', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70254, setNumber: 107, name: "syr_konrad_the_grim", prettyName: "Syr Konrad, the Grim", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['B'], colors: ['Black'], rarity: "Uncommon", cost: ['3', 'B', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70266, setNumber: 119, name: "crystal_slipper", prettyName: "Crystal Slipper", cardType: "Artifact", set: "ELD", subTypes: "Equipment", colorIdentity: ['R'], colors: ['Red'], rarity: "Common", cost: ['1', 'R'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70269, setNumber: 122, name: "embereth_shieldbreaker", prettyName: "Embereth Shieldbreaker", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['R'], colors: ['Red'], rarity: "Uncommon", cost: ['1', 'R'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70296, setNumber: 149, name: "beanstalk_giant", prettyName: "Beanstalk Giant", cardType: "Creature", set: "ELD", subTypes: "Giant", colorIdentity: ['G'], colors: ['Green'], rarity: "Uncommon", cost: ['6', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70310, setNumber: 163, name: "keeper_of_fables", prettyName: "Keeper of Fables", cardType: "Creature", set: "ELD", subTypes: "Cat", colorIdentity: ['G'], colors: ['Green'], rarity: "Uncommon", cost: ['3', 'G', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70321, setNumber: 174, name: "rosethorn_acolyte", prettyName: "Rosethorn Acolyte", cardType: "Creature", set: "ELD", subTypes: "Elf Druid", colorIdentity: ['G'], colors: ['Green'], rarity: "Common", cost: ['2', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70338, setNumber: 191, name: "garruk_cursed_huntsman", prettyName: "Garruk, Cursed Huntsman", cardType: "Planeswalker", set: "ELD", subTypes: "Garruk", colorIdentity: ['B', 'G'], colors: ['Black', 'Green'], rarity: "Mythic Rare", cost: ['4', 'B', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70341, setNumber: 194, name: "inspiring_veteran", prettyName: "Inspiring Veteran", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['R', 'W'], colors: ['Red', 'White'], rarity: "Uncommon", cost: ['R', 'W'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70343, setNumber: 196, name: "maraleaf_pixie", prettyName: "Maraleaf Pixie", cardType: "Creature", set: "ELD", subTypes: "Faerie", colorIdentity: ['G', 'U'], colors: ['Blue', 'Green'], rarity: "Uncommon", cost: ['G', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70347, setNumber: 200, name: "savvy_hunter", prettyName: "Savvy Hunter", cardType: "Creature", set: "ELD", subTypes: "Human Warrior", colorIdentity: ['B', 'G'], colors: ['Black', 'Green'], rarity: "Uncommon", cost: ['1', 'B', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70348, setNumber: 201, name: "shinechaser", prettyName: "Shinechaser", cardType: "Creature", set: "ELD", subTypes: "Faerie", colorIdentity: ['W', 'U'], colors: ['White', 'Blue'], rarity: "Uncommon", cost: ['1', 'W', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70349, setNumber: 202, name: "steelclaw_lance", prettyName: "Steelclaw Lance", cardType: "Artifact", set: "ELD", subTypes: "Equipment", colorIdentity: ['B', 'R'], colors: ['Red', 'Black'], rarity: "Uncommon", cost: ['B', 'R'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70352, setNumber: 205, name: "wintermoor_commander", prettyName: "Wintermoor Commander", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['W', 'B'], colors: ['White', 'Black'], rarity: "Uncommon", cost: ['W', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70353, setNumber: 206, name: "arcanists_owl", prettyName: "Arcanist's Owl", cardType: "Artifact Creature", set: "ELD", subTypes: "Bird", colorIdentity: ['W', 'U'], colors: ['White', 'Blue'], rarity: "Uncommon", cost: ['(W/U)', '(W/U)', '(W/U)', '(W/U)'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70357, setNumber: 210, name: "fireborn_knight", prettyName: "Fireborn Knight", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['R', 'W'], colors: ['Red', 'White'], rarity: "Uncommon", cost: ['(R/W)', '(R/W)', '(R/W)', '(R/W)'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70367, setNumber: 220, name: "golden_egg", prettyName: "Golden Egg", cardType: "Artifact", set: "ELD", subTypes: "Food", colorIdentity: [], colors: ['Colorless'], rarity: "Common", cost: ['2'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70369, setNumber: 222, name: "heraldic_banner", prettyName: "Heraldic Banner", cardType: "Artifact", set: "ELD", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Uncommon", cost: ['3'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70377, setNumber: 230, name: "shambling_suit", prettyName: "Shambling Suit", cardType: "Artifact Creature", set: "ELD", subTypes: "Construct", colorIdentity: [], colors: ['Colorless'], rarity: "Uncommon", cost: ['3'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70384, setNumber: 237, name: "witchs_oven", prettyName: "Witch's Oven", cardType: "Artifact", set: "ELD", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Uncommon", cost: ['1'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70395, setNumber: 248, name: "tournament_grounds", prettyName: "Tournament Grounds", cardType: "Land", set: "ELD", subTypes: "", colorIdentity: ['W', 'B', 'R'], colors: ['Red', 'White', 'Black'], rarity: "Uncommon", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70397, setNumber: 250, name: "plains", prettyName: "Plains", cardType: "Land", set: "ELD", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70398, setNumber: 251, name: "plains", prettyName: "Plains", cardType: "Land", set: "ELD", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70399, setNumber: 252, name: "plains", prettyName: "Plains", cardType: "Land", set: "ELD", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70400, setNumber: 253, name: "plains", prettyName: "Plains", cardType: "Land", set: "ELD", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70401, setNumber: 254, name: "island", prettyName: "Island", cardType: "Land", set: "ELD", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70402, setNumber: 255, name: "island", prettyName: "Island", cardType: "Land", set: "ELD", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70403, setNumber: 256, name: "island", prettyName: "Island", cardType: "Land", set: "ELD", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70404, setNumber: 257, name: "island", prettyName: "Island", cardType: "Land", set: "ELD", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70405, setNumber: 258, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "ELD", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70406, setNumber: 259, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "ELD", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70407, setNumber: 260, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "ELD", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70408, setNumber: 261, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "ELD", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70409, setNumber: 262, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "ELD", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70410, setNumber: 263, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "ELD", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70411, setNumber: 264, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "ELD", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70412, setNumber: 265, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "ELD", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70413, setNumber: 266, name: "forest", prettyName: "Forest", cardType: "Land", set: "ELD", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70414, setNumber: 267, name: "forest", prettyName: "Forest", cardType: "Land", set: "ELD", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70415, setNumber: 268, name: "forest", prettyName: "Forest", cardType: "Land", set: "ELD", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70416, setNumber: 269, name: "forest", prettyName: "Forest", cardType: "Land", set: "ELD", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70421, setNumber: 308, name: "windscarred_crag", prettyName: "Wind-Scarred Crag", cardType: "Land", set: "ELD", subTypes: "", colorIdentity: ['R', 'W'], colors: ['Red', 'White'], rarity: "Common", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70426, setNumber: 313, name: "thornwood_falls", prettyName: "Thornwood Falls", cardType: "Land", set: "ELD", subTypes: "", colorIdentity: ['G', 'U'], colors: ['Blue', 'Green'], rarity: "Common", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70427, setNumber: 10001, name: "goat", prettyName: "Goat", cardType: "Creature", set: "ELD", subTypes: "Goat", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70428, setNumber: 10002, name: "human", prettyName: "Human", cardType: "Creature", set: "ELD", subTypes: "Human", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70429, setNumber: 10003, name: "knight", prettyName: "Knight", cardType: "Creature", set: "ELD", subTypes: "Knight", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70430, setNumber: 10004, name: "mouse", prettyName: "Mouse", cardType: "Creature", set: "ELD", subTypes: "PlaceholderSubType2", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70431, setNumber: 10005, name: "faerie", prettyName: "Faerie", cardType: "Creature", set: "ELD", subTypes: "Faerie", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70432, setNumber: 10006, name: "rat", prettyName: "Rat", cardType: "Creature", set: "ELD", subTypes: "Rat", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70433, setNumber: 10007, name: "dwarf", prettyName: "Dwarf", cardType: "Creature", set: "ELD", subTypes: "Dwarf", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70434, setNumber: 10008, name: "bear", prettyName: "Bear", cardType: "Creature", set: "ELD", subTypes: "Bear", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70435, setNumber: 10009, name: "boar", prettyName: "Boar", cardType: "Creature", set: "ELD", subTypes: "Boar", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70436, setNumber: 10010, name: "giant", prettyName: "Giant", cardType: "Creature", set: "ELD", subTypes: "Giant", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70437, setNumber: 10011, name: "human_cleric", prettyName: "Human Cleric", cardType: "Creature", set: "ELD", subTypes: "Human Cleric", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70438, setNumber: 10012, name: "human_rogue", prettyName: "Human Rogue", cardType: "Creature", set: "ELD", subTypes: "Human Rogue", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70439, setNumber: 10013, name: "human_warrior", prettyName: "Human Warrior", cardType: "Creature", set: "ELD", subTypes: "Human Warrior", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70440, setNumber: 10014, name: "wolf", prettyName: "Wolf", cardType: "Creature", set: "ELD", subTypes: "Wolf", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70441, setNumber: 10015, name: "food", prettyName: "Food", cardType: "Artifact", set: "ELD", subTypes: "Food", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70442, setNumber: 10016, name: "food", prettyName: "Food", cardType: "Artifact", set: "ELD", subTypes: "Food", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70443, setNumber: 10017, name: "food", prettyName: "Food", cardType: "Artifact", set: "ELD", subTypes: "Food", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70444, setNumber: 10018, name: "food", prettyName: "Food", cardType: "Artifact", set: "ELD", subTypes: "Food", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70447, setNumber: 314, name: "mace_of_the_valiant", prettyName: "Mace of the Valiant", cardType: "Artifact", set: "ELD", subTypes: "Equipment", colorIdentity: ['W'], colors: ['White'], rarity: "Rare", cost: ['2', 'W'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70449, setNumber: 316, name: "faerie_formation", prettyName: "Faerie Formation", cardType: "Creature", set: "ELD", subTypes: "Faerie", colorIdentity: ['U'], colors: ['Blue'], rarity: "Rare", cost: ['4', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70450, setNumber: 317, name: "shimmer_dragon", prettyName: "Shimmer Dragon", cardType: "Creature", set: "ELD", subTypes: "Dragon", colorIdentity: ['U'], colors: ['Blue'], rarity: "Rare", cost: ['4', 'U', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70451, setNumber: 318, name: "workshop_elders", prettyName: "Workshop Elders", cardType: "Creature", set: "ELD", subTypes: "Human Artificer", colorIdentity: ['U'], colors: ['Blue'], rarity: "Rare", cost: ['6', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70453, setNumber: 320, name: "taste_of_death", prettyName: "Taste of Death", cardType: "Sorcery", set: "ELD", subTypes: "", colorIdentity: ['B'], colors: ['Black'], rarity: "Rare", cost: ['4', 'B', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70455, setNumber: 322, name: "steelbane_hydra", prettyName: "Steelbane Hydra", cardType: "Creature", set: "ELD", subTypes: "Turtle Hydra", colorIdentity: ['G'], colors: ['Green'], rarity: "Rare", cost: ['X', 'G', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70456, setNumber: 323, name: "thorn_mammoth", prettyName: "Thorn Mammoth", cardType: "Creature", set: "ELD", subTypes: "Elephant", colorIdentity: ['G'], colors: ['Green'], rarity: "Rare", cost: ['5', 'G', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70457, setNumber: 324, name: "alela_artful_provocateur", prettyName: "Alela, Artful Provocateur", cardType: "Creature", set: "ELD", subTypes: "Faerie Warlock", colorIdentity: ['W', 'U', 'B'], colors: ['White', 'Black', 'Blue'], rarity: "Mythic Rare", cost: ['1', 'W', 'U', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70458, setNumber: 325, name: "banish_into_fable", prettyName: "Banish into Fable", cardType: "Instant", set: "ELD", subTypes: "", colorIdentity: ['W', 'U'], colors: ['White', 'Blue'], rarity: "Rare", cost: ['4', 'W', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70459, setNumber: 326, name: "chulane_teller_of_tales", prettyName: "Chulane, Teller of Tales", cardType: "Creature", set: "ELD", subTypes: "Human Druid", colorIdentity: ['W', 'U', 'G'], colors: ['White', 'Blue', 'Green'], rarity: "Mythic Rare", cost: ['2', 'G', 'W', 'U'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70461, setNumber: 328, name: "knights_charge", prettyName: "Knights' Charge", cardType: "Enchantment", set: "ELD", subTypes: "", colorIdentity: ['W', 'B'], colors: ['White', 'Black'], rarity: "Rare", cost: ['1', 'W', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70462, setNumber: 329, name: "korvold_faecursed_king", prettyName: "Korvold, Fae-Cursed King", cardType: "Creature", set: "ELD", subTypes: "Dragon Noble", colorIdentity: ['B', 'R', 'G'], colors: ['Red', 'Black', 'Green'], rarity: "Mythic Rare", cost: ['2', 'B', 'R', 'G'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70463, setNumber: 330, name: "syr_gwyn_hero_of_ashvale", prettyName: "Syr Gwyn, Hero of Ashvale", cardType: "Creature", set: "ELD", subTypes: "Human Knight", colorIdentity: ['W', 'B', 'R'], colors: ['Red', 'White', 'Black'], rarity: "Mythic Rare", cost: ['3', 'R', 'W', 'B'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70464, setNumber: 331, name: "arcane_signet", prettyName: "Arcane Signet", cardType: "Artifact", set: "ELD", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Common", cost: ['2'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70465, setNumber: 332, name: "tome_of_legends", prettyName: "Tome of Legends", cardType: "Artifact", set: "ELD", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Rare", cost: ['2'], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70466, setNumber: 333, name: "command_tower", prettyName: "Command Tower", cardType: "Land", set: "ELD", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Common", cost: [], collectible: true }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70477, setNumber: 38, name: "bring_to_life", prettyName: "Bring to Life", cardType: "Sorcery", set: "ELD", subTypes: "Adventure", colorIdentity: ['U'], colors: ['Blue'], rarity: "Uncommon", cost: ['2', 'U'], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70483, setNumber: 90, name: "profane_insight", prettyName: "Profane Insight", cardType: "Instant", set: "ELD", subTypes: "Adventure", colorIdentity: ['B'], colors: ['Black'], rarity: "Uncommon", cost: ['2', 'B'], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70485, setNumber: 99, name: "alter_fate", prettyName: "Alter Fate", cardType: "Sorcery", set: "ELD", subTypes: "Adventure", colorIdentity: ['B'], colors: ['Black'], rarity: "Uncommon", cost: ['1', 'B'], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70487, setNumber: 105, name: "curry_favor", prettyName: "Curry Favor", cardType: "Sorcery", set: "ELD", subTypes: "Adventure", colorIdentity: ['B'], colors: ['Black'], rarity: "Common", cost: ['B'], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70489, setNumber: 122, name: "battle_display", prettyName: "Battle Display", cardType: "Sorcery", set: "ELD", subTypes: "Adventure", colorIdentity: ['R'], colors: ['Red'], rarity: "Uncommon", cost: ['R'], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70492, setNumber: 149, name: "fertile_footsteps", prettyName: "Fertile Footsteps", cardType: "Sorcery", set: "ELD", subTypes: "Adventure", colorIdentity: ['G'], colors: ['Green'], rarity: "Uncommon", cost: ['2', 'G'], collectible: false }))
throne_of_eldraine.addCard(new Card({ mtgaID: 70497, setNumber: 174, name: "seasonal_ritual", prettyName: "Seasonal Ritual", cardType: "Sorcery", set: "ELD", subTypes: "Adventure", colorIdentity: ['G'], colors: ['Green'], rarity: "Common", cost: ['G'], collectible: false }))


module.exports = { throne_of_eldraine: throne_of_eldraine }