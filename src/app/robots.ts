import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Search engines and AI assistants are explicitly welcome: being cited by
 * ChatGPT, Claude, Perplexity and Gemini is a discovery channel in itself.
 * Named groups make that intent unambiguous to bots that only obey a rule
 * addressed to them.
 */
const AI_BOTS = [
  // OpenAI — search results, browsing, training
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google Gemini / AI Overviews grounding
  "Google-Extended",
  // Apple Intelligence, Meta, Common Crawl (feeds many models), others
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "CCBot",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_BOTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
