import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/service-details";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date("2026-07-10"),
  }));

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
    ...servicePages,
  ];
}
