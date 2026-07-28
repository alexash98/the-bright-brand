import { CONTACT } from "@/lib/contact";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
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

export interface ReviewSchema {
  "@context": "https://schema.org";
  "@type": "Review";
  author: {
    "@type": "Person";
    name: string;
    jobTitle: string;
  };
  reviewBody: string;
  itemReviewed: {
    "@type": "Organization";
    "@id": string;
    name: string;
  };
}

/** Organization JSON-LD. Emit from the root layout only. */
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

/** WebSite JSON-LD. Emit from the root layout only. */
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
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url.startsWith("http") ? input.url : `${SITE_URL}${input.url}`,
    serviceType: input.serviceType,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
  };
}

/** @deprecated Prefer serviceSchema with explicit url. Kept for legacy service pages. */
export function legacyServiceSchema(input: {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
}): ServiceSchema {
  return serviceSchema({
    name: input.name,
    description: input.description,
    url: `${SITE_URL}/services/${input.slug}`,
    serviceType: input.serviceType,
  });
}

export function faqPage(
  faqs: { question: string; answer: string }[] | { q: string; a: string }[],
): FaqPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const question = "question" in faq ? faq.question : faq.q;
      const answer = "answer" in faq ? faq.answer : faq.a;
      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    }),
  };
}

export interface AttributableTestimonial {
  name: string;
  role: string;
  body: string;
}

/**
 * Review JSON-LD. Throws unless the testimonial has an attributable name and role.
 * Never fabricate reviews. Tony at Anywhere is the known qualifying case once wording is confirmed.
 */
export function review(testimonial: AttributableTestimonial): ReviewSchema {
  const name = testimonial.name?.trim();
  const role = testimonial.role?.trim();
  const body = testimonial.body?.trim();

  if (!name || !role) {
    throw new Error(
      "[lib/seo/schema] Review schema requires an attributable name and role. Do not emit Review JSON-LD for anonymous or incomplete testimonials.",
    );
  }

  if (!body) {
    throw new Error(
      "[lib/seo/schema] Review schema requires a non-empty review body.",
    );
  }

  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name,
      jobTitle: role,
    },
    reviewBody: body,
    itemReviewed: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
    },
  };
}

export interface SoftwareApplicationSchema {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
  provider: {
    "@id": string;
  };
}

/** Free web tool / calculator. No Review or AggregateRating. */
export function softwareApplication(input: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}): SoftwareApplicationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: input.url.startsWith("http") ? input.url : `${SITE_URL}${input.url}`,
    applicationCategory: input.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    provider: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export { DEFAULT_OG_IMAGE, LOGO_URL };
