"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { CONTACT_NUMBER, CONTACT_NUMBER_DISPLAY_LONG } from "@/lib/contact";

const contactMethods = [
  {
    icon: "mail",
    label: "Email",
    value: "info@homeinspectors.ng",
    href: "mailto:info@homeinspectors.ng",
  },
  {
    icon: "call",
    label: "Phone / WhatsApp",
    value: CONTACT_NUMBER_DISPLAY_LONG,
    href: `tel:+${CONTACT_NUMBER}`,
  },
  {
    icon: "language",
    label: "Website",
    value: "www.homeinspectors.ng",
    href: "https://www.homeinspectors.ng",
  },
  {
    icon: "location_on",
    label: "Lagos Office",
    value: "No. 18 Kafayat Abdulrazaq Street, Lekki Phase 1, Lagos",
    href: "#",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "http://instagram.com/homeinspectorng",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: "Facebook",
    href: "http://facebook.com/homeinspectorng",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: "X",
    href: "https://www.x.com/homeinspectorng",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "TikTok",
    href: "http://tiktok.com/homeinspectorng",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://ng.linkedin.com/company/home-inspectors-nigeria-limited",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
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
      <header className="pt-[140px] pb-16 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-6">
            Let&apos;s Talk About Your Property.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you&apos;re ready to book an inspection or just want to ask a question,
            our team is here to help you protect your investment.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact form */}
        <div className="lg:col-span-7">
          <h2 className="font-headline font-bold text-2xl mb-8">Send Us a Message</h2>

          {formState === "success" ? (
            <div className="bg-surface-container border border-primary/30 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="check_circle" className="text-primary text-[40px]" />
              </div>
              <h3 className="font-headline font-bold text-2xl mb-3">Message Sent</h3>
              <p className="text-on-surface-variant mb-8">
                Thanks for reaching out. We&apos;ll get back to you within one business day.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="text-primary font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="name">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="email">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 8XX XXX XXXX"
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="subject">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="" disabled>Select a subject…</option>
                  <option>Book an Inspection</option>
                  <option>Request a Quote</option>
                  <option>General Enquiry</option>
                  <option>Report / Follow-Up</option>
                  <option>Diaspora Services</option>
                  <option>Construction Control</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="message">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your property and what you need…"
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {formState === "error" && (
                <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3 text-sm text-error">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href="mailto:info@homeinspectors.ng" className="underline">info@homeinspectors.ng</a>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Icon name="send" className="text-[18px]" />
                {formState === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container border border-outline-variant rounded-xl p-8">
            <h3 className="font-headline font-bold text-lg mb-6">Contact Information</h3>
            <div className="space-y-5">
              {contactMethods.map((m) => (
                <a key={m.label} href={m.href} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={m.icon} className="text-primary text-[20px]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
                      {m.label}
                    </div>
                    <div className="text-on-surface group-hover:text-primary transition-colors font-medium text-sm">
                      {m.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-xl p-8">
            <h3 className="font-headline font-bold text-lg mb-4">Office Hours</h3>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-on-surface font-medium">8:00am – 6:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-on-surface font-medium">9:00am – 4:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-on-surface-variant">By appointment only</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-xl p-8">
            <h3 className="font-headline font-bold text-lg mb-5">Follow Us</h3>
            <div className="grid grid-cols-3 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex flex-col items-center gap-2 py-3 rounded-xl bg-surface-container-high border border-outline-variant hover:border-primary hover:text-primary text-on-surface-variant transition-colors group"
                >
                  <span className="group-hover:text-primary transition-colors">{s.svg}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="bolt" className="text-primary text-[24px]" />
              <span className="font-headline font-bold">Ready to book now?</span>
            </div>
            <p className="text-sm text-on-surface-variant mb-4">
              Skip the form — go straight to our booking page and secure your slot today.
            </p>
            <Link
              href="/services#booking"
              className="block w-full py-3 bg-primary text-on-primary font-bold rounded-lg text-center text-sm hover:opacity-90 transition-all"
            >
              Book Your Inspection
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
