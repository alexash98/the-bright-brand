import type { Metadata } from "next";
import { HomePage } from "@/components/seed/HomePage";

const HOME_TITLE = "Performance Marketing Agency | The Bright Brand";
const HOME_DESCRIPTION =
  "The Bright Brand is an award-winning performance marketing agency. We help brands scale through PPC, paid media, CRO, and cold email outreach.";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page(): React.ReactElement {
  return <HomePage />;
}
