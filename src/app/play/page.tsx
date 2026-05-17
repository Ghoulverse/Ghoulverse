"use client";

import { useState } from "react";
import { Gamepad2, Maximize2, Minimize2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PlayPage() {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const container = document.getElementById("game-container");
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => setFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-void pt-20">
      {/* Header bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-muted hover:text-cyan-glow transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider">BACK TO UNIVERSE</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-5 h-5 text-cyan-glow" />
          <h1 className="font-cinzel font-bold text-xl tracking-widest text-text-primary">
            GOO RUNNER
          </h1>
        </div>
        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-2 text-text-muted hover:text-cyan-glow transition-colors"
        >
          {fullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          <span className="text-sm font-medium tracking-wider hidden sm:inline">
            {fullscreen ? "EXIT" : "FULLSCREEN"}
          </span>
        </button>
      </div>

      {/* Game Container */}
      <div
        id="game-container"
        className={`relative w-full bg-abyss overflow-hidden ${
          fullscreen ? "fixed inset-0 z-[100]" : "max-w-7xl mx-auto px-4 pb-8"
        }`}
      >
        <div
          className={`relative w-full bg-abyss rounded-xl border border-cyan-glow/10 overflow-hidden ${
            fullscreen ? "h-screen" : "aspect-[4/3] md:aspect-[16/9]"
          }`}
        >
          <iframe
            src="/game/index.html"
            className="w-full h-full border-0"
            allow="fullscreen"
            title="GOO RUNNER"
            sandbox="allow-scripts allow-same-origin allow-fullscreen"
            loading="lazy"
          />
        </div>
      </div>

      {/* Game Info */}
      {!fullscreen && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-glow rounded-xl p-6">
              <h3 className="font-cinzel font-bold text-cyan-glow mb-2">CONTROLS</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Hold Click / Tap to rise. Release to fall. Press SPACE to activate Ultimate when your orb meter is full.
              </p>
            </div>
            <div className="glass-glow rounded-xl p-6">
              <h3 className="font-cinzel font-bold text-purple-glow mb-2">8 PLAYABLE GHOULS</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Unlock all 8 ghouls from the GHOULVERSE, each with unique weapons, tools, and ultimate abilities.
              </p>
            </div>
            <div className="glass-glow rounded-xl p-6">
              <h3 className="font-cinzel font-bold text-magenta-glow mb-2">DAILY CHALLENGES</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Return every day for new challenges. Speed Demon, Purist, Glass Cannon, Bullet Hell — test your skills.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
