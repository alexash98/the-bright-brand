/**
 * Local marketing assets are already sized/compressed (webp carousel, PNGs logos).
 * Routing them through the Next image optimizer adds latency and can emit empty
 * buffers that poison the disk LRU (`calculateSize returned 0`).
 */
export function isPreoptimizedLocalImage(src: string): boolean {
  if (!src.startsWith("/") || src.startsWith("//")) {
    return false;
  }

  return /\.(webp|svg|png|jpg|jpeg|gif|avif)$/i.test(src);
}
