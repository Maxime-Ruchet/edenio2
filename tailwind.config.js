/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      sans: ['Itim',],
      serif: ['Itim',]
    },
    extend: {
      colors: {
      indigo: '#1d096b',
      green: '#336633',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      yellow: '#FFEA28',
      yellow2: '#eab308',
      green2: '#54A32F',
      yellow3: '#F1F2EA',
      gray: colors.zinc
    },},
  },
  plugins: [],
  
}
