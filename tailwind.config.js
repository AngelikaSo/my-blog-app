module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#EFF4F5",
      blue: "#213E77",
      "light-blue": "#41709B",
      red: "#DE4D4E",
      white: "#fff",
      black: "#222",
    },
    extend: {
      screens: {
        // Custom screen sizes
        sm: "390px", // Mobile
        md: "744px", //iPad
        lg: "1280px", //Desktop
      },
      padding: {
        13.25: "13.15rem", // Custom padding
      },
      height: {
        28.75: "28.75rem", // Custom img hero height
        25: "25rem", // Custom img hero height sm, md
      },
      width: {
        37: "37rem", // custom text width lg
        31: "31.5rem", // custom text with sm
      },
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
      },
    },
  },
  plugins: [],
};
