/**
 * Drop a leading body heading that restates the post title.
 * The template already renders the H1 in the hero.
 */
export function stripDuplicateTitleHeading(
  html: string,
  title: string,
  slug?: string,
): string {
  const match = /^\s*<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>\s*/i.exec(html);
  if (!match) return html;

  const headingHtml = match[2] ?? "";
  const headingText = stripTags(headingHtml);
  if (!isCloseTitleMatch(title, headingText)) {
    return html;
  }

  console.info(
    `[strip-title-heading] Removed leading H${match[1]} that restated the title${
      slug ? ` on ${slug}` : ""
    }: "${headingText.slice(0, 80)}"`,
  );

  return html.slice(match[0].length).trim();
}

function stripTags(value: string): string {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isCloseTitleMatch(title: string, heading: string): boolean {
  const a = normalize(title);
  const b = normalize(heading);
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.includes(b) || b.includes(a)) return true;

  const wordsA = new Set(a.split(" ").filter((word) => word.length > 2));
  const wordsB = new Set(b.split(" ").filter((word) => word.length > 2));
  if (wordsA.size === 0 || wordsB.size === 0) return false;

  let overlap = 0;
  for (const word of wordsA) {
    if (wordsB.has(word)) overlap += 1;
  }
  const union = new Set([...wordsA, ...wordsB]).size;
  return overlap / union >= 0.55;
}
