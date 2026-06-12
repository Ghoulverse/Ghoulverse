"use client";

import Link from "next/link";
import { GHOULS } from "@/lib/ghouls";
import { ArrowRight, Sparkles, Skull, Droplets, Gamepad2, ExternalLink } from "lucide-react";

export default function HomePage() {
  const gooGhoul = GHOULS[0];
  const otherGhouls = GHOULS.slice(1);

  return (
    <div className="relative">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full opacity-20 animate-float"
            style={{
              background: "radial-gradient(circle, rgba(0,240,255,0.3), transparent 70%)",
              top: "10%",
              left: "20%",
              animationDelay: "0s",
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full opacity-20 animate-float"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)",
              top: "50%",
              right: "15%",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full opacity-15 animate-float"
            style={{
              background: "radial-gradient(circle, rgba(255,0,255,0.3), transparent 70%)",
              bottom: "20%",
              left: "40%",
              animationDelay: "4s",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-cyan-glow/20 text-cyan-glow bg-cyan-glow/5">
              Welcome to the Void
            </span>
          </div>

          <h1
            className="font-creepster text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-wide mb-6 animate-slide-up"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #a855f7, #ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            GHOULVERSE
          </h1>

          <p className="text-text-muted text-lg md:text-2xl font-light tracking-widest uppercase mb-4 animate-slide-up delay-200">
            House of GHOUL
          </p>

          <p className="text-text-dim text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-300">
            Twelve consumer verticals. One universe. Infinite potential. The House of GHOUL brings
            character-driven products to every realm — from industrial workshops to digital mainframes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
            <Link
              href="/ghouls/"
              className="group px-8 py-4 rounded-xl font-semibold text-void tracking-wider uppercase transition-all hover:scale-105 flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              }}
            >
              Explore Realms
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/play/"
              className="px-8 py-4 rounded-xl font-semibold tracking-wider uppercase transition-all hover:scale-105 border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              Play GOO RUNNER
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 animate-slide-up delay-500">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Skull className="w-4 h-4 text-cyan-glow" />
                <span className="font-creepster text-3xl md:text-4xl text-cyan-glow">12</span>
              </div>
              <p className="text-text-dim text-xs uppercase tracking-wider">Consumer Verticals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Droplets className="w-4 h-4 text-purple-glow" />
                <span className="font-creepster text-3xl md:text-4xl text-purple-glow">12</span>
              </div>
              <p className="text-text-dim text-xs uppercase tracking-wider">Ghoul Realms</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-magenta-glow" />
                <span className="font-creepster text-3xl md:text-4xl text-magenta-glow">100%</span>
              </div>
              <p className="text-text-dim text-xs uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-cyan-glow/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-cyan-glow/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== GOO GHOUL FEATURED ===== */}
      <section className="relative py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-glow rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Glow accent */}
            <div
              className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.4), transparent 70%)" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-cyan-glow text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
                  The Original Consumer
                </span>
                <h2 className="font-creepster text-5xl md:text-6xl gradient-text mb-4">
                  {gooGhoul.name}
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  {gooGhoul.longDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(gooGhoul.stats).map(([key, val]) => (
                    <div key={key} className="glass rounded-lg p-3">
                      <p className="text-text-dim text-xs uppercase tracking-wider mb-1">{key}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-depth rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${val}%`,
                              background: "linear-gradient(90deg, #00f0ff, #a855f7)",
                            }}
                          />
                        </div>
                        <span className="text-cyan-glow font-bold text-sm">{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.googhoul.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-void tracking-wider uppercase transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #00f0ff, #a855f7)",
                  }}
                >
                  Visit GOOGHOUL.com
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-3xl opacity-40"
                    style={{ background: "radial-gradient(circle, #00f0ff, #a855f7)" }}
                  />
                  <img
                    src="/ghost_main.png"
                    alt="GOO GHOUL"
                    className="relative w-64 h-64 md:w-80 md:h-80 object-contain animate-float drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE 7 OTHER REALMS ===== */}
      <section className="relative py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-glow text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
              The House of GHOUL
            </span>
            <h2 className="font-creepster text-4xl md:text-6xl gradient-text mb-4">
              The Full Ecosystem
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Each ghoul is a specialised consumer champion with its own vertical, identity, and domain.
              Together they form the GHOULVERSE ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherGhouls.map((ghoul, i) => {
              const card = (
                <div
                  className="group glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-glow/30 relative overflow-hidden h-full"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${ghoul.colorHex}20, transparent 70%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{ghoul.icon}</div>
                      {ghoul.website && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-cyan-glow/20 text-cyan-glow/70">
                          Shop
                        </span>
                      )}
                    </div>
                    <h3 className="font-cinzel font-bold text-lg text-text-primary mb-1 group-hover:text-cyan-glow transition-colors">
                      {ghoul.name}
                    </h3>
                    <p className="text-text-dim text-xs uppercase tracking-wider mb-3">
                      {ghoul.realm}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                      {ghoul.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-cyan-glow text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {ghoul.website ? (
                        <>Visit Site <ExternalLink className="w-3 h-3" /></>
                      ) : (
                        <>Explore Realm <ArrowRight className="w-3 h-3" /></>
                      )}
                    </div>
                  </div>
                </div>
              );
              return ghoul.website ? (
                <a
                  key={ghoul.id}
                  href={ghoul.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <Link
                  key={ghoul.id}
                  href={`/ghouls/${ghoul.id}/`}
                  className="block"
                >
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GAME CTA ===== */}
      <section className="relative py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass-glow rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,0,255,0.4), transparent 70%)" }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.4), transparent 70%)" }}
            />

            <Gamepad2 className="w-12 h-12 text-cyan-glow mx-auto mb-6" />
            <h2 className="font-creepster text-4xl md:text-6xl gradient-text mb-4 relative z-10">
              Enter The Game
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8 relative z-10">
              GOO RUNNER is live. Pilot your ghoul through the Void, battle real bacteria and
              viruses, unlock all 8 characters, and claim your place on the leaderboard.
            </p>
            <Link
              href="/play/"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-void tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #a855f7, #ff00ff)",
              }}
            >
              <Gamepad2 className="w-5 h-5" />
              Play GOO RUNNER Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
