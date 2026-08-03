import type { MetadataRoute } from "next";
import { getAllIndustries } from "@/content/registry";
import { getAllIntegrationSlugs } from "@/content/integrations";
import { getAllResourceSlugs } from "@/content/resources";
import { getAllServiceCatalogueSlugs } from "@/content/services";
import { getAllCaseStudySlugs } from "@/lib/case-study-details";
import { getAllPosts, hasBody, isPublicPost } from "@/lib/posts";
import { isHiddenIndustry } from "@/lib/seo/hidden-industries";
import { PAGE_SEO } from "@/lib/seo/pages";
import { getAllServiceSlugs } from "@/lib/service-details";
import { SITE_URL } from "@/lib/site";

function absolute(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Fully derived from the data layer. Example industry fixtures (_*.ts) are
// excluded via getAllIndustries defaults.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const buildTime = new Date();
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  const add = (path: string, lastModified: Date): void => {
    const url = absolute(path);
    if (!entries.has(url)) {
      entries.set(url, { url, lastModified });
    }
  };

  for (const route of Object.keys(PAGE_SEO)) {
    if (route === "/404") continue;
    if (route.startsWith("/case-studies/")) continue;
    add(route, buildTime);
  }

  for (const slug of getAllCaseStudySlugs()) {
    add(`/case-studies/${slug}`, buildTime);
  }

  for (const slug of getAllServiceSlugs()) {
    add(`/services/${slug}`, buildTime);
  }

  for (const slug of getAllServiceCatalogueSlugs()) {
    add(`/services/${slug}`, buildTime);
  }

  add("/industries", buildTime);

  for (const industry of getAllIndustries({ includeExamples: false })) {
    if (isHiddenIndustry(industry)) continue;
    add(`/industries/${industry.slug}`, buildTime);
  }

  for (const post of await getAllPosts()) {
    if (!hasBody(post) || !isPublicPost(post)) continue;
    add(`/brightbrand/${post.slug}`, new Date(`${post.date}T00:00:00Z`));
  }

  add("/integrations", buildTime);
  for (const slug of getAllIntegrationSlugs()) {
    add(`/integrations/${slug}`, buildTime);
  }

  add("/resources", buildTime);
  for (const slug of getAllResourceSlugs()) {
    add(`/resources/${slug}`, buildTime);
  }

  return [...entries.values()];
}
