import { SITE_NAME, SITE_URL } from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  logo: {
    "@type": "ImageObject";
    url: string;
  };
  sameAs: string[];
  contactPoint: {
    "@type": "ContactPoint";
    contactType: string;
    availableLanguage: string[];
  };
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "@id": string;
  name: string;
  url: string;
  publisher: {
    "@id": string;
  };
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
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
    "@id": string;
  };
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export function organization(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      // TODO: replace with final logo asset at /logo.png
      url: `${SITE_URL}/logo.png`,
    },
    // TODO: add social and authority profile URLs when available
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };
}

export function website(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function article(input: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}): ArticleSchema {
  const pageUrl = `${SITE_URL}/blog/${input.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: pageUrl,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };
}
