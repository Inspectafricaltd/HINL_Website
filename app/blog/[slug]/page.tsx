import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost, formatDate } from "../data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | HINL Blog`,
    description: post.excerpt,
  };
}

function renderContent(text: string) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <h3 key={i} className="font-headline font-bold text-xl mt-8 mb-3 text-on-surface">
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    if (para.match(/^\*\*(.+)\*\*/)) {
      const heading = para.match(/^\*\*(.+?)\*\*/)?.[1] ?? "";
      const rest = para.replace(/^\*\*(.+?)\*\*/, "").trim();
      return (
        <div key={i}>
          <h3 className="font-headline font-bold text-xl mt-8 mb-3 text-on-surface">{heading}</h3>
          {rest && <p className="text-on-surface-variant leading-relaxed mb-4">{rest}</p>}
        </div>
      );
    }
    return (
      <p key={i} className="text-on-surface-variant leading-relaxed mb-4">
        {para}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />

      {/* Post cover image */}
      <div className="relative h-[420px] md:h-[520px] overflow-hidden bg-surface-container-high mt-[72px]">
        <Image
          fill
          src={post.image}
          alt={post.imageAlt}
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
      </div>

      <header className="pb-12 px-6 md:px-12 bg-surface">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors mb-6"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Blog
          </Link>
          <time className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
            {formatDate(post.date)}
          </time>
          <h1 className="font-headline font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-12">
        <article className="prose-hinl">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-12 bg-surface-container-low border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline font-bold text-xl mb-2">Ready for a professional inspection?</h3>
            <p className="text-on-surface-variant text-sm">
              Get an independent, evidence-based assessment of your property.
            </p>
          </div>
          <Link
            href="/services#booking"
            className="shrink-0 bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-headline font-bold text-2xl mb-6">More from the Blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <time className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                    {formatDate(p.date)}
                  </time>
                  <h3 className="font-headline font-bold text-base leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
