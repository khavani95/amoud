import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { articles } from "@/data/articles";

/** Latest three articles on the homepage — internal links into the blog. */
export default function LatestArticles() {
  const latest = articles.slice(0, 3);
  if (!latest.length) return null;

  return (
    <section className="amoud-container py-16">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow mb-4">دانش فنی</span>
          <h2 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
            آخرین <span className="text-gradient-gold">مقالات</span>
          </h2>
        </div>
        <Link href="/blog" className="btn btn-ghost !py-2.5">
          همه مقالات
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
