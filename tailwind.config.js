const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-pattern': "url('/images/landing.png')"
      }),
      colors: {
        greenWhatsapp: '#27A02F',
        themeWhite: '#F8F8F8',
        themeBlue: '#02116F',
        themeLightBlue: '#009BD7',
      },
      zIndex: {
       '-10': '-10',
      },
      inset: {
       '-16': '-4rem',
      },
      animation: {
       'ping-fast': 'ping 0.8s cubic-bezier(0, 0, 0.5, 0) infinite',
      },
      boxShadow: {
        '3xl' : 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        'card' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
      height:{
        '96xl': '26rem'
      },
      borderRadius: {
        '4xl': '3rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
