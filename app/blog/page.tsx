import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BlogPage } from "@/components/seed/BlogPage";
import { breadcrumbList } from "@/lib/schema";

const BLOG_TITLE = "Blog | The Bright Brand";
const BLOG_DESCRIPTION =
  "Performance marketing insights from The Bright Brand. Practical guides on PPC, SEO, paid social, reporting and growth strategy.";

export const metadata: Metadata = {
  title: {
    absolute: BLOG_TITLE,
  },
  description: BLOG_DESCRIPTION,
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  },
  twitter: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  },
  alternates: {
    canonical: "/blog",
  },
};

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
