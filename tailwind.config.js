/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F3DFE",
        secondary: "#210AFE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        m: { min: "320px", max: "639px" },
      },
      container: {
        center: {
          m: true,
        },
      },
    },
  },
  plugins: [],
};
