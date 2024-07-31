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
    extend: {
      colors: {
        'sidecar-gray': '#262625',
      }
    },
    fontFamily: {
      'rounded': ['ui-rounded', '-apple-system', 'system-ui', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
    },
    container: {
      center: true
    },
    screens: {
      'sm': '375px',
      'md': '900px',
    }
  },
  plugins: [],
}

