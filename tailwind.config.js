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
        sky: colors.sky,
        cyan: colors.cyan,
        greenWhatsapp: '#27A02F'
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
        '8x1' : 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
