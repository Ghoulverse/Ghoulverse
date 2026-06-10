"use client";

import Link from "next/link";
import { ArrowRight, Linkedin, Mail, MapPin, Award, Sparkles, Target } from "lucide-react";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-abyss text-text-primary">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(0,240,255,0.3), transparent 70%)" }} />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)" }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-text-dim text-sm hover:text-cyan-glow transition-colors mb-12">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to GHOULVERSE
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/5 to-purple-glow/5 flex items-center justify-center">
                {/* Replace this div with an actual <img> tag when you have a photo */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-cyan-glow/30 flex items-center justify-center bg-abyss">
                    <span className="text-5xl">👤</span>
                  </div>
                  <p className="text-text-dim text-sm">[Add your professional headshot here]</p>
                  <p className="text-text-dim/50 text-xs mt-2">Recommended: 800×800px, neutral background</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass border border-cyan-glow/20">
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-glow">Founder & Chief Ghoul</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border border-cyan-glow/20 text-cyan-glow bg-cyan-glow/5 mb-4">
                The Mind Behind the Mess
              </span>
              <h1 className="font-creepster text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
                [Your Name]
              </h1>
              <p className="text-text-muted text-lg mb-6">
                Founder & Chief Ghoul, The GHOULVERSE Pty Ltd
              </p>

              <div className="space-y-4 text-text-dim leading-relaxed">
                <p>
                  Every great universe starts with a single spark. For GHOULVERSE, that spark came from a simple observation:
                  <em className="text-text-primary"> cleaning is universal, but belonging is personal.</em>
                </p>
                <p>
                  [Write your origin story here. How did you conceive of GHOULVERSE? What experience led you to believe
                  that character-driven cleaning brands could change how people relate to their homes, their health, and
                  themselves? This is your hero's journey — make it honest and compelling. 150-200 words recommended.]
                </p>
                <p>
                  Before GHOULVERSE, [your background — previous ventures, relevant industry experience, or the
                  insight that started it all]. Today, [your current focus and what drives you].
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="mailto:founder@ghoulverse.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7)", color: "#000" }}>
                  <Mail className="w-4 h-4" /> founder@ghoulverse.com
                </a>
                <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-2 mt-6 text-text-dim/50 text-xs">
                <MapPin className="w-3 h-3" /> Sydney, Australia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Credibility */}
      <section className="py-16 px-4 border-y border-cyan-glow/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, label: "Brands Created", value: "10+" },
            { icon: Target, label: "Markets Served", value: "12" },
            { icon: Award, label: "Trademark", value: "Accepted" },
            { icon: MapPin, label: "Headquarters", value: "Sydney" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="w-5 h-5 text-cyan-glow mx-auto mb-2" />
              <p className="font-creepster text-2xl text-text-primary mb-1">{value}</p>
              <p className="text-text-dim text-xs uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border border-magenta-glow/20 text-magenta-glow bg-magenta-glow/5 mb-6">
            The North Star
          </span>
          <blockquote className="font-cinzel text-2xl md:text-3xl text-text-primary leading-relaxed mb-6">
            &ldquo;We don't sell cleaning products. We sell belonging to a universe where every human has a Ghoul that understands them.&rdquo;
          </blockquote>
          <p className="text-text-dim text-sm">
            — [Your Name], Founder & Chief Ghoul
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-glow rounded-2xl p-8 md:p-12">
            <h2 className="font-creepster text-3xl mb-4">Join the Journey</h2>
            <p className="text-text-dim mb-8">
              Whether you're an investor, partner, or future team member — I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investors"
                className="px-8 py-4 rounded-xl font-semibold text-void tracking-wider uppercase transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7)" }}>
                View Investor Deck
              </Link>
              <a href="mailto:founder@ghoulverse.com"
                className="px-8 py-4 rounded-xl font-semibold tracking-wider uppercase border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 transition-all">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
