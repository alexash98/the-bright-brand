import { SITE_NAME, SITE_URL } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
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

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

export interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  url: string;
  serviceType: string;
  provider: {
    "@id": string;
  };
  areaServed: {
    "@type": "Country";
    name: string;
  }[];
}

export interface FaqPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

export function breadcrumbList(
  items: { name: string; path: string }[],
): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
}): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}/services/${input.slug}`,
    serviceType: input.serviceType,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };
}

export function faqPage(
  faqs: { question: string; answer: string }[],
): FaqPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
