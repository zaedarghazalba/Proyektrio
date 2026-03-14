import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        g1: "var(--g1)",
        g2: "var(--g2)",
        g3: "var(--g3)",
        g4: "var(--g4)",
        g5: "var(--g5)",
        g6: "var(--g6)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "display-xs": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-lg": ["7rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-xl": ["9rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "body-base": ["1rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-xl": ["1.25rem", { lineHeight: "1.6" }],
        "label-xs": ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
        "label-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "label-md": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        "section-padding": "var(--section-padding)",
      },
      maxWidth: {
        "content": "var(--max-width)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "fast": "300ms",
        "base": "600ms",
        "slow": "1000ms",
        "cinematic": "1400ms",
      },
      zIndex: {
        "cursor": "9999",
        "grain": "9998",
        "grid": "9997",
        "preloader": "99999",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
