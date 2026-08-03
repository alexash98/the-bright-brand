import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = [
  "h2",
  "h3",
  "h4",
  "p",
  "a",
  "ul",
  "ol",
  "li",
  "strong",
  "em",
  "b",
  "i",
  "blockquote",
  "br",
  "hr",
  "img",
  "figure",
  "figcaption",
  "div",
  "span",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "details",
  "summary",
];

const ALLOWED_COMPONENT_CLASSES = [
  "bb-quote",
  "bb-quote__body",
  "bb-quote__text",
  "bb-quote__cite",
  "bb-quote__name",
  "bb-stats",
  "bb-stat",
  "bb-stat--soft",
  "bb-stat__num",
  "bb-stat__label",
  "bb-bars",
  "bb-bar__row",
  "bb-bar__row--accent",
  "bb-bar__head",
  "bb-bar__label",
  "bb-bar__val",
  "bb-bar__track",
  "bb-bar__fill",
  "bb-stages",
  "bb-stage",
  "bb-stage--1",
  "bb-stage--2",
  "bb-stage--3",
  "bb-stage--4",
  "bb-stage__badge",
  "bb-stage__body",
  "bb-stage__title",
  "bb-stage__text",
  "bb-table",
  "bb-table__scroll",
  "bb-data",
  "bb-data__cap",
  "bb-data__source",
  "bb-faq",
  "blog-faq-item",
  "bb-further-reading",
  "related-guides",
];

/**
 * Sanitise n8n HTML for storage and render.
 * Strips scripts, styles, event handlers and leading H1 blocks.
 */
export function sanitizeBlogHtml(raw: string): string {
  const cleaned = sanitizeHtml(raw, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
      h2: ["class", "id"],
      h3: ["class", "id"],
      h4: ["class", "id"],
      th: ["class", "scope"],
      details: ["class", "open"],
      div: ["class", "style"],
      span: ["class", "style"],
      "*": ["class"],
    },
    allowedClasses: {
      "*": ALLOWED_COMPONENT_CLASSES,
    },
    allowedStyles: {
      div: {
        "--v": [/^\d{1,3}%$/],
        width: [/^\d{1,3}%$/],
      },
      span: {
        "--v": [/^\d{1,3}%$/],
        width: [/^\d{1,3}%$/],
      },
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
      div: (tagName, attribs) => sanitiseStyleOnFill(tagName, attribs),
      span: (tagName, attribs) => sanitiseStyleOnFill(tagName, attribs),
    },
  });

  // Drop a leading H1 if the writer still emits one. The template owns the title.
  // Title-similarity stripping for H2/H3 runs later with the post title available.
  return cleaned.replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, "").trim();
}

export { stripDuplicateTitleHeading } from "@/lib/posts/strip-title-heading";

function sanitiseStyleOnFill(
  tagName: string,
  attribs: Record<string, string>,
): { tagName: string; attribs: Record<string, string> } {
  const className = attribs.class ?? "";
  if (!/\bbb-bar__fill\b/.test(className)) {
    const rest = { ...attribs };
    delete rest.style;
    return { tagName, attribs: rest };
  }
  return { tagName, attribs };
}

export function estimateReadTimeMinutes(html: string): number {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.round(words / 200));
}
