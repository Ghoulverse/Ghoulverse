export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-abyss text-text-primary py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-creepster text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-text-dim mb-12">GHOULVERSE Ecosystem — Last updated: June 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">1. What Are Cookies?</h2>
            <p className="text-text-dim leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help us provide a better experience.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">2. How We Use Cookies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-text-dim">
                <thead>
                  <tr className="border-b border-cyan-glow/20">
                    <th className="pb-3 pr-4 text-cyan-glow">Category</th>
                    <th className="pb-3 pr-4 text-cyan-glow">Purpose</th>
                    <th className="pb-3 text-cyan-glow">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cyan-glow/5">
                    <td className="py-3 pr-4">Essential</td>
                    <td className="py-3 pr-4">Required for the website to function</td>
                    <td className="py-3">Session management, security</td>
                  </tr>
                  <tr className="border-b border-cyan-glow/5">
                    <td className="py-3 pr-4">Analytics</td>
                    <td className="py-3 pr-4">Understand visitor interactions</td>
                    <td className="py-3">Google Analytics, Plausible</td>
                  </tr>
                  <tr className="border-b border-cyan-glow/5">
                    <td className="py-3 pr-4">Preferences</td>
                    <td className="py-3 pr-4">Remember your settings</td>
                    <td className="py-3">Language, game progress</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Marketing</td>
                    <td className="py-3 pr-4">Deliver relevant content</td>
                    <td className="py-3">Meta Pixel (when active)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">3. Managing Cookies</h2>
            <p className="text-text-dim leading-relaxed">
              You can control cookies through your browser settings. Disabling certain cookies may affect functionality.
            </p>
          </div>

          <div>
            <h2 className="text-cyan-glow text-lg font-semibold mb-3">4. Third-Party Cookies</h2>
            <ul className="list-disc pl-6 text-text-dim space-y-2">
              <li><strong>Google Analytics:</strong> Usage analytics</li>
              <li><strong>Cloudflare:</strong> Security and performance</li>
              <li><strong>Meta:</strong> Advertising (when active)</li>
            </ul>
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
