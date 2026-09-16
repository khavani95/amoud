import type { Article } from "./types";
import { guides } from "./guides";
import { projectArticles } from "./projects";
import { financeArticles } from "./finance";

export type { Article, Block } from "./types";

/** All articles, newest first. */
export const articles: Article[] = [...guides, ...projectArticles, ...financeArticles].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date)
);

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const articlesByCategory = (category: Article["category"]) =>
  articles.filter((a) => a.category === category);
