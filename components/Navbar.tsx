"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

const serviceLinks = [
  { label: "Standard Home Inspection",   href: "/services/standard-home-inspection" },
  { label: "Move-In Certification",      href: "/services/move-in-certification" },
  { label: "Snag Inspection",            href: "/services/snag-inspection" },
  { label: "Home Health Check",          href: "/services/home-health-check" },
  { label: "No-Utility Inspection",      href: "/services/no-utility-inspection" },
  { label: "Foundation Stage Inspection", href: "/services/foundation-stage-inspection" },
  { label: "Pre-Cover Inspection",       href: "/services/pre-cover-compliance" },
  { label: "Construction Control",       href: "/services/construction-control" },
  { label: "Commercial Inspection",      href: "/services/commercial-inspection" },
  { label: "Global Property Monitoring", href: "/services/global-property-monitoring" },
];

const topLinks = [
  { label: "Diaspora Services",  href: "/diaspora" },
  { label: "Blog",               href: "/blog" },
  { label: "Useful Info",        href: "/useful-information" },
  { label: "About",              href: "/about" },
  { label: "Careers",            href: "/careers" },
  { label: "Contact",            href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href !== "#" && (pathname === href || pathname.startsWith(href + "/"));

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#121415]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <nav className="flex justify-between items-center px-6 md:px-8 py-2 max-w-full mx-auto">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
            <Image src="/images/logo.png" alt="HINL" width={200} height={56} className="h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className={`font-headline uppercase tracking-widest text-sm flex items-center gap-1 transition-colors ${
                  isActive("/services")
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                Services
                <Icon name="keyboard_arrow_down" className="text-[16px] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#1a1c1e] border border-white/10 rounded-xl shadow-2xl p-2 w-72">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-primary/10 text-sm font-body text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <Icon name="chevron_right" className="text-[16px] text-primary/60 shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-primary/10 text-sm font-bold text-primary transition-colors"
                    >
                      <Icon name="payments" className="text-[16px] shrink-0" />
                      View All Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {topLinks.map((link) => {
              const active = isActive(link.href);
              const isCareers = link.href === "/careers";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    active
                      ? "font-headline uppercase tracking-widest text-sm text-primary border-b-2 border-primary pb-1"
                      : "font-headline uppercase tracking-widest text-sm text-on-surface hover:text-primary transition-colors"
                  }
                >
                  {isCareers ? (
                    <span className="flex items-center gap-1.5">
                      {link.label}
                      <span className="text-[9px] font-black uppercase tracking-wider bg-primary text-on-primary px-1.5 py-0.5 rounded leading-none">
                        Hiring
                      </span>
                    </span>
                  ) : link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/services#booking"
              className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-headline font-bold text-sm tracking-tight hover:scale-95 active:scale-90 transition-all duration-300"
            >
              Book Your Inspection
            </Link>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-on-surface transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-on-surface transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-sm bg-[#121415] border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Image src="/images/logo.png" alt="HINL" width={160} height={40} className="h-10 w-auto" />
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-on-surface-variant"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>close</span>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">

          {/* Book CTA */}
          <Link
            href="/services#booking"
            onClick={closeMobile}
            className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-headline font-bold text-sm mb-5 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
            Book Your Inspection
          </Link>

          {/* Services accordion */}
          <div className="mb-1">
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setServicesOpen((v) => !v)}
            >
              <span className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">Services</span>
              <span className={`material-symbols-outlined text-on-surface-variant text-[20px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                keyboard_arrow_down
              </span>
            </button>
            {servicesOpen && (
              <div className="ml-3 border-l border-white/10 pl-3 py-1 flex flex-col gap-0.5">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMobile}
                    className="py-2.5 px-3 text-sm text-on-surface-variant hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={closeMobile}
                  className="py-2.5 px-3 text-sm font-bold text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">payments</span>
                  View All Pricing
                </Link>
              </div>
            )}
          </div>

          {/* Top links */}
          {topLinks.map((link) => {
            const isCareers = link.href === "/careers";
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 font-headline font-bold text-sm uppercase tracking-wider transition-colors ${
                  isActive(link.href) ? "text-primary" : "text-on-surface"
                }`}
              >
                {link.label}
                {isCareers && (
                  <span className="text-[9px] font-black uppercase tracking-wider bg-primary text-on-primary px-1.5 py-0.5 rounded leading-none">
                    Hiring
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-white/10">
          <Link
            href="/terms-of-service"
            onClick={closeMobile}
            className="text-xs text-outline hover:text-primary transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </>
  );
}
