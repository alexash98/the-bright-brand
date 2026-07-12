import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { WorkPage } from "@/components/seed/WorkPage";
import { breadcrumbList } from "@/lib/schema";

const CASE_STUDIES_TITLE = "Case Studies | The Bright Brand";
const CASE_STUDIES_DESCRIPTION =
  "Explore performance marketing case studies from The Bright Brand. Real results across paid media, PPC, CRO, and cold email outreach for scaling brands.";

export const metadata: Metadata = {
  title: {
    absolute: CASE_STUDIES_TITLE,
  },
  description: CASE_STUDIES_DESCRIPTION,
  openGraph: {
    title: CASE_STUDIES_TITLE,
    description: CASE_STUDIES_DESCRIPTION,
  },
  twitter: {
    title: CASE_STUDIES_TITLE,
    description: CASE_STUDIES_DESCRIPTION,
  },
  alternates: {
    canonical: "/case-studies",
  },
};

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
