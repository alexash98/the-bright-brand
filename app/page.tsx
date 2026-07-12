import type { Metadata } from "next";
import { HomePage } from "@/components/seed/HomePage";

import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "We work as an extension of your team, not a separate agency layer. No middlemen or hand-offs, just direct ownership of your growth across search, paid media and creative, with accountability from day one.",
  alternates: {
    canonical: "/",
  },
};

export default function Page(): React.ReactElement {
  return <HomePage />;
}
