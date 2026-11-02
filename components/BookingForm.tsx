"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CONTACT_NUMBER } from "@/lib/contact";

const serviceGroups = [
  {
    group: "Residential Inspections",
    options: [
      { label: "Standard Home Inspection — From ₦500,000",         value: "Standard Home Inspection — From ₦500,000" },
      { label: "Move-In Certification — From ₦350,000",            value: "Move-In Certification — From ₦350,000" },
      { label: "Snag Inspection — From ₦700,000",                  value: "Snag Inspection — From ₦700,000" },
      { label: "No-Utility Inspection — From ₦400,000",            value: "No-Utility Inspection — From ₦400,000" },
      { label: "Foundation Inspection — From ₦350,000",            value: "Foundation Inspection — From ₦350,000" },
      { label: "Pre-Cover Inspection — From ₦400,000",             value: "Pre-Cover Inspection — From ₦400,000" },
    ],
  },
  {
    group: "Construction & Commercial",
    options: [
      { label: "Construction Control — Core (From 1% or ₦500k/mo)",    value: "Construction Control — Core" },
      { label: "Construction Control — Premium (From 2% or ₦750k/mo)", value: "Construction Control — Premium" },
      { label: "Construction Control — Single Site Visit (From ₦250,000)", value: "Construction Control — Single Site Visit" },
      { label: "Commercial Inspection & Consultancy — On Request",         value: "Commercial Inspection & Consultancy" },
      { label: "Global Property Monitoring — On Request",                  value: "Global Property Monitoring" },
    ],
  },
  {
    group: "Diaspora Packages",
    options: [
      { label: "Diaspora Essential™ — From ₦900,000",   value: "Diaspora Essential™ — From ₦900,000" },
      { label: "Diaspora Plus™ — From ₦1,500,000",      value: "Diaspora Plus™ — From ₦1,500,000" },
      { label: "Diaspora Complete™ — From ₦2,000,000",  value: "Diaspora Complete™ — From ₦2,000,000" },
    ],
  },
];

const addOns = [
  { name: "Post-Repair Follow-Up Inspection",   price: "From ₦200,000" },
  { name: "Full Thermal Imaging Scan",           price: "From ₦150,000" },
  { name: "Moisture Intrusion Investigation",    price: "From ₦250,000" },
  { name: "Advanced HVAC Evaluation",            price: "From ₦150,000" },
  { name: "Advanced Electrical Evaluation",      price: "From ₦100,000" },
  { name: "Advanced Plumbing Evaluation",        price: "From ₦100,000" },
  { name: "Swimming Pool Inspection",            price: "From ₦100,000" },
  { name: "Drone Inspection",                    price: "From ₦100,000" },
  { name: "Cinema Room Inspection",              price: "From ₦100,000" },
  { name: "Septic System Inspection",            price: "From ₦100,000" },
  { name: "Smart Home System Review",            price: "From ₦100,000" },
  { name: "Virtual / Video Walkthrough",         price: "From ₦100,000" },
];

const field =
  "w-full bg-background border border-outline-variant focus:border-primary focus:ring-0 text-on-surface rounded-lg px-4 py-3.5 transition-all";
const label =
  "text-xs font-bold uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value;
    const email   = (form.elements.namedItem("email")   as HTMLInputElement).value;
    const phone   = (form.elements.namedItem("phone")   as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const date    = (form.elements.namedItem("date")    as HTMLInputElement).value;
    const address = (form.elements.namedItem("address") as HTMLTextAreaElement).value;

    const addonsSelected: string[] = [];
    form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked').forEach((cb) => {
      addonsSelected.push(cb.value);
    });

    const lines = [
      "🏠 *NEW INSPECTION BOOKING*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Service:* ${service}`,
      date    ? `*Preferred Date:* ${date}`    : null,
      address ? `*Property Address:* ${address}` : null,
      addonsSelected.length ? `*Add-Ons:* ${addonsSelected.join(", ")}` : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="bg-surface-container border border-outline-variant p-6 md:p-8 rounded-xl shadow-2xl">
      {submitted ? (
        <div className="flex flex-col items-center text-center py-10 gap-4">
          <span className="material-symbols-outlined text-primary text-6xl">whatsapp</span>
          <h3 className="text-2xl font-headline font-bold">Opening WhatsApp…</h3>
          <p className="text-on-surface-variant max-w-sm">
            Your booking details have been pre-filled in WhatsApp. Just hit <strong>Send</strong> and our team will confirm your slot within 2 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 text-primary font-bold uppercase text-xs tracking-widest underline underline-offset-8"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1 group">
              <label className={label}>Full Name *</label>
              <input className={field} placeholder="John Doe" type="text" name="name" required />
            </div>
            <div className="space-y-1 group">
              <label className={label}>Email Address *</label>
              <input className={field} placeholder="john@example.com" type="email" name="email" required />
            </div>
          </div>

          {/* Phone + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1 group">
              <label className={label}>Phone Number *</label>
              <input
                className={field}
                placeholder="+234 800 000 0000"
                type="tel"
                name="phone"
                required
              />
            </div>
            <div className="space-y-1 group">
              <label className={label}>Select Service *</label>
              <select className={field} name="service" defaultValue="" required>
                <option value="" disabled>Select a service…</option>
                {serviceGroups.map((g) => (
                  <optgroup key={g.group} label={g.group}>
                    {g.options.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* Date + Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1 group">
              <label className={label}>Preferred Inspection Date</label>
              <input className={field} type="date" name="date" />
            </div>
            <div className="space-y-1 group">
              <label className={label}>Property Address *</label>
              <input
                className={field}
                name="address"
                placeholder="Street, City, State"
                required
              />
            </div>
          </div>

          {/* Add-Ons */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                Add-On Services (Optional)
              </label>
              <p className="text-xs text-on-surface-variant/70">Select any extras to include with your inspection.</p>
            </div>
            <div className="border border-outline-variant rounded-lg p-4 bg-background grid grid-cols-1 md:grid-cols-2 gap-2">
              {addOns.map((addon) => (
                <label key={addon.name} className="flex items-center justify-between gap-3 cursor-pointer group py-1.5 px-2 rounded hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      className="rounded-sm bg-surface-container border-outline-variant text-primary focus:ring-0 shrink-0"
                      type="checkbox"
                      value={addon.name}
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">{addon.name}</span>
                  </div>
                  <span className="text-xs font-bold text-primary shrink-0">{addon.price}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            className="w-full py-5 bg-[#25D366] text-white font-headline font-bold text-lg rounded-lg hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? "Opening WhatsApp…" : "Book via WhatsApp"}{" "}
            {!loading && (
              <svg viewBox="0 0 32 32" width={22} height={22} fill="white" aria-hidden="true">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.675 4.797 1.846 6.787L2 30l7.42-1.82A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 19.46c-.344-.172-2.035-1.004-2.35-1.118-.316-.114-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.767-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.702.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.204 1.177-1.204 2.868 0 1.692 1.233 3.326 1.405 3.556.172.23 2.428 3.707 5.882 5.198.822.355 1.464.567 1.964.726.825.263 1.577.226 2.171.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.229-.66-.401z" />
              </svg>
            )}
          </button>

          <p className="text-center text-xs text-on-surface-variant">
            By clicking Confirm Booking, you agree to our{" "}
            <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}
