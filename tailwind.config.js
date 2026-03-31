/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        milk: "#f6f2ed",
        warm: "#efe8df",
        linen: "#dfd2c4",
        powder: "#d8bbb7",
        rose: "#cfa9a4",
        taupe: "#8d7a70",
        ink: "#2d2421",
        gold: "#b59668"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 36px rgba(82, 65, 56, 0.12)"
      }
    }
  },
  plugins: []
};
