export const ASK_AI_PROMPT =
  "How can thebrightbrand, the digital marketing agency, help me? Summarise the highlights from the bright brand website: thebrightbrand.com.";

export interface AskAiPlatform {
  id: "chatgpt" | "claude" | "gemini" | "perplexity";
  name: string;
  /** Accessible label, e.g. "Ask ChatGPT about The Bright Brand" */
  label: string;
  buildUrl: (encodedPrompt: string) => string;
}

function encodedPrompt(prompt: string): string {
  return encodeURIComponent(prompt);
}

export const ASK_AI_PLATFORMS: AskAiPlatform[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    label: "Ask ChatGPT about The Bright Brand",
    buildUrl: (prompt) => `https://chatgpt.com/?q=${prompt}`,
  },
  {
    id: "claude",
    name: "Claude",
    label: "Ask Claude about The Bright Brand",
    buildUrl: (prompt) => `https://claude.ai/new?q=${prompt}`,
  },
  {
    id: "gemini",
    name: "Gemini",
    label: "Ask Gemini about The Bright Brand",
    buildUrl: (prompt) => `https://gemini.google.com/app?q=${prompt}`,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    label: "Ask Perplexity about The Bright Brand",
    buildUrl: (prompt) => `https://www.perplexity.ai/search?q=${prompt}`,
  },
];

export function getAskAiLinks(
  prompt: string = ASK_AI_PROMPT,
): Array<AskAiPlatform & { href: string }> {
  const encoded = encodedPrompt(prompt);
  return ASK_AI_PLATFORMS.map((platform) => ({
    ...platform,
    href: platform.buildUrl(encoded),
  }));
}
