import type { Metadata } from "next";
import { hasBody } from "@/lib/posts";
import type { Post } from "@/lib/posts/types";
import {
  DEFAULT_OG_IMAGE,
  POST_TITLE_SUFFIX,
  SITE_NAME,
  SITE_URL,
  TWITTER_CARD,
} from "@/lib/seo/site";

// Blog posts live at /brightbrand/{slug} (the live Framer CMS collection path).
export const POSTS_BASE_PATH = "/brightbrand";

export function postCanonicalPath(slug: string): string {
  return `${POSTS_BASE_PATH}/${slug}`;
}

// Builds a parity-correct Metadata object for a blog post. Title uses the
// post suffix (" | Bright Brand™"). A post with no body yet is noindexed so we
// never ship an indexable empty page; it flips to index once a body lands.
export function postMetadata(post: Post): Metadata {
  const title = `${post.title}${POST_TITLE_SUFFIX}`;
  const path = postCanonicalPath(post.slug);
  const url = `${SITE_URL}${path}`;
  const ogImage = post.ogImage ?? DEFAULT_OG_IMAGE.url;

  return {
    title: { absolute: title },
    description: post.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title,
      description: post.metaDescription,
      images: [ogImage],
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: TWITTER_CARD,
      title,
      description: post.metaDescription,
      images: [ogImage],
    },
    robots: hasBody(post)
      ? { index: true, follow: true, "max-image-preview": "large" }
      : { index: false, follow: true },
  };
}
