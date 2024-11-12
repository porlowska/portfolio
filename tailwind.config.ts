import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#D161BB",
        background: "#000000",
      },
      fontFamily: {
        aven: ["Avenir Next LT Pro", "sans-serif"],
        maissub: ["Maison Neue", "sans-serif"],
        mais: ["Maison Neue Extended"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
