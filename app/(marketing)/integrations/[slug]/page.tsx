import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntegrationGuideView } from "@/app/(marketing)/integrations/_components/IntegrationGuideView";
import { JsonLd } from "@/components/JsonLd";
import {
  getAllIntegrationSlugs,
  getIntegration,
} from "@/content/integrations";
import { breadcrumbList, faqPage, serviceSchemaWithUrl } from "@/lib/schema";
import { absolutePageMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/site";

interface IntegrationSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllIntegrationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IntegrationSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getIntegration(slug);
  if (!guide) return {};
  return absolutePageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    canonicalPath: `/integrations/${guide.slug}`,
  });
}

export default async function IntegrationSlugPage({
  params,
}: IntegrationSlugPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const guide = getIntegration(slug);
  if (!guide) notFound();

  const path = `/integrations/${guide.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Integrations", path: "/integrations" },
            { name: guide.name, path },
          ]),
          serviceSchemaWithUrl({
            name: guide.name,
            description: guide.metaDescription,
            url: `${SITE_URL}${path}`,
            serviceType: "Implementation guide",
          }),
          faqPage(guide.faqs),
        ]}
      />
      <IntegrationGuideView guide={guide} />
    </>
  );
}
