import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicesPage } from "@/components/site/ServicesPage";
import { breadcrumbList } from "@/lib/schema";
import { absolutePageMetadata } from "@/lib/seo/metadata";
import { PAGE_SEO } from "@/lib/seo/pages";

export const metadata: Metadata = absolutePageMetadata({
  title: PAGE_SEO["/services"].title,
  description: PAGE_SEO["/services"].description,
  canonicalPath: "/services",
});

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
