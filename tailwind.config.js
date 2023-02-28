/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: 'Dosis, sans-serif'
      },
      colors: {
        pet: {
          500: '#fbe5da'
        },
        gray: {
          100: '#E1E1E6',
          300: '#8A8A8A',
          // 600: '#323238',
          // 800: '#202024',
          // 900: '#121214'
        },
        yellow: {
          500: '#F7DD43'
        }
      },
    },
    plugins: [],
  }
}