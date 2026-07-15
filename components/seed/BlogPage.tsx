import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { PostGrid } from "@/components/seed/PostGrid";
import { getAllPosts } from "@/lib/posts";
import { NAV_ITEMS } from "@/lib/nav";

export function BlogPage(): React.ReactElement {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to home
        </Link>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          Insights &amp; <span className="text-brand-accent">news</span>.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          Performance marketing insights from The Bright Brand: tips,
          strategies and case studies on PPC, CRO and paid media.
        </p>
      </MarketingHero>

      <main>
        <div className="page-below-fold">
          <PostGrid posts={posts} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
