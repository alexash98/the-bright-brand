import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ContactPage } from "@/components/seed/ContactPage";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our London team. Tell us about your goals and we will respond within one business day with an honest view of what comes next.",
  alternates: {
    canonical: "/contact",
  },
};

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
