const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
	    white: colors.white,
      indigo: colors.indigo,
      slate: colors.slate,
      'gray': {
        50: '#EEE',
        100: '#BEBEBE',
        200: '#9C9C9C',
        300: '#585858',
        400: '#2F2F2F',
      },
    },
    fontFamily: {
      ...fontFamily,
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'fadeUp': 'fadeUp 1s'
      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
  },
  plugins: [],
  };