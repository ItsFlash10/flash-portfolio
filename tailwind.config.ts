import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#001b2a',
        secondary: '#CAC0B3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 25px 110px -15px #001b2a',
      },
      screens: {
        xs: '450px',
      },
      // backgroundImage: {
      //   'hero-pattern': "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
} satisfies Config;
