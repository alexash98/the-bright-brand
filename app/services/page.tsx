import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicesPage } from "@/components/seed/ServicesPage";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Organic search, paid media, paid social, digital PR, creative strategy and analytics from senior specialists who work as an extension of your team.",
  alternates: {
    canonical: "/services",
  },
};

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
