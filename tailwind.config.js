/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // '2xl': '1536px',
    },
    colors: {
      primary: colors.teal,
      secondary: colors.darkblue,
      neutral: colors.gray,
      teal: '#3edde8',
      darkblue: '#070738',
      blue: '#1313ee',
      pink: '#ff22f5',
      orange: '#ff8500',
      yellow: '#f7ba23',
      red: '#ff1f5a',
      purple: '#9d2cff',
      sand: '#e8e2d0',
      white: '#ffffff',
      gray: '#e0e0e0',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Pattaya', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
