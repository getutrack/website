import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1024px',
      '2xl': '1400px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: {
        dark: '#02948a',
        DEFAULT: '#02948a',
      },
      darkblue: {
        '50': '#e6e7f1',
        '100': '#ccd0e2',
        '200': '#99a0c5',
        '300': '#aefff9',
        '400': '#53e4d9',
        '500': '#00a99d',
        '600': '#02948a',
        '700': '#02867d',
        '800': '#034d48',
        '900': '#000416',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        lg: '20px',
        xl: '20px',
        '2xl': '20px',
      },
      screens: {
        sm: '960px',
        md: '960px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    letterSpacing: {
      tighter: '-.05em',
      tight: '-0.01em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
    backgroundImage: {
      hamburger: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
    },
  },
  plugins: [],
};
export default config;
