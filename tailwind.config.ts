import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "var(--brand-primary)",
        fg: "var(--brand-fg)",
        bg: "var(--brand-bg)",
        muted: "var(--brand-muted)",
        accent: "var(--brand-accent)",
      },
      spacing: {
        "section-y": "5rem",
        "section-y-lg": "7rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
};

export default config;
