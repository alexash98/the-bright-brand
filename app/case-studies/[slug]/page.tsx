import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CaseStudyDetailPage } from "@/components/seed/CaseStudyDetailPage";
import {
  getAllCaseStudySlugs,
  getCaseStudyDetailBySlug,
} from "@/lib/case-study-details";
import { breadcrumbList } from "@/lib/schema";
import { isPageRoute, pageMetadata } from "@/lib/seo/pages";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  // Titles/descriptions are curated verbatim from the live site in pages.ts.
  const path = `/case-studies/${slug}`;
  if (isPageRoute(path)) {
    return pageMetadata(path);
  }
  return {};
}

export default async function Page({
  params,
}: CaseStudyPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const study = getCaseStudyDetailBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          {
            name: study.clientName,
            path: `/case-studies/${study.slug}`,
          },
        ])}
      />
      <CaseStudyDetailPage study={study} />
    </>
  );
}
