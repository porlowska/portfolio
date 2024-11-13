import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./_components/**/*.{js,ts,jsx,tsx}",
    "./style/**/*.{css,ts}",
  ],
  theme: {
    extend: {
      colors: {
        whiteish: "#DBDBDB",
        blackish: "#121212",
        primary: "#d1136f",
        secondary: "#f5bb1d",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
