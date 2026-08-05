import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { articles, articlesByCategory } from "@/data/articles";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "مقالات — راهنمای پیمانکاری، مشارکت در ساخت و تاسیسات",
  description:
    "مقالات تخصصی آمود گستر آتیه: راهنمای مشارکت در ساخت، اجرای تاسیسات الکتریکال و مکانیکال، موتورخانه، انتخاب پیمانکار ساختمان و معرفی پروژه‌های شاخص.",
  path: "/blog",
});

export default function BlogIndex() {
  const guides = articlesByCategory("راهنما");
  const projects = articlesByCategory("پروژه");

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <BreadcrumbJsonLd items={[{ name: "مقالات", path: "/blog" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "مقالات آمود گستر آتیه",
            url: `${SITE_URL}/blog`,
            inLanguage: "fa-IR",
            blogPost: articles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              url: `${SITE_URL}/blog/${a.slug}`,
              datePublished: a.date,
            })),
          }),
        }}
      />
      <Navbar />

      <main className="flex-grow">
        <section className="relative border-b border-[var(--line)] bg-grid pb-16 pt-36">
          <div className="amoud-container text-center">
            <span className="eyebrow justify-center mb-5">دانش فنی</span>
            <h1 className="text-4xl font-black text-[var(--ink)] sm:text-5xl">
              مقالات و <span className="text-gradient-gold">راهنماها</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
              راهنمای مشارکت در ساخت، اجرای تاسیسات الکتریکال و مکانیکال،
              موتورخانه و انتخاب پیمانکار — به‌همراه معرفی پروژه‌های شاخص آمود
              گستر آتیه.
            </p>
          </div>
        </section>

        <Section
          title="راهنماهای تخصصی"
          eyebrow="آموزش"
          items={guides}
        />
        <Section
          title="پروژه‌های شاخص"
          eyebrow="نمونه کار"
          items={projects}
        />

        <section className="amoud-container pb-20">
          <div className="rounded-[2rem] border border-[var(--gold)]/25 bg-gradient-to-br from-[#16130c] via-[var(--surface)] to-[#0d0d10] p-10 text-center sm:p-14">
            <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
              پروژه‌ای در دست دارید؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--ink-soft)]">
              برای بررسی مشارکت در ساخت یا دریافت پیشنهاد اجرای تاسیسات با
              کارشناسان ما در ارتباط باشید.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-gold">
                تماس با ما
              </Link>
              <Link href="/contracting-projects" className="btn btn-ghost">
                سوابق اجرایی
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: typeof articles;
}) {
  if (!items.length) return null;
  return (
    <section className="amoud-container py-14">
      <div className="mb-10">
        <span className="eyebrow mb-3">{eyebrow}</span>
        <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
