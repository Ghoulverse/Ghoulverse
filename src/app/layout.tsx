import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ghoulverse.com"),
  title: "GHOULVERSE — House of GHOUL",
  description:
    "Welcome to the House of GHOUL. Twelve spirits, one universe, infinite clean. Explore all Ghouls from GOO GHOUL to TEEN GHOUL. Play GOO RUNNER and discover the Original Consumer.",
  keywords: ["GHOULVERSE", "House of GHOUL", "GOO GHOUL", "cleaning brands", "game", "universe", "endless runner"],
  openGraph: {
    title: "GHOULVERSE — House of GHOUL",
    description: "Twelve spirits. One house. Infinite clean. Enter the GHOULVERSE.",
    type: "website",
    url: "https://www.ghoulverse.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GHOULVERSE — House of GHOUL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GHOULVERSE — House of GHOUL",
    description: "Twelve spirits. One house. Infinite clean. Enter the GHOULVERSE.",
    images: ["/og-image.png"],
  },
  themeColor: "#00f0ff",
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
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

        {/* Cookie Consent */}
        <CookieBanner />
      </body>
    </html>
  );
}
