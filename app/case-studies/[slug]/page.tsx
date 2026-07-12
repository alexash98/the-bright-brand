import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CaseStudyDetailPage } from "@/components/seed/CaseStudyDetailPage";
import {
  getAllCaseStudySlugs,
  getCaseStudyDetailBySlug,
} from "@/lib/case-study-details";
import { breadcrumbList } from "@/lib/schema";

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
  const study = getCaseStudyDetailBySlug(slug);

  if (!study) {
    return {};
  }

  const title = `${study.clientName} Case Study | The Bright Brand`;

  return {
    title: {
      absolute: title,
    },
    description: study.metaDescription,
    openGraph: {
      title,
      description: study.metaDescription,
    },
    twitter: {
      title,
      description: study.metaDescription,
    },
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
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
