import type { Metadata } from "next";
import { HomePage } from "@/components/site/HomePage";
import { pageMetadata } from "@/lib/seo/pages";

export const metadata: Metadata = pageMetadata("/");

export default function Page(): React.ReactElement {
  return <HomePage />;
}
