import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailPage } from "@/components/seed/ServiceDetailPage";
import {
  getAllServiceSlugs,
  getServiceDetailBySlug,
} from "@/lib/service-details";
import { breadcrumbList, serviceSchema } from "@/lib/schema";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetailBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function Page({
  params,
}: ServicePageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const service = getServiceDetailBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.title,
            slug: service.slug,
            description: service.metaDescription,
            serviceType: service.shortTitle,
          }),
        ]}
      />
      <ServiceDetailPage service={service} />
    </>
  );
}
