/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{ts,tsx,js,jsx}'],
  darkMode: false,
  theme: {
    colors: {
      'window95-deep-gray': '#84888c',
      'window95-light-gray': '#C0C4C8',
      'window95-white' : '#FCFCFC',
      'window95-button-gray' : '#e5e5e5',
      'window95-button-deep-gray' : '#d5d5d5'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
