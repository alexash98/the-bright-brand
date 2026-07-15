import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { WorkPage } from "@/components/seed/WorkPage";
import { breadcrumbList } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/case-studies");

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <WorkPage />
    </>
  );
}
