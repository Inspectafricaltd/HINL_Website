"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { posts, formatDate } from "@/app/blog/data";

const downloads = [
  {
    icon: "description",
    title: "Sample Inspection Report",
    desc: "See exactly what a full HINL inspection report looks like — findings, severity ratings, photos, and recommendations from a real Lekki property inspection.",
    href: "/docs/sample-inspection-report.pdf",
    cta: "Download Sample Report",
    highlight: true,
  },
  {
    icon: "checklist",
    title: "Home Inspection Checklist",
    desc: "A practical checklist of what to look out for before and during your property inspection. Useful for buyers and investors doing their own preliminary walkthrough.",
    href: "/docs/home-inspection-checklist.pdf",
    cta: "Download Checklist",
    highlight: false,
  },
  {
    icon: "business_center",
    title: "HINL Company Profile 2026",
    desc: "Our full company profile — services, team credentials, methodology, and track record. Share with your solicitor, bank, or partners.",
    href: "/docs/Home Inspectors Nigeria Ltd Company Profile (2).pdf",
    cta: "Download Profile",
    highlight: false,
  },
];

const faqSections = [
  {
    category: "About Inspections",
    icon: "home_search",
    questions: [
      {
        q: "What does a standard home inspection cover?",
        a: "Our standard inspection covers the structural frame and foundation, roof and envelope, electrical systems, plumbing and drainage, mechanical systems, finishes and interior. Everything visible and accessible is documented with photos, video, and severity ratings.",
      },
      {
        q: "How long does an inspection take?",
        a: "A standard home inspection typically takes 3–5 hours depending on the size and condition of the property. Larger or more complex properties may take longer.",
      },
      {
        q: "Can I be present during the inspection?",
        a: "Yes, and we encourage it. Being present allows our inspector to walk you through findings in real time. If you are a diaspora buyer, we can conduct the inspection on your behalf and provide a full video walkthrough alongside the written report.",
      },
      {
        q: "What equipment do you use?",
        a: "We use professional-grade tools including the Zip Level Pro 2000 for foundation assessment, Schmidt Hammer for concrete hardness testing, moisture meters, and electrical testers. Thermal imaging cameras are available as an optional add-on and are deployed where specifically required.",
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
        a: "Our reports include a summary of findings, severity ratings (critical, major, minor, informational), photographic and video evidence, and recommended remediation actions.",
      },
      {
        q: "Can I share the report with my solicitor or bank?",
        a: "Yes. HINL reports are professional technical documents accepted by solicitors, banks, and insurance providers as part of property due diligence.",
      },
    ],
  },
  {
    category: "Pricing & Booking",
    icon: "payments",
    questions: [
      {
        q: "How do I book an inspection?",
        a: "You can book directly through the booking form on our Services page, call us, or send a WhatsApp message. Our team will confirm your slot within 2 business hours.",
      },
      {
        q: "What are your prices?",
        a: "Our core inspection packages start from ₦350,000 (Move-In Certification). Standard Home Inspections from ₦500,000. Snag Inspections from ₦700,000. All prices are starting prices. See our full pricing page for details.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. Our pricing is fully transparent. The price quoted covers the inspection and written report. Add-ons are priced separately and clearly disclosed before you commit.",
      },
    ],
  },
];

export default function UsefulInformationPage() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="pt-[140px] pb-16 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Resources
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-6">
            Useful Information
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Downloads, guides, and answers to help you make informed decisions about your property.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">

        {/* Downloads */}
        <section>
          <h2 className="font-headline font-bold text-3xl mb-2">Downloads</h2>
          <p className="text-on-surface-variant mb-8">Free resources from HINL — no sign-up required.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {downloads.map((d) => (
              <div
                key={d.title}
                className={`rounded-2xl p-8 border flex flex-col gap-4 ${
                  d.highlight
                    ? "border-primary bg-surface-container"
                    : "border-outline-variant bg-surface-container"
                }`}
              >
                {d.highlight && (
                  <span className="self-start text-[9px] font-black uppercase tracking-wider bg-primary text-on-primary px-2 py-1 rounded leading-none">
                    Featured
                  </span>
                )}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={d.icon} className="text-primary text-[24px]" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg mb-2">{d.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{d.desc}</p>
                </div>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-headline font-bold text-sm transition-all ${
                    d.highlight
                      ? "bg-primary text-on-primary hover:opacity-90"
                      : "border border-primary/50 text-primary hover:border-primary hover:bg-primary/10"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  {d.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Blog articles */}
        <section>
          <h2 className="font-headline font-bold text-3xl mb-2">Articles & Guides</h2>
          <p className="text-on-surface-variant mb-8">
            Expert articles on property inspection and home buying in Nigeria.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <time className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  {formatDate(post.date)}
                </time>
                <h3 className="font-headline font-bold text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-headline font-bold text-sm hover:gap-3 transition-all"
            >
              View all articles
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-headline font-bold text-3xl mb-2">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant mb-8">
            Quick answers to common questions. Need something more specific?{" "}
            <Link href="/contact" className="text-primary hover:underline">Contact our team.</Link>
          </p>

          {faqSections.map((section) => (
            <div key={section.category} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Icon name={section.icon} className="text-primary text-[24px]" />
                <h3 className="font-headline font-bold text-xl">{section.category}</h3>
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
        </section>

      </main>

      <Footer />
    </>
  );
}
