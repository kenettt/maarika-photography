const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
