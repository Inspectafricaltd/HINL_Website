import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { getService, generateStaticParams as getParams, services } from "@/lib/services";

export { getParams as generateStaticParams };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} | HINL`,
    description: (service.summary ?? service.description).slice(0, 160),
  };
}

const IMG = {
  hero: "/images/DSC06085-1024x683.jpg",
};

const SERVICE_IMAGES: Record<string, string> = {
  "standard-home-inspection":   "/random-images/DSC06096-1024x683.jpg",
  "move-in-certification":       "/random-images/DSC06142-1024x683.jpg",
  "snag-inspection":             "/random-images/DSC06174-1024x683.jpg",
  "home-health-check":           "/random-images/DSC06168-1024x683.jpg",
  "foundation-stage-inspection": "/random-images/foundation-inspection.png",
  "pre-cover-compliance":        "/random-images/HINL web1.jpg.jpeg",
  "construction-control":        "/random-images/construction-control.jpeg",
  "commercial-inspection":       "/random-images/commercial-inspection.jpeg",
  "global-property-monitoring":  "/random-images/HINL web7.jpg.jpeg",
  "no-utility-inspection":       "/random-images/no-utility.jpeg",
  "new-construction-inspection": "/random-images/HINL web9.JPG.jpeg",
  "thermal-inspection":          "/random-images/HINL web10.JPG.jpeg",
  "zip-level-inspection":        "/random-images/HINL web3.JPG.jpeg",
  "virtual-reality-inspection":  "/random-images/ChatGPT Image Jun 15, 2026, 12_11_42 AM.png",
};

const labelCaps = "text-xs font-bold uppercase tracking-wider";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceImg = SERVICE_IMAGES[slug] ?? "/random-images/DSC06096-1024x683.jpg";
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <header className="relative pt-[140px] pb-24 px-6 md:px-12 overflow-hidden min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image fill className="object-cover object-center" alt="" src={IMG.hero} sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/75 to-surface" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <nav className="flex items-center gap-2 text-xs text-on-surface-variant mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Icon name="chevron_right" className="text-[16px]" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Icon name="chevron_right" className="text-[16px]" />
            <span className="text-on-surface">{service.name}</span>
          </nav>

          {service.badge && (
            <span className={`${labelCaps} text-primary tracking-[0.2em] mb-4 block`}>
              {service.badge}
            </span>
          )}

          <h1 className="font-headline font-bold text-4xl md:text-6xl tracking-tight mb-4 max-w-3xl">
            {service.name}
          </h1>
          <p className="text-xl text-primary font-headline font-semibold mb-6">
            {service.tagline}
          </p>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-10">
            {service.summary ?? service.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/services#booking"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-base hover:opacity-90 transition-all"
            >
              Book This Inspection
            </Link>
            <Link
              href="/services"
              className="border border-primary/50 text-primary px-8 py-4 rounded-lg font-headline font-bold text-base hover:border-primary hover:bg-primary/10 transition-all"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </header>

      <main>

        {/* ── OVERVIEW ── */}
        {service.overview && service.overview.length > 0 && (
          <section className="py-16 px-6 md:px-12 bg-surface-container-lowest">
            <div className="max-w-5xl mx-auto">
              <span className={`${labelCaps} text-primary mb-4 block`}>Overview</span>
              <div className="space-y-5">
                {service.overview.map((para, i) => (
                  <p key={i} className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── TESTIMONIALS (commercial inspection only) ── */}
        {slug === "commercial-inspection" && (
          <section className="py-20 px-6 md:px-12 bg-surface">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="font-headline font-bold text-4xl mb-20 text-center">
                WHAT OUR{" "}
                <span className="bg-primary text-on-primary px-2">CLIENTS SAY</span>
              </h2>
              <TestimonialCarousel />
            </div>
          </section>
        )}

        {/* ── WHY IT MATTERS ── */}
        {service.whyItMatters && (
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-5xl mx-auto">
              <span className={`${labelCaps} text-primary mb-4 block`}>Why It Matters</span>
              {service.whyItMatters.intro && (
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  {service.whyItMatters.intro}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {service.whyItMatters.issues && service.whyItMatters.issues.length > 0 && (
                  <div>
                    <h3 className="font-headline font-semibold text-lg mb-4 text-on-surface">
                      {service.whyItMatters.intro ? "Including:" : "Common Issues Include:"}
                    </h3>
                    <ul className="space-y-2">
                      {service.whyItMatters.issues.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm">
                          <Icon name="warning" className="text-primary/70 text-[18px] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.whyItMatters.benefits && service.whyItMatters.benefits.length > 0 && (
                  <div>
                    <h3 className="font-headline font-semibold text-lg mb-4 text-on-surface">Benefits:</h3>
                    <ul className="space-y-2">
                      {service.whyItMatters.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm">
                          <Icon name="check_circle" className="text-primary text-[18px] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {service.whyItMatters.outro && (
                <p className="text-base text-on-surface-variant italic border-l-2 border-primary pl-4">
                  {service.whyItMatters.outro}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ── WHAT'S INCLUDED + SIDEBAR ── */}
        <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main content */}
          <div className="lg:col-span-8">

            {/* Rich whatsIncluded sections */}
            {service.whatsIncluded && service.whatsIncluded.length > 0 ? (
              <>
                <h2 className="font-headline font-bold text-3xl mb-8">What&apos;s Included</h2>
                <div className="space-y-6 mb-12">
                  {service.whatsIncluded.map((section) => (
                    <div
                      key={section.title}
                      className="bg-surface-container border border-outline-variant rounded-xl p-6"
                    >
                      <h3 className="font-headline font-semibold text-lg mb-2 text-on-surface">
                        {section.title}
                      </h3>
                      {section.intro && (
                        <p className="text-sm text-on-surface-variant mb-3">{section.intro}</p>
                      )}
                      {section.items && section.items.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Fallback to simple features list */
              <>
                <h2 className="font-headline font-bold text-3xl mb-8">What&apos;s Included</h2>
                <ul className="space-y-4 mb-12">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 bg-surface-container p-5 rounded-xl border border-outline-variant">
                      <Icon name="check_circle" className="text-primary text-[24px] mt-0.5 shrink-0" />
                      <span className="text-on-surface leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Phases (multi-tier services) */}
            {service.phases && service.phases.length > 0 && (
              <div className="mb-12">
                <h2 className="font-headline font-bold text-3xl mb-6">Service Tiers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.phases.map((phase) => (
                    <div
                      key={phase.name}
                      className="bg-surface-container border border-outline-variant p-8 rounded-xl hover:border-primary transition-colors"
                    >
                      <h3 className="font-headline font-semibold text-xl mb-2">{phase.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-6">{phase.price}</div>
                      <ul className="space-y-3">
                        {phase.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-on-surface-variant">
                            <Icon name="check_circle" className="text-primary text-[18px] mt-0.5 shrink-0" />
                            <span className="text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inspection image */}
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <Image fill className="object-cover object-top" alt="HINL inspector conducting inspection" src={serviceImg} sizes="(max-width: 1024px) 100vw, 65vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className={`${labelCaps} text-primary`}>Trained HINL Inspectors</span>
                </div>
                <p className="text-on-surface font-headline font-semibold text-lg mt-1">
                  Every inspection conducted to professional standards.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 self-start sticky top-24">
            {/* Price card */}
            <div className="bg-surface-container border-2 border-primary p-8 rounded-xl">
              <div className={`${labelCaps} text-on-surface-variant mb-2`}>Starting from</div>
              <div className="text-4xl font-bold text-primary mb-1">{service.price}</div>
              {service.priceNote && (
                <div className="text-sm text-on-surface-variant mb-6">{service.priceNote}</div>
              )}
              {!service.priceNote && <div className="mb-6" />}
              <Link
                href="/services#booking"
                className="block w-full py-4 bg-primary text-on-primary font-bold rounded-lg text-center hover:opacity-90 transition-all mb-4"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="block w-full py-4 border border-outline-variant text-on-surface font-bold rounded-lg text-center hover:border-primary hover:text-primary transition-all"
              >
                Ask a Question
              </Link>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Icon name="verified" className="text-primary text-[20px]" />
                  <span>Trained HINL Inspectors</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Icon name="timer" className="text-primary text-[20px]" />
                  <span>Confirmed within 48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Icon name="description" className="text-primary text-[20px]" />
                  <span>Detailed written report</span>
                </div>
              </div>
            </div>

            {/* Best for */}
            <div className="bg-surface-container-low border border-outline-variant p-6 rounded-xl">
              <div className={`${labelCaps} text-on-surface-variant mb-4`}>Best For</div>
              <ul className="space-y-3">
                {service.bestFor.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <Icon name="person_check" className="text-primary text-[18px] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* ── WHO IS THIS FOR ── */}
        {service.whoIsItFor && service.whoIsItFor.length > 0 && (
          <section className="py-16 px-6 md:px-12 bg-surface-container-lowest">
            <div className="max-w-[1280px] mx-auto">
              <span className={`${labelCaps} text-primary mb-4 block`}>Who Is This Service For</span>
              <h2 className="font-headline font-bold text-3xl mb-8">Who Benefits From This Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.whoIsItFor.map((audience) => (
                  <div
                    key={audience.type}
                    className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary transition-colors"
                  >
                    <h3 className="font-headline font-semibold text-base mb-2 text-primary">
                      {audience.type}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{audience.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── WHAT YOU RECEIVE ── */}
        {service.whatYouReceive && service.whatYouReceive.length > 0 && (
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-[1280px] mx-auto">
              <span className={`${labelCaps} text-primary mb-4 block`}>Deliverables</span>
              <h2 className="font-headline font-bold text-3xl mb-8">What You Receive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whatYouReceive.map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface-container border border-outline-variant rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name="description" className="text-primary text-[20px]" />
                      </div>
                      <h3 className="font-headline font-semibold text-base text-on-surface leading-snug pt-1">
                        {item.title}
                      </h3>
                    </div>
                    {item.intro && (
                      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">{item.intro}</p>
                    )}
                    {item.items && item.items.length > 0 && (
                      <ul className="space-y-1.5">
                        {item.items.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Monitoring Frequency (GPM only) */}
              {service.monitoringFrequency && service.monitoringFrequency.length > 0 && (
                <div className="mt-8 bg-surface-container border border-outline-variant rounded-xl p-6">
                  <h3 className="font-headline font-semibold text-base text-on-surface mb-4">
                    Monitoring Frequency Options
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.monitoringFrequency.map((freq) => (
                      <span
                        key={freq}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full"
                      >
                        {freq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── LIMITATIONS ── */}
        {service.limitations && (
          <section className="py-12 px-6 md:px-12 bg-surface-container-lowest">
            <div className="max-w-[1280px] mx-auto">
              <div className="bg-surface-container border border-outline-variant rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="info" className="text-on-surface-variant text-[24px] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">
                      Scope & Limitations
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                      {service.limitations.intro}
                    </p>
                    {service.limitations.items && service.limitations.items.length > 0 && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-4">
                        {service.limitations.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="w-1 h-1 bg-on-surface-variant rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {service.limitations.outro && (
                      <p className="text-sm text-on-surface-variant italic">
                        {service.limitations.outro}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── WHY CHOOSE HINL + CTA ── */}
        {(service.whyChooseHINL || service.cta) && (
          <section className="py-16 px-6 md:px-12 bg-surface">
            <div className="max-w-5xl mx-auto text-center">
              {service.whyChooseHINL && service.whyChooseHINL.length > 0 && (
                <>
                  <span className={`${labelCaps} text-primary mb-4 block`}>Why Choose HINL</span>
                  <div className="space-y-4 mb-10">
                    {service.whyChooseHINL.map((para, i) => (
                      <p key={i} className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </>
              )}
              {service.cta && (
                <div className="bg-surface-container border border-outline-variant rounded-2xl p-10">
                  <h2 className="font-headline font-bold text-2xl md:text-3xl text-on-surface mb-3">
                    {service.cta.headline}
                  </h2>
                  <p className="text-primary font-headline font-semibold text-lg mb-8">
                    {service.cta.tagline}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/services#booking"
                      className="bg-primary text-on-primary px-10 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
                    >
                      Book Your Inspection
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-primary text-primary px-10 py-4 rounded-lg font-headline font-bold hover:bg-primary/10 transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}


        {/* ── TRUST STRIP ── */}
        <section className="bg-surface-container-low border-y border-outline-variant py-12 px-6">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "star", label: "5-Star Google Rating" },
              { icon: "workspace_premium", label: "100+ Years Combined Experience" },
              { icon: "verified_user", label: "Independent of Contractors" },
              { icon: "savings", label: "Over ₦200M Saved for Clients" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <Icon name={stat.icon} className="text-primary text-[32px]" fill />
                <span className="text-sm font-bold text-on-surface">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto">
          <h2 className="font-headline font-bold text-3xl mb-8">Other Inspection Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-surface-container border border-outline-variant p-6 rounded-xl hover:border-primary transition-all hover:bg-surface-container-high"
              >
                <Icon name={s.icon} className="text-primary text-[36px] mb-4" />
                <h3 className="font-headline font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{s.tagline}</p>
                <div className="text-primary font-bold">{s.price}</div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              View all services & pricing
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
