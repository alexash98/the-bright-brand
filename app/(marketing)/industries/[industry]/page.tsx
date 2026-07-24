import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { IndustryPillar } from "@/components/site/seo/IndustryPillar";
import {
  getAllIndustryRecords,
  getIndustryForRoute,
  isExampleIndustrySlug,
} from "@/content/registry";
import { breadcrumbList, faqPage, serviceSchemaWithUrl } from "@/lib/schema";
import {
  buildChildIndustryLinks,
  buildIndustryServiceLinks,
  buildRelatedIndustryLinks,
} from "@/lib/seo/industry-links";
import {
  absolutePageMetadata,
  noindexMetadata,
} from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/site";

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams(): Promise<{ industry: string }[]> {
  return getAllIndustryRecords({ includeExamples: true }).map((record) => ({
    industry: record.industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryForRoute(slug);
  if (!industry) {
    return {};
  }

  if (isExampleIndustrySlug(slug)) {
    return noindexMetadata(industry.metaTitle, industry.metaDescription);
  }

  return absolutePageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    canonicalPath: `/industries/${industry.slug}`,
  });
}

export default async function Page({
  params,
}: IndustryPageProps): Promise<React.ReactElement> {
  const { industry: slug } = await params;
  const industry = getIndustryForRoute(slug);
  if (!industry) {
    notFound();
  }

  const path = `/industries/${industry.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path },
          ]),
          serviceSchemaWithUrl({
            name: `${industry.name} marketing`,
            description: industry.metaDescription,
            url: `${SITE_URL}${path}`,
            serviceType: "Industry marketing",
          }),
          faqPage(industry.faqs),
        ]}
      />
      <IndustryPillar
        industry={industry}
        serviceLinks={buildIndustryServiceLinks(industry)}
        relatedLinks={buildRelatedIndustryLinks(industry)}
        childLinks={buildChildIndustryLinks(industry)}
      />
    </>
  );
}
