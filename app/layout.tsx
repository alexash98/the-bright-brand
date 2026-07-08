import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScrollProvider } from "@/components/seed/SmoothScrollProvider";
import { organization, website } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Seed Performance Marketing",
    template: "%s | Seed Performance Marketing",
  },
  description:
    "High-fidelity performance marketing agency landing page with services, case studies, team, and ROI calculator.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Seed Performance Marketing",
    title: "Seed Performance Marketing",
    description:
      "High-fidelity performance marketing agency landing page with services, case studies, team, and ROI calculator.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seed Performance Marketing",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="brand-grid min-h-full">
        <JsonLd data={[organization(), website()]} />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
