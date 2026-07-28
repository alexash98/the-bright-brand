import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import { ServicePillar } from "@/components/site/seo/ServicePillar";
import { getIndustriesForServiceRoute } from "@/content/registry";
import {
  getAllServiceCatalogueSlugs,
  getServiceCatalogueEntry,
} from "@/content/services";
import {
  breadcrumbList,
  faqPage,
  serviceSchema,
  serviceSchemaWithUrl,
} from "@/lib/schema";
import { absolutePageMetadata } from "@/lib/seo/metadata";
import { buildServiceIndustryVariantLinks } from "@/lib/seo/industry-links";
import {
  getAllServiceSlugs,
  getServiceDetailBySlug,
} from "@/lib/service-details";
import { SITE_URL } from "@/lib/site";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams(): Promise<{ service: string }[]> {
  const legacy = getAllServiceSlugs();
  const catalogue = getAllServiceCatalogueSlugs();
  return [...new Set([...legacy, ...catalogue])].map((service) => ({
    service,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const legacy = getServiceDetailBySlug(slug);
  if (legacy) {
    return absolutePageMetadata({
      title: legacy.title,
      description: legacy.metaDescription,
      canonicalPath: `/services/${legacy.slug}`,
    });
  }

  const catalogue = getServiceCatalogueEntry(slug);
  if (!catalogue) {
    return {};
  }

  return absolutePageMetadata({
    title: catalogue.metaTitle,
    description: catalogue.metaDescription,
    canonicalPath: `/services/${catalogue.slug}`,
  });
}

export default async function Page({
  params,
}: ServicePageProps): Promise<React.ReactElement> {
  const { service: slug } = await params;
  const legacy = getServiceDetailBySlug(slug);

  if (legacy) {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: legacy.title, path: `/services/${legacy.slug}` },
            ]),
            serviceSchema({
              name: legacy.title,
              slug: legacy.slug,
              description: legacy.metaDescription,
              serviceType: legacy.shortTitle,
            }),
            ...(legacy.faqs
              ? [
                  faqPage(
                    legacy.faqs.map((faq) => ({
                      question: faq.question,
                      answer: faq.answer,
                    })),
                  ),
                ]
              : []),
          ]}
        />
        <ServiceDetailPage service={legacy} />
      </>
    );
  }

  const catalogue = getServiceCatalogueEntry(slug);
  if (!catalogue) {
    notFound();
  }

  const industryVariants = getIndustriesForServiceRoute(catalogue.slug);
  // Cap variants so service pillars stay inside the twelve-link body budget
  // (eight variants + four structural links).
  const cappedVariantCount = buildServiceIndustryVariantLinks(
    catalogue.slug,
    industryVariants,
  ).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: catalogue.name, path: `/services/${catalogue.slug}` },
          ]),
          serviceSchemaWithUrl({
            name: catalogue.name,
            description: catalogue.metaDescription,
            url: `${SITE_URL}/services/${catalogue.slug}`,
            serviceType: catalogue.shortName,
          }),
        ]}
      />
      <ServicePillar
        service={catalogue}
        industryVariants={industryVariants.slice(0, cappedVariantCount)}
      />
    </>
  );
}
