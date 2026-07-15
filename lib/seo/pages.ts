import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  TWITTER_CARD,
} from "@/lib/seo/site";

export interface PageSeo {
  title: string;
  description: string;
}

// Titles and descriptions are copied verbatim from the live Framer site.
// American spellings ("optimization", "personalization") and missing trailing
// punctuation are intentional: they match what is currently indexed. Do not
// paraphrase or "correct" these strings.
export const PAGE_SEO = {
  "/": {
    title: "Performance Marketing Agency | The Bright Brand",
    description:
      "The Bright Brand is an award-winning performance marketing agency. We help brands scale through PPC, paid media, CRO, and cold email outreach.",
  },
  "/services": {
    title: "Services | The Bright Brand",
    description:
      "Explore our performance marketing services; Paid media, CRO, and cold outreach designed to scale your brand.",
  },
  "/case-studies": {
    title: "Case Studies | The Bright Brand",
    description:
      "Explore performance marketing case studies from The Bright Brand. Real results across paid media, PPC, CRO, and cold email outreach for scaling brands.",
  },
  // Case-study detail pages. Titles and descriptions pulled verbatim from the
  // live site (www.thebrightbrand.com/case-studies/{slug}). Only /anywhere
  // currently exists in the repo; the other five 404 until their content is
  // built (see report). Metadata is pre-staged here so it is correct the
  // moment each page lands.
  "/case-studies/anywhere": {
    title: "Road to 10M ARR | The Bright Brand",
    description:
      "How Bright Brand saved Anywhere.com $300K in wasted ad spend and helped grow their revenue from $6M to $10M, representing a 67% increase year on year",
  },
  "/case-studies/formx": {
    title: "4.5M Pre Seed Growth Mission | The Bright Brand",
    description:
      "How Bright Brand is helping FormX, A $4.5M pre-seed modular building startup build their paid acquisition strategy across Meta, Google, LinkedIn and email",
  },
  "/case-studies/brittontime": {
    title: "What Drove Real Revenue in 30 Days | The Bright Brand",
    description:
      "How Bright Brand built a custom attribution system for award-winning law firm Britton & Time, generating 150+ leads/month across Google, Microsoft Ads and LinkedIn",
  },
  "/case-studies/canopy": {
    title: "Adding 85k To the Pipeline in 30 Days | The Bright Brand",
    description:
      "How Bright Brand added £85,000 in pipeline for Canopy in 30 days; And built an annualised pipeline of £850,000 through email and LinkedIn outbound.",
  },
  "/case-studies/enexus": {
    title: "Achieving 15% Cheaper Acquisition | The Bright Brand",
    description:
      "How Bright Brand built a custom lead acquisition system for Enexus Energy; Delivering 65 qualified prospects in the first 2 months and 30+ new leads every month",
  },
  "/case-studies/menzies": {
    title: "Growing MRR by 17% | The Bright Brand",
    description:
      "How Bright Brand grew monthly revenue by 17% for Menzies Law; driving 30+ new consultations every month through data-driven Google Ads and CallRail attribution",
  },
  "/contact": {
    title: "Get in Touch | The Bright Brand",
    description:
      "Get in touch with The Bright Brand. Reach out to discuss how our performance marketing services can help your business grow.",
  },
  // /marketing-audit is intentionally retired (Prompt 5 amendment): no route,
  // no redirect, no sitemap entry. It will 404 and drop out of the index.
  "/blog": {
    title: "Insights & News | The Bright Brand",
    description:
      "Stay ahead with performance marketing insights from The Bright Brand. Tips, strategies, and case studies on PPC, CRO, and paid media",
  },
  // Net-new page (no live equivalent). Ships indexed and is sitemapped.
  "/about": {
    title: "About Us | The Bright Brand",
    description:
      "Meet the team behind The Bright Brand. Performance marketing specialists across search, paid media, creative and PR, built on trust, accountability and employee ownership.",
  },
  // Not sitemapped (see app/sitemap.ts) but the metadata must match the live
  // 404 so nothing regresses at cutover.
  "/404": {
    title: "404 Error | The Bright Brand",
    description:
      "Fuel your brand's growth with a performance-driven agency focused on paid ads, CRO, and cold outreach. Transparent pricing, flexible engagement models, and results you can measure.",
  },
} satisfies Record<string, PageSeo>;

export type PageRoute = keyof typeof PAGE_SEO;

// Narrows an arbitrary path to a known static route with curated SEO.
export function isPageRoute(path: string): path is PageRoute {
  return Object.prototype.hasOwnProperty.call(PAGE_SEO, path);
}

// Builds a complete, parity-correct Metadata object for a static page.
// Canonicals are relative and resolved against metadataBase (set in the root
// layout to SITE_URL), which keeps them on the www host.
export function pageMetadata(route: PageRoute): Metadata {
  const seo = PAGE_SEO[route];
  const url = route === "/" ? SITE_URL : `${SITE_URL}${route}`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: route,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: TWITTER_CARD,
      title: seo.title,
      description: seo.description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  };
}
