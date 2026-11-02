"use client";

import { CONTACT_NUMBER } from "@/lib/contact";

export default function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${CONTACT_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20an%20HINL%20property%20inspection.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HINL on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 bg-[#1a1c1e] text-on-surface text-sm font-bold px-4 py-2 rounded-xl shadow-xl border border-white/10 whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ background: "#25D366" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.675 4.797 1.846 6.787L2 30l7.42-1.82A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.592l-.418-.248-4.328 1.063 1.094-4.21-.272-.433A11.462 11.462 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.54c-.344-.172-2.035-1.004-2.35-1.118-.316-.114-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.767-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.702.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.204 1.177-1.204 2.868 0 1.692 1.233 3.326 1.405 3.556.172.23 2.428 3.707 5.882 5.198.822.355 1.464.567 1.964.726.825.263 1.577.226 2.171.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.229-.66-.401z" />
        </svg>
      </div>
    </a>
  );
}
