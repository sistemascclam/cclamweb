const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/landing.png')",
        'mesa-de-partes': "url('/images/areas/mesa-de-partes.png')",
        'protestos': "url('/images/areas/protestos.png')",
        'formalizacion': "url('/images/areas/formalizacion.png')",
        'comercio-exterior': "url('/images/areas/comercio-exterior.png')",
        'fachadacclam': "url('/images/fachadacclam.png')",
      }),
      colors: {
        greenWhatsapp: '#27A02F',
        themeWhite: '#F8F8F8',
        themeBlue: '#02116F',
        themeLightBlue: '#009BD7',
        startGradient: '#471E96',
        withGradient: '#253DD8',
        endGradient: '#24D6FA',
      },
      zIndex: {
        '-10': '-10',
        '-15': '-15',
      },
      inset: {
        '-16': '-4rem',
      },
      animation: {
        'ping-fast': 'ping 0.8s cubic-bezier(0, 0, 0.5, 0) infinite',
        'bounce-right': 'bounce-right 1s infinite',
        'triangle-float1': 'float1 5s infinite',
        'triangle-float2': 'float2 4s infinite',
        'triangle-float3': 'float3 6s infinite',
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        'card': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        'close': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      },
      height: {
        '96xl': '26rem'
      },
      borderRadius: {
        '4xl': '3rem',
        '5xl': '5rem',
      },
      brightness: {
        25: '.25',
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(25%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'float1': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(-10px, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        'float2': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(-5px, -5px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        'float3': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(0, -10px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        }
      },
      scale: {
        '200': '2',
        '300': '3',
      },

      cursor: {
        grab: 'grab',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
