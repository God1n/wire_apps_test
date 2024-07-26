/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

