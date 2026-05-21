import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GHOULVERSE — House of GHOUL",
  description:
    "Welcome to the House of GHOUL. Five product brands, one universe, infinite clean. Explore PARTY, BEAUTY, GARDEN, ZEN, and TRADIE GHOUL. Play GOO RUNNER and discover the Original Consumer.",
  keywords: ["GHOULVERSE", "House of GHOUL", "GOO GHOUL", "cleaning brands", "game", "universe", "endless runner"],
  openGraph: {
    title: "GHOULVERSE — House of GHOUL",
    description: "Five product brands. One house. Infinite clean. Enter the GHOULVERSE.",
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
