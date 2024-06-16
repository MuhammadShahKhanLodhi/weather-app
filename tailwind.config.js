/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00171F",
        secondary: "#003459"
      },
      screens: {
        xl: "1260px",
        lg: "1000px",
        md: "860px",
        sm: "570px",
        xs: "426px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }

    },
  },
  plugins: [],
}