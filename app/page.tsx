import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { CONTACT_NUMBER_DISPLAY } from "@/lib/contact";

const IMG = {
  hero: "/random-images/HINL-PP7.png",
  structural: "/images/DSC06096-1024x683.jpg",
  legal: "/images/C1358T01-1.jpg",
  handshake: "/random-images/HINL web7.jpg.jpeg",
  inspection: "/ChatGPT Image Jun 15, 2026, 12_11_42 AM.png",
  construction: "/random-images/construction-control.jpeg",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              fill
              className="object-cover"
              alt="Property inspection in progress"
              src={IMG.hero}
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-8 md:px-12 pt-[50px] pb-20">
            <div className="max-w-3xl">
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] mb-8 editorial-text-shadow">
                Build or Buy With{" "}
                <span className="text-primary italic">Confidence</span> — Not
                Assumptions
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Professional property inspections and construction control that
                reveal hidden defects, verify work, and protect your investment.
              </p>

              {/* Trust Line */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-on-surface-variant">
                <span className="flex items-center gap-2">
                  <Icon name="verified" className="text-primary" />
                  100+ years combined construction experience
                </span>
                <a
                  href="https://share.google/UYhV5Ovn7XyvUG5mf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Icon name="star" className="text-yellow-400" />
                  5-Star Google Rating
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services#booking"
                  className="inline-block bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Book Inspection
                </Link>
                <Link
                  href="/services"
                  className="inline-block border border-primary/50 text-primary px-10 py-5 rounded-lg font-headline font-bold text-lg hover:border-primary hover:bg-primary/10 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Proof strip — pinned to hero bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-surface-container/90 backdrop-blur-md border-t border-outline-variant py-4 px-8">
            <div className="container mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium text-on-surface-variant">
              {[
                "Hidden defect detection",
                "Construction control + material testing",
                "Independent, evidence-based reports",
                "Non-invasive inspection tools",
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden sm:inline text-outline mx-2">·</span>
                  )}
                  <Icon name="check_circle" className="text-primary text-[16px]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>


        {/* ── SECTION 2: THE PROBLEM ── */}
        <section className="py-24 md:py-32 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-error font-headline font-bold uppercase tracking-[0.3em] text-sm block mb-6">
                  The Problem
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 leading-tight">
                  Most Defects Are{" "}
                  <span className="text-primary">Built In</span> — Not
                  Discovered
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Properties often look perfect at handover. Then cracks appear.
                  Wiring fails. Plumbing leaks.
                </p>
                <div className="bg-error/10 border-l-4 border-error p-8 rounded-r-xl">
                  <p className="text-on-surface font-bold text-lg mb-2">
                    Most defects only show after 6 months — making standard
                    warranties inadequate.
                  </p>
                  <p className="text-on-surface-variant">
                    By then, the damage is already done.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
                <Image
                  fill
                  className="object-cover"
                  alt="HINL inspector uncovering hidden defects during a property audit"
                  src={IMG.structural}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 bg-error/90 backdrop-blur px-4 py-2 rounded-lg">
                    <Icon name="warning" className="text-white text-sm" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      Defect Found Before Handover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CONSTRUCTION CONTROL ── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-8">
            <div className="mb-12">
              <span className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-sm block mb-4">
                Primary Authority
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold leading-tight">
                Construction Control Inspections
              </h2>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* Feature list — 8 cols */}
              <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl p-10">
                <p className="text-on-surface-variant text-lg mb-4 leading-relaxed">
                  Independent oversight from foundation to finishing.
                </p>
                <p className="text-primary font-headline font-bold text-xl mb-10">
                  We don&apos;t wait for defects. We catch them as they happen.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { icon: "layers", label: "Stage-by-stage monitoring" },
                    { icon: "science", label: "Material testing (concrete, steel, etc.)" },
                    { icon: "fact_check", label: "Workmanship verification" },
                    { icon: "assignment_turned_in", label: "Contractor compliance checks" },
                    { icon: "wifi_tethering", label: "Real-time reporting" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 bg-surface-container p-4 rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name={item.icon} className="text-primary" />
                      </div>
                      <span className="text-on-surface font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services#booking"
                  className="inline-block bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Start Construction Control
                </Link>
              </div>

              {/* Image — 4 cols */}
              <div className="col-span-12 lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[420px]">
                <Image
                  fill
                  className="object-cover"
                  alt="Drone aerial view of construction site with steel roof framework"
                  src={IMG.construction}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                <div className="absolute bottom-6 left-4 right-4">
                  <div className="bg-surface-container/90 backdrop-blur-md rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                        Real-time reporting active
                      </span>
                    </div>
                    <p className="text-on-surface text-xs font-medium">
                      Stage-by-Stage Monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: HOME & PROPERTY INSPECTION ── */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="Home property inspection revealing hidden defects"
                  src={IMG.inspection}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="order-1 md:order-2">
                <span className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-sm block mb-6">
                  Entry Point
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">
                  Buying or Renting?{" "}
                  <span className="text-primary italic">Inspect Before You Invest</span>
                </h2>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  We uncover hidden issues before you commit:
                </p>

                {/* 4-icon mini grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "bolt", label: "Electrical" },
                    { icon: "plumbing", label: "Plumbing" },
                    { icon: "foundation", label: "Structural" },
                    { icon: "sensors", label: "Non-invasive" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-surface-container rounded-xl p-4 border border-outline-variant/30"
                    >
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name={item.icon} className="text-primary text-sm" />
                      </div>
                      <span className="text-on-surface font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-primary font-headline font-bold mb-8">
                  We inspect beyond what is visible.
                </p>

                <Link
                  href="/services#booking"
                  className="inline-block bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Book Home Inspection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: TRUST & AUTHORITY ── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold leading-tight">
                Independent. Experienced.{" "}
                <span className="text-primary">Accountable.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "engineering",
                  title: "100+ years combined experience",
                  body: "Deep expertise across Nigerian construction and real estate.",
                },
                {
                  icon: "savings",
                  title: "Over ₦200M Saved for Clients",
                  body: "Our inspections have helped clients avoid costly post-purchase repairs and contractor fraud.",
                },
                {
                  icon: "verified_user",
                  title: "Independent of contractors and developers",
                  body: "No conflicts of interest. Our loyalty is to your investment.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-low border border-outline-variant rounded-2xl p-10 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={item.icon} className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-headline font-bold text-xl mb-3">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl max-w-2xl">
              <p className="text-primary font-headline font-bold text-lg">
                We take professional responsibility for our inspections.
              </p>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS STRIP ── */}
        <section className="bg-primary py-8 px-8">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-on-primary/20 rounded-full flex items-center justify-center shrink-0">
              <Icon name="verified_user" className="text-on-primary text-2xl" />
            </div>
            <p className="text-on-primary font-headline font-bold text-lg md:text-xl leading-snug max-w-3xl">
              Every HINL Inspector is trained and follows professional inspection standards and reporting procedures — Building quality verified.
            </p>
          </div>
        </section>

        {/* ── PROFESSIONAL RESPONSIBILITY ── */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="container mx-auto px-8 max-w-4xl text-center">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-sm block mb-4">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">
              Professional Inspection.{" "}
              <span className="text-primary">Responsible Reporting.</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              Every inspection conducted by HINL is approached with the highest standards of
              professionalism, diligence, and integrity. Our findings are reported objectively —
              without influence from agents, developers, or sellers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "balance",        title: "Objective & Independent", body: "We have no commercial relationship with any developer or agent. Our loyalty is only to you." },
                { icon: "gavel",          title: "Professionally Accountable", body: "Our inspectors follow defined standards of practice and a code of ethics." },
                { icon: "fact_check",     title: "Evidence-Based Findings", body: "Every reported defect is documented with photographs, measurements, and severity ratings." },
              ].map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-outline-variant rounded-xl p-6 text-left hover:border-primary transition-colors">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" />
                  </div>
                  <h4 className="font-headline font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: POSITIONING ── */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Main content — 2 cols */}
              <div className="lg:col-span-2 glass-panel rounded-2xl p-10">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">
                  Inspection Finds Problems.{" "}
                  <span className="text-primary">Control Prevents Them.</span>
                </h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Most warranties address issues after they occur. HINL ensures:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: "search",
                      title: "Issues identified early",
                      body: "Defects are caught during construction, not after handover.",
                    },
                    {
                      icon: "fact_check",
                      title: "Work verified during construction",
                      body: "Every stage is independently checked against approved plans.",
                    },
                    {
                      icon: "trending_down",
                      title: "Risks reduced before handover",
                      body: "You receive your property with confidence, not a checklist of surprises.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name={item.icon} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stat boxes — 1 col */}
              <div className="flex flex-col gap-6">
                <div className="glass-panel rounded-2xl p-10 text-center">
                  <p className="text-primary font-headline font-black text-6xl mb-2">
                    0%
                  </p>
                  <p className="text-on-surface-variant text-sm uppercase tracking-widest font-medium">
                    Conflict of Interest
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-10 text-center">
                  <p className="text-primary font-headline font-black text-6xl mb-2">
                    100%
                  </p>
                  <p className="text-on-surface-variant text-sm uppercase tracking-widest font-medium">
                    Independent Oversight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SAMPLE REPORT ── */}
        <section className="py-20 px-8 bg-surface-container-low">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                  Free Download
                </span>
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-5 leading-tight">
                  See What an HINL Report Looks Like
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Before you book, see exactly what you&apos;ll receive. Our sample report from a real Lekki property inspection shows our defect findings, severity ratings, photos, and remediation recommendations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/docs/sample-inspection-report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
                  >
                    <Icon name="download" className="text-[18px]" />
                    Download Sample Report
                  </a>
                  <Link
                    href="/useful-information"
                    className="inline-flex items-center gap-2 border border-primary/50 text-primary px-8 py-4 rounded-lg font-headline font-bold hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-2xl p-8 space-y-4">
                {[
                  { icon: "verified", text: "Defect findings with severity ratings" },
                  { icon: "photo_camera", text: "High-resolution photographic evidence" },
                  { icon: "straighten", text: "Foundation settlement measurements" },
                  { icon: "safety_check", text: "Safety & maintenance observations" },
                  { icon: "build", text: "Priority-based remediation recommendations" },
                  { icon: "description", text: "Executive summary in plain language" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="text-primary text-[20px]" />
                    </div>
                    <span className="text-on-surface font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU RECEIVE ── */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-sm block mb-4">
                Your Inspection Deliverables
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold leading-tight">
                What You{" "}
                <span className="text-primary">Receive</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                { icon: "description",        text: "Comprehensive digital inspection report" },
                { icon: "photo_camera",        text: "Defect photographs and supporting documentation" },
                { icon: "priority_high",       text: "Priority-based recommendations" },
                { icon: "health_and_safety",   text: "Safety observations" },
                { icon: "home_repair_service", text: "Maintenance observations" },
                { icon: "summarize",           text: "Property condition summary" },
                { icon: "support_agent",       text: "Professional consultation where applicable" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 bg-surface border border-outline-variant rounded-xl px-5 py-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={item.icon} className="text-primary text-[20px]" />
                  </div>
                  <span className="text-on-surface font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 px-8">
          <div className="bg-surface-container-low rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Icon name="home_pin" className="text-[20rem]" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-8 leading-tight">
                Don&apos;t Build Blind.{" "}
                <span className="text-primary">Don&apos;t Buy Blind.</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/services#booking"
                  className="inline-block bg-primary text-on-primary px-12 py-6 rounded-lg font-headline font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(101,179,46,0.3)]"
                >
                  Book Inspection Now
                </Link>
                <Link
                  href="/services"
                  className="inline-block border-2 border-primary text-primary px-12 py-6 rounded-lg font-headline font-black text-xl hover:bg-primary hover:text-on-primary transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Contact row — 3 col grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-outline-variant pt-10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="call" className="text-primary" />
                </div>
                <span className="text-on-surface font-medium text-sm">
                  {CONTACT_NUMBER_DISPLAY}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="language" className="text-primary" />
                </div>
                <span className="text-on-surface font-medium text-sm">
                  homeinspectors.ng
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="mail" className="text-primary" />
                </div>
                <span className="text-on-surface font-medium text-sm">
                  info@homeinspectors.ng
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Banner */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface-container px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                <Icon name="engineering" className="absolute -right-8 -bottom-8 text-[22rem] text-primary" />
              </div>
              <div className="relative z-10 text-center md:text-left max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
                  Now Recruiting
                </span>
                <h2 className="font-headline font-bold text-3xl md:text-4xl mb-3 leading-tight">
                  Become a Certified Property Inspector
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Join Nigeria&apos;s fastest-growing network of professional property inspectors. Earn from real inspection assignments and build a career in a growing industry.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold text-lg hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-[0_12px_24px_rgba(101,179,46,0.25)]"
                >
                  Apply Now
                  <Icon name="arrow_forward" className="text-[20px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final Line */}
        <section className="bg-primary py-6 text-center">
          <p className="text-on-primary font-headline font-black text-lg md:text-xl uppercase tracking-widest">
            Inspect Before You Invest
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
