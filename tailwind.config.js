/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        cream:    "#FAF6EF",
        espresso: "#2C1810",
        forest:   "#2D4A3E",
        amber:    "#C17F24",
        burgundy: "#7A3B3B",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body:    ['"Lato"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
