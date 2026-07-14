import type { MetadataRoute } from "next";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog-posts";
import { getAllCaseStudySlugs } from "@/lib/case-study-details";
import { getAllServiceSlugs } from "@/lib/service-details";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date("2026-07-10"),
  }));

  const caseStudyPages = getAllCaseStudySlugs().map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: new Date("2026-07-12"),
  }));

  const blogPages = getAllBlogSlugs().map((slug) => {
    const post = getBlogPostBySlug(slug);

    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(post?.updatedAt ?? "2026-07-14"),
    };
  });

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-07-08"),
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-07-10"),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-07-11"),
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: new Date("2026-07-11"),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-07-11"),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-07-14"),
    },
    ...servicePages,
    ...caseStudyPages,
    ...blogPages,
  ];
}
