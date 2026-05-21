export interface Ghoul {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  colorHex: string;
  icon: string;
  position: { x: number; y: number };
  products: string[];
  stats: {
    power: number;
    speed: number;
    stealth: number;
    intelligence: number;
  };
  realm: string;
  ability: string;
  passive: string;
  website?: string;
}

export const GHOULS: Ghoul[] = [
  {
    id: "goo",
    name: "GOO GHOUL",
    tagline: "The Original Consumer",
    description: "The founding entity of the GHOULVERSE. Born from the primordial mess, GOO GHOUL exists to consume all that is unclean.",
    longDescription: "Before time was measured in cleans, there was only The Void — and The Goo. From the collision of entropy and purpose emerged GOO GHOUL: the first consciousness to look at a mess and say, 'I will eat that.' GOO GHOUL is not merely a cleaner. GOO GHOUL is a force of nature, an apex predator of filth, the original consumer from which all other ghouls trace their lineage. Where GOO GHOUL walks, surfaces shine. Where GOO GHOUL feeds, bacteria tremble.",
    color: "cyan",
    colorHex: "#00f0ff",
    icon: "👻",
    position: { x: 50, y: 50 },
    products: ["All-Purpose Cleaner", "Surface Spray", "Floor Solution", "Heavy Duty Degreaser", "Goo Gone Pro"],
    stats: { power: 95, speed: 80, stealth: 70, intelligence: 85 },
    realm: "The Primordial Void",
    website: "https://www.googhoul.com",
    ability: "Ectoplasmic Overload",
    passive: "Double orb magnet"
  },
  {
    id: "zen",
    name: "ZEN GHOUL",
    tagline: "Clean Mind, Clean Space",
    description: "In the silence between breaths, ZEN GHOUL finds its purpose. This meditative entity brings tranquility to your cleaning routine.",
    longDescription: "ZEN GHOUL does not rush. ZEN GHOUL does not panic. In the eye of the storm of mess, ZEN GHOUL sits cross-legged and observes. Only when the clutter reveals its true nature does ZEN GHOUL strike — with the precision of a monk and the thoroughness of a ritual. To invite ZEN GHOUL into your space is to invite peace. The cleaning becomes meditation. The mop becomes a staff of wisdom.",
    color: "purple",
    colorHex: "#a855f7",
    icon: "🧘",
    position: { x: 20, y: 30 },
    products: ["Aromatherapy Mist", "Calming Floor Wash", "Meditation Space Spray", "Essential Oil Diffuser Cleaner", "Zen Garden Maintenance"],
    stats: { power: 60, speed: 40, stealth: 90, intelligence: 95 },
    realm: "The Tranquil Gardens",
    website: "https://www.zenghoul.com",
    ability: "Enlightenment",
    passive: "Slows enemy bullets"
  },
  {
    id: "party",
    name: "PARTY GHOUL",
    tagline: "The Aftermath Specialist",
    description: "When the music stops and the lights come up, PARTY GHOUL emerges from the shadows. No mess too wild, no stain too stubborn.",
    longDescription: "PARTY GHOUL arrives when the bass drops and the guests leave. Red wine on white carpet? Glitter in the sofa? A mysterious sticky substance on the ceiling? PARTY GHOUL has seen it all. PARTY GHOUL thrives in chaos. While others despair at the aftermath, PARTY GHOUL sees opportunity — a canvas of carnage waiting to be restored to glory. The faster the beat, the faster the clean.",
    color: "magenta",
    colorHex: "#ff00ff",
    icon: "🎉",
    position: { x: 80, y: 25 },
    products: ["Red Wine Remover", "Glitter Annihilator", "Confetti Dissolver", "Party Surface Wipes", "Morning-After Rescue Kit"],
    stats: { power: 85, speed: 100, stealth: 50, intelligence: 70 },
    realm: "The Neon District",
    website: "https://www.partyghoul.com",
    ability: "Rave Mode",
    passive: "20% crit chance"
  },
  {
    id: "tradie",
    name: "TRADIE GHOUL",
    tagline: "Industrial Strength Spirit",
    description: "Built tough for tough builds. TRADIE GHOUL handles the industrial-grade messes that would break lesser entities.",
    longDescription: "TRADIE GHOUL doesn't own a feather duster. TRADIE GHOUL owns a pressure washer that could strip paint off a tank. When the job site looks like a warzone of concrete dust, oil slicks, and rust flakes, TRADIE GHOUL clocks in with a thermos of something strong and gets to work. There is no mess too entrenched, no grease too baked-on, no workshop too far gone. TRADIE GHOUL restores order through sheer industrial will.",
    color: "gold",
    colorHex: "#eab308",
    icon: "🔧",
    position: { x: 75, y: 70 },
    products: ["Heavy-Duty Hand Cleaner", "Concrete Dissolver", "Oil & Grease Destroyer", "Tool Restoration Kit", "Workshop Degreaser"],
    stats: { power: 100, speed: 60, stealth: 40, intelligence: 75 },
    realm: "The Industrial Wastes",
    website: "https://www.tradieghoul.com",
    ability: "Demolition Day",
    passive: "Piercing shots"
  },
  {
    id: "garden",
    name: "GARDEN GHOUL",
    tagline: "Nature's Cleanup Crew",
    description: "Where nature grows wild, GARDEN GHOUL tends with precision. From pesticide application to plant hydration.",
    longDescription: "GARDEN GHOUL speaks the old language of chlorophyll and compost. Where others see dirt, GARDEN GHOUL sees potential. Every fallen leaf is nutrients. Every weed is a challenger to be outsmarted. GARDEN GHOUL walks barefoot through rows of thriving life, leaving behind only enriched soil and flourishing blooms. The garden is not a place to be sanitized — it is a kingdom to be balanced.",
    color: "green",
    colorHex: "#22c55e",
    icon: "🌿",
    position: { x: 25, y: 75 },
    products: ["Organic Pesticide", "Plant Rehydration Spray", "Soil pH Balancer", "Compost Accelerator", "Garden Tool Sanitizer"],
    stats: { power: 70, speed: 50, stealth: 85, intelligence: 90 },
    realm: "The Verdant Wilds",
    website: "https://www.gardenghoul.com",
    ability: "Overgrowth",
    passive: "Health regen"
  },
  {
    id: "beauty",
    name: "BEAUTY GHOUL",
    tagline: "Glamour Without The Grime",
    description: "Beauty is chaos refined. BEAUTY GHOUL transforms your vanity from battlefield to sanctuary.",
    longDescription: "BEAUTY GHOUL understands that the pursuit of perfection leaves a trail of cotton balls, mascara wands, and expired serums. But BEAUTY GHOUL does not judge. BEAUTY GHOUL organizes. BEAUTY GHOUL purifies. Every brush is cleaned to surgical standards. Every surface is polished to a mirror finish. In the realm of BEAUTY GHOUL, glamour and hygiene are not opposites — they are twin thrones.",
    color: "pink",
    colorHex: "#ec4899",
    icon: "💄",
    position: { x: 15, y: 50 },
    products: ["Makeup Brush Purifier", "Cosmetic Sanitizer", "Hair Tool Cleaner", "Vanity Surface Polish", "Beauty Organizer Spray"],
    stats: { power: 55, speed: 75, stealth: 95, intelligence: 80 },
    realm: "The Glamour Dimension",
    website: "https://www.beautyghoul.com",
    ability: "Flawless",
    passive: "Dodge = shield"
  },
  {
    id: "geek",
    name: "GEEK GHOUL",
    tagline: "The Digital Sanitizer",
    description: "When the code compiles but the setup doesn't, GEEK GHOUL debugs your desk. No keyboard too greasy, no screen too smudged.",
    longDescription: "GEEK GHOUL speaks in binary and breathes compressed air. Where others see a dusty keyboard, GEEK GHOUL sees a crime scene of Cheeto dust and finger oils. Every keycap is a suspect. Every pixel is evidence. GEEK GHOUL doesn't just clean your setup — GEEK GHOUL optimises it. The thermal paste is refreshed. The cables are managed. The RGB is spotless. In the realm of GEEK GHOUL, cleanliness is not next to godliness — cleanliness IS godliness, and godliness compiles without warnings.",
    color: "cyan",
    colorHex: "#00d4ff",
    icon: "💻",
    position: { x: 60, y: 15 },
    products: ["Keyboard De-Greaser", "Screen Serum", "Cable Dust Repellent", "Gaming Setup Sanitizer", "Electronics Contact Cleaner"],
    stats: { power: 65, speed: 85, stealth: 70, intelligence: 100 },
    realm: "The Mainframe",
    website: "https://www.geekghoul.com",
    ability: "Debug Mode",
    passive: "Auto-cleans on idle"
  },
  {
    id: "toddler",
    name: "TODDLER GHOUL",
    tagline: "Tiny Feet, Massive Mess",
    description: "The terrible twos just got terrible-er. TODDLER GHOUL specializes in cleaning up the chaos that toddlers unleash upon the world.",
    longDescription: "TODDLER GHOUL knows that silence is suspicious and every wall is a canvas. Where toddlers go, mess follows — juice spills, finger paint, crayon murals, and mysterious sticky substances. TODDLER GHOUL doesn't just clean the aftermath; TODDLER GHOUL arms parents with industrial-grade tools disguised as child-friendly products. Because the only thing more destructive than a toddler... is a toddler with a cleaning kit.",
    color: "blue",
    colorHex: "#3b82f6",
    icon: "🧒",
    position: { x: 85, y: 50 },
    products: ["DIY Cleaning Kit", "Toy Sanitizer", "Finger-Paint Remover", "Juice-Stain Eliminator", "Crayon Wall Cleaner"],
    stats: { power: 40, speed: 60, stealth: 80, intelligence: 70 },
    realm: "The Playful Realm",
    ability: "Tantrum",
    passive: "Randomizes stats every 10s"
  },
  {
    id: "scholar",
    name: "SCHOLAR GHOUL",
    tagline: "Knowledge Is Power, Cleanliness Is Wisdom",
    description: "The alchemist of the GHOULVERSE. SCHOLAR GHOUL combines scientific precision with cleaning mastery.",
    longDescription: "SCHOLAR GHOUL has read every text on pH balance, enzymatic reactions, and microbial warfare. SCHOLAR GHOUL does not guess — SCHOLAR GHOUL calculates. Behind those spectacles lies a mind that has mapped the entire periodic table of stains. When SCHOLAR GHOUL enters a room, it is with a hypothesis, a methodology, and a formulation that will eradicate the problem at the molecular level. Cleanliness, after all, is just applied chemistry.",
    color: "orange",
    colorHex: "#f97316",
    icon: "📚",
    position: { x: 50, y: 20 },
    products: ["pH Testing Kit", "Enzymatic Cleaner", "Laboratory Grade Sanitizer", "Educational Chemistry Set", "Microscope Cleaning Solution"],
    stats: { power: 65, speed: 55, stealth: 75, intelligence: 100 },
    realm: "The Infinite Library",
    ability: "Knowledge Bomb",
    passive: "Reveals weaknesses"
  }
];

export function getGhoulBySlug(slug: string): Ghoul | undefined {
  return GHOULS.find((g) => g.id === slug);
}

export function getGhoulColors() {
  return {
    cyan: "#00f0ff",
    purple: "#a855f7",
    magenta: "#ff00ff",
    gold: "#eab308",
    green: "#22c55e",
    pink: "#ec4899",
    blue: "#3b82f6",
    orange: "#f97316",
  };
}
