/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // lime: {
        //   DEFAULT: '#d8e0a4',
        //   100: '#353a14',
        //   200: '#697428',
        //   300: '#9ead3b',
        //   400: '#bfcc6a',
        //   500: '#d8e0a4',
        //   600: '#e0e6b6',
        //   700: '#e7ecc8',
        //   800: '#eff3db',
        //   900: '#f7f9ed'
        // },
        ocean: {
          DEFAULT: '#1a485f',
          100: '#050f13',
          200: '#0b1d26',
          300: '#102c3a',
          400: '#153a4d',
          500: '#1a485f',
          600: '#2b779d',
          700: '#48a1cd',
          800: '#85c0de',
          900: '#c2e0ee'
        },
        lime: {
          DEFAULT: '#ff6060',
          100: '#460000',
          200: '#8d0000',
          300: '#d30000',
          400: '#ff1b1b',
          500: '#ff6060',
          600: '#ff8181',
          700: '#ffa0a0',
          800: '#ffc0c0',
          900: '#ffdfdf'
        }
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
