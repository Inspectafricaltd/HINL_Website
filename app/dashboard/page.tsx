import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Property Monitoring Dashboard | HINL",
  description:
    "Precision oversight of your active inspections, completed reports, and property monitoring queue.",
};

const featuredImg = "/images/WhatsApp-Image-2026-01-27-at-8.42.14-PM-e1770911886573.jpeg";
const avatarImg = "/images/logo.png";

const nav = [
  { icon: "dashboard", label: "Overview", active: true },
  { icon: "analytics", label: "My Inspections", active: false },
  { icon: "folder_open", label: "Report Archive", active: false },
  { icon: "support_agent", label: "Support", active: false },
];

const phases = [
  { label: "Foundation", state: "done" },
  { label: "Structural", state: "done" },
  { label: "Mechanical", state: "partial" },
  { label: "Final Audit", state: "pending" },
];

export default function Dashboard() {
  return (
    <div className="bg-surface text-on-surface antialiased font-headline min-h-screen">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col border-r border-surface-container-highest/15 bg-gradient-to-r from-surface-container-low to-surface z-50">
        <div className="px-6 py-8">
          <Link
            href="/"
            className="block mb-10"
          >
            <Image src="/images/logo.png" alt="HINL" width={160} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="space-y-1">
            {nav.map((item) => (
              <a
                key={item.label}
                href="#"
                className={
                  item.active
                    ? "flex items-center gap-3 px-4 py-3 rounded bg-surface-container-high text-primary border-l-4 border-primary font-medium text-sm hover:translate-x-1 transition-transform duration-200"
                    : "flex items-center gap-3 px-4 py-3 rounded text-outline hover:bg-surface-container-high hover:text-on-surface font-medium text-sm hover:translate-x-1 transition-transform duration-200"
                }
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-auto px-6 py-8">
          <div className="p-4 bg-surface-container rounded-lg border-l-2 border-primary/30 mb-6">
            <p className="text-[10px] uppercase tracking-widest text-outline mb-2">
              Need Assistance?
            </p>
            <button className="w-full py-2 bg-primary text-on-primary text-xs font-bold rounded uppercase tracking-tighter active:scale-95 transition-all">
              New Request
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline/20 relative">
              <Image
                fill
                className="object-cover"
                alt="User profile"
                src={avatarImg}
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Client Portal</p>
              <p className="text-[10px] text-outline uppercase tracking-tight">
                HINL Audit Access
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 min-h-screen p-8 lg:p-12 bg-surface">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <p className="text-primary font-label uppercase tracking-[0.3em] text-xs mb-2">
              Precision Oversight
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface max-w-2xl leading-none">
              Property <span className="text-primary/80">Monitoring</span>{" "}
              Dashboard
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-outline text-xs uppercase tracking-widest">
              Last Updated
            </p>
            <p className="text-on-surface font-mono">OCT 24, 2023 · 14:30 WAT</p>
          </div>
        </header>

        {/* Metrics */}
        <div className="editorial-grid mb-12">
          <div className="col-span-12 md:col-span-4 bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-outline text-xs uppercase tracking-[0.2em] mb-4">
                Active Inspections
              </p>
              <p className="text-5xl font-black text-on-surface tracking-tighter">
                04
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary text-xs">
                <Icon name="trending_up" className="text-sm" />
                <span>2 projects added this week</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon name="foundation" className="text-[120px]" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-outline text-xs uppercase tracking-[0.2em] mb-4">
                Reports Completed
              </p>
              <p className="text-5xl font-black text-on-surface tracking-tighter">
                12
              </p>
              <div className="mt-6 flex items-center gap-2 text-outline text-xs">
                <Icon name="verified" className="text-sm" />
                <span>View Archive for full history</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon name="description" className="text-[120px]" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-primary p-8 rounded-lg relative overflow-hidden group">
            <div className="relative z-10 text-on-primary">
              <p className="text-on-primary/60 text-xs uppercase tracking-[0.2em] mb-4">
                Next Inspection
              </p>
              <p className="text-3xl font-black tracking-tight leading-tight">
                OCT 28 <br />
                <span className="text-xl">Lekki Phase 1</span>
              </p>
              <button className="mt-6 px-4 py-2 border border-on-primary/30 text-xs font-bold uppercase rounded hover:bg-on-primary hover:text-primary transition-colors">
                Add to Calendar
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Icon name="event" className="text-[120px]" />
            </div>
          </div>
        </div>

        {/* Split */}
        <div className="editorial-grid items-start">
          {/* Featured */}
          <section className="col-span-12 lg:col-span-7 space-y-8">
            <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="relative h-64">
                <Image
                  fill
                  className="object-cover opacity-80"
                  alt="Featured luxury villa in Lagos"
                  src={featuredImg}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                <div className="absolute top-6 left-6 px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-sm">
                  In Progress
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                      The Pantheon Residence
                    </h2>
                    <p className="text-outline text-sm">
                      Plot 42A, Victoria Island, Lagos
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest text-outline">
                      Audit Score
                    </p>
                    <p className="text-3xl font-black text-primary tracking-tighter">
                      84%
                    </p>
                  </div>
                </div>

                {/* Progress Tracker */}
                <div className="mb-10">
                  <div className="flex justify-between text-xs mb-3 font-bold uppercase tracking-wider">
                    <span className="text-on-surface">
                      Structural Integrity Audit
                    </span>
                    <span className="text-primary">Phase 3 of 4</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary" style={{ width: "75%" }} />
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {phases.map((phase) => (
                      <div key={phase.label} className="flex flex-col gap-1">
                        <div
                          className={
                            phase.state === "done"
                              ? "h-1 bg-primary rounded-full"
                              : phase.state === "partial"
                                ? "h-1 bg-primary/40 rounded-full"
                                : "h-1 bg-surface-container-highest rounded-full"
                          }
                        />
                        <span
                          className={
                            phase.state === "done"
                              ? "text-[9px] text-primary uppercase font-bold"
                              : phase.state === "partial"
                                ? "text-[9px] text-on-surface/40 uppercase font-bold"
                                : "text-[9px] text-outline/30 uppercase font-bold"
                          }
                        >
                          {phase.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface p-6 rounded-lg border-l-2 border-primary/20">
                  <h4 className="text-xs uppercase tracking-widest text-outline mb-4">
                    Latest Inspector Note
                  </h4>
                  <p className="text-on-surface leading-relaxed text-sm italic">
                    &quot;The reinforced concrete columns in the basement show
                    optimal curing density. Proceeding to non-destructive
                    testing of the mezzanine support structure tomorrow.&quot;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <Icon
                        name="account_circle"
                        className="text-sm text-primary"
                      />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider">
                      Engr. Chinedu Okafor{" "}
                      <span className="text-outline font-normal ml-2">
                        Lead Auditor
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Queue */}
          <section className="col-span-12 lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-outline font-bold px-2">
              Property Monitoring Queue
            </h3>

            {/* Card 1 */}
            <div className="bg-surface-container-low p-6 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="flex justify-between items-center mb-4">
                <div className="px-2 py-1 bg-surface-container-highest text-outline text-[9px] font-bold uppercase tracking-widest rounded-sm">
                  Scheduled
                </div>
                <Icon
                  name="more_vert"
                  className="text-outline group-hover:text-primary transition-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-1">
                Maitama Heights Annex
              </h4>
              <p className="text-outline text-xs mb-6">
                Abuja, FCT · 5 Bedroom Detached
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-outline/10">
                <div className="flex items-center gap-2">
                  <Icon
                    name="calendar_month"
                    className="text-sm text-primary"
                  />
                  <span className="text-xs text-on-surface font-medium">
                    Nov 02, 2023
                  </span>
                </div>
                <button className="text-[10px] uppercase font-bold tracking-widest text-primary border-b border-primary/0 hover:border-primary/100 transition-all">
                  View Logistics
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-low p-6 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group border-l-2 border-primary">
              <div className="flex justify-between items-center mb-4">
                <div className="px-2 py-1 bg-primary/20 text-primary text-[9px] font-bold uppercase tracking-widest rounded-sm">
                  Report Ready
                </div>
                <Icon
                  name="download"
                  className="text-outline group-hover:text-primary transition-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-1">
                Eko Atlantic Luxury Suite
              </h4>
              <p className="text-outline text-xs mb-6">
                Victoria Island · Tower C, Level 15
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-outline/10">
                <div className="flex items-center gap-2">
                  <Icon name="verified" className="text-sm text-primary" />
                  <span className="text-xs text-on-surface font-medium">
                    Completed Oct 20
                  </span>
                </div>
                <button className="text-[10px] uppercase font-bold tracking-widest text-on-surface bg-surface-container-highest px-3 py-1 rounded hover:bg-primary hover:text-on-primary transition-all">
                  Open PDF
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-low p-6 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="flex justify-between items-center mb-4">
                <div className="px-2 py-1 bg-surface-container-highest text-outline text-[9px] font-bold uppercase tracking-widest rounded-sm">
                  Queued
                </div>
                <Icon
                  name="more_vert"
                  className="text-outline group-hover:text-primary transition-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-1">
                Ikeja GRA Development
              </h4>
              <p className="text-outline text-xs mb-6">
                Lagos Mainland · Phase II Foundation
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-outline/10">
                <div className="flex items-center gap-2">
                  <Icon name="schedule" className="text-sm text-outline" />
                  <span className="text-xs text-outline font-medium">
                    Awaiting Surveyor
                  </span>
                </div>
                <button className="text-[10px] uppercase font-bold tracking-widest text-outline">
                  Pending
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-24 w-full py-12 flex flex-col items-center gap-6 border-t border-surface-container-highest/15">
          <div className="flex gap-8">
            <a className="text-outline text-xs hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-outline text-xs hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-outline text-xs hover:text-primary transition-colors" href="#">
              Contact Expert
            </a>
          </div>
          <p className="text-xs text-outline">
            © 2024 Home Inspection Nigeria Limited. Building quality verified.
          </p>
        </footer>
      </main>
    </div>
  );
}
