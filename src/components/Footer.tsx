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
              Ten product brands. One universe. Infinite clean. The House of GHOUL.
            </p>
          </div>

          {/* House of GHOUL */}
          <div>
            <h4 className="font-cinzel font-semibold text-text-primary mb-4 tracking-wider text-sm">
              HOUSE OF GHOUL
            </h4>
            <ul className="space-y-2">
              {[
                { name: "GOO", slug: "goo", domain: "https://www.googhoul.com" },
                { name: "PARTY", slug: "party", domain: "https://www.partyghoul.com" },
                { name: "BEAUTY", slug: "beauty", domain: "https://www.beautyghoul.com" },
                { name: "GARDEN", slug: "garden", domain: "https://www.gardenghoul.com" },
                { name: "ZEN", slug: "zen", domain: "https://www.zenghoul.com" },
                { name: "TRADIE", slug: "tradie", domain: "https://www.tradieghoul.com" },
                { name: "GEEK", slug: "geek", domain: "https://www.geekghoul.com" },
                { name: "KID", slug: "kid", domain: "https://www.kidghoul.com" },
                { name: "GOO GOO", slug: "googoo", domain: "https://www.googooghoul.com" },
                { name: "TEEN", slug: "teen", domain: "https://www.teenghoul.com" },
              ].map((realm) => (
                <li key={realm.slug}>
                  <a
                    href={realm.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dim hover:text-cyan-glow transition-colors text-sm"
                  >
                    {realm.name} GHOUL
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-cinzel font-semibold text-text-primary mt-6 mb-3 tracking-wider text-sm">
              IN DEVELOPMENT
            </h4>
            <ul className="space-y-2">
              {[
                { name: "SPORT", slug: "sport" },
                { name: "SCHOLAR", slug: "scholar" },
              ].map((realm) => (
                <li key={realm.slug}>
                  <Link
                    href={`/ghouls/${realm.slug}/`}
                    className="text-text-dim hover:text-cyan-glow transition-colors text-sm"
                  >
                    {realm.name} GHOUL
                  </Link>
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
                <Link href="/founder" className="text-text-dim hover:text-cyan-glow transition-colors text-sm">
                  Founder
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-text-dim hover:text-cyan-glow transition-colors text-sm">
                  Press Kit
                </Link>
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
                <div
                  key={i}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center opacity-40 cursor-default"
                  title="Coming soon"
                >
                  <Icon className="w-4 h-4 text-text-dim" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-[10px] tracking-wider uppercase text-text-dim/30">
          <a href="/privacy" className="hover:text-cyan-glow transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-cyan-glow transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="/cookies" className="hover:text-cyan-glow transition-colors">Cookie Policy</a>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-glow/5 flex flex-col md:flex-row items-center justify-between gap-4">
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
