export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export interface Article {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> — omit the brand, the layout template appends it. */
  metaTitle: string;
  description: string;
  excerpt: string;
  keywords: string[];
  category: "راهنما" | "پروژه";
  /** ISO date, used for <time> and Article schema. */
  date: string;
  readingMinutes: number;
  cover?: string;
  coverAlt?: string;
  /** Project fact-box, shown on project write-ups. */
  facts?: { label: string; value: string }[];
  blocks: Block[];
  /** Slugs of related articles. */
  related: string[];
  /** Internal links surfaced in the closing CTA. */
  links?: { label: string; href: string }[];
}
