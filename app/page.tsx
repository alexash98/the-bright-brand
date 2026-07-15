import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomePage } from "@/components/seed/HomePage";
import { organization, website } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/");

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd data={[organization(), website()]} />
      <HomePage />
    </>
  );
}
