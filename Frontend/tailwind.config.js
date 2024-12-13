/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-light-green': '#C1E899',
        'custom-brown' : '#9A6735',
        'custom-offwhite': '#E6F0DC',
        'custom-dark-green': '#55883B',
        'custom-black': '#101010',
        'custom-black-50': '#18181b',
        'custom-gold': '#FDBA74',
        'custom-white': '#D1D5DB',
      },
      fontFamily: {
        'heading': ["Oswald", 'sans-serif'],
        'content': ["Lato", 'sans-serif'],
      },
    },
  },
  plugins: [],
}


