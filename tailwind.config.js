/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'all-round-gothic': ['"all-round-gothic", sans-serif'],
      },
      fontWeight: {
        '200': '200', // XLig
        '400': '400', // Book
        '500': '500', // Medium
        '600': '600', // Demi
        '700': '700', // Bold
      },
    },
  },
  plugins: [],
}

