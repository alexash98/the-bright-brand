import type { Post } from "@/lib/posts/types";

export interface InternalLinkTarget {
  slug: string;
  // Phrase to wrap on first plain-text occurrence inside the body (case-insensitive).
  // Must be specific enough to avoid junk matches.
  phrase: string;
  // Anchor text for the further-reading list (descriptive, not "click here").
  anchor: string;
}

function postHref(slug: string): string {
  return `/brightbrand/${slug}`;
}

// Curated topic-cluster links. Live slugs always. Do not fuzzy-match titles.
// Each post lists 2–3 related posts for in-body linking + further reading.
export const POST_INTERNAL_LINKS: Record<string, InternalLinkTarget[]> = {
  "how-to-set-up-meta-offline-conversion-tracking-in-2026": [
    {
      slug: "facebook-offline-conversion-tracking-boost-roi-with-sales-data",
      phrase: "offline conversion tracking",
      anchor: "Facebook Offline Conversion Tracking: Boost ROI with Sales Data",
    },
    {
      slug: "setting-up-offline-conversions-with-gclid-the-missing-link",
      phrase: "GCLID",
      anchor: "Setting Up Offline Conversions with GCLID: The Missing Link",
    },
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "Meta Ads",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
  ],
  "facebook-offline-conversion-tracking-boost-roi-with-sales-data": [
    {
      slug: "how-to-set-up-meta-offline-conversion-tracking-in-2026",
      phrase: "Meta Offline Conversion",
      anchor: "How to Set Up Meta Offline Conversion Tracking in 2026",
    },
    {
      slug: "setting-up-offline-conversions-with-gclid-the-missing-link",
      phrase: "offline conversions",
      anchor: "Setting Up Offline Conversions with GCLID",
    },
    {
      slug: "facebook-s-2026-ad-revolution-why-marketers-must-adapt",
      phrase: "Facebook advertising",
      anchor: "Facebook's 2026 Ad Revolution: Why Marketers Must Adapt",
    },
  ],
  "setting-up-offline-conversions-with-gclid-the-missing-link": [
    {
      slug: "how-to-set-up-meta-offline-conversion-tracking-in-2026",
      phrase: "offline conversion",
      anchor: "How to Set Up Meta Offline Conversion Tracking in 2026",
    },
    {
      slug: "facebook-offline-conversion-tracking-boost-roi-with-sales-data",
      phrase: "Facebook Offline",
      anchor: "Facebook Offline Conversion Tracking",
    },
    {
      slug: "google-ads-strategy-for-travel-brands-2026-future-proof-tips",
      phrase: "Google Ads",
      anchor: "Google Ads Strategy for Travel Brands 2026",
    },
  ],
  "facebook-s-2026-ad-revolution-why-marketers-must-adapt": [
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "Instagram Ads",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
    {
      slug: "facebook-ads-strategy-for-law-firms-that-converts-in-2026",
      phrase: "Facebook Ads",
      anchor: "Facebook Ads Strategy for Law Firms That Converts in 2026",
    },
    {
      slug: "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026",
      phrase: "ad copy",
      anchor: "How to Create High-Converting Ad Copy with AI Prompting",
    },
  ],
  "2026-facebook-instagram-ads-playbook-future-proof-strategies": [
    {
      slug: "facebook-s-2026-ad-revolution-why-marketers-must-adapt",
      phrase: "Andromeda",
      anchor: "Facebook's 2026 Ad Revolution: Why Marketers Must Adapt",
    },
    {
      slug: "facebook-offline-conversion-tracking-boost-roi-with-sales-data",
      phrase: "offline conversion",
      anchor: "Facebook Offline Conversion Tracking",
    },
    {
      slug: "zero-party-data-building-trust-while-gathering-insights",
      phrase: "privacy-first targeting",
      anchor: "Zero-Party Data: Building Trust While Gathering Insights",
    },
  ],
  "facebook-ads-strategy-for-law-firms-that-converts-in-2026": [
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "Facebook & Instagram",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
    {
      slug: "facebook-s-2026-ad-revolution-why-marketers-must-adapt",
      phrase: "Meta's",
      anchor: "Facebook's 2026 Ad Revolution",
    },
    {
      slug: "how-to-set-up-meta-offline-conversion-tracking-in-2026",
      phrase: "conversion tracking",
      anchor: "How to Set Up Meta Offline Conversion Tracking in 2026",
    },
  ],
  "linkedin-s-360brew-algorithm-what-you-need-to-know-for-2026": [
    {
      slug: "geo-vs-seo-optimizing-for-ai-powered-search-results",
      phrase: "AI-powered",
      anchor: "GEO vs. SEO: Optimizing for AI-Powered Search Results",
    },
    {
      slug: "ai-marketing-copilots-transforming-campaign-management",
      phrase: "AI marketing",
      anchor: "AI Marketing Copilots: Transforming Campaign Management",
    },
    {
      slug: "5-essential-marketing-automation-workflows-for-2026",
      phrase: "marketing automation",
      anchor: "5 Essential Marketing Automation Workflows for 2026",
    },
  ],
  "ai-marketing-copilots-transforming-campaign-management": [
    {
      slug: "ai-integration-in-business-workflows-2026-transformation-guide",
      phrase: "AI Integration",
      anchor: "AI Integration in Business Workflows: 2026 Transformation Guide",
    },
    {
      slug: "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026",
      phrase: "AI Prompting",
      anchor: "How to Create High-Converting Ad Copy with AI Prompting in 2026",
    },
    {
      slug: "geo-vs-seo-optimizing-for-ai-powered-search-results",
      phrase: "AI search",
      anchor: "GEO vs. SEO: Optimizing for AI-Powered Search Results",
    },
  ],
  "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026": [
    {
      slug: "ai-marketing-copilots-transforming-campaign-management",
      phrase: "AI marketing copilots",
      anchor: "AI Marketing Copilots: Transforming Campaign Management",
    },
    {
      slug: "ai-integration-in-business-workflows-2026-transformation-guide",
      phrase: "AI Integration",
      anchor: "AI Integration in Business Workflows",
    },
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "Instagram advertising",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
  ],
  "ai-integration-in-business-workflows-2026-transformation-guide": [
    {
      slug: "ai-marketing-copilots-transforming-campaign-management",
      phrase: "campaign management",
      anchor: "AI Marketing Copilots: Transforming Campaign Management",
    },
    {
      slug: "top-5-marketing-automations-driving-revenue-in-2026",
      phrase: "marketing automation",
      anchor: "Top 5 Marketing Automations Driving Revenue in 2026",
    },
    {
      slug: "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026",
      phrase: "AI prompting",
      anchor: "How to Create High-Converting Ad Copy with AI Prompting",
    },
  ],
  "5-essential-marketing-automation-workflows-for-2026": [
    {
      slug: "top-5-marketing-automations-driving-revenue-in-2026",
      phrase: "marketing automations",
      anchor: "Top 5 Marketing Automations Driving Revenue in 2026",
    },
    {
      slug: "ai-marketing-copilots-transforming-campaign-management",
      phrase: "AI marketing",
      anchor: "AI Marketing Copilots",
    },
    {
      slug: "zero-party-data-building-trust-while-gathering-insights",
      phrase: "zero-party data",
      anchor: "Zero-Party Data: Building Trust While Gathering Insights",
    },
  ],
  "top-5-marketing-automations-driving-revenue-in-2026": [
    {
      slug: "5-essential-marketing-automation-workflows-for-2026",
      phrase: "marketing automation workflows",
      anchor: "5 Essential Marketing Automation Workflows for 2026",
    },
    {
      slug: "ai-integration-in-business-workflows-2026-transformation-guide",
      phrase: "business workflows",
      anchor: "AI Integration in Business Workflows",
    },
    {
      slug: "zero-party-data-building-trust-while-gathering-insights",
      phrase: "first-party",
      anchor: "Zero-Party Data: Building Trust While Gathering Insights",
    },
  ],
  "geo-vs-seo-optimizing-for-ai-powered-search-results": [
    {
      slug: "ai-marketing-copilots-transforming-campaign-management",
      phrase: "AI marketing",
      anchor: "AI Marketing Copilots: Transforming Campaign Management",
    },
    {
      slug: "linkedin-s-360brew-algorithm-what-you-need-to-know-for-2026",
      phrase: "LinkedIn",
      anchor: "LinkedIn's 360Brew Algorithm: What You Need to Know for 2026",
    },
    {
      slug: "zero-party-data-building-trust-while-gathering-insights",
      phrase: "first-party data",
      anchor: "Zero-Party Data: Building Trust While Gathering Insights",
    },
  ],
  "zero-party-data-building-trust-while-gathering-insights": [
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "privacy-first",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
    {
      slug: "geo-vs-seo-optimizing-for-ai-powered-search-results",
      phrase: "AI-Powered Search",
      anchor: "GEO vs. SEO: Optimizing for AI-Powered Search Results",
    },
    {
      slug: "5-essential-marketing-automation-workflows-for-2026",
      phrase: "automation workflows",
      anchor: "5 Essential Marketing Automation Workflows for 2026",
    },
  ],
  "youtube-shorts-holiday-ads-3-game-changers-for-2026": [
    {
      slug: "tiktok-advertising-in-2026-best-campaign-strategies-revealed",
      phrase: "short-form",
      anchor: "TikTok Advertising in 2026: Best Campaign Strategies",
    },
    {
      slug: "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026",
      phrase: "ad copy",
      anchor: "How to Create High-Converting Ad Copy with AI Prompting",
    },
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "holiday campaigns",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
  ],
  "tiktok-advertising-in-2026-best-campaign-strategies-revealed": [
    {
      slug: "youtube-shorts-holiday-ads-3-game-changers-for-2026",
      phrase: "YouTube Shorts",
      anchor: "YouTube Shorts Holiday Ads: 3 Game-Changers for 2026",
    },
    {
      slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
      phrase: "paid social",
      anchor: "2026 Facebook & Instagram Ads Playbook",
    },
    {
      slug: "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026",
      phrase: "creator partnerships",
      anchor: "How to Create High-Converting Ad Copy with AI Prompting",
    },
  ],
  "google-ads-strategy-for-travel-brands-2026-future-proof-tips": [
    {
      slug: "setting-up-offline-conversions-with-gclid-the-missing-link",
      phrase: "GCLID",
      anchor: "Setting Up Offline Conversions with GCLID",
    },
    {
      slug: "geo-vs-seo-optimizing-for-ai-powered-search-results",
      phrase: "AI-Powered Search",
      anchor: "GEO vs. SEO: Optimizing for AI-Powered Search Results",
    },
    {
      slug: "top-5-marketing-automations-driving-revenue-in-2026",
      phrase: "marketing automations",
      anchor: "Top 5 Marketing Automations Driving Revenue in 2026",
    },
  ],
};

// Append a crawlable Related guides block (always), and still wrap any
// phrase that genuinely appears in the prose (bonus, never invents text).
export function applyInternalLinks(
  html: string,
  currentSlug: string,
): string {
  const targets = POST_INTERNAL_LINKS[currentSlug] ?? [];
  if (!targets.length) return html;

  let result = html;

  for (const target of targets) {
    if (target.slug === currentSlug) continue;
    const href = postHref(target.slug);
    if (result.includes(`href="${href}"`)) continue;

    const escaped = target.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(escaped, "i");
    const match = pattern.exec(result);
    if (!match || match.index == null) continue;

    const index = match.index;
    const before = result.slice(0, index);
    if (/<[^>]*$/.test(before)) continue;
    const lastOpen = before.lastIndexOf("<a ");
    const lastClose = before.lastIndexOf("</a>");
    if (lastOpen > lastClose) continue;

    const matched = match[0];
    result =
      result.slice(0, index) +
      `<a href="${href}">${matched}</a>` +
      result.slice(index + matched.length);
  }

  const relatedItems = targets
    .filter((target) => target.slug !== currentSlug)
    .map(
      (target) =>
        `<li><a href="${postHref(target.slug)}">${target.anchor}</a></li>`,
    )
    .join("");

  if (relatedItems) {
    result += `\n\n<aside class="related-guides"><h2>Related guides</h2><ul>${relatedItems}</ul></aside>`;
  }

  return result;
}

export function getFurtherReading(post: Post, postsBySlug: Map<string, Post>): Post[] {
  const targets = POST_INTERNAL_LINKS[post.slug] ?? [];
  const out: Post[] = [];
  for (const target of targets) {
    const linked = postsBySlug.get(target.slug);
    if (linked) out.push(linked);
  }
  return out;
}
