/**
 * Plain-text site summaries for AI assistants (the llms.txt convention).
 * Built from the same data modules as the pages, so the two never drift.
 */
import {
  company,
  contact,
  stats,
  services,
  secondaryService,
  featuredProjects,
  otherProjects,
  constructionProjects,
} from "@/data/company";
import { faqs } from "@/data/faq";
import { articles, type Article, type Block } from "@/data/articles";
import { SITE_URL } from "@/lib/seo";

const url = (path: string) => `${SITE_URL}${path}`;

function header(): string[] {
  return [
    `# ${company.nameFa} (${company.nameEn})`,
    "",
    `> ${company.tagline}. ${company.intro}`,
    "",
    "زبان سایت: فارسی. حوزه فعالیت: پیمانکاری و اجرای تاسیسات الکتریکال و مکانیکال (برق، موتورخانه، تهویه، لوله‌کشی، آتش‌نشانی)، مشاوره و نظارت تاسیسات، ساختمان‌سازی و مشارکت در ساخت — تهران و شمال ایران.",
    "",
    "## اطلاعات تماس",
    `- ${contact.officeLabel}: ${contact.office} (+982144711222)`,
    `- ${contact.ceoLabel}: ${contact.ceo} (+989123505524)`,
    `- ایمیل: ${contact.email}`,
    `- نشانی: ${contact.address}`,
    `- وب‌سایت: ${SITE_URL}`,
    "",
    "## در یک نگاه",
    ...stats.map((s) => `- ${s.label}: ${s.value}`),
    "",
    "## خدمات",
    ...services.map((s) => `- ${s.title}: ${s.desc}`),
    `- ${secondaryService.title}: ${secondaryService.desc}`,
    "",
  ];
}

function projectLines(): string[] {
  return [
    "## پروژه‌های شاخص پیمانکاری تاسیسات",
    ...featuredProjects.map(
      (p) =>
        `- ${p.title}${p.area ? ` (${p.area})` : ""} — کارفرما: ${p.client}. ${p.desc}${
          p.article ? ` [جزئیات](${url(`/blog/${p.article}`)})` : ""
        }`
    ),
    "",
    "## سایر سوابق اجرایی",
    ...otherProjects.map(
      (p) => `- ${p.title}${p.client ? ` — کارفرما: ${p.client}` : ""}`
    ),
    "",
    "## پروژه‌های طراحی و ساخت (سری آمود)",
    ...constructionProjects.map(
      (p) => `- ${p.title}${p.area ? ` (${p.area})` : ""}: ${p.desc}`
    ),
    "",
  ];
}

const pages = [
  ["صفحه اصلی", "/", "معرفی شرکت، خدمات، پروژه‌های شاخص و پرسش‌های متداول"],
  ["درباره ما", "/about", "تاریخچه، چشم‌انداز و ارزش‌های شرکت"],
  ["سوابق پیمانکاری", "/contracting-projects", "پروژه‌های اجرای تاسیسات الکتریکال و مکانیکال"],
  ["پروژه‌های ساخت‌وساز", "/construction-projects", "سری آمود — طراحی و ساخت"],
  ["مقالات", "/blog", "راهنماهای پیمانکاری، تاسیسات، موتورخانه و مشارکت در ساخت"],
  ["تماس با ما", "/contact", "تلفن، نشانی و راه‌های ارتباطی"],
] as const;

/** /llms.txt — a short, link-first map of the site. */
export function llmsTxt(): string {
  return [
    ...header(),
    "## صفحات اصلی",
    ...pages.map(([t, p, d]) => `- [${t}](${url(p)}): ${d}`),
    "",
    ...projectLines(),
    "## مقالات",
    ...articles.map(
      (a) => `- [${a.title}](${url(`/blog/${a.slug}`)}): ${a.description}`
    ),
    "",
    "## Optional",
    `- [متن کامل مقالات و پرسش‌های متداول](${url("/llms-full.txt")})`,
    `- [نقشه سایت](${url("/sitemap.xml")})`,
    "",
  ].join("\n");
}

function blockText(b: Block): string {
  switch (b.type) {
    case "p":
      return b.text;
    case "h2":
      return `### ${b.text}`;
    case "h3":
      return `#### ${b.text}`;
    case "ul":
      return b.items.map((i) => `- ${i}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${i}`).join("\n");
    case "note":
      return `> ${b.text}`;
    case "linkout": {
      const href = b.href.startsWith("/") ? url(b.href) : b.href;
      return `${b.text} [${b.label}](${href})`;
    }
    case "table":
      return [
        `| ${b.head.join(" | ")} |`,
        `|${b.head.map(() => "---").join("|")}|`,
        ...b.rows.map((r) => `| ${r.join(" | ")} |`),
      ].join("\n");
  }
}

function articleText(a: Article): string {
  return [
    `## ${a.title}`,
    `آدرس: ${url(`/blog/${a.slug}`)} — تاریخ: ${a.date}`,
    "",
    ...(a.facts?.length
      ? [...a.facts.map((f) => `- ${f.label}: ${f.value}`), ""]
      : []),
    ...a.blocks.map(blockText).flatMap((t) => [t, ""]),
  ].join("\n");
}

/** /llms-full.txt — everything above plus full article text and FAQ. */
export function llmsFullTxt(): string {
  return [
    ...header(),
    ...projectLines(),
    "## پرسش‌های متداول",
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "# مقالات",
    "",
    ...articles.map(articleText),
  ].join("\n");
}
