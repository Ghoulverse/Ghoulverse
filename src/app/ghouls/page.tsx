"use client";

import Link from "next/link";
import { GHOULS } from "@/lib/ghouls";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";

export default function GhoulsPage() {
  const gooGhoul = GHOULS[0];
  const otherGhouls = GHOULS.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-glow text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            The House of GHOUL
          </span>
          <h1 className="font-creepster text-5xl md:text-7xl gradient-text mb-4">
            The Constellation
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Eleven consumer verticals orbit the primordial heart of GOO GHOUL.
            Explore each entity and visit their dedicated character sites.
          </p>
        </div>

        {/* Constellation Map */}
        <div className="relative mb-20">
          <div className="glass-glow rounded-2xl p-4 md:p-8 aspect-[4/3] md:aspect-[16/9] relative overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,240,255,0.3), transparent 70%)" }}
            />

            {/* SVG Constellation */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connection lines */}
              {otherGhouls.map((ghoul) => (
                <line
                  key={`line-${ghoul.id}`}
                  x1={gooGhoul.position.x}
                  y1={gooGhoul.position.y}
                  x2={ghoul.position.x}
                  y2={ghoul.position.y}
                  stroke="rgba(0, 240, 255, 0.15)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                />
              ))}

              {/* Other ghoul nodes */}
              {otherGhouls.map((ghoul) => (
                <g key={ghoul.id}>
                  <circle
                    cx={ghoul.position.x}
                    cy={ghoul.position.y}
                    r="2.5"
                    fill={ghoul.colorHex}
                    opacity="0.8"
                  />
                  <circle
                    cx={ghoul.position.x}
                    cy={ghoul.position.y}
                    r="4"
                    fill="none"
                    stroke={ghoul.colorHex}
                    strokeWidth="0.3"
                    opacity="0.4"
                  />
                  <text
                    x={ghoul.position.x}
                    y={ghoul.position.y + 5}
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="2.5"
                    fontFamily="Cinzel, serif"
                    fontWeight="600"
                  >
                    {ghoul.name}
                  </text>
                </g>
              ))}

              {/* GOO GHOUL center node */}
              <g>
                <circle
                  cx={gooGhoul.position.x}
                  cy={gooGhoul.position.y}
                  r="4"
                  fill={gooGhoul.colorHex}
                  opacity="0.9"
                />
                <circle
                  cx={gooGhoul.position.x}
                  cy={gooGhoul.position.y}
                  r="6"
                  fill="none"
                  stroke={gooGhoul.colorHex}
                  strokeWidth="0.5"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="6;8;6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.2;0.6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x={gooGhoul.position.x}
                  y={gooGhoul.position.y + 7}
                  textAnchor="middle"
                  fill="#00f0ff"
                  fontSize="3"
                  fontFamily="Creepster, cursive"
                >
                  {gooGhoul.name}
                </text>
              </g>
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {GHOULS.map((ghoul) => (
              <Link
                key={ghoul.id}
                href={`/ghouls/${ghoul.id}/`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs hover:border-cyan-glow/30 transition-colors"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: ghoul.colorHex }}
                />
                <span className="text-text-muted">{ghoul.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured: GOO GHOUL */}
        <div className="mb-16">
          <div className="glass-glow rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{gooGhoul.icon}</span>
                  <div>
                    <h2 className="font-creepster text-4xl md:text-5xl gradient-text">
                      {gooGhoul.name}
                    </h2>
                    <p className="text-cyan-glow text-sm tracking-wider">{gooGhoul.tagline}</p>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed mb-6">
                  {gooGhoul.longDescription}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(gooGhoul.stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="text-text-dim text-xs uppercase tracking-wider mb-1">{key}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-depth rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${val}%`,
                              background: "linear-gradient(90deg, #00f0ff, #a855f7)",
                            }}
                          />
                        </div>
                        <span className="text-cyan-glow font-bold text-xs">{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {gooGhoul.products.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1 rounded-full text-xs border border-cyan-glow/20 text-cyan-glow/80"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <a
                  href={gooGhoul.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-glow hover:text-magenta-glow transition-colors font-medium"
                >
                  Visit Character Site <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="relative bg-abyss flex items-center justify-center p-8">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at center, ${gooGhoul.colorHex}30, transparent 70%)`,
                  }}
                />
                <img
                  src="/ghost_main.png"
                  alt={gooGhoul.name}
                  className="relative w-48 h-48 md:w-64 md:h-64 object-contain animate-float drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid of other ghouls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherGhouls.map((ghoul) => {
            const card = (
              <div className="group glass rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/20 h-full flex flex-col">
                <div
                  className="h-32 relative flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${ghoul.colorHex}15, ${ghoul.colorHex}05)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at center, ${ghoul.colorHex}30, transparent 70%)`,
                    }}
                  />
                  <span className="relative text-6xl animate-float">{ghoul.icon}</span>
                  {ghoul.website && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-cyan-glow/20 text-cyan-glow/70 bg-abyss/50">
                        Shop
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-cinzel font-bold text-lg text-text-primary group-hover:text-cyan-glow transition-colors">
                      {ghoul.name}
                    </h3>
                    {ghoul.website ? (
                      <ExternalLink className="w-4 h-4 text-text-dim" />
                    ) : (
                      <MapPin className="w-4 h-4 text-text-dim" />
                    )}
                  </div>
                  <p className="text-text-dim text-xs uppercase tracking-wider mb-3">
                    {ghoul.realm}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {ghoul.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ghoul.products.slice(0, 2).map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 rounded-full text-[10px] border border-text-dim/20 text-text-dim"
                      >
                        {p}
                      </span>
                    ))}
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
    </div>
  );
}
