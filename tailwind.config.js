/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./privacy-policy/*.html",
    "./scanning/*.html",
    "./scanning/extended-pids/*.html",
    "./scanning/repo-status/*.html",
    "./shortcuts/*.html"
  ],
  theme: {
    container: {
      center: true,
      screens: {
          'sm': '375px',
          'lg': '900px',
      }
    },
  },
  plugins: [],
}

