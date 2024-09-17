const colors = require("tailwindcss/colors");

module.exports = {
  jit: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      accent: "#3898FF",
      primaryDark: "#2B2C31",
      secondaryDark: "#646464",
      primaryLight: "#F8F7F3",
      secondaryLight: "#F0EFEC",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      margin: ["last"],
    },
  },
  plugins: [],
  future: {
    webpack5: true,
  },
};
