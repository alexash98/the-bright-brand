import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AboutPage } from "@/components/seed/AboutPage";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Seed. Senior specialists across search, paid media, creative and PR, built on trust, accountability and employee ownership.",
  alternates: {
    canonical: "/about",
  },
};

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
