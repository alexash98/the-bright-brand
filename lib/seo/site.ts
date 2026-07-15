// Single source of truth for site-level SEO constants.
// www is the canonical host on the live site: every canonical, OG url and
// sitemap entry must use it. The Vercel domain config must 301 the apex
// (thebrightbrand.com) to https://www.thebrightbrand.com, not the reverse.
export const SITE_URL = "https://www.thebrightbrand.com";

export const SITE_NAME = "The Bright Brand";

// Static pages use " | The Bright Brand". Blog posts use " | Bright Brand™"
// (trademark symbol, no "The"). These two conventions are intentional and
// must be preserved exactly to match what is already indexed.
export const PAGE_TITLE_SUFFIX = " | The Bright Brand";
export const POST_TITLE_SUFFIX = " | Bright Brand™";

export const TWITTER_CARD = "summary_large_image" as const;

// Single site-wide default OG image (per migration amendment 3: no per-page
// social previews at cutover). Asset must be dropped at public/og-default.png
// at 1200x630, under ~1MB, before launch.
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-default.png`,
  width: 1200,
  height: 630,
  alt: SITE_NAME,
} as const;
