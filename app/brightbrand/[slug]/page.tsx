import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PostDetailPage } from "@/components/seed/PostDetailPage";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { blogPosting, breadcrumbList } from "@/lib/schema";
import { postMetadata } from "@/lib/seo/post-metadata";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {};
  }
  return postMetadata(post);
}

export default async function Page({
  params,
}: PostPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          blogPosting(post),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/brightbrand/${post.slug}` },
          ]),
        ]}
      />
      <PostDetailPage post={post} />
    </>
  );
}
