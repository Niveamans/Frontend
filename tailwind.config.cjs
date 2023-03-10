/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
    },
    screens: {
      xxs:"400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd:"900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
