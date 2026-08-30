import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Become a Certified Property Inspector – HINL",
  description:
    "Join Nigeria's largest network of trained property inspectors. Apply to become a Certified Property Inspector with HINL and earn from professional inspection assignments.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
