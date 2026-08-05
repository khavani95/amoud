import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { faDate } from "@/lib/date";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${article.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d10]">
          {article.cover ? (
            <img
              src={article.cover}
              alt={article.coverAlt ?? article.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/brand/logo.png"
                alt=""
                aria-hidden="true"
                className="logo-invert h-14 w-auto opacity-20"
              />
            </div>
          )}
          <span className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-[var(--gold)] backdrop-blur">
            {article.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h2 className="text-lg font-bold leading-8 text-[var(--ink)] transition-colors group-hover:text-[var(--gold)]">
            {article.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--ink-muted)]">
            {article.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5 text-xs text-[var(--ink-muted)]">
            <time dateTime={article.date}>{faDate(article.date)}</time>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readingMinutes} دقیقه
            </span>
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">
            ادامه مطلب
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
