import { CONTACT } from "@/lib/contact";
import type { Post } from "@/lib/posts/types";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/seed-logo.png`;

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  "@id": string;
  name: string;
  legalName: string;
  url: string;
  logo: {
    "@type": "ImageObject";
    url: string;
  };
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
  contactPoint: {
    "@type": "ContactPoint";
    contactType: string;
    email: string;
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
}

export function organization(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: "Bright Brand Holdings Ltd",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    email: "alex@thebrightbrand.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.line1,
      addressLocality: "London",
      postalCode: "EC1V 2NX",
      addressCountry: "GB",
    },
    // Profile URLs pulled verbatim from the live site footer.
    sameAs: [
      "https://www.instagram.com/brightbrandhq/",
      "https://www.facebook.com/profile.php?id=61566233787140",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "alex@thebrightbrand.com",
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

export function blogPosting(post: Post): BlogPostingSchema {
  const pageUrl = `${SITE_URL}/brightbrand/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    // Publisher nested in full (not @id) so each post validates standalone in
    // the Rich Results Test; the Organization node itself lives on the home page.
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    image: [post.ogImage ?? DEFAULT_OG_IMAGE.url],
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
