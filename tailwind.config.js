const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
      '3xl': '2080px',
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/images/background/fog-nature-beauty.webp')",
      }),
      fontFamily: {
        europa: ["europa", ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
}
