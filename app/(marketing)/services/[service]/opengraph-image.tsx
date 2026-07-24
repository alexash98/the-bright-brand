import { getAllServiceCatalogueSlugs, getServiceCatalogueEntry } from "@/content/services";
import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/seo/og";
import {
  getAllServiceSlugs,
  getServiceDetailBySlug,
} from "@/lib/service-details";

export const alt = "Service | The Bright Brand";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams(): Promise<{ service: string }[]> {
  return [...new Set([...getAllServiceSlugs(), ...getAllServiceCatalogueSlugs()])].map(
    (service) => ({ service }),
  );
}

export default async function Image({
  params,
}: OgProps): Promise<ReturnType<typeof createOgImage>> {
  const { service: slug } = await params;
  const legacy = getServiceDetailBySlug(slug);
  const catalogue = getServiceCatalogueEntry(slug);
  const title = legacy?.title ?? catalogue?.name ?? "Service";

  return createOgImage({
    title,
    vertical: "Services",
  });
}
