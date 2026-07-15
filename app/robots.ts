import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Fully open. AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) are
// intentionally NOT blocked: we publish GEO content and want to be cited.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
