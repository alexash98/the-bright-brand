import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicesPage } from "@/components/seed/ServicesPage";
import { breadcrumbList } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/services");

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
