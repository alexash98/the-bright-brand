import type { Metadata } from "next";
import { Instrument_Sans, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScrollProvider } from "@/components/seed/SmoothScrollProvider";
import { organization, website } from "@/lib/schema";
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
    "High-fidelity performance marketing agency landing page with services, case studies, team, and ROI calculator.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "High-fidelity performance marketing agency landing page with services, case studies, team, and ROI calculator.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "High-fidelity performance marketing agency landing page with services, case studies, team, and ROI calculator.",
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
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
