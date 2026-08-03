import { POST_BODIES } from "@/lib/posts/bodies.generated";
import { POST_BODY_OVERRIDES } from "@/lib/posts/body-overrides";
import { FIXTURE_POST } from "@/lib/posts/fixtures/component-kitchen-sink";
import HERO_IMAGES from "@/lib/posts/hero-images.generated.json";
import {
  applyInternalLinks,
  getFurtherReading,
} from "@/lib/posts/internal-links";
import { stripDuplicateTitleHeading } from "@/lib/posts/strip-title-heading";
import type { Post, PostAuthor } from "@/lib/posts/types";

export { FIXTURE_SLUG } from "@/lib/posts/fixtures/component-kitchen-sink";

type HeroImageEntry = {
  heroImageUrl: string;
  heroImageAlt: string;
};

const HERO_BY_SLUG = HERO_IMAGES as Record<string, HeroImageEntry>;

function withHeroImage(post: Post): Post {
  const hero = HERO_BY_SLUG[post.slug];
  if (!hero) return post;
  return {
    ...post,
    heroImageUrl: post.heroImageUrl ?? hero.heroImageUrl,
    heroImageAlt: post.heroImageAlt ?? hero.heroImageAlt,
  };
}

// Every live post is authored by Alex Ashcroft, Founder.
const AUTHOR: PostAuthor = {
  name: "Alex Ashcroft",
  position: "Founder",
};

// Frontmatter transcribed verbatim from the live Framer site (titles,
// subtitles, meta descriptions, slugs, dates, categories). Bodies are merged
// in from bodies.generated.ts (produced by scripts/import-post-bodies.mjs).
// A post with no body stays noindexed via the metadata layer.
// tags added for Wave 4D taxonomy linking into /industries and /services.
const POST_FRONTMATTER: Post[] = [
  {
    title: "How to Set Up Meta Offline Conversion Tracking in 2026",
    slug: "how-to-set-up-meta-offline-conversion-tracking-in-2026",
    date: "2026-03-27",
    category: "Marketing",
    subtitle: "Bridge digital-physical gap with accurate measurement",
    metaDescription:
      "Learn how to implement Meta's 2026 offline conversion tracking system to measure in-store and phone sales. Improve campaign optimization and ROI today.",
    author: AUTHOR,
    body: null,
    tags: ["offline-conversions", "meta-ads", "attribution"],
  },
  {
    title: "YouTube Shorts Holiday Ads: 3 Game-Changers for 2026",
    slug: "youtube-shorts-holiday-ads-3-game-changers-for-2026",
    date: "2025-12-25",
    category: "Digital",
    subtitle: "Powerful advertising updates transforming holiday campaigns",
    metaDescription:
      "Discover YouTube Shorts' three major advertising updates that boost holiday campaigns. Learn how comments, creator links, and expanded reach can drive your 2025 results. Act now!",
    author: AUTHOR,
    body: null,
    tags: ["google-ads", "meta-ads"],
    featuredVideo: "https://www.youtube.com/watch?v=-aZDbrbbXTE",
    videoHeading: "YouTube Shorts holiday ads: what changed",
  },
  {
    title: "Facebook's 2026 Ad Revolution: Why Marketers Must Adapt",
    slug: "facebook-s-2026-ad-revolution-why-marketers-must-adapt",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Algorithm changes demanding creative-first advertising approach",
    metaDescription:
      "Discover how Meta's Andromeda algorithm transforms Facebook advertising with creative-first approaches and simplified targeting. Adapt your strategy now or risk falling behind.",
    author: AUTHOR,
    body: null,
    tags: ["meta-ads"],
  },
  {
    title: "LinkedIn's 360Brew Algorithm: What You Need to Know for 2026",
    slug: "linkedin-s-360brew-algorithm-what-you-need-to-know-for-2026",
    date: "2025-12-25",
    category: "Strategy",
    subtitle: "Profile-aligned content drives LinkedIn visibility success",
    metaDescription:
      "Discover how LinkedIn's 360Brew algorithm connects profiles with content, rewards topic consistency, and values quality engagement. Adapt your strategy today!",
    author: AUTHOR,
    body: null,
    tags: ["linkedin"],
  },
  {
    title: "AI Marketing Copilots: Transforming Campaign Management",
    slug: "ai-marketing-copilots-transforming-campaign-management",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "AI collaboration revolutionizing digital marketing efficiency",
    metaDescription:
      "Discover how AI marketing copilots boost campaign efficiency by 37% and results by 42%. Learn how these systems are reshaping strategy, creative, and optimization. Explore now!",
    author: AUTHOR,
    body: null,
    tags: ["ai-marketing", "marketing-automation"],
  },
  {
    title: "Setting Up Offline Conversions with GCLID: The Missing Link",
    slug: "setting-up-offline-conversions-with-gclid-the-missing-link",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Connect digital ads to valuable offline sales",
    metaDescription:
      "Learn how to track offline conversions using Google Click ID (GCLID) to see your true ROI, optimize ad spend and improve conversion rates by 30%. Start today!",
    author: AUTHOR,
    body: null,
    tags: ["offline-conversions", "google-ads", "attribution"],
  },
  {
    title: "GEO vs. SEO: Optimizing for AI-Powered Search Results",
    slug: "geo-vs-seo-optimizing-for-ai-powered-search-results",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Adapting content strategy for AI-driven discovery",
    metaDescription:
      "Discover how Generative Engine Optimization (GEO) works alongside SEO to increase visibility in AI search tools like ChatGPT. Learn implementation strategies today.",
    author: AUTHOR,
    body: null,
    tags: ["geo-seo"],
  },
  {
    title: "TikTok Advertising in 2026: Best Campaign Strategies Revealed",
    slug: "tiktok-advertising-in-2026-best-campaign-strategies-revealed",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Revolutionary platform evolution reshaping brand connections",
    metaDescription:
      "Discover the most effective TikTok advertising strategies for 2026, from AR experiences to creator partnerships. Learn what works and start optimizing your campaigns today!",
    author: AUTHOR,
    body: null,
    tags: ["tiktok"],
  },
  {
    title: "Facebook Offline Conversion Tracking: Boost ROI with Sales Data",
    slug: "facebook-offline-conversion-tracking-boost-roi-with-sales-data",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Connecting online advertising with offline sales",
    metaDescription:
      "Discover how Facebook Offline Conversion Tracking links your ad campaigns to real-world sales. Learn implementation methods and boost your marketing ROI today.",
    author: AUTHOR,
    body: null,
    tags: ["offline-conversions", "meta-ads", "attribution"],
  },
  {
    title: "Zero-Party Data: Building Trust While Gathering Insights",
    slug: "zero-party-data-building-trust-while-gathering-insights",
    date: "2025-12-25",
    category: "Marketing",
    subtitle:
      "Transparent customer data collection building stronger relationships",
    metaDescription:
      "Discover how zero-party data collection builds consumer trust while gathering valuable insights. Learn implementation strategies for privacy-conscious marketing. Start now.",
    author: AUTHOR,
    body: null,
    tags: ["consent", "crm"],
  },
  {
    title: "2026 Facebook & Instagram Ads Playbook: Future-Proof Strategies",
    slug: "2026-facebook-instagram-ads-playbook-future-proof-strategies",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Advanced strategies for evolving digital platforms",
    metaDescription:
      "Discover AI-powered creative tools, privacy-first targeting, and seamless shopping experiences in our 2026 Facebook & Instagram advertising playbook. Start preparing now!",
    author: AUTHOR,
    body: null,
    tags: ["meta-ads"],
  },
  {
    title: "Top 5 Marketing Automations Driving Revenue in 2026",
    slug: "top-5-marketing-automations-driving-revenue-in-2026",
    date: "2025-12-25",
    category: "Marketing",
    subtitle:
      "Revenue-generating automated workflows transforming business communication",
    metaDescription:
      "Discover the 5 essential marketing automations that will drive revenue by 2026. Learn how to implement these automated workflows for better customer engagement and start now.",
    author: AUTHOR,
    body: null,
    tags: ["marketing-automation", "crm"],
  },
  {
    title: "5 Essential Marketing Automation Workflows for 2026",
    slug: "5-essential-marketing-automation-workflows-for-2026",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Future-proof strategies for advanced marketing teams",
    metaDescription:
      "Discover the 5 critical marketing automation workflows your team needs by 2026, from AI-powered lead scoring to integrated analytics. Start implementing now!",
    author: AUTHOR,
    body: null,
    tags: ["marketing-automation", "crm"],
  },
  {
    title: "Google Ads Strategy for Travel Brands 2026: Future-Proof Tips",
    slug: "google-ads-strategy-for-travel-brands-2026-future-proof-tips",
    date: "2025-12-25",
    category: "Marketing",
    subtitle:
      "Future-focused digital advertising strategies for travel companies",
    metaDescription:
      "Discover advanced Google Ads strategies for travel brands in 2026, including AI integration, video marketing, and personalization techniques. Start planning your future campaigns now.",
    author: AUTHOR,
    body: null,
    tags: ["google-ads", "travel", "call-tracking"],
  },
  {
    title: "How to Create High-Converting Ad Copy with AI Prompting in 2026",
    slug: "how-to-create-high-converting-ad-copy-with-ai-prompting-in-2026",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Master AI prompting for competitive marketing advantage",
    metaDescription:
      "Discover how prompt engineering for AI systems can create high-converting ad copy in 2026. Learn the PACIFIC method and build your strategic advantage. Start now!",
    author: AUTHOR,
    body: null,
    tags: ["ai-marketing", "google-ads"],
  },
  {
    title: "AI Integration in Business Workflows: 2026 Transformation Guide",
    slug: "ai-integration-in-business-workflows-2026-transformation-guide",
    date: "2025-12-25",
    category: "Technology",
    subtitle:
      "Autonomous AI systems reshaping organizational operations globally",
    metaDescription:
      "Discover how businesses are implementing agentic AI systems across departments in 2026. Learn practical applications and infrastructure requirements to stay competitive.",
    author: AUTHOR,
    body: null,
    tags: ["ai-marketing", "marketing-automation"],
  },
  {
    title: "Facebook Ads Strategy for Law Firms That Converts in 2026",
    slug: "facebook-ads-strategy-for-law-firms-that-converts-in-2026",
    date: "2025-12-25",
    category: "Marketing",
    subtitle: "Effective digital strategies for legal client acquisition",
    metaDescription:
      "Discover proven Facebook ad strategies that deliver high-quality leads for law firms in 2026. Learn measurement, targeting and creative tactics to reduce costs. Start converting today!",
    author: AUTHOR,
    body: null,
    tags: ["meta-ads", "legal"],
  },
];

// Merge imported bodies onto the frontmatter, then inject curated internal
// links (phrase wrap only; prose is never rewritten).
const LIVE_REPO_POSTS: Post[] = POST_FRONTMATTER.map((post) => {
  const raw =
    POST_BODY_OVERRIDES[post.slug] ?? POST_BODIES[post.slug] ?? post.body;
  const withoutDupTitle = raw
    ? stripDuplicateTitleHeading(raw, post.title, post.slug)
    : raw;
  return withHeroImage({
    ...post,
    source: "repo" as const,
    body: withoutDupTitle
      ? applyInternalLinks(withoutDupTitle, post.slug)
      : withoutDupTitle,
  });
});

/**
 * Styling harness plus live repo posts.
 * Fixture body is left untouched: applyInternalLinks would inject phrase wraps
 * that look like unexplained markup while styling components.
 */
export const REPO_POSTS: Post[] = [
  withHeroImage(FIXTURE_POST),
  ...LIVE_REPO_POSTS,
];

/** @deprecated Prefer REPO_POSTS. Kept so older imports keep working. */
export const POSTS = REPO_POSTS;

const REPO_POSTS_BY_SLUG = new Map(REPO_POSTS.map((post) => [post.slug, post]));

function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

function withoutFixtures(posts: Post[]): Post[] {
  return posts.filter((post) => !post.isFixture);
}

/** Union repo posts with published database posts. Repo wins on slug clash. */
async function getMergedPosts(): Promise<Post[]> {
  const { getDbPosts } = await import("@/lib/posts/db");
  const dbPosts = await getDbPosts();
  const bySlug = new Map<string, Post>();

  for (const post of dbPosts) {
    bySlug.set(post.slug, post);
  }
  for (const post of REPO_POSTS) {
    bySlug.set(post.slug, post);
  }

  return sortByDateDesc([...bySlug.values()]);
}

/**
 * Public posts only, newest first. Fixture / QA harness posts are excluded
 * here so every list consumer (blog index, related, pager, API list) stays clean.
 * Detail routes still resolve fixtures via getPostBySlug.
 */
export async function getAllPosts(): Promise<Post[]> {
  try {
    return withoutFixtures(await getMergedPosts());
  } catch (error) {
    console.error("[lib/posts] getAllPosts failed, falling back to repo:", error);
    return withoutFixtures(sortByDateDesc(REPO_POSTS));
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    // Include fixtures so generateStaticParams can pre-render the harness.
    return (await getMergedPosts()).map((post) => post.slug);
  } catch (error) {
    console.error("[lib/posts] getAllPostSlugs failed, falling back to repo:", error);
    return REPO_POSTS.map((post) => post.slug);
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const repo = REPO_POSTS_BY_SLUG.get(slug);
  if (repo) return repo;

  try {
    const posts = await getMergedPosts();
    return posts.find((post) => post.slug === slug);
  } catch (error) {
    console.error("[lib/posts] getPostBySlug failed, falling back to repo:", error);
    return REPO_POSTS_BY_SLUG.get(slug);
  }
}

export function hasBody(post: Post): boolean {
  return post.body != null && post.body.trim().length > 0;
}

/** False for fixture / QA posts (noindex + sitemap exclusion). */
export function isPublicPost(post: Post): boolean {
  return !post.isFixture;
}

export function isRepoPostSlug(slug: string): boolean {
  return REPO_POSTS_BY_SLUG.has(slug);
}

// "Mar 27, 2026" style, matching the live Framer format. Parsed as UTC so the
// day never shifts with the server timezone.
export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

/** Posts matching any of the given tags, newest first. */
export async function getPostsByTags(tags: string[], limit = 3): Promise<Post[]> {
  if (tags.length === 0) return [];
  const tagSet = new Set(tags.map((tag) => tag.toLowerCase()));
  const posts = await getAllPosts();
  return posts
    .filter((post) =>
      (post.tags ?? []).some((tag) => tagSet.has(tag.toLowerCase())),
    )
    .slice(0, limit);
}

/**
 * Related posts: shared tags first, then recency.
 * Repo posts still prefer curated further-reading links when present.
 */
export async function getRelatedPosts(slug: string, limit = 3): Promise<Post[]> {
  const all = await getAllPosts();
  const current = all.find((post) => post.slug === slug);
  if (!current) return [];

  const curated = getFurtherReading(current, REPO_POSTS_BY_SLUG).filter(
    (post) => !post.isFixture,
  );
  if (curated.length >= limit) {
    return curated.slice(0, limit);
  }

  const currentTags = new Set(
    (current.tags ?? []).map((tag) => tag.toLowerCase()),
  );
  const others = all.filter((post) => post.slug !== slug);
  const seen = new Set(curated.map((post) => post.slug));

  const bySharedTag = others.filter(
    (post) =>
      !seen.has(post.slug) &&
      (post.tags ?? []).some((tag) => currentTags.has(tag.toLowerCase())),
  );
  for (const post of bySharedTag) seen.add(post.slug);

  const byRecency = others.filter((post) => !seen.has(post.slug));

  return [...curated, ...bySharedTag, ...byRecency].slice(0, limit);
}

export async function getAdjacentPosts(
  slug: string,
): Promise<{ previous: Post | null; next: Post | null }> {
  const all = await getAllPosts();
  const index = all.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  // Sorted newest-first: next = newer, previous = older.
  return {
    next: index > 0 ? (all[index - 1] ?? null) : null,
    previous: index < all.length - 1 ? (all[index + 1] ?? null) : null,
  };
}
