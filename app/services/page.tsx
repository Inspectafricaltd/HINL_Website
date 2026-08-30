import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing & Booking | Home Inspection Nigeria Limited (HINL)",
  description:
    "Transparent pricing and precise technical audits. Protect your real estate investment with Nigeria's most detailed inspections. No hidden fees.",
};

const IMG = {
  hero: "/images/DSC06085-1024x683.jpg",
  structural: "/images/DSC06096-1024x683.jpg",
  inspection: "/images/DSC06135-scaled-qyl0ns4ohq8gk473rqyw7x01mb2uw73emhk9lwb54w.jpg",
  handshake: "/images/DSC06142-1024x683.jpg",
  team: "/images/hinl-team-construction-control.jpeg",
};

const labelCaps = "text-xs font-bold uppercase tracking-wider";

/* ── FOR BUYERS & HOMEOWNERS ── */
const buyerTiers = [
  {
    name: "HINL Standard Home Inspection",
    price: "From ₦500,000",
    badge: "Recommended",
    recommended: true,
    description:
      "Comprehensive inspection of accessible structural, roofing, electrical, plumbing, interior, exterior, and safety systems.",
    features: [
      "Full structural & foundation assessment",
      "Electrical, plumbing & MEP systems",
      "Foundation testing (Zip Level Pro & Schmidt Hammer)",
      "Photos, video & detailed written report",
    ],
  },
  {
    name: "HINL Move-In Certification",
    price: "From ₦350,000",
    badge: "Starter",
    recommended: false,
    description:
      "Pre-occupancy inspection and certification to assess readiness, safety, and quality before moving into a property.",
    features: [
      "HINL Walk-through Inspection",
      "Move-In Certificate",
      "Summary of Major Defects",
    ],
  },
  {
    name: "HINL Snag Inspection",
    price: "From ₦700,000",
    badge: "In-depth",
    recommended: false,
    description:
      "Detailed defect identification for newly completed properties before handover or final payment.",
    features: [
      "Full snag list & defect schedule",
      "Workmanship quality review",
      "Foundation (Zip Level & Schmidt Hammer)",
      "Photos, video & detailed report",
    ],
  },
  {
    name: "HINL No-Utility Inspection",
    price: "From ₦400,000",
    badge: "No Utilities",
    recommended: false,
    description:
      "Inspection of properties where electricity and/or water services are unavailable at the time of inspection.",
    features: [
      "Structural, roofing & external assessment",
      "Interior finishes & workmanship review",
      "Visible electrical & plumbing installation check",
      "Inspection report with defect classification",
    ],
  },
];

/* ── FOR DEVELOPERS & BUILDERS ── */
const developerPhases = [
  {
    name: "HINL Foundation Inspection",
    abbr: "FSI",
    tag: "Phase 1 — Pre-Pour",
    price: "From ₦350,000",
    description:
      "Inspection of foundation works prior to progression to subsequent construction stages.",
    features: [
      "Foundation & pre-cast inspection",
      "Rebar layout and shuttering check",
      "Pre-pour concrete quality audit",
      "Phase 1 written report",
    ],
  },
  {
    name: "Pre-Cover Inspection",
    abbr: "PCC",
    tag: "Phase 2 — Pre-Plaster",
    price: "From ₦400,000",
    description:
      "Inspection of concealed systems before they are covered, including structural, plumbing, electrical, and mechanical installations.",
    features: [
      "Pre-coverage structural verification",
      "Plumbing & electrical rough-in check",
      "Wall & slab quality before plastering",
      "Phase 2 written report",
    ],
  },
];

const cci = {
  name: "Construction Control Inspection",
  abbr: "CCI",
  price: "From 1% of Project Cost",
  pricingTiers: [
    { label: "Core",    detail: "From 1% of project cost or ₦500,000/month" },
    { label: "Premium", detail: "From 2% of project cost or ₦750,000/month" },
    { label: "Single Site Visit", detail: "From ₦250,000 per visit" },
  ],
  description:
    "An independent quality verification and monitoring service designed to oversee workmanship, construction quality, materials, and critical building components throughout the construction process.",
  features: [
    "Stage-by-stage monitoring (foundation → finishing)",
    "Material testing (concrete, rebar, etc.)",
    "Workmanship & quality verification",
    "Contractor compliance checks",
    "Photo & written reports at each stage",
    "Real-time reporting & advisory",
  ],
};

/* ── FOR INVESTORS & PROPERTY MANAGERS ── */
const investorServices = [
  {
    name: "HINL Commercial Inspection",
    abbr: "CIB",
    price: "On Demand",
    description:
      "An independent assessment of the condition, safety, functionality, and maintenance needs of commercial properties — for owners, investors, lenders, and tenants.",
    features: [
      "Full building condition assessment",
      "Structural, roofing & envelope review",
      "Electrical, plumbing & HVAC systems",
      "Fire & life safety review",
      "Interior & maintenance assessment",
      "Commercial Inspection Report",
    ],
  },
  {
    name: "Global Property Monitoring",
    abbr: "GPM",
    price: "On Demand",
    description:
      "A property oversight, document verification, and reporting service for diaspora clients, investors, and absentee owners with properties in Nigeria.",
    features: [
      "Scheduled property condition assessments",
      "Construction progress monitoring",
      "Security & occupancy observations",
      "Document verification support",
      "Photographic reporting",
      "Property Monitoring Report",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="relative pt-[140px] pb-24 px-6 md:px-12 flex items-center justify-center text-center overflow-hidden min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            className="object-cover object-center"
            alt="HINL property inspection team at work"
            src={IMG.hero}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/70 to-surface" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className={`${labelCaps} text-primary tracking-[0.2em] mb-3 block`}>
            Investment Security
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-6 editorial-text-shadow">
            Transparent Pricing, Precise Audits.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Protect your real estate investment with Nigeria&apos;s most
            detailed technical audits. No hidden fees, just uncompromising
            precision for your peace of mind.
          </p>
        </div>
      </header>

      <main>
        {/* Inspection-in-action band */}
        <section className="relative h-[320px] overflow-hidden">
          <Image
            fill
            className="object-cover object-center"
            alt="Inspector performing detailed property audit"
            src={IMG.structural}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:left-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Every defect documented
              </span>
            </div>
            <p className="text-on-surface font-headline font-bold text-2xl md:text-3xl max-w-md leading-tight">
              We inspect beyond what is visible.
            </p>
          </div>
        </section>

        {/* ── SECTION 1: FOR BUYERS & HOMEOWNERS ── */}
        <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="mb-10">
            <span className={`${labelCaps} text-primary tracking-[0.2em] mb-3 block`}>
              For Buyers &amp; Homeowners
            </span>
            <h2 className="font-headline font-bold text-4xl mb-2">
              Residential Inspection Services
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerTiers.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.recommended
                    ? "bg-surface-container border-2 border-primary p-8 rounded-xl flex flex-col relative z-10 shadow-xl shadow-primary/5"
                    : "bg-surface-container border border-outline-variant p-8 rounded-xl flex flex-col hover:border-primary transition-colors relative overflow-hidden"
                }
              >
                {tier.badge && (
                  <div
                    className={
                      tier.recommended
                        ? "absolute top-0 right-0 bg-primary px-6 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary"
                        : "absolute top-0 right-0 bg-outline-variant px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                    }
                  >
                    {tier.badge}
                  </div>
                )}
                <h3 className="font-headline font-semibold text-xl mb-2">
                  {tier.name}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  {tier.description}
                </p>
                <div className="text-3xl font-bold text-primary mb-5">
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-10 flex-grow">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 ${tier.recommended ? "text-on-surface" : "text-on-surface-variant"}`}
                    >
                      <Icon name="check_circle" className="text-primary text-[20px] shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#booking"
                  className={
                    tier.recommended
                      ? "w-full py-4 bg-primary text-on-primary font-bold hover:opacity-90 transition-all rounded-lg text-center"
                      : "w-full py-4 bg-surface-container-highest border border-outline-variant text-on-surface font-bold hover:bg-primary hover:text-on-primary hover:border-primary transition-all rounded-lg text-center"
                  }
                >
                  Book Inspection
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: FOR DEVELOPERS & BUILDERS ── */}
        <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-outline-variant">
          <div className="mb-10">
            <span className={`${labelCaps} text-primary tracking-[0.2em] mb-3 block`}>
              For Developers &amp; Builders
            </span>
            <h2 className="font-headline font-bold text-4xl mb-2">
              Construction Inspection Services
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          {/* New Build Phase Inspections */}
          <div className="mb-4">
            <span className={`${labelCaps} text-on-surface-variant mb-2 block`}>New Build Phase Inspections</span>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl mb-6 text-sm">
              Catch defects at the point of origin — before they are buried in concrete or hidden behind walls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {developerPhases.map((phase) => (
              <div key={phase.name} className="bg-surface-container border border-outline-variant p-8 rounded-xl flex flex-col hover:border-primary transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-headline font-semibold text-xl leading-snug">{phase.name}</h3>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded">{phase.tag}</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{phase.description}</p>
                <div className="text-3xl font-bold text-primary mb-5">{phase.price}</div>
                <ul className="space-y-2 mb-8 flex-grow">
                  {phase.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-on-surface-variant">
                      <Icon name="check_circle" className="text-primary text-[20px] shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#booking" className="w-full py-4 bg-surface-container-highest border border-outline-variant text-on-surface font-bold hover:bg-primary hover:text-on-primary hover:border-primary transition-all rounded-lg text-center">
                  Book Inspection
                </Link>
              </div>
            ))}
          </div>
          {/* Construction Control Inspection */}
          <div className="mt-4 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className={`${labelCaps} text-primary tracking-[0.2em] mb-3 block`}>
                Ongoing Oversight
              </span>
              <h3 className="font-headline font-bold text-3xl mb-4">
                Construction Control Inspections
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Independent oversight from foundation to finishing. We don&apos;t wait for defects — we catch them as they happen.
              </p>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[420px]">
              <Image
                fill
                className="object-cover object-top"
                alt="Construction site being monitored by HINL inspectors"
                src={IMG.team}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-surface-container/90 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/20">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    Stage-by-Stage Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container border-2 border-primary p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary px-6 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary">
              {cci.abbr}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-grow">
                <h3 className="font-headline font-semibold text-2xl mb-2">{cci.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{cci.description}</p>
                {/* Pricing tiers */}
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {cci.pricingTiers.map((tier) => (
                    <div key={tier.label} className="bg-surface-container-low border border-outline-variant rounded-lg p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">{tier.label}</p>
                      <p className="text-sm font-semibold text-on-surface">{tier.detail}</p>
                    </div>
                  ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {cci.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-on-surface">
                      <Icon name="check_circle" className="text-primary text-[20px] shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#booking"
                className="shrink-0 inline-block px-12 py-4 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ACHI Certification statement */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-0">
          <div className="bg-primary/5 border border-primary/20 rounded-xl px-8 py-5 flex items-center gap-4">
            <Icon name="verified_user" className="text-primary text-3xl shrink-0" />
            <p className="text-on-surface text-sm leading-relaxed">
              <strong>Every HINL Inspector is ACHI Certified</strong> and trained to follow professional inspection standards and reporting procedures.
            </p>
          </div>
        </div>

        {/* ── SECTION 3: FOR INVESTORS & PROPERTY MANAGERS ── */}
        <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-outline-variant mt-12">
          <div className="mb-10">
            <span className={`${labelCaps} text-primary tracking-[0.2em] mb-3 block`}>
              For Investors &amp; Property Managers
            </span>
            <h2 className="font-headline font-bold text-4xl mb-2">
              Commercial &amp; Investment Services
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investorServices.map((svc) => (
              <div key={svc.name} className="bg-surface-container-low border border-outline-variant p-8 rounded-xl hover:border-primary transition-colors flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-headline font-semibold text-xl leading-snug">{svc.name}</h3>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded">{svc.abbr}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{svc.description}</p>
                <div className="text-3xl font-bold text-primary mb-6">{svc.price}</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 flex-grow">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-on-surface-variant">
                      <Icon name="check_circle" className="text-primary text-[20px] shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#booking"
                  className="w-full py-4 bg-surface-container-highest border border-outline-variant text-on-surface font-bold hover:bg-primary hover:text-on-primary hover:border-primary transition-all rounded-lg text-center"
                >
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section
          id="booking"
          className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 scroll-mt-24"
        >
          <div className="lg:col-span-5">
            <h2 className="font-headline font-bold text-4xl mb-6">
              Secure Your Inspection Date
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Fill out the form to initiate your technical audit. Our team will
              verify the details and confirm your slot within 2 business hours.
            </p>

            {/* Booking image */}
            <div className="relative rounded-xl overflow-hidden h-[220px] mb-8">
              <Image
                fill
                className="object-cover"
                alt="HINL team preparing for a property inspection"
                src={IMG.inspection}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-on-surface text-sm font-bold font-headline">
                  Nigeria&apos;s most trusted property auditors
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary border border-outline-variant shrink-0">
                  <Icon name="timer" />
                </div>
                <div>
                  <div className="font-bold">Rapid Response</div>
                  <div className="text-sm text-on-surface-variant">
                    Confirmed bookings scheduled within 48 hours.
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary border border-outline-variant shrink-0">
                  <Icon name="verified" />
                </div>
                <div>
                  <div className="font-bold">ACHI Certified Inspectors</div>
                  <div className="text-sm text-on-surface-variant">
                    Every inspection led by an ACHI certified professional.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
