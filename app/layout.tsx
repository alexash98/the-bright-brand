import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { organization, website } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
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
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="brand-grid min-h-full">
        <JsonLd data={[organization(), website()]} />
        {children}
      </body>
    </html>
  );
}
