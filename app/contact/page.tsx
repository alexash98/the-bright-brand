import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ContactPage } from "@/components/seed/ContactPage";
import { breadcrumbList } from "@/lib/schema";

const CONTACT_TITLE = "Get in Touch | The Bright Brand";
const CONTACT_DESCRIPTION =
  "Get in touch with The Bright Brand. Reach out to discuss how our performance marketing services can help your business grow.";

export const metadata: Metadata = {
  title: {
    absolute: CONTACT_TITLE,
  },
  description: CONTACT_DESCRIPTION,
  openGraph: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
  },
  twitter: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
  },
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
