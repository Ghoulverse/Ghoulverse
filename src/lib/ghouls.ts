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
    description: "The founding force of the GHOULVERSE. GOO GHOUL is the trusted voice for everyday household essentials — from surface care to home organisation.",
    longDescription: "Before time was measured in brands, there was only The Void — and The Goo. From the collision of entropy and purpose emerged GOO GHOUL: the first consciousness to look at a household problem and say, 'I'll find the best solution, then make it better.' GOO GHOUL is not merely a mascot. GOO GHOUL is a consumer champion, the original trusted voice from which all other ghouls trace their lineage. Year one, GOO GHOUL recommends and promotes aligned products. Year two, GOO GHOUL launches its own line of scientifically-formulated, eco-conscious household essentials.",
    color: "cyan",
    colorHex: "#00f0ff",
    icon: "👻",
    position: { x: 50, y: 50 },
    products: ["All-Purpose Cleaner", "Surface Spray", "Floor Solution", "Home Organisation Kit", "Goo Gone Pro"],
    stats: { power: 95, speed: 80, stealth: 70, intelligence: 85 },
    realm: "The Primordial Void",
    website: "https://www.googhoul.com",
    ability: "Ectoplasmic Overload",
    passive: "Double orb magnet"
  },
  {
    id: "zen",
    name: "ZEN GHOUL",
    tagline: "Wellness Begins At Home",
    description: "In the silence between breaths, ZEN GHOUL finds its purpose. The wellness vertical — mindfulness, aromatherapy, sleep, and calm-tech.",
    longDescription: "ZEN GHOUL does not rush. ZEN GHOUL does not panic. In the eye of the storm of modern life, ZEN GHOUL sits cross-legged and observes. The wellness economy is fragmented and noisy; ZEN GHOUL curates products that genuinely restore balance. First, ZEN GHOUL partners with and promotes proven mindfulness, sleep, and home-wellness brands. Then, ZEN GHOUL launches its own line of eco-formulated aromatherapy, calming mists, and ritual kits. To invite ZEN GHOUL into your space is to invite peace.",
    color: "purple",
    colorHex: "#a855f7",
    icon: "🧘",
    position: { x: 20, y: 30 },
    products: ["Aromatherapy Mist", "Calming Room Spray", "Sleep Ritual Kit", "Essential Oil Diffuser", "Wellness Journal"],
    stats: { power: 60, speed: 40, stealth: 90, intelligence: 95 },
    realm: "The Tranquil Gardens",
    website: "https://www.zenghoul.com",
    ability: "Enlightenment",
    passive: "Slows enemy bullets"
  },
  {
    id: "party",
    name: "PARTY GHOUL",
    tagline: "Own The Night, Own The Morning",
    description: "When the music stops and the lights come up, PARTY GHOUL owns the entire celebration lifecycle — events, partyware, and recovery essentials.",
    longDescription: "PARTY GHOUL arrives when the bass drops and the guests leave. The events market is enormous, fragmented, and ripe for a personality-led brand. PARTY GHOUL begins by promoting aligned party supplies, decorations, and recovery products that turn chaos back into order. Then PARTY GHOUL launches its own range: curated event kits, premium cleanup solutions, and morning-after wellness. The faster the beat, the bigger the opportunity.",
    color: "magenta",
    colorHex: "#ff00ff",
    icon: "🎉",
    position: { x: 80, y: 25 },
    products: ["Event Decor Kit", "Premium Cleanup Pack", "Recovery Essentials", "Party Surface Wipes", "Morning-After Rescue Kit"],
    stats: { power: 85, speed: 100, stealth: 50, intelligence: 70 },
    realm: "The Neon District",
    website: "https://www.partyghoul.com",
    ability: "Rave Mode",
    passive: "20% crit chance"
  },
  {
    id: "tradie",
    name: "TRADIE GHOUL",
    tagline: "Built Tough, Built Smart",
    description: "The hardware, power-tool, and workwear vertical. TRADIE GHOUL champions products that survive the job site — then builds better ones.",
    longDescription: "TRADIE GHOUL doesn't own a feather duster. TRADIE GHOUL owns the toolbox. The professional and DIY hardware market is dominated by legacy brands with little personality. TRADIE GHOUL enters by reviewing, recommending, and promoting the best power tools, workwear, and job-site essentials. Once trust is earned, TRADIE GHOUL launches its own line of scientifically-tested, eco-conscious trade products — from heavy-duty hand care to tool maintenance and site organisation.",
    color: "gold",
    colorHex: "#eab308",
    icon: "🔧",
    position: { x: 75, y: 70 },
    products: ["Heavy-Duty Hand Care", "Tool Maintenance Kit", "Workwear Essentials", "Site Organiser", "Workshop Degreaser"],
    stats: { power: 100, speed: 60, stealth: 40, intelligence: 75 },
    realm: "The Industrial Wastes",
    website: "https://www.tradieghoul.com",
    ability: "Demolition Day",
    passive: "Piercing shots"
  },
  {
    id: "garden",
    name: "GARDEN GHOUL",
    tagline: "Nature's Consumer Champion",
    description: "The garden, outdoor, and lawn-care vertical. GARDEN GHOUL balances performance with ecological responsibility.",
    longDescription: "GARDEN GHOUL speaks the old language of chlorophyll and compost. Where others see dirt, GARDEN GHOUL sees a category — lawn care, pest management, plant nutrition, and outdoor living. GARDEN GHOUL begins by promoting proven organic pesticides, fertilisers, and garden tools. Then it launches its own line of scientifically-formulated, eco-conscious garden products. The garden is not a place to be sanitized — it is a kingdom to be balanced.",
    color: "green",
    colorHex: "#22c55e",
    icon: "🌿",
    position: { x: 25, y: 75 },
    products: ["Organic Pest Control", "Plant Nutrition System", "Soil pH Balancer", "Compost Accelerator", "Garden Tool Care Kit"],
    stats: { power: 70, speed: 50, stealth: 85, intelligence: 90 },
    realm: "The Verdant Wilds",
    website: "https://www.gardenghoul.com",
    ability: "Overgrowth",
    passive: "Health regen"
  },
  {
    id: "beauty",
    name: "BEAUTY GHOUL",
    tagline: "Glamour With A Conscience",
    description: "The cosmetics, skincare, and beauty-tools vertical. BEAUTY GHOUL proves that science-backed and eco-conscious can be gorgeous.",
    longDescription: "BEAUTY GHOUL understands that the pursuit of beauty leaves a trail of products, tools, and choices. But BEAUTY GHOUL does not judge — BEAUTY GHOUL curates. Starting with reviews and promotions of aligned clean-beauty and cosmetic brands, BEAUTY GHOUL builds trust through transparency. Then it launches its own line of scientifically-formulated skincare, sanitised beauty tools, and vanity organisers. In the realm of BEAUTY GHOUL, glamour and responsibility are not opposites — they are twin thrones.",
    color: "pink",
    colorHex: "#ec4899",
    icon: "💄",
    position: { x: 15, y: 50 },
    products: ["Clean Skincare Starter", "Makeup Brush Care Kit", "Cosmetic Organiser", "Vanity Surface Polish", "Beauty Tool Sanitizer"],
    stats: { power: 55, speed: 75, stealth: 95, intelligence: 80 },
    realm: "The Glamour Dimension",
    website: "https://www.beautyghoul.com",
    ability: "Flawless",
    passive: "Dodge = shield"
  },
  {
    id: "geek",
    name: "GEEK GHOUL",
    tagline: "Optimise Everything",
    description: "The gaming, tech, and electronics lifestyle vertical. GEEK GHOUL debugs your setup — then builds the accessories you actually need.",
    longDescription: "GEEK GHOUL speaks in binary and breathes compressed air. The gaming and tech accessories market is noisy, overpriced, and full of gimmicks. GEEK GHOUL cuts through the noise by reviewing and recommending the best gear — screens, peripherals, desk organisers, and cleaning solutions. Then GEEK GHOUL launches its own line: performance-tested accessories, cable management, screen care, and setup optimisation kits. In the realm of GEEK GHOUL, optimisation is not next to godliness — optimisation IS godliness, and godliness compiles without warnings.",
    color: "cyan",
    colorHex: "#00d4ff",
    icon: "💻",
    position: { x: 60, y: 15 },
    products: ["Keycap Care Kit", "Screen Serum", "Cable Management System", "Gaming Setup Optimiser", "Electronics Contact Cleaner"],
    stats: { power: 65, speed: 85, stealth: 70, intelligence: 100 },
    realm: "The Mainframe",
    website: "https://www.geekghoul.com",
    ability: "Debug Mode",
    passive: "Auto-cleans on idle"
  },
  {
    id: "kid",
    name: "KID GHOUL",
    tagline: "Creativity, Contained",
    description: "The kids' creative and family-lifestyle vertical. KID GHOUL knows that childhood is messy — and that mess is where learning happens.",
    longDescription: "KID GHOUL knows that creativity is messy. Paint on walls? Glitter on the dog? A science experiment gone wrong? KID GHOUL doesn't just solve problems — KID GHOUL encourages the next masterpiece. First, KID GHOUL promotes trusted creative supplies, organisers, and kid-safe essentials. Then it launches its own line: scientifically-tested, non-toxic art supplies, craft organisers, and family cleanup solutions. In the realm of KID GHOUL, every mess is just a story waiting to be told.",
    color: "red",
    colorHex: "#ef4444",
    icon: "🧒",
    position: { x: 85, y: 50 },
    products: ["Non-Toxic Art Supplies", "Craft Organiser", "Creative Cleanup Kit", "Backpack Refresher", "Family Activity Pack"],
    stats: { power: 50, speed: 80, stealth: 60, intelligence: 70 },
    realm: "The Playground",
    website: "https://www.kidghoul.com",
    ability: "Creative Burst",
    passive: "Randomizes stats every 10s"
  },
  {
    id: "googoo",
    name: "GOO GOO",
    tagline: "Tiny Humans, Trusted Care",
    description: "The infant and early-childhood vertical. GOO GOO handles the chaos of new parenthood with gentle, scientifically-backed recommendations.",
    longDescription: "GOO GOO understands that the smallest humans make the biggest messes — and the biggest decisions. The baby-care market is crowded with conflicting claims. GOO GOO cuts through by promoting vetted, gentle, parent-approved products. Then GOO GOO launches its own line of eco-conscious, paediatrician-advised essentials. From bottles to nursery organisation, GOO GOO is the trusted companion for the first years of parenthood.",
    color: "blue",
    colorHex: "#3b82f6",
    icon: "🍼",
    position: { x: 70, y: 35 },
    products: ["Bottle Care System", "Nursery Organiser", "Gentle Stain Lifter", "Toy Care Kit", "Crib Essentials"],
    stats: { power: 30, speed: 70, stealth: 80, intelligence: 85 },
    realm: "The Nursery",
    website: "https://www.googooghoul.com",
    ability: "Gentle Purge",
    passive: "Heals on clean"
  },
  {
    id: "teen",
    name: "TEEN GHOUL",
    tagline: "Attitude & Altitude",
    description: "The teen lifestyle vertical — grooming, room culture, study accessories, and self-expression without judgment.",
    longDescription: "TEEN GHOUL gets it. The room is a disaster, the bathroom is a biohazard, and someone definitely spilled something on the couch. TEEN GHOUL approaches adolescence with zero judgment and maximum honesty. First, TEEN GHOUL promotes aligned skincare, room, and lifestyle brands that teens actually want. Then it launches its own range: gentle grooming, room refresh, and study-life products designed with — not for — teens. In the realm of TEEN GHOUL, authenticity is the only rule.",
    color: "violet",
    colorHex: "#8b5cf6",
    icon: "🎧",
    position: { x: 40, y: 80 },
    products: ["Room Refresh System", "Gentle Skincare Starter", "Gaming Chair Care", "Study Desk Organiser", "Locker Freshener"],
    stats: { power: 55, speed: 90, stealth: 75, intelligence: 65 },
    realm: "The Hangout",
    website: "https://www.teenghoul.com",
    ability: "Zero Judgment",
    passive: "Speed boost on mess detection"
  },
  {
    id: "sport",
    name: "SPORT GHOUL",
    tagline: "Sweat Now, Shine Later",
    description: "The active-lifestyle and fitness vertical. SPORT GHOUL optimises gear, recovery, and performance essentials.",
    longDescription: "SPORT GHOUL doesn't just clean gear — SPORT GHOUL optimises the entire active lifestyle. The fitness market is full of overhyped products and confusing claims. SPORT GHOUL begins by promoting gear, recovery, and hygiene products that athletes actually trust. Then it launches its own line of scientifically-tested sports care, equipment maintenance, and recovery essentials. The locker room is SPORT GHOUL's arena. The playing field is SPORT GHOUL's canvas.",
    color: "orange",
    colorHex: "#f97316",
    icon: "🏆",
    position: { x: 30, y: 65 },
    products: ["Gym Care Kit", "Shoe Refresh System", "Gear Cleaner", "Locker Spray", "Recovery Essentials"],
    stats: { power: 80, speed: 95, stealth: 50, intelligence: 75 },
    realm: "The Arena",
    website: "https://www.sportghoul.com",
    ability: "Endurance Mode",
    passive: "Regenerates on combo streaks"
  },
  {
    id: "scholar",
    name: "BOOK GHOUL",
    tagline: "Knowledge Is Power",
    description: "The education, learning, and knowledge vertical. BOOK GHOUL turns curiosity into confidence — one recommendation, one product, one lesson at a time.",
    longDescription: "BOOK GHOUL has read every text on pedagogy, cognitive science, and the art of explanation. BOOK GHOUL does not guess — BOOK GHOUL curates. The education market is vast, from early learning to adult upskilling, and it lacks a trusted, character-driven guide. BOOK GHOUL begins by promoting the best books, learning tools, and educational products. Then it launches its own line: guided learning kits, study organisers, and knowledge-building products backed by science. In the realm of BOOK GHOUL, learning is the ultimate superpower.",
    color: "orange",
    colorHex: "#f97316",
    icon: "📚",
    position: { x: 50, y: 20 },
    products: ["Learning Kit", "Study Organiser", "Curated Book Picks", "Science Experiment Set", "Knowledge Planner"],
    stats: { power: 65, speed: 55, stealth: 75, intelligence: 100 },
    realm: "The Infinite Library",
    website: "https://www.bookghoul.com",
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
    red: "#ef4444",
    violet: "#8b5cf6",
  };
}
