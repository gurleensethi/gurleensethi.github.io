const colors = require("tailwindcss/colors");

module.exports = {
  jit: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      accent: "#3898FF",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    webpack5: true,
  },
};
