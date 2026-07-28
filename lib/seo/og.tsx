import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

interface OgImageProps {
  title: string;
  vertical?: string;
}

export function createOgImage({
  title,
  vertical,
}: OgImageProps): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1b1b1f",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              color: "#e8b84b",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {vertical ?? "The Bright Brand"}
          </div>
          <div
            style={{
              color: "#e2eae9",
              fontSize: title.length > 48 ? 56 : 64,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(226, 234, 233, 0.7)",
            fontSize: 28,
          }}
        >
          <span>thebrightbrand.com</span>
          <span style={{ color: "#e8b84b" }}>Performance marketing</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    },
  );
}
