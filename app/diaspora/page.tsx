import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diaspora Property Protection Services | HINL",
  description:
    "Independent verification, technical assessments, legal coordination support, and professional reporting for diaspora clients buying or investing in Nigerian property.",
};

const IMG = {
  hero: "/images/DSC06174-1024x683.jpg",
  tablet: "/HINL web7.jpg.jpeg",
  cta: "/images/DSC06168-1024x683.jpg",
};

const whyHinl = [
  "Independent Property Verification",
  "Advanced MEP Inspection Included",
  "Professional Drone Inspections Included",
  "Home Safety Kit Included",
  "High-Resolution Photos & Videos",
  "Comprehensive Digital Reporting",
  "Legal Verification Coordination Available",
  "Follow-Up Support Available",
  "Dedicated Client Support",
  "Trusted by Clients Home and Abroad",
];

const packages = [
  {
    tag: "KNOW THE PROPERTY™",
    name: "DIASPORA ESSENTIAL™",
    tagline: "Know What You're Buying Before You Commit",
    description:
      "Independent verification of a property's condition before purchase, handover, or occupancy.",
    price: "From ₦900,000",
    baseLabel: null,
    features: [
      "Standard Home Inspection",
      "Structural Condition Review",
      "Roofing System Inspection",
      "Interior & Exterior Assessment",
      "Advanced MEP Inspection (Electrical, Plumbing & HVAC)",
      "Professional Drone Roof & Site Inspection",
      "High-Resolution Defect Photography",
      "Video Walkthrough Summary",
      "Comprehensive Digital Inspection Report",
      "Defect Severity Classification",
      "Recommended Corrective Actions",
      "30-Minute Consultation",
      "HINL Home Safety Kit™",
    ],
    bestFor: ["First-Time Buyers", "Diaspora Families", "Residential Purchases", "Property Investors"],
    outcome: "Understand the true condition of the property before making a financial commitment.",
    highlighted: false,
  },
  {
    tag: "UNDERSTAND THE RISKS™",
    name: "DIASPORA PLUS™",
    tagline: "Independent Verification. Reduced Risk. Greater Confidence.",
    description:
      "A deeper technical assessment for higher-value properties and clients seeking greater insight into future costs, risks, and building performance.",
    price: "From ₦1,500,000",
    baseLabel: "Everything in Diaspora Essential, plus:",
    features: [
      "Standard Home Inspection",
      "Moisture & Dampness Assessment",
      "Waterproofing Review",
      "Drainage Assessment",
      "Building Envelope Review",
      "Advanced Electrical Safety Review",
      "Detailed Plumbing Evaluation",
      "Detailed HVAC Evaluation",
      "Enhanced Drone Survey",
      "Property Risk Summary",
      "Repair Budget Guidance",
      "Investment Risk Commentary",
      "Live Video Inspection Option",
      "60-Minute Consultation",
      "Enhanced HINL Home Safety Kit™",
    ],
    bestFor: ["Luxury Homes", "Mortgage Applicants", "High-Value Purchases", "Remote Buyers"],
    outcome:
      "Understand not only the condition of the property, but the risks, liabilities, and future maintenance implications.",
    highlighted: true,
  },
  {
    tag: "PROTECT THE INVESTMENT™",
    name: "DIASPORA COMPLETE™",
    tagline: "Your Eyes. Your Advocate. Your Independent Representative.",
    description:
      "The most comprehensive property protection and due diligence package offered by HINL — designed for clients seeking maximum confidence before purchase, financing, handover, occupancy, or investment.",
    price: "From ₦2,000,000",
    baseLabel: "Everything in Diaspora Plus, plus:",
    features: [
      "Construction Quality Inspection",
      "Snagging Inspection",
      "Move-In Certification Assessment",
      "Advanced Electrical Safety Review",
      "Detailed Plumbing Evaluation",
      "Detailed HVAC Evaluation",
      "Full Drone Property Survey",
      "Property Acquisition Support Coordination",
      "Legal Verification Coordination",
      "Title & Ownership Verification Coordination",
      "Solicitor Liaison Support",
      "Contractor Defect Verification",
      "Follow-Up Verification Inspection",
      "Dedicated Client Relations Officer",
      "Premium HINL Home Safety Kit™",
    ],
    bestFor: [
      "Luxury Properties",
      "High-Net-Worth Individuals",
      "Corporate Acquisitions",
      "Multiple Property Owners",
      "Diaspora Clients Unable to Travel",
    ],
    outcome:
      "Receive independent representation, technical verification, legal coordination support, and ongoing guidance throughout the property acquisition process.",
    highlighted: false,
  },
];

const safetyKitItems = [
  "Electrical Circuit Directory Labels",
  "Main Electrical Shut-Off Tags",
  "Generator Changeover Labels",
  "Water Main Shut-Off Tags",
  "Gas Shut-Off Tags",
  "Homeowner Emergency Card",
  "QR Maintenance Sticker",
  "HINL Verification Sticker",
];

export default function Diaspora() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="relative min-h-[780px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              fill
              className="object-cover opacity-50"
              alt="Modern Nigerian luxury architecture at dusk"
              src={IMG.hero}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>
          <div className="relative z-10 px-8 md:px-16 w-full max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-xs mb-6">
                Diaspora Property Protection Services
              </p>
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
                Peace of Mind for Your{" "}
                <span className="text-primary italic">Investments</span> in Nigeria.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl mb-4 leading-relaxed font-medium">
                Independent Verification. Trusted Representation. Complete Peace of Mind.
              </p>
              <p className="text-on-surface-variant text-base mb-10 leading-relaxed max-w-xl">
                Buying property from abroad shouldn&apos;t require blind trust. HINL provides independent property verification, technical assessments, quality inspections, legal coordination support, and professional reporting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#packages"
                  className="inline-block bg-primary text-on-primary px-10 py-4 font-headline font-bold rounded-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-xl"
                >
                  View Packages &amp; Pricing
                </Link>
                <Link
                  href="/services#booking"
                  className="inline-block border border-primary/50 text-primary px-10 py-4 font-headline font-bold rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                >
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HINL */}
        <section className="py-16 px-8 bg-primary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-on-primary font-headline font-bold text-xl md:text-2xl mb-8 text-center uppercase tracking-widest">
              Why Diaspora Clients Choose HINL
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {whyHinl.map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-primary text-sm">
                  <Icon name="check_circle" className="text-on-primary/80 text-[18px] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-24 px-8 md:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                Diaspora Services
              </span>
              <h2 className="font-headline font-bold text-4xl md:text-5xl mb-4">
                Property Protection Packages
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Three packages designed for overseas investors and diaspora buyers managing Nigerian property remotely.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={
                    pkg.highlighted
                      ? "bg-surface-container border-2 border-primary rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-primary/10"
                      : "bg-surface-container border border-outline-variant rounded-2xl p-8 flex flex-col hover:border-primary transition-colors"
                  }
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 right-0 bg-primary px-6 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary rounded-tr-2xl">
                      Most Popular
                    </div>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                    {pkg.tag}
                  </span>
                  <h3 className="font-headline font-bold text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-on-surface-variant text-sm italic mb-3 leading-snug">{pkg.tagline}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{pkg.description}</p>
                  <div className="text-4xl font-headline font-black text-primary mb-6">{pkg.price}</div>

                  {pkg.baseLabel && (
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
                      {pkg.baseLabel}
                    </p>
                  )}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <Icon name="check_circle" className="text-primary text-[18px] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Best For</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.bestFor.map((b) => (
                        <span key={b} className="text-xs bg-surface border border-outline-variant text-on-surface-variant px-2 py-1 rounded">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-surface-container-highest rounded-xl p-4 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">Outcome</p>
                    <p className="text-sm text-on-surface leading-relaxed italic">{pkg.outcome}</p>
                  </div>

                  <Link
                    href="/services#booking"
                    className={
                      pkg.highlighted
                        ? "w-full py-4 bg-primary text-on-primary font-bold rounded-lg text-center hover:opacity-90 transition-all"
                        : "w-full py-4 border border-outline-variant bg-surface-container-highest text-on-surface font-bold rounded-lg text-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                    }
                  >
                    Book This Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HINL Home Safety Kit */}
        <section className="py-20 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-surface-container border border-outline-variant rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-primary/5 border-r border-outline-variant p-10 lg:p-14">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name="home_repair_service" className="text-on-primary text-2xl" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-2">
                    Included with every Diaspora Package
                  </span>
                  <h2 className="font-headline font-bold text-3xl md:text-4xl mb-4">
                    HINL Home Safety Kit™
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                    Every Diaspora Package includes the HINL Home Safety Kit — designed to improve home safety, simplify emergency response, and leave every property safer than we found it.
                  </p>
                  <div className="space-y-2 text-sm text-on-surface-variant">
                    <p className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[18px]" /> Improves Home Safety</p>
                    <p className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[18px]" /> Simplifies Emergency Response</p>
                    <p className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[18px]" /> Improves Property Organisation</p>
                    <p className="flex items-center gap-2"><Icon name="check_circle" className="text-primary text-[18px]" /> Enhances Homeowner Awareness</p>
                  </div>
                </div>
                <div className="p-10 lg:p-14">
                  <h3 className="font-headline font-bold text-xl mb-6">Kit Includes</h3>
                  <ul className="space-y-3">
                    {safetyKitItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-on-surface-variant text-sm">
                        <Icon name="inventory_2" className="text-primary text-[18px] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-8 md:px-12 bg-surface overflow-hidden">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-headline font-bold text-4xl mb-20 text-center">
              WHAT OUR{" "}
              <span className="bg-primary text-on-primary px-2">CLIENTS SAY</span>
            </h2>
            <div
              className="p-12 md:p-20 rounded-xl relative"
              style={{
                background: "rgba(39, 39, 42, 0.4)",
                backdropFilter: "blur(8px)",
                border: "1px solid #3F3F46",
              }}
            >
              <Icon
                name="format_quote"
                className="text-primary text-6xl absolute top-6 right-6 opacity-20"
              />
              <p className="text-lg md:text-xl italic mb-12 text-on-surface leading-relaxed">
                &ldquo;If you are looking to buy or build a home in Nigeria (especially if you are in the Diaspora), you ABSOLUTELY must hire Home Inspectors Nigeria. I contacted multiple home inspection companies (including the popular Snag Inspector on Instagram) and I found Home Inspectors Nigeria to by far be the most professional and most closely aligned with the service expectations that we have here in the US.&rdquo;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                  <Icon name="flight_land" className="text-primary text-3xl" />
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-2xl text-primary">Sade Prem</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Diaspora Client, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              fill
              className="object-cover opacity-10"
              alt="Nigerian property aerial view"
              src={IMG.cta}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-background/95" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Inspect Before You Invest.{" "}
              <span className="text-primary">Protect Before You Commit.</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Own With Confidence. HINL is your independent eyes and ears on the ground in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#packages"
                className="inline-block bg-primary text-on-primary px-12 py-5 font-headline font-bold rounded-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                View Packages &amp; Pricing
              </Link>
              <Link
                href="/services#booking"
                className="inline-block border-2 border-primary text-primary px-12 py-5 font-headline font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all"
              >
                Book an Inspection
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
