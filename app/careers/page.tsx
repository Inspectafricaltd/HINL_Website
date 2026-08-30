"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

const backgrounds = [
  "Civil Engineering",
  "Building Technology",
  "Architecture",
  "Quantity Surveying",
  "Estate Management",
  "Facility Management",
  "Construction Supervision",
  "Project Management",
  "Electrical Engineering",
  "Mechanical Engineering",
];

const qualities = [
  "Strong attention to detail",
  "Professional integrity",
  "Good report writing skills",
  "Construction or property knowledge",
  "Ability to work independently",
  "Willingness to learn",
  "Good communication skills",
];

const careerPath = [
  { stage: "Stage 1", title: "Inspector Candidate" },
  { stage: "Stage 2", title: "Inspector Apprentice" },
  { stage: "Stage 3", title: "Certified Property Inspector" },
  { stage: "Stage 4", title: "Senior Inspector" },
  { stage: "Stage 5", title: "State Inspection Partner" },
  { stage: "Stage 6", title: "ACHI Fellow / Trainer" },
];

const opportunities = [
  "Conduct property inspections",
  "Participate in construction monitoring projects",
  "Support mortgage and lending inspections",
  "Perform estate safety audits",
  "Participate in commercial property inspections",
  "Access ongoing professional development",
  "Join a growing national inspection network",
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT – Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function CareersPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [cvName, setCvName] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
        setCvName("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="pt-[140px] pb-20 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <Icon name="engineering" className="absolute -right-12 top-0 text-[30rem] text-primary" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Applications Now Open
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-tight mb-6 leading-tight">
            Become a Certified<br className="hidden md:block" />{" "}
            <span className="text-primary">Property Inspector</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Help improve building quality, protect property buyers, and earn from professional
            inspection assignments across Nigeria.
          </p>
          <div className="mt-10">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold text-lg hover:opacity-90 transition-all shadow-[0_12px_24px_rgba(101,179,46,0.25)]"
            >
              Apply Here
              <Icon name="arrow_downward" className="text-[20px]" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Why Join */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                  The Opportunity
                </span>
                <h2 className="font-headline font-bold text-4xl mb-6 leading-tight">
                  Why Join HINL?
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
                  At Home Inspectors Nigeria Ltd. (HINL), we are building Nigeria&apos;s largest
                  network of trained property inspectors. As part of our network, you may receive
                  opportunities to:
                </p>
                <ul className="space-y-4">
                  {opportunities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className="text-primary text-[14px]" />
                      </div>
                      <span className="text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Earnings */}
              <div className="bg-surface-container border border-outline-variant rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="payments" className="text-primary" />
                  </div>
                  <h3 className="font-headline font-bold text-xl">Earnings</h3>
                </div>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Inspectors are compensated on a project basis. Earnings vary depending on:
                </p>
                <ul className="space-y-3 mb-6">
                  {["Inspection type", "Property size", "Location", "Complexity of assignment"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-sm text-primary font-medium">
                  High-performing inspectors may qualify for priority assignment allocation and leadership opportunities.
                </div>

                <hr className="border-outline-variant my-8" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="public" className="text-primary" />
                  </div>
                  <h3 className="font-headline font-bold text-xl">Why This Is Different</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  HINL is helping establish professional property inspection standards in Nigeria
                  and supporting the growth of inspection practice across Africa through the{" "}
                  <Link href="https://inspectafrica.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    InspectAfrica
                  </Link>{" "}
                  initiative. Selected candidates may contribute to national inspection projects,
                  mortgage inspection programs, and pan-African inspection development programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Eligibility
              </span>
              <h2 className="font-headline font-bold text-4xl">Who Should Apply?</h2>
              <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
                We welcome applications from professionals with backgrounds in:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {backgrounds.map((bg) => (
                <div
                  key={bg}
                  className="bg-surface-container border border-outline-variant rounded-xl px-4 py-5 text-center text-sm font-medium text-on-surface hover:border-primary/50 transition-colors"
                >
                  {bg}
                </div>
              ))}
            </div>
            <p className="text-center text-on-surface-variant text-sm">
              Exceptional candidates from related fields may also be considered.
            </p>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                  Selection Criteria
                </span>
                <h2 className="font-headline font-bold text-4xl mb-8">What We Look For</h2>
                <div className="space-y-4">
                  {qualities.map((q) => (
                    <div key={q} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon name="check_circle" className="text-primary text-[18px]" />
                      </div>
                      <span className="text-on-surface font-medium">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Path */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                  Your Journey
                </span>
                <h2 className="font-headline font-bold text-4xl mb-8">Career Path</h2>
                <div className="relative">
                  <div className="absolute left-5 top-4 bottom-4 w-px bg-outline-variant" />
                  <div className="space-y-2">
                    {careerPath.map((step, i) => (
                      <div key={step.stage} className="flex items-center gap-4 relative pl-14">
                        <div className={`absolute left-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-headline font-bold text-sm shrink-0 z-10 ${
                          i === 2
                            ? "bg-primary border-primary text-on-primary"
                            : "bg-surface border-outline-variant text-on-surface-variant"
                        }`}>
                          {i + 1}
                        </div>
                        <div className={`flex-1 rounded-xl px-5 py-4 border ${
                          i === 2
                            ? "bg-primary/10 border-primary/30"
                            : "bg-surface-container border-outline-variant"
                        }`}>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{step.stage}</div>
                          <div className={`font-headline font-semibold ${i === 2 ? "text-primary" : "text-on-surface"}`}>
                            {step.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-20 bg-surface-container-low scroll-mt-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Applications Now Open
              </span>
              <h2 className="font-headline font-bold text-4xl mb-4">
                Join the Next Intake
              </h2>
              <p className="text-on-surface-variant">
                Complete the form below and we&apos;ll be in touch to guide you through the next steps.
              </p>
            </div>

            {formState === "success" ? (
              <div className="bg-surface-container border border-primary/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="check_circle" className="text-primary text-[40px]" />
                </div>
                <h3 className="font-headline font-bold text-2xl mb-3">Application Received</h3>
                <p className="text-on-surface-variant mb-8">
                  Thank you for applying. Our team will review your application and be in touch within 5–7 business days.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-primary font-semibold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-container border border-outline-variant rounded-2xl p-8 md:p-10 space-y-6"
                encType="multipart/form-data"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name <span className="text-error">*</span></label>
                    <input
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address <span className="text-error">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number <span className="text-error">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">State <span className="text-error">*</span></label>
                    <select
                      name="state"
                      required
                      defaultValue=""
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="" disabled>Select your state</option>
                      {nigerianStates.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Profession <span className="text-error">*</span></label>
                    <input
                      name="profession"
                      required
                      placeholder="e.g. Civil Engineer"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Years of Experience <span className="text-error">*</span></label>
                    <select
                      name="years_of_experience"
                      required
                      defaultValue=""
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="" disabled>Select range</option>
                      <option>Less than 1 year</option>
                      <option>1–3 years</option>
                      <option>3–5 years</option>
                      <option>5–10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Upload CV <span className="text-error">*</span></label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="w-full border-2 border-dashed border-outline-variant rounded-lg px-6 py-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    {cvName ? (
                      <div className="flex items-center justify-center gap-2 text-primary font-medium">
                        <Icon name="description" className="text-[20px]" />
                        {cvName}
                      </div>
                    ) : (
                      <>
                        <Icon name="upload_file" className="text-on-surface-variant text-[32px] mb-2" />
                        <p className="text-sm text-on-surface-variant">
                          Click to upload your CV
                        </p>
                        <p className="text-xs text-on-surface-variant/60 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                      </>
                    )}
                    <input
                      ref={fileRef}
                      type="file"
                      name="cv"
                      required
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setCvName(e.target.files?.[0]?.name ?? "")}
                    />
                  </div>
                </div>

                {/* Why */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Why do you want to become a property inspector? <span className="text-error">*</span>
                  </label>
                  <textarea
                    name="motivation"
                    required
                    rows={5}
                    placeholder="Tell us about your interest in property inspection, relevant experience, and what you hope to achieve..."
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {formState === "error" && (
                  <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 text-sm text-error">
                    Something went wrong. Please try again or email us directly at careers@homeinspectors.ng
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-primary text-on-primary py-5 rounded-lg font-headline font-bold text-lg hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? "Submitting…" : "Submit Application →"}
                </button>

                <p className="text-xs text-on-surface-variant text-center">
                  Your application will be sent to careers@homeinspectors.ng. We typically respond within 5–7 business days.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
