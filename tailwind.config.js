/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        'custom-md':'950px',
        'custom-lg': '1400px', 
        'custom-lg1': '1060px'
      },
      width:{
        '26': '6.5rem'
      }
    },
  },
  plugins: [],
}