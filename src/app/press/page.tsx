"use client";

import Link from "next/link";
import { ArrowRight, Download, Image, FileText, Palette, Mail } from "lucide-react";

const assets = [
  {
    category: "Logos",
    items: [
      { name: "GHOULVERSE Wordmark", format: "SVG", size: "12 KB" },
      { name: "GHOULVERSE Icon", format: "SVG", size: "8 KB" },
      { name: "GOO GHOUL Logo", format: "PNG", size: "45 KB" },
    ],
  },
  {
    category: "Mascots",
    items: [
      { name: "GOO GHOUL Mascot", format: "PNG", size: "180 KB" },
      { name: "ZEN GHOUL Mascot", format: "PNG", size: "165 KB" },
      { name: "PARTY GHOUL Mascot", format: "PNG", size: "170 KB" },
      { name: "KID GHOUL Mascot", format: "PNG", size: "155 KB" },
      { name: "TEEN GHOUL Mascot", format: "PNG", size: "160 KB" },
      { name: "All 12 Ghouls", format: "ZIP", size: "1.8 MB" },
    ],
  },
  {
    category: "Brand Guidelines",
    items: [
      { name: "Color Palette", format: "PDF", size: "320 KB" },
      { name: "Typography Guide", format: "PDF", size: "180 KB" },
      { name: "Brand Voice & Tone", format: "PDF", size: "240 KB" },
    ],
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-abyss text-text-primary">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-text-dim text-sm hover:text-cyan-glow transition-colors mb-12">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to GHOULVERSE
          </Link>

          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border border-cyan-glow/20 text-cyan-glow bg-cyan-glow/5 mb-4">
            For Media & Partners
          </span>
          <h1 className="font-creepster text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
            Press Kit
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mb-8">
            Everything you need to write about, partner with, or invest in GHOULVERSE.
            High-res assets, brand guidelines, and quick facts.
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Founded", value: "2025" },
              { label: "Headquarters", value: "Sydney, AU" },
              { label: "Live Brands", value: "10" },
              { label: "Trademark", value: "GOO GHOUL™" },
            ].map(({ label, value }) => (
              <div key={label} className="glass rounded-xl p-4 text-center">
                <p className="font-creepster text-xl text-cyan-glow mb-1">{value}</p>
                <p className="text-text-dim text-xs uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          {/* One-Liner */}
          <div className="glass-glow rounded-xl p-6 mb-16 border-l-4 border-cyan-glow">
            <p className="text-text-dim text-sm uppercase tracking-wider mb-2">One-Sentence Description</p>
            <p className="text-text-primary text-lg leading-relaxed">
              GHOULVERSE is the first character-driven consumer ecosystem — where 12 distinct Ghoul spirits each represent a fundamental human identity archetype, delivering products, media, and community that transcend any single vertical.
            </p>
          </div>
        </div>
      </section>

      {/* Assets */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {assets.map(({ category, items }) => (
              <div key={category} className="glass rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  {category === "Logos" && <Palette className="w-4 h-4 text-cyan-glow" />}
                  {category === "Mascots" && <Image className="w-4 h-4 text-purple-glow" />}
                  {category === "Brand Guidelines" && <FileText className="w-4 h-4 text-magenta-glow" />}
                  <h2 className="font-cinzel font-semibold text-sm tracking-wider uppercase">{category}</h2>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between group">
                      <div>
                        <p className="text-text-primary text-sm">{item.name}</p>
                        <p className="text-text-dim/50 text-[10px]">{item.format} · {item.size}</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-lg text-[10px] font-semibold bg-cyan-glow/10 text-cyan-glow hover:bg-cyan-glow/20">
                        <Download className="w-3 h-3 inline mr-1" /> Download
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download All */}
          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-xl font-semibold text-void tracking-wider uppercase transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7)" }}>
              <Download className="w-4 h-4" /> Download Complete Press Kit
            </button>
            <p className="text-text-dim/50 text-xs mt-3">ZIP · ~3.2 MB · Updated June 2026</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 border-t border-cyan-glow/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-creepster text-2xl mb-4">Media Inquiries</h2>
          <p className="text-text-dim mb-6">
            For interviews, partnership discussions, or asset requests, reach out directly.
          </p>
          <a href="mailto:press@ghoulverse.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 transition-all">
            <Mail className="w-4 h-4" /> press@ghoulverse.com
          </a>
        </div>
      </section>
    </main>
  );
}
