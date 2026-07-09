import type { Metadata } from "next";
import { HomePage } from "@/components/seed/HomePage";

export const metadata: Metadata = {
  title: "Seed Performance Marketing",
  description:
    "We work as an extension of your team, not a separate agency layer. Senior specialists own your growth across search, paid media and creative, with clear accountability from day one.",
  alternates: {
    canonical: "/",
  },
};

export default function Page(): React.ReactElement {
  return <HomePage />;
}
