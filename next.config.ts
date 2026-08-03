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
      // Blog posts live at /blogs/{slug}. Legacy Framer and /blog/{slug} paths 301.
      {
        source: "/brightbrand/:slug",
        destination: "/blogs/:slug",
        statusCode: 301,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        statusCode: 301,
      },
      // M&E hub renamed: keep equity from /industries/building-services-me.
      {
        source: "/industries/building-services-me",
        destination: "/industries/building-services",
        statusCode: 301,
      },
      {
        source: "/industries/building-services-me/:path*",
        destination: "/industries/building-services",
        statusCode: 301,
      },
      // Safari hub broadened to adventure + expedition.
      {
        source: "/industries/safari-expedition-operators",
        destination: "/industries/safari-adventure-and-expedition-operators",
        statusCode: 301,
      },
      {
        source: "/industries/safari-expedition-operators/:path*",
        destination: "/industries/safari-adventure-and-expedition-operators",
        statusCode: 301,
      },
      // Procurement hub broadened to B2B SaaS.
      {
        source: "/industries/procurement-supplier-management",
        destination: "/industries/b2b-saas-and-platforms",
        statusCode: 301,
      },
      {
        source: "/industries/procurement-supplier-management/:path*",
        destination: "/industries/b2b-saas-and-platforms",
        statusCode: 301,
      },
      // Unpublished / legacy B2B SaaS path collapses onto the live hub.
      {
        source: "/industries/b2b-saas",
        destination: "/industries/b2b-saas-and-platforms",
        statusCode: 301,
      },
      {
        source: "/industries/b2b-saas/:path*",
        destination: "/industries/b2b-saas-and-platforms",
        statusCode: 301,
      },
      // Category procurement child replaced by consulting firms under B2B SaaS.
      {
        source: "/industries/category-procurement-teams",
        destination: "/industries/consulting-firms",
        statusCode: 301,
      },
      {
        source: "/industries/category-procurement-teams/:path*",
        destination: "/industries/consulting-firms",
        statusCode: 301,
      },
      // Removed industry×service money pages and calculators (Jul 2026).
      {
        source: "/industries/:industry/:service",
        destination: "/industries/:industry",
        statusCode: 301,
      },
      {
        source: "/tools",
        destination: "/industries",
        statusCode: 301,
      },
      {
        source: "/tools/:slug",
        destination: "/industries",
        statusCode: 301,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85, 90],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1600, 1920],
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
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
