import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/ArticleBody";
import ArticleCard from "@/components/ArticleCard";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/data/articles";
import { pageMetadata, SITE_URL, SITE_NAME } from "@/lib/seo";
import { faDate } from "@/lib/date";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle,
    description: article.description,
    path: `/blog/${article.slug}`,
    keywords: article.keywords,
    image: article.cover ?? "/brand/logo.png",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.related
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <BreadcrumbJsonLd
        items={[
          { name: "مقالات", path: "/blog" },
          { name: article.title, path: `/blog/${article.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            image: article.cover
              ? `${SITE_URL}${article.cover}`
              : `${SITE_URL}/brand/logo.png`,
            datePublished: article.date,
            dateModified: article.date,
            inLanguage: "fa-IR",
            keywords: article.keywords.join("، "),
            author: { "@type": "Organization", name: SITE_NAME },
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${article.slug}`,
            },
          }),
        }}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="relative border-b border-[var(--line)] bg-grid pb-12 pt-32">
          <div className="amoud-container max-w-3xl">
            <nav
              aria-label="مسیر صفحه"
              className="mb-6 flex flex-wrap items-center gap-1 text-xs text-[var(--ink-muted)]"
            >
              <Link href="/" className="hover:text-[var(--gold)]">
                خانه
              </Link>
              <ChevronLeft className="h-3.5 w-3.5" />
              <Link href="/blog" className="hover:text-[var(--gold)]">
                مقالات
              </Link>
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="text-[var(--ink-soft)]">{article.category}</span>
            </nav>

            <h1 className="text-3xl font-black leading-[1.35] text-[var(--ink)] sm:text-4xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[var(--ink-muted)]">
              <time dateTime={article.date}>{faDate(article.date)}</time>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readingMinutes} دقیقه مطالعه
              </span>
              <span className="rounded-full border border-[var(--gold)]/30 px-3 py-1 text-xs font-bold text-[var(--gold)]">
                {article.category}
              </span>
            </div>
          </div>
        </section>

        <article className="amoud-container max-w-3xl py-12">
          {article.cover && (
            <figure className="mb-10 overflow-hidden rounded-3xl border border-[var(--line)]">
              <img
                src={article.cover}
                alt={article.coverAlt ?? article.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          )}

          {/* Project fact box */}
          {article.facts && (
            <dl className="mb-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {article.facts.map((f) => (
                <div key={f.label} className="bg-[var(--surface)] p-5">
                  <dt className="text-xs text-[var(--ink-muted)]">{f.label}</dt>
                  <dd className="mt-1.5 font-bold text-[var(--ink)]">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <ArticleBody blocks={article.blocks} />

          {/* CTA */}
          <div className="mt-14 rounded-3xl border border-[var(--gold)]/25 bg-gradient-to-br from-[#16130c] via-[var(--surface)] to-[#0d0d10] p-8 sm:p-10">
            <h2 className="text-xl font-black text-[var(--ink)] sm:text-2xl">
              مشاوره رایگان می‌خواهید؟
            </h2>
            <p className="mt-3 leading-8 text-[var(--ink-soft)]">
              کارشناسان آمود گستر آتیه آماده بررسی پروژه شما هستند.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="tel:+982144711222" className="btn btn-gold">
                ۰۲۱-۴۴۷۱۱۲۲۲
              </a>
              {article.links?.map((l) => (
                <Link key={l.href} href={l.href} className="btn btn-ghost">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="amoud-container py-14">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-black text-[var(--ink)]">
                مطالب مرتبط
              </h2>
              <Link href="/blog" className="btn btn-ghost !py-2.5 !text-sm">
                همه مقالات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
