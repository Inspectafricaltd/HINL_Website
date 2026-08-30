"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

const sections = [
  {
    category: "About HINL",
    icon: "business",
    questions: [
      {
        q: "What is HINL?",
        a: "Home Inspection Nigeria Limited (HINL) is Nigeria's leading independent property inspection company. We provide unbiased technical audits of residential and commercial properties — carried out by trained HINL inspectors with over 100 years of combined inspection experience.",
      },
      {
        q: "Are your inspectors certified?",
        a: "Yes. All HINL inspectors are trained to follow professional inspection standards and reporting procedures. We are completely independent of developers, contractors, and estate agents, which means our reports are unbiased and in your interest alone.",
      },
      {
        q: "Do you operate nationwide?",
        a: "We primarily serve Lagos, Abuja, Port Harcourt, and other major Nigerian cities. Contact us for availability in your specific location — we regularly travel for high-value inspections.",
      },
      {
        q: "How long has HINL been operating?",
        a: "HINL has been providing professional property inspections in Nigeria for several years, accumulating over 100 years of combined inspection experience across our team. We have helped clients avoid costly mistakes on hundreds of properties across Nigeria.",
      },
    ],
  },
  {
    category: "Booking an Inspection",
    icon: "calendar_today",
    questions: [
      {
        q: "How do I book an inspection?",
        a: "You can book directly through the booking form on our Services page, call us, or send a WhatsApp message. Our team will confirm your slot within 2 business hours.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking as soon as you have identified a property you are serious about purchasing. We typically confirm slots within 48 hours, and inspections can often be scheduled within the same week.",
      },
      {
        q: "Can I be present during the inspection?",
        a: "Yes, and we encourage it. Being present allows our inspector to walk you through findings in real time. If you are a diaspora buyer, we can conduct the inspection on your behalf and provide a full video walkthrough alongside the written report.",
      },
      {
        q: "How long does an inspection take?",
        a: "A standard home inspection typically takes 3–5 hours depending on the size and condition of the property. Larger or more complex properties, commercial buildings, or those requiring foundation testing may take longer.",
      },
      {
        q: "What if I need to cancel or reschedule?",
        a: "Please contact us at least 48 hours before your scheduled inspection to reschedule at no charge. Cancellations with less than 24 hours notice may incur a rescheduling fee.",
      },
    ],
  },
  {
    category: "The Inspection Process",
    icon: "engineering",
    questions: [
      {
        q: "What does a standard home inspection cover?",
        a: "Our standard inspection covers the structural frame and foundation, roof and envelope, electrical systems, plumbing and drainage, mechanical systems, finishes and interior. Everything visible and accessible is documented with photos, video, and severity ratings.",
      },
      {
        q: "What equipment do you use?",
        a: "We use professional-grade tools including the Zip Level Pro 2000 (the world's most accurate liquid level gauge) for foundation assessment, Schmidt Hammer for concrete hardness testing, moisture meters, and electrical testers. Thermal imaging cameras and CCTV drain inspection are available as optional add-ons and are deployed where specifically required.",
      },
      {
        q: "What is a Zip Level inspection?",
        a: "The Zip Level Pro 2000 measures differential settlement across a slab to sub-millimetre accuracy. It detects hidden foundation movement that visual inspection cannot reveal — tilt, settlement, and elevation changes that could indicate serious structural problems.",
      },
      {
        q: "Do you inspect properties under construction?",
        a: "Yes. Our New Construction Inspection service covers properties at two critical stages: Phase 1 (foundation/per-cast, before concrete is poured) and Phase 2 (pre-coverage, before walls are plastered). Catching defects at these stages is far cheaper than fixing them later.",
      },
      {
        q: "What is a Snag Inspection?",
        a: "A snag inspection is designed for newly completed properties. Before you make your final payment to the developer, we identify every defect — finish issues, structural problems, MEP failures — and provide a defect schedule you can use to demand remediation.",
      },
    ],
  },
  {
    category: "Reports & Findings",
    icon: "description",
    questions: [
      {
        q: "When do I receive my report?",
        a: "Written reports are typically delivered within 24–48 hours of the inspection. Urgent reports can be expedited on request.",
      },
      {
        q: "What does the report include?",
        a: "Our reports include a summary of findings, severity ratings for each defect (critical, major, minor, informational), photographic and video evidence, recommended remediation actions, and estimated impact on property value where relevant.",
      },
      {
        q: "Can I share the report with my solicitor or banker?",
        a: "Yes. HINL reports are professional technical documents accepted by solicitors, banks, and insurance providers as part of property due diligence.",
      },
      {
        q: "What if serious defects are found?",
        a: "If critical defects are found, our inspector will call you immediately — we do not wait for the written report. We can also advise on whether to proceed with the purchase, negotiate a price reduction, or require the developer to remediate before completion.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    icon: "payments",
    questions: [
      {
        q: "What are your prices?",
        a: "Our core inspection packages start from ₦350,000 (Move-In Certification). Snag Inspections start from ₦700,000. Standard Home Inspections from ₦500,000. All prices are starting prices and may vary based on property size, complexity, and location. See our full pricing page for details.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. Our pricing is fully transparent. The price quoted covers the inspection and written report. Add-ons (thermal scan, drone, etc.) are priced separately and clearly disclosed before you commit.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers to our corporate account. Payment is required to confirm your booking. Contact us for details.",
      },
      {
        q: "Is the inspection fee refundable?",
        a: "The inspection fee is non-refundable once the inspection has been conducted. If you cancel more than 48 hours before your scheduled inspection, we can apply the payment toward a rescheduled appointment.",
      },
    ],
  },
  {
    category: "Diaspora Services",
    icon: "flight",
    questions: [
      {
        q: "I live outside Nigeria — can HINL still help me?",
        a: "Absolutely. We regularly work with diaspora Nigerians who are purchasing or building property in Nigeria remotely. We can conduct inspections on your behalf, provide video walkthroughs, and detailed reports sent directly to you and your advisors. We offer dedicated Diaspora packages designed specifically for remote buyers.",
      },
      {
        q: "Can I attend the inspection remotely via video call?",
        a: "Yes. We can set up a live video call during the inspection so you can follow along in real time, ask questions, and see findings as they are identified.",
      },
      {
        q: "What packages are available for diaspora clients?",
        a: "We offer three dedicated diaspora packages: Diaspora Essential (from ₦900,000), Diaspora Plus (from ₦1,500,000), and Diaspora Complete (from ₦2,000,000). Each package includes increasing levels of technical assessment, consultation, and legal coordination support. All packages include the HINL Home Safety Kit. See our Diaspora Services page for full details.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="pt-[140px] pb-16 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
          Frequently Asked Questions
        </span>
        <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-6">
          Your Questions, Answered.
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to know about HINL&apos;s inspection process, pricing, and reports. Can&apos;t find your answer?{" "}
          <Link href="/contact" className="text-primary hover:underline">Contact our team.</Link>
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        {sections.map((section) => (
          <div key={section.category} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <Icon name={section.icon} className="text-primary text-[28px]" />
              <h2 className="font-headline font-bold text-2xl">{section.category}</h2>
            </div>

            <div className="space-y-3">
              {section.questions.map((item) => {
                const key = `${section.category}-${item.q}`;
                const isOpen = open === key;
                return (
                  <div
                    key={key}
                    className={`border rounded-xl transition-colors ${
                      isOpen
                        ? "border-primary bg-surface-container"
                        : "border-outline-variant bg-surface-container hover:border-primary/50"
                    }`}
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-headline font-semibold text-base text-on-surface">
                        {item.q}
                      </span>
                      <Icon
                        name={isOpen ? "remove" : "add"}
                        className={`shrink-0 text-[22px] mt-0.5 transition-colors ${
                          isOpen ? "text-primary" : "text-on-surface-variant"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-on-surface-variant leading-relaxed border-t border-outline-variant pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-8 bg-surface-container border border-outline-variant rounded-2xl p-10 text-center">
          <h3 className="font-headline font-bold text-2xl mb-3">Still have questions?</h3>
          <p className="text-on-surface-variant mb-8">
            Our team is available to answer any questions about your specific property or situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/services#booking"
              className="border border-primary/50 text-primary px-8 py-4 rounded-lg font-headline font-bold hover:border-primary hover:bg-primary/10 transition-all"
            >
              Book an Inspection
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
