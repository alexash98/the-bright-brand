import type { ResourcePage } from "@/content/resources/types";

/**
 * Resources (templates/downloads) section was retired (Aug 2026). /resources
 * and /resources/{slug} 301 to /blog (next.config.ts). Individual resource
 * source files remain under content/resources/*.ts but are no longer
 * registered or routed.
 */
const RESOURCES: ResourcePage[] = [];

const BY_SLUG = new Map(RESOURCES.map((resource) => [resource.slug, resource]));

export function getAllResources(): ResourcePage[] {
  return RESOURCES;
}

export function getResource(slug: string): ResourcePage | undefined {
  return BY_SLUG.get(slug);
}

export function getAllResourceSlugs(): string[] {
  return RESOURCES.map((resource) => resource.slug);
}
