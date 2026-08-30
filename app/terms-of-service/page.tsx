import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | HINL – Home Inspection Nigeria Limited",
  description: "Terms and conditions governing HINL property inspection services.",
};

const lastUpdated = "1 April 2025";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <header className="pt-[140px] pb-12 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Legal</span>
          <h1 className="font-headline font-bold text-5xl tracking-tight mb-4">Terms of Service</h1>
          <p className="text-on-surface-variant text-sm">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-10 text-on-surface-variant leading-relaxed">

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">1. Introduction</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your engagement with Home Inspection Nigeria Limited
              (<strong className="text-on-surface">&ldquo;HINL&rdquo;</strong>) for property inspection services. By booking an inspection,
              you agree to be bound by these Terms.
            </p>
            <p className="mt-3">
              Please read these Terms carefully. If you do not agree, you should not proceed with booking.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">2. Nature of Inspection Services</h2>
            <p>
              HINL provides non-invasive visual and technical inspections of properties. Our inspections assess
              the visible and accessible condition of a property at the time of inspection. They are not:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>A warranty, guarantee, or insurance policy on the property</li>
              <li>A structural engineer&apos;s survey or formal valuation</li>
              <li>An exhaustive identification of every defect (latent or concealed defects may not be discoverable through non-invasive inspection)</li>
              <li>A certification that the property complies with all applicable building codes</li>
            </ul>
            <p className="mt-3">
              Our reports represent the professional opinion of our inspectors based on conditions observed on the date of inspection.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">3. Booking and Confirmation</h2>
            <p>
              A booking is confirmed only upon receipt of full payment. HINL will confirm your booking within
              2 business hours of receiving payment. Bookings are subject to inspector availability.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">4. Client Obligations</h2>
            <p>You agree to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide accurate property address and access details</li>
              <li>Ensure the property is accessible to our inspector on the agreed date and time</li>
              <li>Notify HINL of any known hazards or access restrictions in advance</li>
              <li>Ensure utilities are connected where a standard inspection (not No Utility) is booked</li>
            </ul>
            <p className="mt-3">
              HINL reserves the right to reschedule or charge an abortive fee if the property is inaccessible
              on the agreed date without sufficient prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">5. Cancellation and Rescheduling</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Cancellations made more than 48 hours before the inspection: full credit toward a rescheduled appointment</li>
              <li>Cancellations made 24–48 hours before the inspection: 50% rescheduling fee applies</li>
              <li>Cancellations made less than 24 hours before the inspection: full inspection fee is forfeited</li>
            </ul>
            <p className="mt-3">
              HINL reserves the right to cancel or reschedule in exceptional circumstances (weather, safety concerns,
              force majeure). In such cases, a full reschedule at no charge will be offered.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">6. Reports</h2>
            <p>
              Inspection reports are delivered within 24–48 hours of the inspection unless otherwise agreed.
              Reports are prepared for the exclusive use of the named client and the specific property inspected.
              They may not be relied upon by third parties without HINL&apos;s prior written consent.
            </p>
            <p className="mt-3">
              Reports reflect conditions at the time of inspection. HINL accepts no liability for changes
              in the property&apos;s condition after the inspection date.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">7. Limitation of Liability</h2>
            <p>
              HINL&apos;s liability in connection with any inspection is limited to the fee paid for that
              inspection. HINL shall not be liable for indirect, consequential, or economic losses arising
              from any inspection or report, including losses arising from a property purchase decision.
            </p>
            <p className="mt-3">
              Nothing in these Terms limits liability for death, personal injury caused by negligence, or
              fraud.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">8. Intellectual Property</h2>
            <p>
              All inspection reports, photographs, video, and other materials produced by HINL are the
              intellectual property of HINL. A licence is granted to the client for personal and professional
              use. Reports may not be reproduced, published, or distributed without HINL&apos;s written consent.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute shall
              be subject to the jurisdiction of the courts of Lagos State, Nigeria.
            </p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">10. Contact</h2>
            <div className="mt-4 bg-surface-container border border-outline-variant rounded-xl p-6">
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
