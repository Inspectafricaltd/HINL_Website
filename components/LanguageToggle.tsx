"use client";

import { useState, useEffect, useRef } from "react";

const LANGS = [
  { code: "en", label: "English",    flag: "🇬🇧", gt: "en" },
  { code: "fr", label: "French",     flag: "🇫🇷", gt: "fr" },
  { code: "ar", label: "Arabic",     flag: "🇸🇦", gt: "ar" },
  { code: "de", label: "German",     flag: "🇩🇪", gt: "de" },
  { code: "pt", label: "Portuguese", flag: "🇵🇹", gt: "pt" },
  { code: "sw", label: "Swahili",    flag: "🇹🇿", gt: "sw" },
];

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          opts: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

function getCookieLang() {
  if (typeof document === "undefined") return LANGS[0];
  const m = document.cookie.match(/googtrans=\/en\/([a-z]+)/);
  return m ? (LANGS.find((l) => l.gt === m[1]) ?? LANGS[0]) : LANGS[0];
}

function setGTCookie(code: string) {
  document.cookie = `googtrans=/en/${code}; path=/;`;
  document.cookie = `googtrans=/en/${code}; path=/; domain=.${location.hostname};`;
}

function clearGTCookie() {
  const exp = "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = `googtrans=; ${exp}`;
  document.cookie = `googtrans=; ${exp} domain=${location.hostname};`;
  document.cookie = `googtrans=; ${exp} domain=.${location.hostname};`;
}

export default function LanguageToggle() {
  const [open, setOpen]       = useState(false);
  const [current, setCurrent] = useState(LANGS[0]);
  const ref                   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(getCookieLang());
  }, []);

  // Inject font-fix styles directly so they bypass any CSS build cache
  useEffect(() => {
    if (document.getElementById("gt-font-fix")) return;
    const style = document.createElement("style");
    style.id = "gt-font-fix";
    style.textContent = `
      font, .translated-ltr font, .translated-rtl font {
        font-family: inherit !important;
        font-size: inherit !important;
        line-height: inherit !important;
        color: inherit !important;
        vertical-align: inherit !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    function outside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);

  function pick(lang: typeof LANGS[0]) {
    setOpen(false);

    if (lang.gt === "en") {
      setCurrent(LANGS[0]);
      clearGTCookie();
      // Flag sessionStorage before reload — googleTranslateElementInit reads this
      // and skips initialisation, so the reloaded page stays in English
      sessionStorage.setItem("hinl_notranslate", "1");
      location.reload();
      return;
    }

    setCurrent(lang);
    setGTCookie(lang.gt);

    // Trigger Google Translate via its hidden combo select
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = lang.gt;
      combo.dispatchEvent(new Event("change"));
    } else {
      // GT not ready yet — cookie is set, reload will apply it
      window.location.reload();
    }
  }

  return (
    <div ref={ref} className="fixed bottom-6 left-6 z-50">
      {open && (
        <div
          className="absolute bottom-full left-0 mb-3 rounded-xl overflow-hidden shadow-2xl border border-white/10"
          style={{ background: "#1a1c1e", minWidth: 180 }}
        >
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => pick(lang)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-body text-left transition-colors hover:bg-white/5 ${
                current.code === lang.code ? "text-primary bg-primary/10" : "text-on-surface"
              }`}
            >
              <span className="text-xl leading-none">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
              {current.code === lang.code && (
                <span className="ml-auto text-primary text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-xl border border-white/10 font-headline font-bold text-sm text-on-surface transition-all hover:border-primary hover:text-primary"
        style={{ background: "#1a1c1e" }}
        aria-label="Change language"
        aria-expanded={open}
      >
        <span className="text-xl leading-none">{current.flag}</span>
        <span className="uppercase tracking-wider">{current.code.toUpperCase()}</span>
        <svg
          width={12} height={12} viewBox="0 0 12 12" fill="currentColor"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 8L1 3h10z" />
        </svg>
      </button>

      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
