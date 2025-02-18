const words = [
    "Abstracted", "Accelerate", "Aesthetic", "Alchemy", "Automate", "Avalanche", "Ambition", "Amplify", "Ancestral", "Anguish", "Apex", "Arbitrary", "Abandon", "Abundant", "Accurate", "Achieve", "Acquire", "Adapt", "Adequate", "Adjourn",
    "Ascension", "Autonomous", "Avalanche", "Awakening", "Backbone", "Bottle", "Ballistic", "Banter", "Bazaar", "Beastmode", "Benchmark", "Barrage",
    "Bewildered", "Big-time", "Billow", "Biotic", "Blaze", "Blemish", "Brimstone","Brevity", "Buzzing", "Contraband", "Capabilities", "Cruel", "Camouflage", "Catalyst", "Candidate", "Cavities",
    "Celestial", "Centered", "Chaotic", "Circuitry", "Clarity", "Control", "Crater", "Certified", "Clouded", "Consent", "Colossus", "Coalesce", "Collateral", "Collide", "Commotion",
    "Compelled", "Conceal", "Contorted", "Conundrum", "Conviction", "Cosmicwave", "Counterfeit", "Counterpoint", "Crestfallen", "Crimson",
    "Crossroads", "Crowned", "Cryptic", "Crystallize", "Dagger", "Darkmatter", "Daydream", "Deadlock", "Decipher", "Delirium", "Desolate", "Dramatic", "Debts",
    "Detour", "Dimension", "Disarray", "Disintegrate", "Divinity", "Dominion", "Drastic", "Drenched", "Eclipse", "Elicit", "Evangelist", "Encapsulate",
    "Elemental", "Elixir", "Embolden", "Empower", "Enchanted", "Enigma", "Epoch", "Erosion", "Essence", "Ethereal", "Enamel", "Examination",
    "Euphoria", "Exhale", "Expanse", "Exploit", "Falter", "Fabled", "Fathomless", "Feigned", "Fierce", "Fermented", "Fifth-dimension", "Firebrand", "Foreign", "Fraudulent",
    "Firmament", "Fluctuate", "Flux", "Fizz", "Forbidden", "Fortitude", "Fragmentary", "Free-flowing", "Frigid", "Galactic", "Gargantuan", "Goofy",
    "Gateway", "Genesis", "Gilded", "Glacial", "Glistening", "Gravitate", "Hallowed", "Harbinger", "Hindsight", "Harmony", "Havoc", "Hesitate", "Hoax", "Hybrid", "Heritage",
    "Heirloom", "Horizon", "Habitat", "Hazardous", "Heritage", "Hostile", "Hypothesis", "Hypnotize", "Instigate", "Intrepid", "Illuminated", "Illusive", "Imperial", "Incantation", "Infinite", "Influence", "Innovate", "Insight",
    "Intergalactic", "Interwoven", "Intricate", "Iridescent", "Ironclad", "Intimacy", "Ivory", "Infinite", "Illness", "Jettison", "Juggernaut", "Labyrinth", "Lament",
    "Lantern", "Lavish", "Liminal", "Limitless", "Luminescent", "Lush", "Majestic", "Manifest", "Mainstream", "Marvel", "Matrix", "Potshots", "Radar",
    "Medallion", "Metamorphosis", "Monarch", "Momentum", "Monolith", "Myth", "Mourning", "Mosaic", "Mysterious", "Mythic", "Misconstrue", "Magical", "Monotonous", "Mundane", "Nebulous", "Nexus",
    "Nomadic", "Notorious", "Narrate", "Navigate", "Oblivion", "Omnipresent", "Orientation", "Opaque", "Oracle", "Orbit", "Ornate", "Outlandish", "Organic", "Overture", "Optimistic", "Paraphrase",
    "Paradox", "Paramount", "Pariah", "Particle", "Pathway", "Patina", "Perplex", "Perseverance", "Phantom", "Pasta", "Purchase", "Phenomenon", "Potent", "Prior", "Partial",
    "Pinnacle", "Placid", "Plummet", "Portal", "Possessed", "Precipice", "Pinpoint", "Prestige", "Primeval", "Prodigy", "Prophecy", "Prejudice", "Priority", "Prominent", "Protagonist",
    "Quantum", "Quasar", "Quest", "Quintessential", "Radiant", "Rapture", "Reckoning", "Redemption", "Rejuvenate", "Requiem", "Renounce", "Repercussion", "Reprehensible",
    "Resilient", "Resonance", "Revelation", "Reverence", "Revolt", "Rhythm", "Rebuke", "Recount", "Redundant", "Reinforce", "Sanctum", "Sapphire", "Savant", "Scarlet",
    "Scintillating", "Secluded", "Stagnant", "Steadfast", "Safety", "Scrimmage", "Sparkling", "Strenuous", "Spiral", "Silly", "Subtle", "Shady", "Succinct", "Serene", "Serpentine", "Shrouded", "Silhouette", "Singularity", "Skybound", "Solace", "Solitude",
    "Sonorous", "Spectral", "Spire", "Sprawling", "Swallow", "Stellar", "Stratosphere", "Sublime", "Surreal", "Smuggling", "Symphony", "Synchronize", "Scapegoat", "Scrutinize", "Significance", "Skeptical", "Sociable", "Specter",
    "Talisman", "Tempest", "Tenacity", "Terrestrial", "Throne", "Timeless", "Titan", "Torrential", "Tranquil", "Transcend", "Shrugs", "Tart", "Tance", "Tainted",
    "Traverse", "Trepidation", "Triumphant", "Turbulent", "Twilight", "Ultimatum", "Ubiquitous", "Uncharted", "Unravel", "Unyielding", "Uncanny", "Undermine", "Unique", "Unruly", "Vagabond",
    "Vanguard", "Vastness", "Velocity", "Valor", "Vanquish", "Venomous", "Verdant", "Verge", "Versatile", "Vestige", "Vigilant", "Vortex", "Yola", "Youngin’", "Yield", "Yawn", "Yearn",
    "Vow", "Viable", "Vote", "Virus", "Vitamin", "Veer", "Vilify", "Venice", "Vatican", "Wanderlust", "Wayfarer", "Wicked", "Wheel", "Wildfire", "Willpower", "Wistful", "Zealous", "Zenith", "Zephyr", "Zany", "Zebra", "Zoology", "Zirconium", "Zion",
    "Abyssal", "Adapt", "Affluent", "Aggressive", "Alchemy", "Align", "Allure", "Alone", "Altruistic", "Ambush", "Abhor", "Globe",
    "Amplification", "Ancestors", "Anomaly", "Anthem", "Apex", "Arcane", "Arid", "Artifact", "Ascend", "Assassin", "Apprehensive", "Arrogant",
    "Astonish", "Astral", "Asylum", "Atmosphere", "Audacious", "Aurora", "Auspicious", "Autumnal", "Awestruck", "Balance", "Baffle", "Banish", "Belligerent",
    "Barricade", "Bastion", "Beacon", "Beloved", "Bleeding", "Bewitched", "Blinding", "Bloom", "Boundless", "Bountiful", "Bravado",
    "Breeze", "Brooding", "Buried", "Burning", "Bourgeois", "Calm", "Captivate", "Cascade", "Cataclysmic", "Celestial", "Chalice",
    "Chronic", "Cipher", "Clandestine", "Coherent", "Companion", "Concealed", "Conflagration", "Conscious", "Contemplation", "Courageous",
    "Craft", "Crest", "Crimson", "Crumbling", "Cryptic", "Culprit", "Curated", "Daring", "Dawning", "Dazzle", "Deception", "Determine", "Diagnosis", "Desperation",
    "Deliberate", "Depraved", "Desolation", "Destiny", "Devotion", "Dilapidated", "Divergent", "Dreamscape", "Dwindling", "Echo", "Exclusive", "Edifying",
    "Eerie", "Elder", "Elemental", "Elevate", "Elongate", "Embark", "Eminent", "Enamored", "Encapsulate", "Endeavor", "Eviscerate", "Expiration",
    "Endless", "Engulf", "Enhance", "Epitome", "Equilibrium", "Eradicate", "Ethereal", "Euphoric", "Exalted", "Excursion", "Lagoon",
    "Exquisite", "Extraterrestrial", "Exuberant", "Failure", "Fatality", "Faceted", "Falcon", "Fateful", "Feathered", "Ferocious", "Fervor", "Flirty", "Firm",
    "Finality", "Flame", "Flawless", "Feedback", "Fluidity", "Foreboding", "Fortress", "Frost", "Fulfilled", "Gale", "Gladiator", "Clicked", "Interface",
    "Glance", "Glory", "Golden", "Gravitation", "Guardian", "Guiding", "Ginger", "Grace", "Halo", "Hoot", "Hieroglyph", "Heartfelt", "Heir", "Hyperventilate", "Hysteria", "Laced", "Mouthpiece",
    "Horizon", "Hyper", "Illumination", "Immaculate", "Immortal", "Impermeable", "Inception", "Infamy", "Infinity", "Ingenuity", "Implies",
    "Inspiration", "Instinct", "Intangible", "Integrity", "Intrigue", "Invincible", "Iridescent", "Iron", "Jagged", "Jewel", "Justify", "Jubilant", "Judicious",
    "Jubilation", "Kaleidoscope", "Kinetic", "Kernel", "Kneel", "Kansas", "Kilimanjaro", "Kettle", "Kite", "Kombucha", "Labyrinth", "Liberating", "Legacy", "Lethal", "Liminal", "Luminary", "Majesty", "Manifestation", "Nefarious","Narcissistic", "Novice", "Nurture",
    "Pole", "Stick", "Drum", "Switch", "Blower", "Choppa", "Tote", "Hollow tips", "Bossed up", "Game tight", "Motion", "Franchise", "Trilogy", "Treasure", "Trap",
    "F&N", "Blicky", "Choosin’", "Bop", "Shark", "Snow bunny", "Breezy", "Tenderoni", "Gassin’", "Hella", "Guap", "Drip", "Steez", "Fitted", "Kickback", "Goofy", "Slime", "Opps", "Crash dummy", 
    "Mark", "Janky", "Punchlines", "Syllables", "Verses", "Cadence", "Vibe", "Clout", "Script-kiddie", "Prototype", "Esoteric", "Diatribe", "Disatrous", "Dastardly",
    "Metaphysics", "Antithesis", "Camaraderie", "Nihilism", "Pedantic", "Archetype", "Repository", "Cholesterol", "Podium", "Attorney", "Eminence", "Eclectic", "Groupie", "Proclivity", "Zeitgeist", "Zen", "Zesty",
    "Wholesome", "Widespread", "Blunder", "Boisterous", "Technique", "Tentative", "Terminate", "Thesis", "Template", "Tolerance", "Cappin", "Phony", "Celebrate", "Jugg", "Opps", "Lick", "Munch", "Grimey",
    "Directions", "Dignity", "Dedication", "Disorders", "Official", "Ghosted", "Bet", "Salty", "Situationship", "Tea", "Finna", "Flex", "Creepy", "Mid", "Goat", "Extra", "Rizz",
    "Empire", "Sheesh", "Yikes", "GYAT", "Thot", "Plot", "Funny", "Lingo", "Lexicon", "Acronym", "Behavior", "Aura", "Bandwagon", "Basic", "Big Back", "Boomer", "Cooked", "Crash Out",
    "Cringe", "Dub", "Fit", "Ick", "Ratchet", "Real", "Receipts", "Style", "Savage", "Shade", "Sneaky", "Stoked", "Suspicious", "Swole", "Thirsty", "Vanilla", "Whip", "Villian",
    "Jargon", "Portal", "Mortal", "Formal", "Oral", "Brass", "Class", "Glaze", "Stash", "Bash", "Sassy", "Floor", "More", "Store", "Door", "Roar", "Bore", "Score", "Core", "Array", "Display", "Parlay", "Betray",
    "Stone", "Bone", "Cone", "Clone", "Grown", "Known", "Zooted", "Drudgery", "Fire", "Desire", "Wire", "Hire", "Expire", "Plight", "Uptight", "Recite", "Bright", "Glean",
    "Ransom", "Hussy", "Flaked", "Limited", "Dental", "Station", "Barracks", "Luggage", "Mortified", "Martian", "Belfry", "Siege", "Subdue", "Perforate", "Irate", "Keen", "Seething",
    "Riddle", "Fortitude", "Promise", "Cupboard", "Wrath", "Smokescreen", "Vanished", "Reconnaissance", "Renaissance", "Impeachment", "Modernity", "Quip", "Embroidery", "Pursuit",
    "Coupon", "Cannabis", "Grooming", "Local", "Mogul", "Tycoon", "Outlet", "Approved", "Sleuth", "Podcast", "Cyclone", "Saucy", "Deduction", "Chess", "Error", "Granola",
    "Tundra", "Avocados", "Shrimp", "Deli", "Protein", "Tissue", "Marinate", "Bouquet", "Minced", "Uniform", "Boof", "Politics", "Geekin’", "Cocktail", "Heartache", "Nutrition", "Ingredients",    
    "Ruminate", "Turnt", "Wavy", "Flossin", "Deadass", "Bully", "Folded", "Fanatic", "Violate", "Frontin’", "Retaliation", "Resolution", "Retrospect", "ZaZa", "Poppin", "Bankroll", "Chat", "Washed", "Hittas", "Smooth", "Pharmacy",
];

let currentWord = '';
let favoriteWords = [];

// Event listener for Generate Word button
document.getElementById('generate-btn').addEventListener('click', () => {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word-display').textContent = currentWord;
});


// Event listener for Add to Favorites button
document.getElementById('favorite-btn').addEventListener('click', () => {
    if (currentWord && !favoriteWords.includes(currentWord)) {
        favoriteWords.push(currentWord);
        document.getElementById('favorite-display').textContent = `Favorites: ${favoriteWords.join(', ')}`;
    }
});