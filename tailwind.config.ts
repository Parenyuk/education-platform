import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        sm: [
          '0.875rem',
          {
            lineHeight: '150%',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '150%',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '150%',
          },
        ],
      },
      screens: {
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
