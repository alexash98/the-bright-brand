export const GTM_ID = "GTM-5GVVCCDR";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushPageView(path: string, title: string): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "page_view",
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  });
}
