/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
