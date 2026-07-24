import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { MoneyPage } from "@/components/site/seo/MoneyPage";
import {
  getAllMoneyPageParams,
  getIndustryForRoute,
  getMoneyPage,
  isExampleIndustrySlug,
} from "@/content/registry";
import { getServiceCatalogueEntry } from "@/content/services";
import type { ServiceSlug } from "@/content/types";
import { breadcrumbList, faqPage, serviceSchemaWithUrl } from "@/lib/schema";
import { buildMoneyPageRelatedLinks } from "@/lib/seo/industry-links";
import {
  absolutePageMetadata,
  noindexMetadata,
} from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/site";

interface MoneyRouteProps {
  params: Promise<{ industry: string; service: string }>;
}

export async function generateStaticParams(): Promise<
  { industry: string; service: string }[]
> {
  return getAllMoneyPageParams({ includeExamples: true });
}

export async function generateMetadata({
  params,
}: MoneyRouteProps): Promise<Metadata> {
  const { industry: industrySlug, service } = await params;
  const moneyPage = getMoneyPage(industrySlug, service);
  if (!moneyPage) {
    return {};
  }

  if (isExampleIndustrySlug(industrySlug)) {
    return noindexMetadata(moneyPage.metaTitle, moneyPage.metaDescription);
  }

  return absolutePageMetadata({
    title: moneyPage.metaTitle,
    description: moneyPage.metaDescription,
    canonicalPath: `/industries/${industrySlug}/${service}`,
  });
}

export default async function Page({
  params,
}: MoneyRouteProps): Promise<React.ReactElement> {
  const { industry: industrySlug, service } = await params;
  const industry = getIndustryForRoute(industrySlug);
  const moneyPage = getMoneyPage(industrySlug, service);
  const catalogue = getServiceCatalogueEntry(service);

  if (!industry || !moneyPage || !catalogue) {
    notFound();
  }

  const path = `/industries/${industry.slug}/${moneyPage.service}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path: `/industries/${industry.slug}` },
            { name: catalogue.shortName, path },
          ]),
          serviceSchemaWithUrl({
            name: moneyPage.title,
            description: moneyPage.metaDescription,
            url: `${SITE_URL}${path}`,
            serviceType: catalogue.name,
          }),
          faqPage(moneyPage.faqs),
        ]}
      />
      <MoneyPage
        industry={industry}
        moneyPage={moneyPage}
        service={catalogue}
        relatedLinks={buildMoneyPageRelatedLinks(
          industry,
          moneyPage.service as ServiceSlug,
        )}
      />
    </>
  );
}
