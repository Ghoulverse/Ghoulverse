"use client";

import Link from "next/link";
import { Ghost, Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-glow/10 bg-abyss">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Ghost className="w-5 h-5 text-cyan-glow" />
              <span className="font-cinzel font-bold tracking-widest text-text-primary">
                GHOULVERSE
              </span>
            </Link>
            <p className="text-text-dim text-sm leading-relaxed">
              A universe where cleaning is an adventure. The GHOUL eats the GOO.
            </p>
          </div>

          {/* Realms */}
          <div>
            <h4 className="font-cinzel font-semibold text-text-primary mb-4 tracking-wider text-sm">
              REALMS
            </h4>
            <ul className="space-y-2">
              {[
                { name: "GOO", slug: "goo", domain: "https://www.googhoul.com" },
                { name: "ZEN", slug: "zen", domain: "https://www.zenghoul.com" },
                { name: "PARTY", slug: "party", domain: "https://www.partyghoul.com" },
                { name: "TRADIE", slug: "tradie", domain: "https://www.tradieghoul.com" },
                { name: "GARDEN", slug: "garden", domain: "https://www.gardenghoul.com" },
                { name: "BEAUTY", slug: "beauty", domain: "https://www.beautyghoul.com" },
                { name: "SCHOLAR", slug: "scholar" },
                { name: "BABY", slug: "baby" },
              ].map((realm) => (
                <li key={realm.slug}>
                  {realm.domain ? (
                    <a
                      href={realm.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dim hover:text-cyan-glow transition-colors text-sm"
                    >
                      {realm.name} GHOUL
                    </a>
                  ) : (
                    <Link
                      href={`/ghouls/${realm.slug}/`}
                      className="text-text-dim hover:text-cyan-glow transition-colors text-sm"
                    >
                      {realm.name} GHOUL
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Universe */}
          <div>
            <h4 className="font-cinzel font-semibold text-text-primary mb-4 tracking-wider text-sm">
              UNIVERSE
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/play/" className="text-text-dim hover:text-cyan-glow transition-colors text-sm">
                  Play GOO RUNNER
                </Link>
              </li>
              <li>
                <Link href="/lore/" className="text-text-dim hover:text-cyan-glow transition-colors text-sm">
                  The Codex
                </Link>
              </li>
              <li>
                <a
                  href="https://www.googhoul.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dim hover:text-cyan-glow transition-colors text-sm"
                >
                  Meet GOO GHOUL
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-cinzel font-semibold text-text-primary mb-4 tracking-wider text-sm">
              CONNECT
            </h4>
            <div className="flex gap-3">
              {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-cyan-glow/40 transition-colors"
                >
                  <Icon className="w-4 h-4 text-text-dim" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-glow/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            &copy; 2026 GHOULVERSE. The GHOUL eats the GOO.
          </p>
          <p className="text-text-dim text-xs">
            GOO GHOUL is a registered trademark. All ectoplasm reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
