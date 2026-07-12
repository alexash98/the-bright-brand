import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicesPage } from "@/components/seed/ServicesPage";
import { breadcrumbList } from "@/lib/schema";

const SERVICES_TITLE = "Services | The Bright Brand";
const SERVICES_DESCRIPTION =
  "Explore our performance marketing services; Paid media, CRO, and cold outreach designed to scale your brand.";

export const metadata: Metadata = {
  title: {
    absolute: SERVICES_TITLE,
  },
  description: SERVICES_DESCRIPTION,
  openGraph: {
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
  },
  twitter: {
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesPage />
    </>
  );
}
