import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LanguageToggle from "@/components/LanguageToggle";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HINL | Building quality verified — Home Inspections Nigeria",
  description:
    "Independent property inspections for residential and commercial assets across Nigeria. HINL reveals hidden defects, electrical, and legal risks so you can invest with absolute certainty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${inter.variable}`}>
      <body className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary antialiased">
        {children}
        <WhatsAppWidget />
        <LanguageToggle />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            if (sessionStorage.getItem('hinl_notranslate') === '1') {
              sessionStorage.removeItem('hinl_notranslate');
              return;
            }
            new google.translate.TranslateElement(
              { pageLanguage: 'en', includedLanguages: 'fr,ar,de,pt,sw', autoDisplay: false },
              'google_translate_element'
            );
          }
        `}</Script>
      </body>
    </html>
  );
}
