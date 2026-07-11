import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { WorkPage } from "@/components/seed/WorkPage";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies across organic search, paid media, paid social and digital PR. See how we help ambitious brands grow with measurable results.",
  alternates: {
    canonical: "/work",
  },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
        ])}
      />
      <WorkPage />
    </>
  );
}
