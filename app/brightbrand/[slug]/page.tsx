import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/blog-content.css";
import { JsonLd } from "@/components/JsonLd";
import { PostDetailPage } from "@/components/site/PostDetailPage";
import { extractFaqFromHtml } from "@/lib/blog/faq-from-html";
import { countWordsFromHtml } from "@/lib/blog/word-count";
import { parseYouTubeVideo } from "@/lib/blog/youtube";
import { estimateReadTimeMinutes } from "@/lib/posts/sanitize";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import {
  blogPosting,
  breadcrumbList,
  faqPage,
  videoObject,
} from "@/lib/schema";
import { postMetadata } from "@/lib/seo/post-metadata";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {};
  }
  return postMetadata(post);
}

export default async function Page({
  params,
}: PostPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const body = post.body ?? "";
  const wordCount = body ? countWordsFromHtml(body) : undefined;
  const readTime =
    post.readTime ?? (body ? estimateReadTimeMinutes(body) : undefined);
  const faqs = body ? extractFaqFromHtml(body) : [];
  const video = post.featuredVideo
    ? parseYouTubeVideo(post.featuredVideo)
    : null;

  const schemaData: object[] = [
    blogPosting(post, {
      wordCount,
      readTimeMinutes: readTime,
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/brightbrand/${post.slug}` },
    ]),
  ];

  if (faqs.length > 0) {
    schemaData.push(faqPage(faqs));
  }

  if (video) {
    schemaData.push(
      videoObject({
        name: post.videoHeading || post.title,
        description: post.metaDescription,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: post.videoDate || post.date,
        contentUrl: video.watchUrl,
        embedUrl: video.embedUrl,
      }),
    );
  }

  return (
    <>
      <JsonLd data={schemaData} />
      <PostDetailPage post={post} />
    </>
  );
}
