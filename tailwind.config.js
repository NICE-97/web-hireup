/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '112': '28rem',
        '120': '30rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}

