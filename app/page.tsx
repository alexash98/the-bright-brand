import type { Metadata } from "next";
import { HomePage } from "@/components/seed/HomePage";

export const metadata: Metadata = {
  title: "Seed Performance Marketing",
  description:
    "Powered by our progressive model, we deliver exceptional growth by giving you the most proactive, growth-minded marketing team you'll ever work with.",
  alternates: {
    canonical: "/",
  },
};

export default function Page(): React.ReactElement {
  return <HomePage />;
}
