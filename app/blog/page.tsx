import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BlogPage } from "@/components/seed/BlogPage";
import { breadcrumbList } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/blog");

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BlogPage />
    </>
  );
}
