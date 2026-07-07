import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { organization, website } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: replace with production domain when confirmed
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="tbb-grid min-h-full flex flex-col bg-tbb-bg font-sans text-tbb-text">
        <JsonLd data={[organization(), website()]} />
        {children}
      </body>
    </html>
  );
}
