import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ContactPage } from "@/components/seed/ContactPage";
import { breadcrumbList } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/contact");

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}
