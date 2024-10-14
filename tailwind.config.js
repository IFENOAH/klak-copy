/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{jsx,ts,tsx,js}'];
export const theme = {
  fontFamily: {
    nunito: ['Nunito', 'sans-serif'],
  },
  extend: {
    colors: {
      primary: {
        100: '#3A032D',
        150: '',
        200: '#6B0653',
        250: '',
        300: '#CC0B9E',
        350: '',
        400: '#FC0FC0',
        450: '',
        500: '#FCC2EE'
      },
      secondary: {
        100: '#E1F038',
        150: '',
        200: '#FF004F',
        250: '',
        300: '#4CAF50',
        350: '',
        400: '#FADA5E',
        450: '',
        500: '#FBF9F0'
      },
      neutral: {
        100: '#1F1F1F',
        150: '',
        200: '#393939',
        250: '',
        300: '#6B6B6B',
        350: '',
        400: '#858585',
        450: '',
        500: '#DFDFDF'
      },
      error: {
        100: '#FF0000',
      },
    },
    backgroundColor: ['even'],
  },
};
export const variants = {
  extend: {
    display: ['group-focus']
  }
};
export const plugins = [
  // require('@tailwindcss/typography'),
  // require('@tailwindcss/forms'),
  // require('flowbite/plugin'),
  // require('@tailwindcss/line-clamp'),
  // require("daisyui"),
];