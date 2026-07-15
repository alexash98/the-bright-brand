import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AboutPage } from "@/components/seed/AboutPage";
import { breadcrumbList } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/about");

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <AboutPage />
    </>
  );
}
