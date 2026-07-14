import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { BlogPostDetailPage } from "@/components/seed/BlogPostDetailPage";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog-posts";
import { article, breadcrumbList } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = `${post.title} | The Bright Brand`;

  return {
    title: {
      absolute: title,
    },
    description: post.metaDescription,
    openGraph: {
      title,
      description: post.metaDescription,
    },
    twitter: {
      title,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function Page({
  params,
}: BlogPostPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          {
            name: post.title,
            path: `/blog/${post.slug}`,
          },
        ])}
      />
      <JsonLd
        data={article({
          headline: post.title,
          description: post.metaDescription,
          slug: post.slug,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: post.authorName,
        })}
      />
      <BlogPostDetailPage post={post} />
    </>
  );
}
