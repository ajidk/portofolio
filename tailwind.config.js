module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "Helvetica", "sans-serif"],
      },
      width: {
        "10em": "10em",
        "90em": "90em",
      },
      screens: {
        xs: { max: "767px" },
        sm: { min: "768px" },
        xl: { min: "1156px" },
      },
    },
  },
  plugins: [],
};
