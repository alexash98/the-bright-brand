import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Canonical URLs carry no trailing slash. Apex -> www is handled at the
  // Vercel domain level (a 301), NOT here, to avoid a double redirect hop.
  trailingSlash: false,
  async redirects() {
    // statusCode: 301 is used deliberately instead of `permanent: true`.
    // In Next, `permanent: true` emits a 308, but the migration contract calls
    // for a literal 301, so we set the status code explicitly.
    return [
      // Legacy work URLs collapse into /case-studies.
      {
        source: "/portfolio",
        destination: "/case-studies",
        statusCode: 301,
      },
      {
        source: "/client-case-studies",
        destination: "/case-studies",
        statusCode: 301,
      },
      // Blog posts live at /brightbrand/{slug} (live CMS collection path).
      // Anything left at the old /blog/{slug} pattern 301s across.
      {
        source: "/blog/:slug",
        destination: "/brightbrand/:slug",
        statusCode: 301,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [384, 640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
