"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ghoulverse_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("ghoulverse_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("ghoulverse_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-abyss/95 backdrop-blur-md border-t border-cyan-glow/10 px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-dim text-center sm:text-left">
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <a href="/cookies" className="text-cyan-glow hover:underline">
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs text-text-dim hover:text-text-primary transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-lg text-xs font-semibold text-void bg-gradient-to-r from-cyan-glow to-purple-glow transition-all hover:scale-105"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
