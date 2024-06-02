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
        bodyLight: ['Avenir Next LT Pro', 'sans-serif'],
        subheading: ['Maison Neue', 'sans-serif'],
        heading: ['Maison Neue Extended', 'sans-serif'],
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
