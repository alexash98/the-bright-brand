import type { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/lib/case-study-details";
import { getAllPosts, hasBody } from "@/lib/posts";
import { PAGE_SEO } from "@/lib/seo/pages";
import { getAllServiceSlugs } from "@/lib/service-details";
import { SITE_URL } from "@/lib/site";

function absolute(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Fully derived from the data layer. Nothing is hardcoded, so the sitemap
// grows automatically the moment a case study or post lands in its module.
export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  const add = (path: string, lastModified: Date): void => {
    const url = absolute(path);
    if (!entries.has(url)) {
      entries.set(url, { url, lastModified });
    }
  };

  // 1. Static routes from the SEO source of truth. Exclude /404 (sitemapping
  //    an error page is a defect) and the case-study detail keys — those are
  //    emitted below only when their content actually exists.
  for (const route of Object.keys(PAGE_SEO)) {
    if (route === "/404") continue;
    if (route.startsWith("/case-studies/")) continue;
    add(route, buildTime);
  }

  // 2. Case-study detail pages that exist in the repo. Absent ones (5 of 6
  //    today) are never emitted, so we never sitemap a 404.
  for (const slug of getAllCaseStudySlugs()) {
    add(`/case-studies/${slug}`, buildTime);
  }

  // 3. Service detail pages (net-new, indexed).
  for (const slug of getAllServiceSlugs()) {
    add(`/services/${slug}`, buildTime);
  }

  // 4. Blog posts that have a body. A bodyless post stays out until it lands.
  for (const post of getAllPosts()) {
    if (!hasBody(post)) continue;
    add(`/brightbrand/${post.slug}`, new Date(`${post.date}T00:00:00Z`));
  }

  return [...entries.values()];
}
