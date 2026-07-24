import {
  getAllMoneyPageParams,
  getIndustryForRoute,
  getMoneyPage,
} from "@/content/registry";
import { getServiceCatalogueEntry } from "@/content/services";
import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/seo/og";

export const alt = "Industry service | The Bright Brand";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ industry: string; service: string }>;
}

export async function generateStaticParams(): Promise<
  { industry: string; service: string }[]
> {
  return getAllMoneyPageParams({ includeExamples: true });
}

export default async function Image({
  params,
}: OgProps): Promise<ReturnType<typeof createOgImage>> {
  const { industry: industrySlug, service } = await params;
  const industry = getIndustryForRoute(industrySlug);
  const moneyPage = getMoneyPage(industrySlug, service);
  const catalogue = getServiceCatalogueEntry(service);

  return createOgImage({
    title: moneyPage?.title ?? catalogue?.name ?? "Service",
    vertical: industry?.name ?? "Industries",
  });
}
