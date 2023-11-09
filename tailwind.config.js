/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#000000",
        "primary-2": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
