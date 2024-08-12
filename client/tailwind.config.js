/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#40534C",
        primary: "#677D6A",
        secondary: "#5C8374",
        dark: "#748E63",
      },
    },
  },
  plugins: [],
};
