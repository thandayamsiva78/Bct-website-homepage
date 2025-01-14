/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        custome_litegray : "#F2F1E2",
        custome_green : "#147169",
        custome_lightGreen : "#1d8d80",
        custome_red : "#EC4342"
      }
    },
  },
  plugins: [],
}