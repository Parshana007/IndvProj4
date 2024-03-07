module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        teal: { 900: "#003e1f" },
        gray: { 600: "#859777" },
        blue_gray: { 100: "#d9d9d9" },
        red: { A700: "#b40000" },
        blue: { 900: "#0048b4" },
        green: { 800: "#169e00" },
        yellow: { A700: "#f1d900" },
        cyan: { 200: "#8acee3" },
        black: { 900: "#000000" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
