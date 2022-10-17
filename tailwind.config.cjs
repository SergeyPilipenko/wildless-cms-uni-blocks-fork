/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}'],
  corePlugins: {
    filter: true,
  },
  theme: {
    screens: {
      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      backgroundColor: {
        'white/10': 'rgba(255,255,255,0.1);',
      },
      backgroundImage: {
        'opacity-to-white':
          'linear-gradient(270deg, #FFFFFF 34.89%, rgba(255, 255, 255, 0) 92.52%);',
        'opacity-from-white':
          'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 25%, rgba(255,255,255,0) 80%);',
        'opacity-to-main':
          'linear-gradient(270deg, rgba(var(--color-primary-main), 1) 34.89%, rgba(var(--color-primary-main), 0) 92.52%);',
        'opacity-from-main':
          'linear-gradient(90deg, rgba(var(--color-primary-main), 1) 0%, rgba(var(--color-primary-main), 0) 80%);',
        'green-to-yellow': 'linear-gradient(180deg, #42AB44 0%, #F6DB7D 100%)',
      },
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
        mohave: ['Mohave', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'm-title': ['1.375rem', '1.8125rem'], // 22px 29px // Временно оставлен до готовности нового мобильного дизайна
        'm-title-xs': ['1.0625rem', '1.375rem'], // 17px 22px // Временно оставлен до готовности нового мобильного дизайна

        'title-extra': ['15.625rem', '14.687rem'], // 250px 235px
        'title-huge': ['12.5rem', '15.625rem'], // 200px 250px
        h0: [
          '3.5rem',
          {
            // 56px 56px
            lineHeight: '3.5rem',
            fontWeight: '400',
          },
        ],
        h1: [
          '3.125rem',
          {
            // 50px 52px
            lineHeight: '3.25rem',
            fontWeight: '400',
          },
        ],
        h2: [
          '2.5rem',
          {
            // 40px 48px
            lineHeight: '3rem',
            fontWeight: '400',
          },
        ],
        h3: [
          '2rem',
          {
            // 32px 40px
            lineHeight: '2.5rem',
            fontWeight: '400',
          },
        ],
        h4: [
          '1.75rem',
          {
            // 28px 36px
            lineHeight: '2.25rem',
            fontWeight: '400',
          },
        ],
        h5: [
          '1.5rem',
          {
            // 24px 30px
            lineHeight: '1.875rem',
            fontWeight: '400',
          },
        ],
        h6: [
          '1.25rem',
          {
            // 20px 28px
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        xl: [
          '1.125rem',
          {
            // 18px 24px
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'xl-light': [
          '1.125rem',
          {
            // 18px 24px
            lineHeight: '1.5rem',
            fontWeight: '300',
          },
        ],
        l: [
          '1rem',
          {
            // 16px 24px
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'l-light': [
          '1rem',
          {
            // 16px 24px
            lineHeight: '1.5rem',
            fontWeight: '300',
          },
        ],
        m: [
          '0.9375rem',
          {
            // 15px 20px
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        'm-light': [
          '0.9375rem',
          {
            // 15px 20px
            lineHeight: '1.25rem',
            fontWeight: '300',
          },
        ],
        s: [
          '0.875rem',
          {
            // 14px 20px
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        's-light': [
          '0.875rem',
          {
            // 14px 20px
            lineHeight: '1.25rem',
            fontWeight: '300',
          },
        ],
        'xs-light': [
          '0.75rem',
          {
            // 12px 18px
            lineHeight: '1.125rem',
            fontWeight: '300',
          },
        ],
      },
      colors: {
        main: {
          DEFAULT: 'rgba(240, 244, 240, <alpha-value>)',
          divider: 'rgba(235, 237, 240, <alpha-value>)',
          gradient: {
            start: 'rgba(var(--color-gradient-from), <alpha-value>)',
            end: 'rgba(var(--color-gradient-to), <alpha-value>)',
          },
          stroke: 'rgba(201, 202, 204, <alpha-value>)',
        },
        primary: {
          main: 'rgba(var(--color-primary-main), <alpha-value>)',
          hover: 'rgba(var(--color-primary-hover), <alpha-value>)',
          active: 'rgba(var(--color-primary-active), <alpha-value>)',
          // Text
          text: 'rgba(28, 28, 28, <alpha-value>)',
        },
        secondary: {
          hover: 'rgba(var(--color-secondary-hover), <alpha-value>)',
          active: 'rgba(var(--color-secondary-active), <alpha-value>)',
          // Gray
          light: 'rgba(245, 247, 249, <alpha-value>)',
          dark: 'rgba(226, 228, 229, <alpha-value>)',
          // Text
          text: 'rgba(125, 126, 127, <alpha-value>)',
        },
        gray: 'rgba(201, 202, 204, <alpha-value>)',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      animation: {
        expansion: 'expansion 0.3s ease-out',
      },
      keyframes: {
        expansion: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
      },
      boxShadow: {
        'dark-blue/42': '0 18px 36px -4px rgba(24, 39, 75, 0.42);',
        'blue-gray/24': '0 14px 36px -4px rgba(21, 40, 90, 0.24);',
      },
      borderColor: {
        'white/50': 'rgba(255,255,255,.5);',
        'gray/100': 'rgba(235, 237, 240, 1);',
        'primary-hover': 'rgba(134, 134, 134, 1);',
        'primary-focus': 'rgba(28, 28, 28, 1);',
        'checkbox-hover': 'rgba(134, 134, 134, 1);',
      },
    },
  },
  plugins: [],
  safelist: [],
};
