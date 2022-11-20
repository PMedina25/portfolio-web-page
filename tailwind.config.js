const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      ...defaultTheme.colors,
      primary: "rgb(25, 118, 210)",
      secondary: "rgb(55, 125, 255)",
      transparet: "transparent",
      "dark-blue": "#222B44",
      "darker-blue": "#202841",
      white: "#ffffff",
      gray: "rgb(174, 176, 180)",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
    },
    fontSize: {
      ...defaultTheme.fontSize,
      "text-3xl": "2rem",
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
};
