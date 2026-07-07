import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "tbb-bg": "var(--tbb-bg)",
        "tbb-surface": "var(--tbb-surface)",
        "tbb-card": "var(--tbb-card)",
        "tbb-text": "var(--tbb-text)",
        "tbb-text-muted": "var(--tbb-text-muted)",
        "tbb-blue": "var(--tbb-blue)",
        "tbb-green": "var(--tbb-green)",
        "tbb-red": "var(--tbb-red)",
      },
      borderColor: {
        "tbb-card": "var(--tbb-card-border)",
      },
      spacing: {
        "section-y": "5rem",
        "section-y-lg": "7rem",
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
};

export default config;
