import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

interface SiteRoute {
  path: string;
  lastModified: Date;
}

// TODO: replace with CMS-driven route list when content source is wired up
function getRoutes(): SiteRoute[] {
  return [{ path: "/", lastModified: new Date("2026-07-07") }];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getRoutes().map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
  }));
}
