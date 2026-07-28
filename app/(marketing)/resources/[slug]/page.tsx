import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePageView } from "@/app/(marketing)/resources/_components/ResourcePageView";
import { JsonLd } from "@/components/JsonLd";
import { getAllResourceSlugs, getResource } from "@/content/resources";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { absolutePageMetadata } from "@/lib/seo/metadata";

interface ResourceSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResourceSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return absolutePageMetadata({
    title: resource.metaTitle,
    description: resource.metaDescription,
    canonicalPath: `/resources/${resource.slug}`,
  });
}

export default async function ResourceSlugPage({
  params,
}: ResourceSlugPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const path = `/resources/${resource.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: resource.name, path },
          ]),
          faqPage(resource.faqs),
        ]}
      />
      <ResourcePageView resource={resource} />
    </>
  );
}
