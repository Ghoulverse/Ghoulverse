"use client";

import Link from "next/link";
import { GHOULS } from "@/lib/ghouls";
import { BookOpen, Gamepad2, ArrowRight, Sparkles } from "lucide-react";

export default function LorePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <BookOpen className="w-10 h-10 text-cyan-glow mx-auto mb-4" />
          <h1 className="font-creepster text-5xl md:text-7xl gradient-text mb-4">
            The Codex
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Knowledge is power. Cleanliness is wisdom. Explore the archives of the
            GHOULVERSE — from the origins of GOO GHOUL to the science of every enemy
            you will face in the Void.
          </p>
        </div>

        {/* Lore Intro */}
        <div className="glass-glow rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
          />
          <div className="relative z-10">
            <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-text-primary mb-4">
              The Origin Story
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Before there were cleaning products, before there were sprays and wipes and
                degreasers, there was only <strong className="text-cyan-glow">The Void</strong> — an
                infinite expanse of entropy where filth reigned supreme. Bacteria marched in
                colonies. Viruses danced in the dark. Mold spread its creeping kingdom across
                every surface untouched by light.
              </p>
              <p>
                And then, from the primordial mess, emerged the first consciousness to look at
                chaos and say: <em className="text-purple-glow">"I will eat that."</em>
              </p>
              <p>
                This was <strong className="text-cyan-glow">GOO GHOUL</strong>: the Original
                Consumer. Not a cleaner. Not a maid. A force of nature. An apex predator of filth.
                Where GOO GHOUL walked, surfaces shone. Where GOO GHOUL fed, bacteria trembled.
              </p>
              <p>
                But GOO GHOUL was lonely in the infinite dark. And so, from the residue of its
                first great cleansing, new forms began to emerge — each shaped by the nature of
                the mess they were born to conquer. The meditative calm of ZEN GHOUL. The
                industrial fury of TRADIE GHOUL. The chaotic joy of PARTY GHOUL. The nurturing
                patience of GARDEN GHOUL. The precision of BEAUTY GHOUL. The digital focus of GEEK GHOUL. The tiny curiosity of GOO GOO. The creative chaos of KID GHOUL. The attitude of TEEN GHOUL. The adrenaline of SPORT GHOUL. The wisdom of BOOK GHOUL.
              </p>
              <p>
                Together, they formed <strong className="text-magenta-glow">The GHOULVERSE</strong>:
                twelve realms of purpose, twelve approaches to order, twelve reasons to believe that
                no problem is eternal.
              </p>
            </div>
          </div>
        </div>

        {/* Ghoul Lore Cards */}
        <div className="mb-16">
          <h2 className="font-cinzel font-bold text-2xl text-text-primary mb-8 text-center tracking-wider">
            The Eight Chronicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GHOULS.map((ghoul) => (
              <Link
                key={ghoul.id}
                href={`/ghouls/${ghoul.id}/`}
                className="group glass rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-glow/20 flex gap-4"
              >
                <div className="text-4xl flex-shrink-0">{ghoul.icon}</div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-text-primary group-hover:text-cyan-glow transition-colors mb-1">
                    {ghoul.name}
                  </h3>
                  <p className="text-text-dim text-xs uppercase tracking-wider mb-2">
                    {ghoul.realm}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                    {ghoul.longDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Enemy Codex Teaser */}
        <div className="glass-glow rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-magenta-glow" />
                <h2 className="font-cinzel font-bold text-2xl text-text-primary">
                  The Enemy Codex
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-6">
                In GOO RUNNER, you will face 32 real-world enemies across 6 categories:
                Bacteria, Viruses, Parasites, Filth, Mold, and Minerals. Each foe is based on
                actual science — defeat them to unlock their entries in the Codex and learn
                the truth about the microscopic world around you.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {["E.Coli", "Staph", "Norovirus", "Black Mold", "Limescale", "Sludge"].map((enemy) => (
                  <div
                    key={enemy}
                    className="px-3 py-2 rounded-lg glass text-center text-sm text-text-muted"
                  >
                    {enemy}
                  </div>
                ))}
              </div>
              <Link
                href="/play/"
                className="inline-flex items-center gap-2 text-cyan-glow hover:text-magenta-glow transition-colors font-medium"
              >
                <Gamepad2 className="w-4 h-4" />
                Unlock them in GOO RUNNER <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full glass flex items-center justify-center">
                <span className="text-6xl md:text-7xl">🦠</span>
              </div>
            </div>
          </div>
        </div>

        {/* Boss Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Mega E.Coli", title: "The Mother of All Bacteria", icon: "🧫", color: "#22c55e" },
            { name: "Staph King", title: "Crowned in Golden Slime", icon: "👑", color: "#eab308" },
            { name: "Sludge Behemoth", title: "Ancient Accumulation", icon: "🛢️", color: "#a855f7" },
            { name: "Mold Emperor", title: "Spore-Lord of Damp Realms", icon: "🍄", color: "#ec4899" },
          ].map((boss) => (
            <div
              key={boss.name}
              className="glass rounded-xl p-6 flex items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: `${boss.color}20`, border: `1px solid ${boss.color}40` }}
              >
                {boss.icon}
              </div>
              <div>
                <p className="text-text-dim text-xs uppercase tracking-wider mb-0.5">Boss</p>
                <h3 className="font-cinzel font-bold text-lg text-text-primary">{boss.name}</h3>
                <p className="text-text-muted text-sm">{boss.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
