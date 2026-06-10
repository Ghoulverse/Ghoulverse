export default function TermsPage() {
  return (
    <main className="min-h-screen bg-abyss text-text-primary py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-creepster text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-text-dim mb-12">GHOULVERSE Ecosystem — Last updated: June 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-text-dim leading-relaxed">
              By accessing or using any GHOULVERSE service, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">2. Intellectual Property</h2>
            <p className="text-text-dim leading-relaxed">
              All content, characters, designs, and trademarks are the property of The GHOULVERSE Pty Ltd. GOO GHOUL™ is a registered trademark. You may not reproduce or create derivative works without permission.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">3. User Conduct</h2>
            <ul className="list-disc pl-6 text-text-dim space-y-2">
              <li>Do not use our services for unlawful purposes</li>
              <li>Do not attempt unauthorized access to our systems</li>
              <li>Do not interfere with service integrity</li>
              <li>Do not upload viruses or malicious code</li>
            </ul>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">4. Disclaimers</h2>
            <p className="text-text-dim leading-relaxed">
              Our services are provided &quot;as is&quot; without warranties. Product formulations are illustrative; actual products may vary.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">5. Governing Law</h2>
            <p className="text-text-dim leading-relaxed">
              These Terms are governed by the laws of New South Wales, Australia. Disputes shall be resolved in NSW courts.
            </p>
          </div>
        </section>

        <p className="mt-16 pt-8 border-t border-cyan-glow/10 text-text-dim text-sm">
          For questions, contact{" "}
          <a href="mailto:legal@ghoulverse.com" className="text-cyan-glow hover:underline">legal@ghoulverse.com</a>.
        </p>
      </div>
    </main>
  );
}
