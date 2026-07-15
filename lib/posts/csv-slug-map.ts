import map from "@/lib/posts/csv-slug-map.json";

// Explicit, hardcoded mapping from the CSV export slug to the live indexed
// slug. Live slugs always win. This is intentionally NOT derived by matching
// titles: titles contain apostrophes, colons and trademark symbols, and a
// near-miss would silently attach the wrong body to the wrong post.
//
// The data lives in the colocated JSON so the import script (a plain Node
// script that cannot resolve the "@/" alias or TS) and the app share one
// source and can never drift. All 17 rows are visible there for review.
export const CSV_SLUG_TO_LIVE_SLUG: Record<string, string> = map;
