"use client";

import { Suspense, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Globe,
  Gamepad2,
  Mail,
  ExternalLink,
  BarChart3,
  Award,
  Clock,
  Sparkles,
  DollarSign,
  CheckCircle,
  Send,
  User,
  Building2,
  MessageSquare,
  Brain,
  Beaker,
  FlaskConical,
  Microscope,
  HeartPulse,
  Leaf,
  Bug,
  Cpu,
  ShieldCheck,
  Wind,
  Droplets,
} from "lucide-react";

/* ───────────────────────────  DATA  ─────────────────────────── */

interface GhoulData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  colorHex: string;
  icon: string;
  realm: string;
  products: string[];
  marketSize: string;
  stats: { power: number; speed: number; stealth: number; intelligence: number };
  website?: string;
  live: boolean;
}

const GHOULS: GhoulData[] = [
  {
    id: "goo",
    name: "GOO GHOUL",
    tagline: "The Original Consumer",
    description: "The founding entity of the GHOULVERSE. Born from the primordial mess, GOO GHOUL exists to consume all that is unclean.",
    longDescription: "Before time was measured in cleans, there was only The Void — and The Goo. From the collision of entropy and purpose emerged GOO GHOUL: the first consciousness to look at a mess and say, 'I will eat that.' GOO GHOUL is not merely a cleaner. GOO GHOUL is a force of nature, an apex predator of filth, the original consumer from which all other ghouls trace their lineage.",
    color: "cyan",
    colorHex: "#00f0ff",
    icon: "👻",
    realm: "The Primordial Void",
    products: ["All-Purpose Cleaner", "Surface Spray", "Floor Solution", "Heavy Duty Degreaser", "Goo Gone Pro"],
    marketSize: "$250B global household & commercial cleaning market",
    stats: { power: 95, speed: 80, stealth: 70, intelligence: 85 },
    website: "https://www.googhoul.com",
    live: true,
  },
  {
    id: "party",
    name: "PARTY GHOUL",
    tagline: "The Aftermath Specialist",
    description: "When the music stops and the lights come up, PARTY GHOUL emerges from the shadows. No mess too wild, no stain too stubborn.",
    longDescription: "PARTY GHOUL arrives when the bass drops and the guests leave. Red wine on white carpet? Glitter in the sofa? A mysterious sticky substance on the ceiling? PARTY GHOUL has seen it all. PARTY GHOUL thrives in chaos. While others despair at the aftermath, PARTY GHOUL sees opportunity — a canvas of carnage waiting to be restored to glory.",
    color: "magenta",
    colorHex: "#ff00ff",
    icon: "🎉",
    realm: "The Neon District",
    products: ["Red Wine Remover", "Glitter Annihilator", "Confetti Dissolver", "Party Surface Wipes", "Morning-After Rescue Kit"],
    marketSize: "$14B global event services + $250B character licensing market",
    stats: { power: 85, speed: 100, stealth: 50, intelligence: 70 },
    website: "https://www.partyghoul.com",
    live: true,
  },
  {
    id: "beauty",
    name: "BEAUTY GHOUL",
    tagline: "Glamour Without The Grime",
    description: "Beauty is chaos refined. BEAUTY GHOUL transforms your vanity from battlefield to sanctuary.",
    longDescription: "BEAUTY GHOUL understands that the pursuit of perfection leaves a trail of cotton balls, mascara wands, and expired serums. But BEAUTY GHOUL does not judge. BEAUTY GHOUL organizes. BEAUTY GHOUL purifies. Every brush is cleaned to surgical standards. Every surface is polished to a mirror finish.",
    color: "pink",
    colorHex: "#ec4899",
    icon: "💄",
    realm: "The Glamour Dimension",
    products: ["Makeup Brush Purifier", "Cosmetic Sanitizer", "Hair Tool Cleaner", "Vanity Surface Polish", "Beauty Organizer Spray"],
    marketSize: "$579B global beauty & personal care market",
    stats: { power: 55, speed: 75, stealth: 95, intelligence: 80 },
    website: "https://www.beautyghoul.com",
    live: true,
  },
  {
    id: "garden",
    name: "GARDEN GHOUL",
    tagline: "Nature's Cleanup Crew",
    description: "Where nature grows wild, GARDEN GHOUL tends with precision. From pesticide application to plant hydration.",
    longDescription: "GARDEN GHOUL speaks the old language of chlorophyll and compost. Where others see dirt, GARDEN GHOUL sees potential. Every fallen leaf is nutrients. Every weed is a challenger to be outsmarted. GARDEN GHOUL walks barefoot through rows of thriving life, leaving behind only enriched soil and flourishing blooms.",
    color: "green",
    colorHex: "#22c55e",
    icon: "🌿",
    realm: "The Verdant Wilds",
    products: ["Organic Pesticide", "Plant Rehydration Spray", "Soil pH Balancer", "Compost Accelerator", "Garden Tool Sanitizer"],
    marketSize: "$120B global gardening & horticulture market",
    stats: { power: 70, speed: 50, stealth: 85, intelligence: 90 },
    website: "https://www.gardenghoul.com",
    live: true,
  },
  {
    id: "geek",
    name: "GEEK GHOUL",
    tagline: "The Digital Sanitizer",
    description: "When the code compiles but the setup doesn't, GEEK GHOUL debugs your desk. No keyboard too greasy, no screen too smudged.",
    longDescription: "GEEK GHOUL speaks in binary and breathes compressed air. Where others see a dusty keyboard, GEEK GHOUL sees a crime scene of Cheeto dust and finger oils. Every keycap is a suspect. Every pixel is evidence. GEEK GHOUL doesn't just clean your setup — GEEK GHOUL optimises it.",
    color: "cyan",
    colorHex: "#00d4ff",
    icon: "💻",
    realm: "The Mainframe",
    products: ["Keyboard De-Greaser", "Screen Serum", "Cable Dust Repellent", "Gaming Setup Sanitizer", "Electronics Contact Cleaner"],
    marketSize: "$250B global gaming peripherals & tech accessories market",
    stats: { power: 65, speed: 85, stealth: 70, intelligence: 100 },
    website: "https://www.geekghoul.com",
    live: true,
  },
  {
    id: "tradie",
    name: "TRADIE GHOUL",
    tagline: "Industrial Strength Spirit",
    description: "Built tough for tough builds. TRADIE GHOUL handles the industrial-grade messes that would break lesser entities.",
    longDescription: "TRADIE GHOUL doesn't own a feather duster. TRADIE GHOUL owns a pressure washer that could strip paint off a tank. When the job site looks like a warzone of concrete dust, oil slicks, and rust flakes, TRADIE GHOUL clocks in with a thermos of something strong and gets to work.",
    color: "gold",
    colorHex: "#eab308",
    icon: "🔧",
    realm: "The Industrial Wastes",
    products: ["Heavy-Duty Hand Cleaner", "Concrete Dissolver", "Oil & Grease Destroyer", "Tool Restoration Kit", "Workshop Degreaser"],
    marketSize: "$180B global industrial cleaning market",
    stats: { power: 100, speed: 60, stealth: 40, intelligence: 75 },
    website: "https://www.tradieghoul.com",
    live: true,
  },
  {
    id: "zen",
    name: "ZEN GHOUL",
    tagline: "Clean Mind, Clean Space",
    description: "In the silence between breaths, ZEN GHOUL finds its purpose. This meditative entity brings tranquility to your cleaning routine.",
    longDescription: "ZEN GHOUL does not rush. ZEN GHOUL does not panic. In the eye of the storm of mess, ZEN GHOUL sits cross-legged and observes. Only when the clutter reveals its true nature does ZEN GHOUL strike — with the precision of a monk and the thoroughness of a ritual.",
    color: "purple",
    colorHex: "#a855f7",
    icon: "🧘",
    realm: "The Tranquil Gardens",
    products: ["Aromatherapy Mist", "Calming Floor Wash", "Meditation Space Spray", "Essential Oil Diffuser Cleaner", "Zen Garden Maintenance"],
    marketSize: "$4.5T global wellness economy",
    stats: { power: 60, speed: 40, stealth: 90, intelligence: 95 },
    website: "https://www.zenghoul.com",
    live: true,
  },
  {
    id: "sport",
    name: "SPORT GHOUL",
    tagline: "The Arena Champion",
    description: "Coming soon to The Arena.",
    longDescription: "SPORT GHOUL trains where others tire. Every sweat-stained jersey, every muddy cleat, every locker room funk — SPORT GHOUL turns them into trophies of cleanliness.",
    color: "orange",
    colorHex: "#f97316",
    icon: "🏆",
    realm: "The Arena",
    products: ["Sweat Neutralizer", "Gear Freshener", "Locker Room Bomb", "Turf Cleaner", "Protein Shake Stain Lifter"],
    marketSize: "$600B global sports & fitness market",
    stats: { power: 90, speed: 95, stealth: 30, intelligence: 60 },
    website: "https://www.kidghoul.com",
    live: true,
  },
  {
    id: "googoo",
    name: "GOO GOO",
    tagline: "Tiny Messes, Big Solutions",
    description: "GOO GOO understands that the smallest humans make the biggest messes. From puree explosions to nappy disasters, GOO GOO handles the chaos of early childhood with gentle precision.",
    longDescription: "GOO GOO understands that the smallest humans make the biggest messes. From puree explosions to nappy disasters, GOO GOO handles the chaos of early childhood with gentle precision.",
    color: "blue",
    colorHex: "#3b82f6",
    icon: "🍼",
    realm: "The Nursery",
    products: ["Bottle Sterilizer", "Nappy Bin Refresher", "Puree Stain Lifter", "Toy Sanitizer", "Crib Sheet Rescue"],
    marketSize: "$300B global baby care market",
    stats: { power: 30, speed: 70, stealth: 80, intelligence: 85 },
    live: false,
  },
  {
    id: "kid",
    name: "KID GHOUL",
    tagline: "Chaos Contained",
    description: "KID GHOUL knows that creativity is messy. Paint on walls? Glitter on the dog? A science experiment gone wrong? KID GHOUL doesn't just clean — KID GHOUL encourages the next masterpiece.",
    longDescription: "KID GHOUL knows that creativity is messy. Paint on walls? Glitter on the dog? A science experiment gone wrong? KID GHOUL doesn't just clean — KID GHOUL encourages the next masterpiece.",
    color: "red",
    colorHex: "#ef4444",
    icon: "🧒",
    realm: "The Playground",
    products: ["Finger-Paint Remover", "Crayon Wall Cleaner", "Slime Dissolver", "Craft Supply Sanitizer", "Backpack Deodorizer"],
    marketSize: "$120B global children's products market",
    stats: { power: 50, speed: 80, stealth: 60, intelligence: 70 },
    website: "https://www.googooghoul.com",
    live: true,
  },
  {
    id: "teen",
    name: "TEEN GHOUL",
    tagline: "Attitude & Altitude",
    description: "TEEN GHOUL gets it. The room is a disaster, the bathroom is a biohazard, and someone definitely spilled something on the couch. TEEN GHOUL approaches adolescent mess with zero judgment and maximum efficiency.",
    longDescription: "TEEN GHOUL gets it. The room is a disaster, the bathroom is a biohazard, and someone definitely spilled something on the couch. TEEN GHOUL approaches adolescent mess with zero judgment and maximum efficiency.",
    color: "purple",
    colorHex: "#8b5cf6",
    icon: "🎧",
    realm: "The Hangout",
    products: ["Room Refresh Bomb", "Acne-Safe Surface Cleaner", "Gaming Chair Deodorizer", "Snack Residue Lifter", "Locker Freshener"],
    marketSize: "$260B global teen & young adult consumer market",
    stats: { power: 55, speed: 90, stealth: 75, intelligence: 65 },
    website: "https://www.teenghoul.com",
    live: true,
  },
  {
    id: "scholar",
    name: "SCHOLAR GHOUL",
    tagline: "Knowledge Is Power, Cleanliness Is Wisdom",
    description: "Coming soon to The Infinite Library.",
    longDescription: "SCHOLAR GHOUL has read every text on pH balance, enzymatic reactions, and microbial warfare. SCHOLAR GHOUL does not guess — SCHOLAR GHOUL calculates. Cleanliness, after all, is just applied chemistry.",
    color: "orange",
    colorHex: "#f97316",
    icon: "📚",
    realm: "The Infinite Library",
    products: ["pH Testing Kit", "Enzymatic Cleaner", "Laboratory Grade Sanitizer", "Educational Chemistry Set", "Microscope Cleaning Solution"],
    marketSize: "$180B global education & STEM market",
    stats: { power: 65, speed: 55, stealth: 75, intelligence: 100 },
    live: false,
  },
];

const REVENUE_DATA = [
  { year: "Year 1", amount: "$200K", sources: "Brand sponsorships, event appearances, affiliate commissions", growth: 100 },
  { year: "Year 2", amount: "$560K", sources: "Licensing, events, merch royalties, content", growth: 280 },
  { year: "Year 3", amount: "$1.2M", sources: "Full licensing engine + product sales", growth: 600 },
];

const ROADMAP = [
  { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" as const },
  { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" as const },
  { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" as const },
  { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" as const },
  { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" as const },
  { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL household cleaners", "Vertical-specific product lines"], status: "upcoming" as const },
];

/* ───────────────────────────  COMPONENTS  ─────────────────────────── */

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-text-dim text-xs uppercase tracking-wider">{label}</span>
        <span className="text-text-primary font-bold text-xs">{value}</span>
      </div>
      <div className="h-2 bg-depth rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-glow/20 text-cyan-glow text-xs font-semibold tracking-[0.2em] uppercase mb-4">
        <Icon className="w-3.5 h-3.5" />
        {title}
      </div>
      {subtitle && <p className="text-text-muted max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>;
}

/* ───────────────────────────  FORM COMPONENT  ─────────────────────────── */

function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "", message: "" });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  }, []);

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-cinzel font-bold text-xl text-text-primary mb-2">Request Received</h3>
        <p className="text-text-muted text-sm mb-4">
          Thank you, {form.name || "investor"}. The full GHOULVERSE investor deck and financial projections will be sent to <span className="text-cyan-glow">{form.email}</span> within 24 hours.
        </p>
        <p className="text-text-dim text-xs">
          In the meantime, explore the live product brands below.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-depth border border-cyan-glow/10 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-cyan-glow/40 transition-colors"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-depth border border-cyan-glow/10 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-cyan-glow/40 transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
          <input
            type="text"
            name="company"
            placeholder="Company / Fund (optional)"
            value={form.company}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-depth border border-cyan-glow/10 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-cyan-glow/40 transition-colors"
          />
        </div>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-depth border border-cyan-glow/10 text-text-primary text-sm focus:outline-none focus:border-cyan-glow/40 transition-colors appearance-none"
          >
            <option value="" className="bg-depth">Investment Interest</option>
            <option value="seed" className="bg-depth">Seed Round ($250K)</option>
            <option value="future" className="bg-depth">Future Rounds</option>
            <option value="partnership" className="bg-depth">Strategic Partnership</option>
            <option value="exploring" className="bg-depth">Just Exploring</option>
          </select>
        </div>
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-text-dim" />
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your interest in GHOULVERSE (optional)"
          value={form.message}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-depth border border-cyan-glow/10 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-cyan-glow/40 transition-colors resize-none"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-void tracking-wider uppercase transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7, #ff00ff)" }}
        >
          <Send className="w-4 h-4" />
          Request Full Deck
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold tracking-wider uppercase transition-all hover:scale-105 border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10"
        >
          Explore GHOULVERSE
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </form>
  );
}

/* ───────────────────────────  MAIN PAGE  ─────────────────────────── */

function InvestorsContent() {
  const searchParams = useSearchParams();
  const fromId = searchParams.get("from") || "ghoulverse";

  const fromGhoul = GHOULS.find((g) => g.id === fromId) || null;

  /* Order: referring ghoul first (if not GOO), then GOO, then rest alphabetically */
  const orderedGhouls = (() => {
    const result: GhoulData[] = [];
    if (fromGhoul && fromGhoul.id !== "goo") result.push(fromGhoul);
    const goo = GHOULS.find((g) => g.id === "goo")!;
    result.push(goo);
    const rest = GHOULS.filter((g) => g.id !== "goo" && g.id !== fromId).sort((a, b) => a.name.localeCompare(b.name));
    result.push(...rest);
    return result;
  })();

  const liveGhouls = orderedGhouls.filter((g) => g.live);
  const upcomingGhouls = orderedGhouls.filter((g) => !g.live);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* ═══════ HERO ═══════ */}
        <section className="text-center mb-20 relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,240,255,0.3), transparent 70%)" }}
          />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-cyan-glow/20 text-cyan-glow bg-cyan-glow/5 mb-6">
              Confidential — Investor Deck
            </span>
            <h1 className="font-creepster text-6xl md:text-8xl gradient-text mb-4">GHOULVERSE</h1>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-6">
              Twelve character brands. One universe. A vertically integrated IP ecosystem built to dominate the $5T+ global cleaning, wellness, beauty, gaming, and entertainment markets.
            </p>
            {fromGhoul && (
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-cyan-glow/20">
                <span className="text-2xl">{fromGhoul.icon}</span>
                <span className="text-text-muted text-sm">
                  Welcome from <span className="text-text-primary font-semibold">{fromGhoul.name}</span>
                </span>
              </div>
            )}
          </div>
        </section>

        {/* ═══════ EXECUTIVE SUMMARY ═══════ */}
        <section className="mb-24">
          <GlassCard className="relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-text-primary mb-4">
                  The Investment Opportunity
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  GHOULVERSE is building the world's first character-driven cleaning ecosystem. We don't just sell products — we sell personalities that happen to clean things. Each of our 12 ghouls occupies a distinct market vertical with zero overlap, creating a defensible portfolio of IP that compounds in value.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  Our asset-light, IP-heavy model generates revenue through sponsorships, licensing, events, and affiliate partnerships in Year 1, before scaling into owned product lines and entertainment by Year 3.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["$250K AUD Ask", "20% Equity", "$1.25M Pre-Money", "5–8x Target ROI"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-cyan-glow/20 text-cyan-glow/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Product Lines", value: "108+", sub: "Across 12 brands" },
                  { label: "Market Verticals", value: "12", sub: "Zero overlap" },
                  { label: "Combined TAM", value: "$5T+", sub: "Global addressable" },
                  { label: "Live Assets", value: "10", sub: "Sites + game" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-5 text-center">
                    <p className="font-creepster text-3xl md:text-4xl text-cyan-glow mb-1">{stat.value}</p>
                    <p className="text-text-primary text-xs font-bold tracking-wider uppercase mb-1">{stat.label}</p>
                    <p className="text-text-dim text-[10px]">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ═══════ THE GHOUL THESIS ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={Brain}
            title="The GHOUL Thesis"
            subtitle="Every ghoul consumes a specific category of mess, struggle, and chaos. This is not cleaning as chore — it is cleaning as mission."
          />
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,0,255,0.3), transparent 70%)" }}
            />
            <div className="relative z-10">
              <p className="text-text-primary text-lg md:text-xl leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                GHOULVERSE is built on a single, unifying thesis:{" "}
                <span className="text-cyan-glow font-semibold">every mess has an enemy</span>. Each ghoul is a
                specialised consumer of chaos — engineered through science, storytelling, and vertical-specific
                innovation to eliminate threats that others tolerate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    ghoul: "PARTY GHOUL",
                    eats: "Laced drugs, vomit bacteria, festival biohazards, stagnant air pathogens",
                    color: "#ff00ff",
                    icon: "🎉",
                  },
                  {
                    ghoul: "TRADIE GHOUL",
                    eats: "Concrete dust, oil slicks, rust flakes, industrial grease, worksite carcinogens",
                    color: "#eab308",
                    icon: "🔧",
                  },
                  {
                    ghoul: "BEAUTY GHOUL",
                    eats: "Cosmetic contamination, brush bacteria, expired serum buildup, vanity biofilm",
                    color: "#ec4899",
                    icon: "💄",
                  },
                  {
                    ghoul: "GARDEN GHOUL",
                    eats: "Pesticide residue, soil imbalance, plant disease vectors, compost pathogens",
                    color: "#22c55e",
                    icon: "🌿",
                  },
                  {
                    ghoul: "GEEK GHOUL",
                    eats: "Keyboard grease, screen bacteria, cable dust, electromagnetic particle buildup",
                    color: "#00d4ff",
                    icon: "💻",
                  },
                  {
                    ghoul: "ZEN GHOUL",
                    eats: "Mental clutter, air quality degradation, stress toxins, meditation space stagnation",
                    color: "#a855f7",
                    icon: "🧘",
                  },
                  {
                    ghoul: "GOO GHOUL",
                    eats: "The universal mess — grease, grime, entropy, and everything unclean",
                    color: "#00f0ff",
                    icon: "👻",
                  },
                  {
                    ghoul: "SPORT GHOUL",
                    eats: "Sweat-borne bacteria, locker room fungi, turf contaminants, gear odour vectors",
                    color: "#f97316",
                    icon: "🏆",
                  },
                  {
                    ghoul: "GOO GOO",
                    eats: "Nappy pathogens, bottle biofilms, puree stains, toy surface contaminants",
                    color: "#3b82f6",
                    icon: "🍼",
                  },
                ].map((item) => (
                  <div
                    key={item.ghoul}
                    className="glass rounded-xl p-5 border-l-4"
                    style={{ borderLeftColor: item.color }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="font-cinzel font-bold text-sm text-text-primary">{item.ghoul}</h4>
                    </div>
                    <p className="text-text-muted text-xs leading-relaxed">
                      <span className="text-text-dim uppercase tracking-wider text-[10px]">Consumes:</span>{" "}
                      {item.eats}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ PERSONALIZED GHoul SECTION ═══════ */}
        {fromGhoul && fromGhoul.id !== "ghoulverse" && (
          <section className="mb-24">
            <SectionHeading
              icon={Sparkles}
              title={`Your Gateway: ${fromGhoul.name}`}
              subtitle={`Every investor journey begins somewhere. Here's how ${fromGhoul.name} fits into the GHOULVERSE vision.`}
            />
            <div className="glass-glow rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl">{fromGhoul.icon}</span>
                    <div>
                      <h3 className="font-creepster text-3xl md:text-4xl" style={{ color: fromGhoul.colorHex }}>
                        {fromGhoul.name}
                      </h3>
                      <p className="text-text-dim text-sm tracking-wider">{fromGhoul.tagline}</p>
                    </div>
                  </div>
                  <p className="text-text-muted leading-relaxed mb-4">{fromGhoul.longDescription}</p>
                  <p className="text-text-muted leading-relaxed mb-6">
                    <span className="text-text-primary font-semibold">Market:</span> {fromGhoul.marketSize}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(fromGhoul.stats).map(([key, val]) => (
                      <StatBar key={key} label={key} value={val} color={fromGhoul.colorHex} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {fromGhoul.products.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-full text-xs border border-cyan-glow/20 text-cyan-glow/80">
                        {p}
                      </span>
                    ))}
                  </div>
                  {fromGhoul.website && (
                    <a
                      href={fromGhoul.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium transition-colors"
                      style={{ color: fromGhoul.colorHex }}
                    >
                      Visit Character Site <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div
                  className="relative flex items-center justify-center p-8 min-h-[300px]"
                  style={{ background: `linear-gradient(135deg, ${fromGhoul.colorHex}15, ${fromGhoul.colorHex}05)` }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: `radial-gradient(circle at center, ${fromGhoul.colorHex}30, transparent 70%)` }}
                  />
                  <span className="relative text-[120px] md:text-[160px] animate-float drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    {fromGhoul.icon}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* ═══════ THE ECOSYSTEM ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={Globe}
            title="The Full Ecosystem"
            subtitle="Twelve characters. Twelve verticals. One shared universe. Each ghoul is a standalone brand with its own products, audience, and revenue potential."
          />

          {/* Live Ghouls */}
          <div className="mb-8">
            <h3 className="font-cinzel font-bold text-lg text-text-primary mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-glow" />
              Live Brands
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveGhouls.map((ghoul) => (
                <div
                  key={ghoul.id}
                  className="group glass rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/20"
                >
                  <div
                    className="h-24 relative flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${ghoul.colorHex}15, ${ghoul.colorHex}05)` }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ background: `radial-gradient(circle at center, ${ghoul.colorHex}30, transparent 70%)` }}
                    />
                    <span className="relative text-5xl animate-float">{ghoul.icon}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-cinzel font-bold text-lg text-text-primary group-hover:text-cyan-glow transition-colors">
                          {ghoul.name}
                        </h4>
                        <p className="text-text-dim text-xs uppercase tracking-wider">{ghoul.realm}</p>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                        style={{ backgroundColor: `${ghoul.colorHex}20`, color: ghoul.colorHex }}
                      >
                        Live
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">{ghoul.description}</p>
                    <p className="text-text-dim text-xs mb-3">
                      <span className="text-text-primary font-semibold">Market:</span> {ghoul.marketSize}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ghoul.products.slice(0, 3).map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded-full text-[10px] border border-text-dim/20 text-text-dim">
                          {p}
                        </span>
                      ))}
                      {ghoul.products.length > 3 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] text-text-dim">+{ghoul.products.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Ghouls */}
          <div>
            <h3 className="font-cinzel font-bold text-lg text-text-primary mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-glow" />
              Coming Soon
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {upcomingGhouls.map((ghoul) => (
                <div
                  key={ghoul.id}
                  className="glass rounded-xl p-5 text-center opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className="text-4xl mb-2 block">{ghoul.icon}</span>
                  <h4 className="font-cinzel font-bold text-sm text-text-primary mb-1">{ghoul.name}</h4>
                  <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">{ghoul.realm}</p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] border border-purple-glow/20 text-purple-glow/70">
                    Planned
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ INNOVATION & SCIENCE ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={Beaker}
            title="Innovation & Science"
            subtitle="Each vertical is a laboratory. We don't follow category conventions — we engineer category-specific solutions backed by formulation science, testing protocols, and vertical expertise."
          />
          <div className="space-y-6">
            {/* PARTY GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #ff00ff15, #ff00ff05)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🎉</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">PARTY GHOUL</h3>
                      <p className="text-text-dim text-xs">Festival Safety & Biohazard Response</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        Laced substances, vomit bacteria, portable-toilet biofilms, stagnant-air pathogens
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Enzymatic neutralisation + active oxygen release. pH shock destroys bacterial colonies
                        in &lt;30 seconds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "On-site drug purity testing kits",
                          "Bacteria-eliminating surface wipes",
                          "Air-pathogen neutralising mist",
                          "Biohazard vomit encapsulator",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Reduces festival-related illness by eliminating bacterial vectors before they spread.
                        Drug-testing kits prevent overdose deaths through real-time adulterant detection.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Prevents harm, saves lives</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TRADIE GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #eab30815, #eab30805)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🔧</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">TRADIE GHOUL</h3>
                      <p className="text-text-dim text-xs">Industrial Hygiene & Workplace Safety</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        Concrete dust, oil slicks, rust flakes, industrial grease, worksite carcinogens
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Heavy-duty surfactant chemistry + chelating agents. Dissolves silica dust and heavy oils
                        without abrasive damage to skin or surfaces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "Silica-dust encapsulating hand wash",
                          "Biodegradable degreasing solvent",
                          "Rust-inhibiting tool dip",
                          "PPE-compatible surface sanitiser",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Reduces silicosis risk through silica-dust neutralisation. Prevents dermatitis and
                        chemical burns with skin-safe heavy-duty formulations.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Protects workers, reduces claims</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BEAUTY GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #ec489915, #ec489905)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">💄</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">BEAUTY GHOUL</h3>
                      <p className="text-text-dim text-xs">Cosmetic Sanitation & Dermal Safety</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        Cosmetic contamination, brush bacteria, expired serum buildup, vanity biofilm
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Antimicrobial peptide formulations + UV-C brush sanitation. pH-balanced to protect
                        skin barrier while eliminating <em>Staphylococcus aureus</em> and <em>P. acnes</em>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "UV-C makeup brush sanitising station",
                          "Antimicrobial vanity surface spray",
                          "pH-balanced tool cleanser",
                          "Cosmetic expiry tracking app",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Prevents skin infections and breakouts caused by contaminated brushes. Reduces
                        exposure to expired actives that degrade into irritants.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Dermal health, infection prevention</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GARDEN GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #22c55e15, #22c55e05)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🌿</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">GARDEN GHOUL</h3>
                      <p className="text-text-dim text-xs">Agro-Biology & Soil Health</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        Pesticide residue, soil imbalance, plant disease vectors, compost pathogens
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Beneficial microbial inoculants + organic chelation. Restores mycorrhizal networks
                        while breaking down synthetic pesticide residues into benign compounds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "Mycorrhizal soil restoration pellets",
                          "Organic pesticide residue breaker",
                          "Compost-pathogen thermophilic booster",
                          "Plant-disease early-detection spray",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Eliminates synthetic pesticide runoff into groundwater. Restores soil microbiome
                        for safer, more nutritious home-grown food.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Eco-safe, food-safe agriculture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GEEK GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #00d4ff15, #00d4ff05)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">💻</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">GEEK GHOUL</h3>
                      <p className="text-text-dim text-xs">Tech Hygiene & Digital Wellness</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        Keyboard grease, screen bacteria, cable dust, electromagnetic particle buildup
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Isopropyl-alternative electronics cleaner + anti-static polymer coating.
                        Non-conductive, non-corrosive, safe for PCB contacts and display coatings.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "Electronics-safe anti-bacterial serum",
                          "Anti-static cable dust repellent",
                          "Thermal-paste-safe contact cleaner",
                          "Blue-light filtering screen wash",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Reduces keyboard-borne illness transmission in shared workspaces. Protects
                        sensitive electronics from corrosion caused by conventional cleaners.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Tech-safe, health-safe computing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ZEN GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #a855f715, #a855f705)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🧘</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">ZEN GHOUL</h3>
                      <p className="text-text-dim text-xs">Atmospheric Wellness & Mind-Body Safety</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        Mental clutter, air quality degradation, stress toxins, meditation space stagnation
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Adaptogenic aromatherapy + negative-ion generation. Terpene-based formulations
                        clinically shown to reduce cortisol and improve HRV during mindfulness practice.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "Cortisol-reducing room mist",
                          "Negative-ion meditation space diffuser",
                          "Biophilic air-purifying plant tonic",
                          "Sleep-quality enhancing linen spray",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Improves indoor air quality by neutralising VOCs and particulates. Reduces
                        stress-related cortisol spikes, supporting cardiovascular and immune health.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Mental & physical wellbeing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GOO GHOUL */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div
                  className="p-6 md:p-8"
                  style={{ background: "linear-gradient(135deg, #00f0ff15, #00f0ff05)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">👻</span>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-text-primary">GOO GHOUL</h3>
                      <p className="text-text-dim text-xs">Universal Cleaning & Entropy Reversal</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Consumes</p>
                      <p className="text-text-muted text-sm">
                        The universal mess — grease, grime, entropy, and everything unclean across every surface
                      </p>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-1">Science</p>
                      <p className="text-text-muted text-sm">
                        Broad-spectrum enzymatic platform + surfactant synergy. One formulation adapts to
                        pH needs of glass, stone, wood, and metal through smart-buffer technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Innovation Pipeline</p>
                      <ul className="space-y-2">
                        {[
                          "Smart-buffer all-surface cleaner",
                          "Enzymatic grease digester",
                          "Anti-bacterial floor wash concentrate",
                          "Heavy-duty degreaser foam",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <FlaskConical className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider mb-2">Safety Impact</p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Replaces harsh chemical cleaners with biodegradable enzymatic alternatives.
                        Reduces household chemical exposure, especially for children and pets.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">Non-toxic, biodegradable, universal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ MARKET OPPORTUNITY ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={TrendingUp}
            title="Market Opportunity"
            subtitle="We don't compete in one market. We operate across twelve — each a multi-billion dollar vertical with established demand and room for disruptive character branding."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Total Addressable Market", value: "$5.2T", desc: "Combined TAM across all 12 verticals including wellness, beauty, industrial, gaming, and household cleaning." },
              { label: "Serviceable Addressable Market", value: "$420B", desc: "Addressable portion where character IP and branded cleaning products can capture meaningful share." },
              { label: "Serviceable Obtainable Market", value: "$2.1B", desc: "Realistic 3-year target based on licensing, sponsorships, and product rollouts across 6 live brands." },
            ].map((m) => (
              <GlassCard key={m.label} className="text-center">
                <p className="font-creepster text-4xl md:text-5xl text-cyan-glow mb-2">{m.value}</p>
                <p className="text-text-primary text-sm font-bold tracking-wider uppercase mb-3">{m.label}</p>
                <p className="text-text-muted text-sm leading-relaxed">{m.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 glass rounded-2xl p-6 md:p-8">
            <h4 className="font-cinzel font-bold text-lg text-text-primary mb-4">Vertical Market Breakdown</h4>
            <div className="space-y-4">
              {[
                { name: "Wellness & Mindfulness", size: "$4.5T", ghoul: "ZEN GHOUL", color: "#a855f7" },
                { name: "Beauty & Personal Care", size: "$579B", ghoul: "BEAUTY GHOUL", color: "#ec4899" },
                { name: "Sports & Fitness", size: "$600B", ghoul: "SPORT GHOUL", color: "#f97316" },
                { name: "Gaming & Tech Accessories", size: "$250B", ghoul: "GEEK GHOUL", color: "#00d4ff" },
                { name: "Industrial Cleaning", size: "$180B", ghoul: "TRADIE GHOUL", color: "#eab308" },
                { name: "Gardening & Horticulture", size: "$120B", ghoul: "GARDEN GHOUL", color: "#22c55e" },
                { name: "Event Services", size: "$14B", ghoul: "PARTY GHOUL", color: "#ff00ff" },
                { name: "Baby Care", size: "$300B", ghoul: "GOO GOO", color: "#3b82f6" },
              ].map((v) => (
                <div key={v.name} className="flex items-center gap-4">
                  <div className="w-32 md:w-40 shrink-0">
                    <p className="text-text-primary text-sm font-medium">{v.name}</p>
                    <p className="text-text-dim text-xs">{v.ghoul}</p>
                  </div>
                  <div className="flex-1 h-3 bg-depth rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: "100%", backgroundColor: v.color, opacity: 0.8 }}
                    />
                  </div>
                  <span className="text-cyan-glow font-bold text-sm w-20 text-right">{v.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SAFETY & TECHNOLOGY MISSION ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={ShieldCheck}
            title="Safety & Technology Mission"
            subtitle="GHOULVERSE exists to make the physical world measurably better, safer, and more technologically rich."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-glow/10 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-6 h-6 text-cyan-glow" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-lg text-text-primary mb-2">Physical Safety First</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Every product formulation is designed with a safety hierarchy: protect the human first,
                    then the surface, then the environment. From PARTY GHOUL's drug-testing kits that prevent
                    overdose deaths, to TRADIE GHOUL's silica-dust neutralisers that prevent silicosis —
                    safety is not a feature, it is the foundation.
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-glow/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-purple-glow" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-lg text-text-primary mb-2">Technology Enrichment</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We embed technology into every vertical: QR-linked safety data sheets, app-integrated
                    testing protocols, smart dispensers that track usage and reorder. GEEK GHOUL leads our
                    tech-hardware pipeline with electronics-safe formulations that protect the devices
                    people depend on.
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-lg text-text-primary mb-2">Environmental Responsibility</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Biodegradable enzymatic platforms replace harsh petrochemical solvents. GARDEN GHOUL's
                    mycorrhizal restoration technology rebuilds soil rather than depleting it. Every
                    formulation is designed for circularity — effective today, harmless tomorrow.
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Microscope className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-lg text-text-primary mb-2">Science-Backed Efficacy</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    No marketing claims without lab validation. Every formulation is tested against
                    industry-standard microbial panels, surface compatibility matrices, and dermal safety
                    protocols. We publish efficacy data because transparency builds trust — and trust
                    builds brands that last.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 text-center">
            <p className="text-text-primary text-lg font-cinzel font-bold mb-4">
              "We don't just clean. We consume chaos. We eliminate threats. We restore order."
            </p>
            <p className="text-text-muted text-sm max-w-2xl mx-auto">
              This is the GHOULVERSE mission: to make every environment — from festival grounds to factory
              floors, from vanity tables to garden beds — measurably safer, cleaner, and more technologically
              capable than we found it.
            </p>
          </div>
        </section>

        {/* ═══════ TRACTION ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={Award}
            title="Traction & Milestones"
            subtitle="Built lean. Built fast. Here's what we've already delivered — and what's next."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Character Websites", value: "6 Live", sub: "Fully branded, deployed", status: "complete" },
              { label: "GOO GHOUL™ Trademark", value: "Accepted", sub: "IP Australia Class 3", status: "complete" },
              { label: "GHOULVERSE Game", value: "Live", sub: "GOO RUNNER deployed", status: "complete" },
              { label: "Brand Partnerships", value: "Seeking", sub: "First deals in pipeline", status: "upcoming" },
            ].map((t) => (
              <GlassCard key={t.label} className="text-center">
                <div
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 ${
                    t.status === "complete"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : t.status === "in-progress"
                      ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      : "bg-purple-glow/10 text-purple-glow border border-purple-glow/20"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${t.status === "complete" ? "bg-green-400" : t.status === "in-progress" ? "bg-yellow-400" : "bg-purple-glow"}`} />
                  {t.status}
                </div>
                <p className="font-creepster text-2xl text-cyan-glow mb-1">{t.value}</p>
                <p className="text-text-primary text-xs font-bold tracking-wider uppercase mb-1">{t.label}</p>
                <p className="text-text-dim text-[10px]">{t.sub}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ═══════ BUSINESS MODEL ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={DollarSign}
            title="Business Model"
            subtitle="Asset-light. IP-heavy. Entertainment, licensing, and partnerships provide steady growth while product lines scale. Seven revenue streams across three years, each building on the last."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { stream: "Sponsorships", desc: "Sector-specific brand deals per ghoul", timeline: "Year 1", icon: Target },
              { stream: "Events", desc: "Mascot appearances and activations", timeline: "Year 1", icon: Zap },
              { stream: "Affiliate", desc: "Commission on partner product sales", timeline: "Year 1", icon: TrendingUp },
              { stream: "Licensing", desc: "Character IP licensing to brands", timeline: "Year 2", icon: Shield },
              { stream: "Merchandise", desc: "Royalties on plush, apparel, accessories", timeline: "Year 2", icon: Award },
              { stream: "Animation", desc: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2", icon: Gamepad2 },
              { stream: "Products", desc: "Owned product lines (GOO GHOUL cleaners first)", timeline: "Year 3", icon: Sparkles },
            ].map((r) => (
              <GlassCard key={r.stream} className="relative overflow-hidden group hover:border-cyan-glow/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-glow/10 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] border border-cyan-glow/20 text-cyan-glow/70">
                    {r.timeline}
                  </span>
                </div>
                <h4 className="font-cinzel font-bold text-lg text-text-primary mb-2">{r.stream}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{r.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ═══════ FINANCIAL PROJECTIONS ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={BarChart3}
            title="Financial Projections"
            subtitle="Conservative, revenue-backed forecasts with diversified income from entertainment, licensing, and partnerships. No fantasy metrics — just clear paths to $1.2M by Year 3."
          />
          <GlassCard className="relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {REVENUE_DATA.map((r) => (
                <div key={r.year} className="text-center">
                  <p className="font-creepster text-4xl md:text-5xl text-cyan-glow mb-1">{r.amount}</p>
                  <p className="text-text-primary text-sm font-bold tracking-wider uppercase mb-2">{r.year}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{r.sources}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {REVENUE_DATA.map((r) => (
                <div key={r.year}>
                  <div className="flex justify-between mb-1">
                    <span className="text-text-dim text-xs uppercase tracking-wider">{r.year} Revenue</span>
                    <span className="text-cyan-glow font-bold text-xs">{r.amount}</span>
                  </div>
                  <div className="h-4 bg-depth rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-purple-glow transition-all duration-1000"
                      style={{ width: `${r.growth / 6}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-cyan-glow/10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pre-Money Valuation", value: "$1.25M" },
                { label: "Funding Ask", value: "$250K AUD" },
                { label: "Equity Offered", value: "20%" },
                { label: "Target ROI", value: "5–8x (40–70% IRR)" },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <p className="font-creepster text-2xl text-cyan-glow mb-1">{f.value}</p>
                  <p className="text-text-dim text-[10px] uppercase tracking-wider">{f.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* ═══════ ROADMAP ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={Clock}
            title="Execution Roadmap"
            subtitle="Five phases from IP foundation to product empire. We're already through Phase 1."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/50 via-purple-glow/30 to-transparent" />
            <div className="space-y-8">
              {ROADMAP.map((phase, i) => (
                <div key={phase.phase} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="relative z-10">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        phase.status === "complete"
                          ? "bg-green-500/20 border-green-400"
                          : phase.status === "in-progress"
                          ? "bg-yellow-500/20 border-yellow-400"
                          : "bg-purple-glow/20 border-purple-glow"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          phase.status === "complete" ? "bg-green-400" : phase.status === "in-progress" ? "bg-yellow-400" : "bg-purple-glow"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <GlassCard className={i % 2 === 0 ? "md:mr-8" : "md:ml-8"}>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                            phase.status === "complete"
                              ? "bg-green-500/10 text-green-400"
                              : phase.status === "in-progress"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-purple-glow/10 text-purple-glow"
                          }`}
                        >
                          {phase.status}
                        </span>
                        <span className="text-text-dim text-xs">{phase.phase}</span>
                      </div>
                      <h4 className="font-cinzel font-bold text-lg text-text-primary mb-3">{phase.title}</h4>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                            <ArrowRight className="w-3.5 h-3.5 text-cyan-glow mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ IP STRATEGY ═══════ */}
        <section className="mb-24">
          <SectionHeading
            icon={Shield}
            title="IP & Trademark Strategy"
            subtitle="Intellectual property is our moat. We're building a fortress of trademarks across every vertical."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h4 className="font-cinzel font-bold text-lg text-text-primary mb-4">Trademark Status</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">GOO GHOUL™ — ACCEPTED</p>
                    <p className="text-text-dim text-xs">IP Australia, Class 3 (cleaning preparations)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">International IP — IN PROGRESS</p>
                    <p className="text-text-dim text-xs">US via Madrid Protocol, EU trademark filing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-glow/5 border border-purple-glow/10">
                  <div className="w-10 h-10 rounded-full bg-purple-glow/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-purple-glow" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Vertical Trademarks — PLANNED</p>
                    <p className="text-text-dim text-xs">12 brands × 3 classes each = 36 filings post-funding</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <h4 className="font-cinzel font-bold text-lg text-text-primary mb-4">Defensive Strategy</h4>
              <ul className="space-y-3">
                {[
                  "All 12 character names registered as domains",
                  "Social media handles secured across all platforms",
                  "Defensive name registrations in AU, US, UK, EU",
                  "Character art copyrighted and dated",
                  "Game assets protected under software copyright",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                    <Shield className="w-4 h-4 text-cyan-glow mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* ═══════ TEAM & LEADERSHIP ═══════ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-cyan-glow/20 text-cyan-glow bg-cyan-glow/5 mb-4">
              The People
            </span>
            <h2 className="font-creepster text-3xl md:text-4xl gradient-text mb-4">Team & Leadership</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Investors invest in people first. Meet the team building the GHOULVERSE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Founder */}
            <div className="md:col-span-1 glass rounded-2xl p-6 text-center border border-cyan-glow/10">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-cyan-glow/20 flex items-center justify-center bg-abyss">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="font-cinzel font-bold text-lg text-text-primary mb-1">[Your Name]</h3>
              <p className="text-cyan-glow text-xs font-bold uppercase tracking-wider mb-3">Founder & Chief Ghoul</p>
              <p className="text-text-dim text-sm leading-relaxed mb-4">
                Vision, strategy, and the original spark. Leading product, brand, and investor relations.
              </p>
              <div className="flex items-center justify-center gap-3">
                <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer"
                  className="text-text-dim hover:text-cyan-glow transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="mailto:founder@ghoulverse.com" className="text-text-dim hover:text-cyan-glow transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
              </div>
            </div>

            {/* Core Team */}
            <div className="md:col-span-2 glass rounded-2xl p-6 border border-cyan-glow/10">
              <h3 className="font-cinzel font-bold text-sm uppercase tracking-wider text-text-primary mb-4">Core Team</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { role: "Brand & Creative Director", status: "Hiring" },
                  { role: "Product Development Lead", status: "Hiring" },
                  { role: "Game Developer", status: "Contractor" },
                  { role: "Growth & Partnerships", status: "Hiring" },
                ].map((member) => (
                  <div key={member.role} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-cyan-glow/10 flex items-center justify-center text-cyan-glow text-sm font-bold">
                      +
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-medium">{member.role}</p>
                      <p className="text-text-dim text-[10px] uppercase tracking-wider">{member.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-text-dim/50 text-xs mt-4">
                Growing team of 4 full-time + contractors. Series A will fund 8 additional hires.
              </p>
            </div>
          </div>

          {/* Advisory Circle */}
          <div className="glass rounded-2xl p-6 border border-cyan-glow/10">
            <h3 className="font-cinzel font-bold text-sm uppercase tracking-wider text-text-primary mb-4">Advisory Circle</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "[Advisor 1]", role: "Consumer IP Strategy", status: "Committed" },
                { name: "[Advisor 2]", role: "Retail & Distribution", status: "Committed" },
                { name: "[Advisor 3]", role: "Trademark Law", status: "In Conversation" },
                { name: "[Advisor 4]", role: "Gaming & Esports", status: "In Conversation" },
                { name: "[Advisor 5]", role: "D2C & Subscription", status: "In Conversation" },
              ].map((advisor) => (
                <div key={advisor.name} className="text-center p-4 rounded-lg bg-white/5">
                  <div className="w-12 h-12 rounded-full mx-auto mb-2 bg-cyan-glow/10 flex items-center justify-center text-cyan-glow text-lg">
                    {advisor.status === "Committed" ? "★" : "○"}
                  </div>
                  <p className="text-text-primary text-xs font-bold">{advisor.name}</p>
                  <p className="text-text-dim text-[10px]">{advisor.role}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase ${advisor.status === "Committed" ? "bg-cyan-glow/20 text-cyan-glow" : "bg-white/5 text-text-dim"}`}>
                    {advisor.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ THE INVESTMENT ═══════ */}
        <section className="mb-24">
          <div className="glass-glow rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.4), transparent 70%)" }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,0,255,0.4), transparent 70%)" }}
            />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-cyan-glow/20 text-cyan-glow bg-cyan-glow/5 mb-6">
                The Ask
              </span>
              <h2 className="font-creepster text-4xl md:text-6xl gradient-text mb-6">$250,000 AUD</h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
                For 20% equity at a $1.25M pre-money valuation. Funds will be deployed across mascot creation, international IP filings, and first-revenue partnership activations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
                {[
                  { label: "Mascot Creation", value: "$120K", desc: "24 professional costumes" },
                  { label: "International IP", value: "$60K", desc: "US, EU, UK filings" },
                  { label: "Partnership Seed", value: "$40K", desc: "First deals & events" },
                  { label: "Operations", value: "$30K", desc: "Legal, hosting, tools" },
                ].map((use) => (
                  <div key={use.label} className="glass rounded-xl p-4">
                    <p className="font-creepster text-xl text-cyan-glow mb-1">{use.value}</p>
                    <p className="text-text-primary text-xs font-bold uppercase tracking-wider mb-1">{use.label}</p>
                    <p className="text-text-dim text-[10px]">{use.desc}</p>
                  </div>
                ))}
              </div>
              <div className="max-w-xl mx-auto">
                <InvestorForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <section className="text-center pb-8">
          <p className="text-text-dim text-xs tracking-wider uppercase mb-2">
            GHOULVERSE — House of GHOUL
          </p>
          <p className="text-text-dim/60 text-[10px]">
            This deck is confidential and intended solely for prospective investors. All projections are forward-looking estimates based on current market conditions and planned execution.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            {GHOULS.filter((g) => g.live && g.website).map((g) => (
              <a
                key={g.id}
                href={`${g.website}?utm_source=investor-deck`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
                title={g.name}
              >
                {g.icon}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function InvestorsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="font-creepster text-4xl gradient-text mb-4">GHOULVERSE</div>
          <p className="text-text-muted text-sm">Loading investor deck...</p>
        </div>
      </div>
    }>
      <InvestorsContent />
    </Suspense>
  );
}
