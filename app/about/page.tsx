import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AboutPage } from "@/components/seed/AboutPage";
import { breadcrumbList } from "@/lib/schema";

const ABOUT_TITLE = "About Us | The Bright Brand";
const ABOUT_DESCRIPTION =
  "Meet the team behind The Bright Brand. Performance marketing specialists across search, paid media, creative and PR, built on trust, accountability and employee ownership.";

export const metadata: Metadata = {
  title: {
    absolute: ABOUT_TITLE,
  },
  description: ABOUT_DESCRIPTION,
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
  twitter: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
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
