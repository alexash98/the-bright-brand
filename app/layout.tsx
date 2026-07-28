import type { Metadata } from "next";
import { Instrument_Sans, Outfit } from "next/font/google";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { GtmRouteListener } from "@/components/analytics/GtmRouteListener";
import { OdalTracker } from "@/components/analytics/OdalTracker";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScrollProvider } from "@/components/site/SmoothScrollProvider";
import { organization, website } from "@/lib/seo/schema";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "The Bright Brand is an award-winning performance marketing agency. We help brands scale through PPC, paid media, CRO, and cold email outreach.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "The Bright Brand is an award-winning performance marketing agency. We help brands scale through PPC, paid media, CRO, and cold email outreach.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "The Bright Brand is an award-winning performance marketing agency. We help brands scale through PPC, paid media, CRO, and cold email outreach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      lang="en-GB"
      className={`${instrumentSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="brand-grid min-h-full">
        <JsonLd data={[organization(), website()]} />
        <GoogleTagManager />
        <OdalTracker />
        <GtmRouteListener />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
