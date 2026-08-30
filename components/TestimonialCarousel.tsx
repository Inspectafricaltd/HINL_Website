"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/Icon";

const testimonials = [
  {
    quote:
      "If you are looking to buy or build a home in Nigeria (especially if you are in the Diaspora), you ABSOLUTELY must hire Home Inspectors Nigeria. I contacted multiple home inspection companies (including the popular Snag Inspector on Instagram) and I found Home Inspectors Nigeria to by far be the most professional and most closely aligned with the service expectations that we have here in the US.",
    name: "Sade Prem",
    title: "Diaspora Client, United States",
    icon: "flight_land",
  },
  {
    quote:
      "Superb quality service. They did a very detailed inspection on a property I bought and showed me deficiencies that would have cost me a lot that I wasn't even aware of. I highly recommend especially for people like myself that live in Canada, the US, UK or any country outside Nigeria.",
    name: "George Martins",
    title: "Canadian-Based Investor",
    icon: "person",
  },
  {
    quote:
      "Home inspectors will go far and beyond to deliver... They were able to provide the best inspections on almost all our properties, and I dont think I can do anything else when it comes to real estate without engaging their Services.",
    name: "DeeGlobal Realties",
    title: "Property Manager, Lekki, Lagos",
    icon: "corporate_fare",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 8000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full px-4">
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
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                    <Icon name={t.icon} className="text-primary text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-2xl text-primary">
                      {t.name}
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={prev}
          className="w-12 h-12 border border-outline-variant rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
          aria-label="Previous testimonial"
        >
          <Icon name="arrow_back" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 border border-outline-variant rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
          aria-label="Next testimonial"
        >
          <Icon name="arrow_forward" />
        </button>
      </div>
    </div>
  );
}
