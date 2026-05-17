import { GHOULS, getGhoulBySlug } from "@/lib/ghouls";
import Link from "next/link";
import { ArrowLeft, Sword, Zap, Eye, Brain, MapPin, Gamepad2 } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return GHOULS.map((ghoul) => ({
    slug: ghoul.id,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function GhoulPage({ params }: Props) {
  const { slug } = await params;
  const ghoul = getGhoulBySlug(slug);
  if (!ghoul) notFound();

  const isGoo = ghoul.id === "goo";

  const statIcons: Record<string, React.ReactNode> = {
    power: <Sword className="w-4 h-4" />,
    speed: <Zap className="w-4 h-4" />,
    stealth: <Eye className="w-4 h-4" />,
    intelligence: <Brain className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back link */}
        <Link
          href="/ghouls/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-cyan-glow transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">All Realms</span>
        </Link>

        {/* Hero Card */}
        <div className="glass-glow rounded-2xl overflow-hidden mb-12">
          <div
            className="h-48 md:h-64 relative flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${ghoul.colorHex}20, ${ghoul.colorHex}05)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at center, ${ghoul.colorHex}40, transparent 60%)`,
              }}
            />
            <div className="relative text-center">
              <div className="text-8xl md:text-9xl mb-2 animate-float">{ghoul.icon}</div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h1
                  className="font-creepster text-5xl md:text-6xl mb-2"
                  style={{
                    color: ghoul.colorHex,
                    textShadow: `0 0 30px ${ghoul.colorHex}50`,
                  }}
                >
                  {ghoul.name}
                </h1>
                <p className="text-text-muted text-lg">{ghoul.tagline}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <MapPin className="w-4 h-4" style={{ color: ghoul.colorHex }} />
                <span className="text-sm text-text-muted">{ghoul.realm}</span>
              </div>
            </div>

            <p className="text-text-primary text-lg leading-relaxed mb-8">
              {ghoul.longDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(ghoul.stats).map(([key, val]) => (
                <div key={key} className="glass rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2" style={{ color: ghoul.colorHex }}>
                    {statIcons[key]}
                    <span className="text-xs uppercase tracking-wider text-text-dim">{key}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex-1 h-2 bg-depth rounded-full overflow-hidden max-w-[80px]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${val}%`,
                          backgroundColor: ghoul.colorHex,
                        }}
                      />
                    </div>
                    <span className="font-bold text-lg" style={{ color: ghoul.colorHex }}>
                      {val}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ability & Passive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-5">
                <p className="text-text-dim text-xs uppercase tracking-wider mb-1">Ultimate Ability</p>
                <p className="font-cinzel font-bold text-xl" style={{ color: ghoul.colorHex }}>
                  {ghoul.ability}
                </p>
              </div>
              <div className="glass rounded-xl p-5">
                <p className="text-text-dim text-xs uppercase tracking-wider mb-1">Passive</p>
                <p className="font-cinzel font-bold text-xl text-text-primary">
                  {ghoul.passive}
                </p>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-cinzel font-bold text-text-primary mb-4 tracking-wider">
                Signature Products
              </h3>
              <div className="flex flex-wrap gap-2">
                {ghoul.products.map((product) => (
                  <span
                    key={product}
                    className="px-4 py-2 rounded-full text-sm border transition-colors"
                    style={{
                      borderColor: `${ghoul.colorHex}30`,
                      color: ghoul.colorHex,
                      backgroundColor: `${ghoul.colorHex}10`,
                    }}
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cross-links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isGoo && (
            <a
              href="https://www.googhoul.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-glow rounded-xl p-6 flex items-center gap-4 hover:border-cyan-glow/30 transition-colors"
            >
              <img src="/ghost_main.png" alt="GOO GHOUL" className="w-16 h-16 object-contain" />
              <div>
                <p className="text-text-dim text-xs uppercase tracking-wider mb-1">Character Site</p>
                <p className="font-cinzel font-bold text-cyan-glow">Visit GOOGHOUL.com</p>
              </div>
            </a>
          )}
          <Link
            href="/play/"
            className="glass-glow rounded-xl p-6 flex items-center gap-4 hover:border-cyan-glow/30 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-glow/10 flex items-center justify-center">
              <Gamepad2 className="w-8 h-8 text-cyan-glow" />
            </div>
            <div>
              <p className="text-text-dim text-xs uppercase tracking-wider mb-1">In Game</p>
              <p className="font-cinzel font-bold text-cyan-glow">Play as {ghoul.name} in GOO RUNNER</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
