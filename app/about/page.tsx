import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About HINL | Building quality verified",
  description:
    "Home Inspectors Nigeria Limited (HINL) is redefining how structural integrity and construction standards are measured across Nigeria and Africa.",
};

const labelCaps = "text-xs font-bold uppercase tracking-wider";

const phases = [
  {
    num: "01",
    icon: "architecture",
    title: "Construction Phase",
    body: "We control quality at the point of origin to prevent defects.",
    offset: false,
  },
  {
    num: "02",
    icon: "biotech",
    title: "Material Phase",
    body: "Independent material testing and verification to ensure structural integrity.",
    offset: true,
  },
  {
    num: "03",
    icon: "fact_check",
    title: "Completion Phase",
    body: "We assess the final condition of built assets for safety and compliance.",
    offset: false,
  },
  {
    num: "04",
    icon: "search",
    title: "Pre-Purchase",
    body: "We quantify risk for buyers, identifying hidden deficiencies before investment.",
    offset: true,
  },
];

const pillars = [
  { icon: "verified_user",           title: "Integrity",  body: "Independent verification" },
  { icon: "insights",                title: "Innovation", body: "Technology & data"         },
  { icon: "precision_manufacturing", title: "Accuracy",   body: "Fact-based systems"        },
  { icon: "public",                  title: "Impact",     body: "Better buildings across Africa" },
  { icon: "description",             title: "Clarity",    body: "Actionable reporting"      },
];

const heroImg     = "/random-images/DSC06174-1024x683.jpg";
const visionImg   = "/images/gh-1-e1771364179618-rjb0ul6l77ifg3p55xa250hes0r2cgx1n3hfwy8x68.jpeg";
const presidentImg = "/HINL-PP8.png";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image fill className="object-cover" alt="Modern architectural building" src={heroImg} sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-surface" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl">
              <span className={`${labelCaps} text-primary mb-6 block`}>Established Verification</span>
              <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-6">
                Building quality{" "}
                <span className="text-primary">verified</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                Home Inspectors Nigeria Limited (HINL) is redefining how structural integrity and construction standards are measured across Nigeria and Africa.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="mb-14 text-center">
              <h2 className="font-headline font-bold text-4xl mb-6">
                WHO WE{" "}
                <span className="bg-primary text-on-primary px-2">ARE</span>
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                HINL is a building quality verification company powered by inspection systems, construction monitoring, and material testing. We operate across the full property lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-outline-variant -translate-y-1/2 z-0" />
              {phases.map((p) => (
                <div
                  key={p.num}
                  className={`relative z-10 bg-surface-container-low p-6 border border-outline-variant rounded-xl group hover:border-primary transition-colors${p.offset ? " md:mt-12" : ""}`}
                >
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon name={p.icon} className="text-primary group-hover:text-on-primary transition-colors" />
                  </div>
                  <span className={`${labelCaps} text-primary`}>{p.num}</span>
                  <h3 className="font-headline font-semibold text-2xl mt-1 mb-2">{p.title}</h3>
                  <p className="text-base text-on-surface-variant">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="py-20 bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-8 bg-primary rounded-xl">
                  <h2 className="font-headline font-bold text-4xl text-on-primary mb-4">Our Vision</h2>
                  <p className="text-on-primary font-semibold mb-4">To become Nigeria&apos;s leading platform for:</p>
                  <ul className="space-y-2">
                    {["Building Quality Verification", "Construction Monitoring", "Material Testing & Validation", "Property Risk Intelligence"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-on-primary">
                        <Icon name="check_circle" className="text-on-primary/80 text-[18px] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border border-outline-variant rounded-xl">
                  <h2 className="font-headline font-bold text-4xl text-primary mb-4">Our Mission</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    To deliver accurate, standardised, and technology-driven systems that verify building quality, validate materials, and reduce real estate risk.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden min-h-[400px]">
                <Image fill className="object-cover" alt="Modern architecture representing HINL's vision" src={visionImg} sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUE PILLARS ── */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="font-headline font-bold text-4xl mb-12 text-center">
              VALUE{" "}
              <span className="bg-primary text-on-primary px-2">PILLARS</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="p-6 bg-surface-container border border-outline-variant rounded-lg text-center hover:bg-surface-container-high transition-all"
                >
                  <Icon name={p.icon} className="text-primary text-4xl mb-3" />
                  <h4 className="font-headline font-semibold text-2xl mb-1">{p.title}</h4>
                  <p className="text-sm text-on-surface-variant">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ── */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="relative rounded-xl overflow-hidden aspect-square border border-outline-variant">
                <Image
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Casper Chidubem"
                  src={presidentImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-primary text-on-primary">
                  <span className={`${labelCaps} opacity-80`}>President</span>
                  <h3 className="font-headline font-bold text-3xl">Casper Chidubem</h3>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-headline font-bold text-4xl">
                  ABOUT THE{" "}
                  <span className="bg-primary text-on-primary px-2">PRESIDENT</span>
                </h2>
                <p className="text-lg font-semibold leading-relaxed">
                  Casper Chidubem brings over two decades of experience in construction and project management.
                </p>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  Driven by the lack of quality control in African construction, he founded HINL to introduce structured verification systems.
                </p>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  He is leading the development of a Pan-African inspection and construction quality platform.
                </p>
                <div className="flex gap-6 pt-6">
                  <a className="text-primary hover:text-on-surface transition-colors" href="#">
                    <Icon name="share" />
                  </a>
                  <a className="text-primary hover:text-on-surface transition-colors" href="#">
                    <Icon name="contact_page" />
                  </a>
                  <span className={`${labelCaps} text-on-surface-variant flex items-center`}>
                    @homeinspectorng
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INSPECTORS IN ACTION ── */}
        <section className="py-16 bg-surface overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 text-center">Our Inspectors at Work</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: "/random-images/HINL web7.jpg.jpeg",                        alt: "HINL inspector examining exterior wall crack" },
                { src: "/inspectors/HINL web6.JPG.jpeg",                          alt: "HINL professional property inspector" },
                { src: "/inspectors/HINL web9.JPG.jpeg",                          alt: "HINL inspector reviewing building systems" },
                { src: "/inspectors/ChatGPT Image Jun 15, 2026, 12_17_03 AM.png", alt: "HINL certified inspector on site" },
              ].map((img) => (
                <div key={img.src} className="relative rounded-xl overflow-hidden aspect-square bg-surface-container-high">
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 bg-surface overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="font-headline font-bold text-4xl mb-20 text-center">
              WHAT OUR{" "}
              <span className="bg-primary text-on-primary px-2">CLIENTS SAY</span>
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* ── DOWNLOAD CTA ── */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <p className={`${labelCaps} text-primary mb-4`}>Learn More</p>
            <h2 className="font-headline font-bold text-3xl mb-4">Want the full picture?</h2>
            <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
              Download our company profile for a complete overview of our services, methodology, team credentials, and track record.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/docs/Home Inspectors Nigeria Ltd Company Profile (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download Company Profile
              </a>
              <Link
                href="/services"
                className="inline-block border border-primary text-primary px-10 py-4 rounded-lg font-headline font-bold hover:bg-primary/10 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
