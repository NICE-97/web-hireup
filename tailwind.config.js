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
        '160': '40rem',
        'screen90': '90vh',
      },
      width: {
        'customSelect': '12.3rem',
      },
      minWidth: {
        '84': '21rem',
      }
    },
  },
  plugins: [],
}

