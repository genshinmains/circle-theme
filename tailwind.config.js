const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
    colors: {
      black: colors.black,
      purple: "#a18cd1",
      pink: "#FBC2EB",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
