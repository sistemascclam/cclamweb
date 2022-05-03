const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Lato'],
    },
    extend: {
      backgroundImage: theme => ({
        'landing': `url('/images/landing.png')`,
        'mesa-de-partes': `url('/images/areas/mesa-de-partes.png')`,
        'protestos': `url('/images/areas/protestos.png')`,
        'formalizacion': `url('/images/areas/formalizacion.png')`,
        'comercio-exterior': `url('/images/areas/comercio-exterior.png')`,
        'identidad-digital': `url('/images/areas/identidad-digital.jpg')`,
        'kap': `url('/images/areas/kapfondo.png')`,
        'fachadacclam': `url('/images/fachadacclam.png')`,
        'fachada-gradiente': `url('/images/fachada-gradiente.jpg')`,
        'comunicado-header': `url('/images/comunicado_urgente/comunicado.jpeg')`,
        'comunicado-estatutos': `url('/images/comunicado_urgente/estatutos.jpeg')`,
        'comunicado-reglamento': `url('/images/comunicado_urgente/reglamento.jpeg')`,
        'comunicado-dos-header': `url('/images/comunicado_urgente/comunicado_2_header.jpeg')`,
        'comunicado-dos-header-dos': `url('/images/comunicado_urgente/lista_comunicado_2.jpeg')`,
        'comunicado-tres-header': `url('/images/comunicado_urgente/comunicado_3.jpeg')`,
        'comunicado-tres-header-dos': `url('/images/comunicado_urgente/comunicado_3_parte_2.jpeg')`,
        'comunicado-cuatro-header': `url('/images/comunicado_urgente/comunicado_04.png')`,
        'comunicado-cuatro-header-dos': `url('/images/comunicado_urgente/lista_comunicado_04_comite_electoral.png')`,
        'comunicado-convocatoria': `url('/images/comunicado_urgente/CONVOCATORIA_ASAMBLEA2803.png')`,
        'comunicado-ee2018': `url('/images/comunicado_urgente/ee2018.png')`,
        'comunicado-ee2019': `url('/images/comunicado_urgente/ee2019.png')`,
        'comunicado-ee2020': `url('/images/comunicado_urgente/ee2020.png')`,
        'comunicado-ee2021': `url('/images/comunicado_urgente/ee2021.png')`,
        'convocatoria-2abril': `url('/images/comunicado_urgente/convocatoria_2_abril.jpeg')`,
      }),
      colors: {
        greenWhatsapp: '#27A02F',
        themeWhite: '#F8F8F8',
        themeBlue: '#02116F',
        themeLightBlue: '#009BD7',
        startGradient: '#471E96',
        withGradient: '#253DD8',
        endGradient: '#24D6FA',
        bgblue:'#091d9d',
        azulNavidad:'#001d67'
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
        'successcard': 'successcard 2s',
        'afiliation': 'afiliation 2s',
        'fadeinup': 'fadeinUp 1s both',
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        'card': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        'close': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      },
      height: {
        '96xl': '26rem',
        '600px':'600px'
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
        },
        'afiliation': {
          '0%': {
            width: '50%',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            width: '100%',
          },
        },
        'successcard': {
          '0%': {
            width: '10rem',
            height: '10rem',
          },
          '50%': {
            width: '10rem',
            height: '10rem',
          },
          '100%': {
            width: '7rem',
            height: '7rem',
          },
        },
        'fadeinUp': {
          'from': {
            transform: ' translate3d(0,40px,0)'
          },
          'to': {
            transform: 'translate3d(0,0,0)',
            opacity: 1
          }
        }
      },
      scale: {
        '101': '1.01',
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
