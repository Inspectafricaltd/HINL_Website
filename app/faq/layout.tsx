import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | HINL – Home Inspection Nigeria Limited",
  description:
    "Frequently asked questions about HINL property inspections, booking, pricing, and reports.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
