import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | HINL – Home Inspection Nigeria Limited",
  description: "How Home Inspection Nigeria Limited collects, uses, and protects your personal data.",
};

const lastUpdated = "1 April 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <header className="pt-[140px] pb-12 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legal</span>
          <h1 className="font-headline font-bold text-5xl tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-on-surface-variant text-sm">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 prose prose-invert prose-primary max-w-none">
        <div className="space-y-10 text-on-surface-variant leading-relaxed">

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">1. Who We Are</h2>
            <p>
              Home Inspection Nigeria Limited (<strong className="text-on-surface">&ldquo;HINL&rdquo;</strong>, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a professional property inspection company
              registered in Nigeria. Our registered office is in Lagos, Nigeria.
            </p>
            <p className="mt-3">
              We are committed to protecting your privacy and handling your personal data in a transparent,
              secure, and lawful manner.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">2. Data We Collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-on-surface">Identity data:</strong> name, title</li>
              <li><strong className="text-on-surface">Contact data:</strong> email address, telephone number, postal address</li>
              <li><strong className="text-on-surface">Property data:</strong> property address, type, and details provided for inspection purposes</li>
              <li><strong className="text-on-surface">Transaction data:</strong> payment details, booking records, invoice history</li>
              <li><strong className="text-on-surface">Technical data:</strong> IP address, browser type, and pages visited when you use our website</li>
              <li><strong className="text-on-surface">Marketing data:</strong> your preferences regarding communications from us</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">3. How We Collect Your Data</h2>
            <p>We collect data when you:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Complete a booking or contact form on our website</li>
              <li>Email or call us directly</li>
              <li>Message us via WhatsApp or social media</li>
              <li>Enter into a contract with us for inspection services</li>
              <li>Visit our website (technical data, via cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">4. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Process your booking and deliver inspection services</li>
              <li>Issue inspection reports and invoices</li>
              <li>Respond to enquiries and provide customer support</li>
              <li>Send you service-related communications (appointment confirmations, report delivery)</li>
              <li>Send marketing communications where you have opted in</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">5. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-on-surface">Contract:</strong> to fulfil our obligations to you as a client</li>
              <li><strong className="text-on-surface">Legitimate interests:</strong> to manage and improve our business</li>
              <li><strong className="text-on-surface">Legal obligation:</strong> to comply with applicable laws</li>
              <li><strong className="text-on-surface">Consent:</strong> for marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">6. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share your data with trusted third parties who assist
              in delivering our services, including:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Payment processors (for processing booking fees)</li>
              <li>Cloud software providers (for document storage and report delivery)</li>
              <li>Professional advisors (legal, accounting) under confidentiality obligations</li>
            </ul>
            <p className="mt-3">
              We require all third parties to handle your data securely and only for the purposes we specify.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">7. Data Retention</h2>
            <p>
              We retain client records (including inspection reports) for a minimum of 7 years to comply with
              professional and legal obligations. Marketing data is retained until you withdraw consent.
              Technical/website data is retained for up to 12 months.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@homeinspectors.ng" className="text-primary hover:underline">
                info@homeinspectors.ng
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">9. Cookies</h2>
            <p>
              Our website uses cookies to improve your experience and analyse traffic. Essential cookies
              are required for the site to function. Analytics cookies are optional and require your consent.
              You can manage your cookie preferences via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The most current version will always be
              available on this page with the date of last update. We will notify you of material changes
              by email where we hold your contact details.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">11. Contact Us</h2>
            <p>
              For any questions about this Privacy Policy or how we handle your data, contact us at:
            </p>
            <div className="mt-4 bg-surface-container border border-outline-variant rounded-xl p-6 not-prose">
              <p className="text-on-surface font-bold">Home Inspection Nigeria Limited</p>
              <p className="text-on-surface-variant mt-1">Lagos, Nigeria</p>
              <a href="mailto:info@homeinspectors.ng" className="text-primary hover:underline block mt-1">
                info@homeinspectors.ng
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
