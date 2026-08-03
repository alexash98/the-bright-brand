/**
 * Extract FAQ Q&A pairs from sanitised article HTML.
 * Only details.blog-faq-item blocks that survived sanitisation are included,
 * so structured data never invents questions the page does not show.
 */
export function extractFaqFromHtml(
  html: string,
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const detailsRe =
    /<details\b[^>]*\bclass=["'][^"']*\bblog-faq-item\b[^"']*["'][^>]*>([\s\S]*?)<\/details>/gi;

  let match: RegExpExecArray | null;
  while ((match = detailsRe.exec(html)) !== null) {
    const block = match[1];
    if (!block) continue;

    const summaryMatch = /<summary\b[^>]*>([\s\S]*?)<\/summary>/i.exec(block);
    const summaryHtml = summaryMatch?.[1];
    if (!summaryHtml) continue;

    const question = stripTags(summaryHtml).trim();
    const answerHtml = block.replace(/<summary\b[^>]*>[\s\S]*?<\/summary>/i, "");
    const answer = stripTags(answerHtml).trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
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
