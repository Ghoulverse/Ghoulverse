import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GHOULVERSE — The GHOUL Eats The GOO",
  description:
    "Enter the GHOULVERSE. A universe of 8 legendary ghouls, each mastering a realm of clean. Play GOO RUNNER, explore the lore, and discover the Original Consumer.",
  keywords: ["GHOULVERSE", "GOO GHOUL", "game", "cleaning", "universe", "endless runner"],
  openGraph: {
    title: "GHOULVERSE",
    description: "The GHOUL eats the GOO. Enter the universe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="permissions-policy" content="accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()" />
      </head>
      <body className="min-h-screen bg-void text-text-primary antialiased">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Grid pattern */}
        <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
