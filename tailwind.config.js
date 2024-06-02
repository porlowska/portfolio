const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', 
        secondary: '#D161BB',
        background: '#000000',
      },
      fontFamily: {
        aven: ['Avenir Next LT Pro', 'sans-serif'],
        maissub: ['Maison Neue', 'sans-serif'],
        mais: ['Maison Neue Extended'],
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
