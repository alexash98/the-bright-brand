import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/seo/og";

export const alt = "Industries | The Bright Brand";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image(): ReturnType<typeof createOgImage> {
  return createOgImage({
    title: "Industries we know how to market",
    vertical: "Industries",
  });
}
