/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'play': ['MandatoryPlaything'] 
      },
      fontSize: {
        1: '38px',
        2: '24px',
        4: '14px',
        6: '12px',
        7: '64px',
        8: '18px',
        9: '30px',
        10: '16px',
        12: '21px',
        13: '86px',
      },
      colors: {
        yellow: {
          main: '#e9a134',
          1: '#f6b455',
          2: '#dea695',
          3: '#feba00',
        },
        dark: {
          1: '#222222',
          2: '#080808',
          main: '#000000'
        },
        white: {
          main: '#ffffff',
          1: '#c9c9c9',
          2: '#989898',
          3: '#252525',
          4: '#fefefe',
          5: '#898989',
          6: '#151515',
          7: '#262626',
          8: '#3f3f3f'
        },
        blue: {
          main: '#4557ff',
        }

      }
    },
  },
  plugins: [],
}
