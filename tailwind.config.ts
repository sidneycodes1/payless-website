import type { Config } from "tailwindcss";

// NOTE: Tailwind v4 does not auto-load JS/TS configs. This file is loaded
// explicitly via `@config "../../tailwind.config.ts";` in src/app/globals.css.
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-poppins)", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#1E3ED9",
        "near-black": "#181A18",
        cream: "#CBC8C5",
        black: "#000000",
        // Blue scale (light -> darker) with hover/active states
        "blue-light": "#e9ecfb",
        "blue-light-hover": "#dde2f9",
        "blue-light-active": "#b9c3f3",
        "blue-normal": "#1e3ed9",
        "blue-normal-hover": "#1b38c3",
        "blue-normal-active": "#1832ae",
        "blue-dark": "#172fa3",
        "blue-dark-hover": "#122582",
        "blue-dark-active": "#0d1c62",
        "blue-darker": "#0b164c",
      },
      // Figma type scale: base 16px, ratio 1.309, H1 80px down to H9 9px.
      // Values are sourced from the --type-* CSS variables (src/app/globals.css).
      fontSize: {
        h1: ["var(--type-1)", "1"],
        h2: ["var(--type-2)", "1.309"],
        h3: ["var(--type-3)", "1.309"],
        h4: ["var(--type-4)", "1.309"],
        h5: ["var(--type-5)", "1.309"],
        h6: ["var(--type-6)", "1.309"],
        h7: ["var(--type-7)", "1.309"],
        h8: ["var(--type-8)", "1.309"],
        h9: ["var(--type-9)", "0.563"],
      },
    },
  },
  plugins: [],
} satisfies Config;