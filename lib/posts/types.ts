// Categories in use on the live blog: Marketing (14), Strategy (1),
// Digital (1), Technology (1). Do not widen without a real post using it.
export type PostCategory = "Marketing" | "Strategy" | "Digital" | "Technology";

export interface PostAuthor {
  name: string;
  position: string;
}

export interface Post {
  title: string;
  // Slug is the live, indexed slug. Posts live at /brightbrand/{slug}.
  slug: string;
  // ISO date (yyyy-mm-dd), rendered as "Mar 27, 2026" in the UI.
  date: string;
  category: PostCategory;
  // Hero paragraph / sub-head shown under the H1.
  subtitle: string;
  // Verbatim from the live site. May contain American spellings on purpose.
  metaDescription: string;
  author: PostAuthor;
  // Optional per-post OG image. Falls back to the site-wide default when unset
  // (migration amendment 3: single site-wide OG image at cutover).
  ogImage?: string;
  // Article body. null means "not yet supplied": the route renders a
  // placeholder and is noindexed until a real body lands (see Prompt 3).
  body: string | null;
}
