"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Ghost } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ghouls/", label: "Realms" },
  { href: "/play/", label: "Play" },
  { href: "/lore/", label: "Lore" },
  { href: "/investors", label: "Invest" },
  { href: "/press", label: "Press" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-abyss/80 backdrop-blur-xl border-b border-cyan-glow/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Ghost className="w-6 h-6 text-cyan-glow group-hover:text-magenta-glow transition-colors" />
          <span className="font-cinzel font-bold text-lg tracking-widest text-text-primary group-hover:text-cyan-glow transition-colors">
            GHOULVERSE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-cyan-glow transition-colors tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.googhoul.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              color: "#000",
            }}
          >
            Meet GOO GHOUL
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-abyss/95 backdrop-blur-xl border-b border-cyan-glow/10 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-text-muted hover:text-cyan-glow transition-colors tracking-wider uppercase py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.googhoul.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase text-center"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              color: "#000",
            }}
          >
            Meet GOO GHOUL
          </a>
        </div>
      )}
    </nav>
  );
}
