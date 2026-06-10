export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-abyss text-text-primary py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-creepster text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-text-dim mb-12">GHOULVERSE Ecosystem — Last updated: June 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">1. Introduction</h2>
            <p className="text-text-dim leading-relaxed">
              The GHOULVERSE ecosystem is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our websites, play our games, or interact with our services.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-text-dim space-y-2">
              <li><strong>Personal Information:</strong> Name, email, and contact details when you submit inquiries.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited via Google Analytics.</li>
              <li><strong>Game Data:</strong> Progress and preferences stored locally in your browser.</li>
              <li><strong>Cookies:</strong> Small files to enhance your experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-text-dim space-y-2">
              <li>To operate and maintain our services</li>
              <li>To respond to inquiries and provide support</li>
              <li>To analyze usage and improve our products</li>
              <li>To communicate updates (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-text-dim leading-relaxed">
              We do not sell your personal information. We may share data with service providers (hosting, analytics) and legal authorities when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">5. Your Rights</h2>
            <p className="text-text-dim leading-relaxed">
              You have the right to access, correct, or delete your personal data. Contact us at{" "}
              <a href="mailto:privacy@ghoulverse.com" className="text-cyan-glow hover:underline">privacy@ghoulverse.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">6. Data Security</h2>
            <p className="text-text-dim leading-relaxed">
              We use HTTPS encryption, secure Cloudflare hosting, and regular security audits to protect your data.
            </p>
          </div>
        </section>

        <p className="mt-16 pt-8 border-t border-cyan-glow/10 text-text-dim text-sm">
          For questions, contact{" "}
          <a href="mailto:privacy@ghoulverse.com" className="text-cyan-glow hover:underline">privacy@ghoulverse.com</a>.
        </p>
      </div>
    </main>
  );
}
