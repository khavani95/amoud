import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] =
    [
      { path: "/", priority: 1, freq: "weekly" },
      { path: "/about", priority: 0.8, freq: "monthly" },
      { path: "/construction-projects", priority: 0.9, freq: "weekly" },
      { path: "/contracting-projects", priority: 0.9, freq: "weekly" },
      { path: "/sale", priority: 0.8, freq: "weekly" },
      { path: "/contact", priority: 0.7, freq: "monthly" },
    ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
