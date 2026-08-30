import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, formatDate } from "./data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | HINL – Home Inspection Nigeria Limited",
  description:
    "Expert articles on property inspection, home buying guides, and building quality in Nigeria.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <header className="pt-[140px] pb-16 px-6 md:px-12 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            HINL Insights
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-6">
            Property Inspection Blog
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Expert guides on home inspections, what to look for when buying property, and how to protect your real estate investment in Nigeria.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface-container border border-outline-variant rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
            >
              <div className="relative h-52 overflow-hidden bg-surface-container-high">
                <Image
                  fill
                  src={post.image}
                  alt={post.imageAlt}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/60 to-transparent" />
              </div>
              <div className="p-8">
                <time className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
                  {formatDate(post.date)}
                </time>
                <h2 className="font-headline font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-headline font-bold text-sm hover:gap-3 transition-all"
                >
                  Read Article
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-surface-container border border-outline-variant rounded-2xl p-10 text-center">
          <h3 className="font-headline font-bold text-2xl mb-3">
            Ready to protect your property investment?
          </h3>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
            Book a professional property inspection with Nigeria&apos;s leading inspection team.
          </p>
          <Link
            href="/services#booking"
            className="bg-primary text-on-primary px-10 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
          >
            Book an Inspection
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
