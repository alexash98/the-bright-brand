import type { Post } from "@/lib/posts/types";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";
import {
  ORGANIZATION_ID,
  legacyServiceSchema,
  organization,
  website,
  breadcrumbList,
  faqPage,
  review,
  softwareApplication,
  serviceSchema as serviceSchemaWithUrl,
  videoObject,
  type BreadcrumbListSchema,
  type FaqPageSchema,
  type OrganizationSchema,
  type ReviewSchema,
  type ServiceSchema,
  type SoftwareApplicationSchema,
  type VideoObjectSchema,
  type WebSiteSchema,
} from "@/lib/seo/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const LOGO_URL = `${SITE_URL}/seed-logo.png`;

export {
  ORGANIZATION_ID,
  organization,
  website,
  breadcrumbList,
  faqPage,
  review,
  softwareApplication,
  videoObject,
  type BreadcrumbListSchema,
  type FaqPageSchema,
  type OrganizationSchema,
  type ReviewSchema,
  type ServiceSchema,
  type SoftwareApplicationSchema,
  type VideoObjectSchema,
  type WebSiteSchema,
};

/**
 * Backwards-compatible Service builder used by existing /services/[slug] pages.
 * New SEO routes should call the url-based builder from lib/seo/schema.
 */
export function serviceSchema(input: {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
}): ServiceSchema {
  return legacyServiceSchema(input);
}

export { serviceSchemaWithUrl };

export interface BlogPostingSchema {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Person";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  image: string[];
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
  wordCount?: number;
  timeRequired?: string;
  articleSection?: string;
  keywords?: string;
}

export function blogPosting(
  post: Post,
  extras?: {
    wordCount?: number;
    readTimeMinutes?: number;
  },
): BlogPostingSchema {
  const pageUrl = `${SITE_URL}/brightbrand/${post.slug}`;
  const dateModified = post.updatedAt
    ? post.updatedAt.slice(0, 10)
    : post.date;
  const readTime = extras?.readTimeMinutes ?? post.readTime;
  const image = post.ogImage ?? post.heroImageUrl ?? DEFAULT_OG_IMAGE.url;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: pageUrl,
    datePublished: post.date,
    dateModified,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    image: [image],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    ...(extras?.wordCount ? { wordCount: extras.wordCount } : {}),
    ...(readTime ? { timeRequired: `PT${readTime}M` } : {}),
    articleSection: post.category,
    ...((post.tags?.length ?? 0) > 0
      ? { keywords: (post.tags ?? []).join(", ") }
      : {}),
  };
}
