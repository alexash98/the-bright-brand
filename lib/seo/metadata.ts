import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  TWITTER_CARD,
} from "@/lib/seo/site";

export interface AbsolutePageMetadataInput {
  title: string;
  description: string;
  /** Path beginning with /, or absolute URL. */
  canonicalPath: string;
}

/** Metadata helper with a self-referencing absolute canonical. */
export function absolutePageMetadata(
  input: AbsolutePageMetadataInput,
): Metadata {
  const canonicalUrl = input.canonicalPath.startsWith("http")
    ? input.canonicalPath
    : `${SITE_URL}${input.canonicalPath}`;

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: input.title,
      description: input.description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: TWITTER_CARD,
      title: input.title,
      description: input.description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  };
}

export function noindexMetadata(title: string, description: string): Metadata {
  return {
    title: { absolute: title },
    description,
    robots: {
      index: false,
      follow: false,
    },
  };
}
