import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: {
    path: string;
    priority: number;
    freq: "weekly" | "monthly";
  }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/blog", priority: 0.9, freq: "weekly" },
    { path: "/construction-projects", priority: 0.9, freq: "weekly" },
    { path: "/contracting-projects", priority: 0.9, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/sale", priority: 0.8, freq: "weekly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
