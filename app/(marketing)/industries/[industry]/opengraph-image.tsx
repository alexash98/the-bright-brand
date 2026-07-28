import {
  getAllIndustryRecords,
  getIndustryForRoute,
} from "@/content/registry";
import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/seo/og";

export const alt = "Industry | The Bright Brand";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface OgProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams(): Promise<{ industry: string }[]> {
  return getAllIndustryRecords({ includeExamples: true }).map((record) => ({
    industry: record.industry.slug,
  }));
}

export default async function Image({
  params,
}: OgProps): Promise<ReturnType<typeof createOgImage>> {
  const { industry: slug } = await params;
  const industry = getIndustryForRoute(slug);

  return createOgImage({
    title: industry?.metaTitle ?? "Industry marketing",
    vertical: industry?.name ?? "Industries",
  });
}
