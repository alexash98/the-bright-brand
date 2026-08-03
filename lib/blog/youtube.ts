export interface YouTubeVideo {
  id: string;
  watchUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
}

/** Parse a YouTube watch URL, short URL, embed URL, Shorts URL, or bare ID. */
export function parseYouTubeVideo(input: string): YouTubeVideo | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  let id: string | null = null;

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    id = trimmed;
  } else {
    try {
      const url = new URL(
        trimmed.startsWith("http") ? trimmed : `https://${trimmed}`,
      );
      const host = url.hostname.replace(/^www\./, "");

      if (host === "youtu.be") {
        id = url.pathname.split("/").filter(Boolean)[0] ?? null;
      } else if (host === "youtube.com" || host === "m.youtube.com") {
        if (url.pathname === "/watch") {
          id = url.searchParams.get("v");
        } else {
          const parts = url.pathname.split("/").filter(Boolean);
          if (
            parts[0] === "embed" ||
            parts[0] === "shorts" ||
            parts[0] === "live"
          ) {
            id = parts[1] ?? null;
          }
        }
      }
    } catch {
      return null;
    }
  }

  if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(id)) {
    return null;
  }

  return {
    id,
    watchUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  };
}
