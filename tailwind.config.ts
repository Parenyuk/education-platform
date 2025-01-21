import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2.5rem',
        md: '2.5rem',
        lg: '2.5rem',
        xl: '0rem',
        '2xl': '10rem',
      },
    },
    extend: {
      backgroundImage: {
        'abstract-design': "url('/png/abstract_design.png')",
      },
      backgroundSize: {
        'custom-size-mobile': 'auto 50%',
        'custom-size-laptop': 'auto 200%',
      },
      backgroundPosition: {
        'custom-position-mobile': '100% 135%',
        'custom-position-laptop': '80% center',
      },
      colors: {
        orange: {
          50: '#FF9500',
          70: '#FFBF66',
          75: '#FFCA80',
          80: '#FFD499',
          90: '#FFEACC',
          95: '#FFF4E5',
          97: '#FFF9F0',
          99: '#FFFDFA',
        },
        white: {
          DEFAULT: '#ffffff',
          90: '#E4E4E7',
          95: '#F1F1F3',
          97: '#F7F7F8',
          99: '#FCFCFD',
        },
        grey: {
          10: '#191919',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4D',
          35: '#59595A',
          40: '#656567',
          60: '#98989A',
          70: '#B3B3B3',
        },
      },
      fontSize: {
        sm: ['0.875rem', '1.5'],
        lg: ['1.125rem', '1.5'],
        xl: ['1.25rem', '1.5'],
        '2xl': ['1.5rem', '1.5'],
        '3xl': ['1.875rem', '1.5'],
        '5xl': ['2.375rem', '1.5'],
        '6xl': ['3rem', '1.5'],
        '7xl': ['3.75rem', '1.5'],
        '8xl': ['5rem', '1.5'],
      },
      lineHeight: {
        custom: '150%',
      },
      screens: {
        '2xl': '1920px',
      },
      spacing: {
        '0.75': '0.1875rem',
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '90': '22.5rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          extend: 'light',
          colors: {
            default: '#F7F7F8',
            background: '#F1F1F3',
            primary: '#FF9500',
            secondary: '#262626',
            focus: '#BEF264',
          },
        },
      },
    }),
  ],
} satisfies Config;
