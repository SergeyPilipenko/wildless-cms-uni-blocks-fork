/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}'],
  corePlugins: {
    filter: false,
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
      },
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        button: ['0.875rem', '1.25rem'], // 14px 20px
        'button-sm': ['1rem', '1.25rem'], // 16px 20px

        'title-xl': ['3.125rem', '3.25rem'], //50px 52px
        'title-lg': ['2.5rem', '3rem'], //40px 48px
        title: ['2rem', '2.5rem'], //32px 40px
        'title-sm': ['1.75rem', '2.5rem'], //28px 40px
        'title-new-sm': ['1.625rem', '2.25rem'], //26px 36px в рамках задачи ProductGalleryGreen #293
        'title-xs': ['1.5rem', '1.875rem'], //24px 30px
        'title-2xs': ['1.25rem', '1.75rem'], //20px 28px
        lg: ['2.188rem', '3rem'], // 35px 48px
        md: ['1.125rem', '1.5rem'], // 18px 24px
        base: ['1rem', '1.5rem'], // 16px 24px
        sm: ['0.875rem', '1.375rem'], // 14px 22px
        xs: ['0.75rem', '1.125rem'], // 12px 18px
        '2xs': ['0.625rem', '0.625rem'], // 10px 10px

        'm-button': ['0.875rem', '1.25rem'], // 14px 20px

        'm-title': ['1.375rem', '1.8125rem'], //22px 29px
        'm-title-md': ['1.25rem', '1.625rem'], //20px 26px
        'm-title-xs': ['1.0625rem', '1.375rem'], // 17px 22px
        'm-base': ['1rem', '1.5rem'], // 16px 24px
        'm-md': ['0.9375rem', '1.5rem'], // 15px 24px
        'm-sm': ['0.875rem', '1.375rem'], // 14px 22px
        'm-xs': ['1.8125rem', '1.375rem'], // 13px 22px
        'm-2xs': ['0.75rem', '1.125rem'], // 12px 18px
        'm-3xs': ['0.625rem', '0.625rem'], // 10px 10px
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
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      animation: {
        slide: 'progress linear', //TODO: I'm not sure, but it doesn't seem to be used. Need to check
      },
      keyframes: {
        progress: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0px)' },
        },
      },
      boxShadow: {
        'dark-blue/42': '0 18px 36px -4px rgba(24, 39, 75, 0.42);',
        'blue-gray/24': '0 14px 36px -4px rgba(21, 40, 90, 0.24);',
      },
      border: {
        'white/50': 'rgba(255,255,255,.5);',
      },
    },
  },
  plugins: [],
  safelist: [],
};
