/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        white: '#FFFFFF',
        gray : '#EAECF0',
        text_color: '#101828',
        dark_gray: '#667085'
      }
    },
  },
  plugins: [],
}
