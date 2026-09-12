/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #f97316, #ec4899, #8b5cf6)",
      },
      colors: {
        brand: {
          orange: "#f97316",
          pink: "#ec4899",
          violet: "#8b5cf6",
        },
      },
    },
  },
  plugins: [],
};