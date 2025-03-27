import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const fontFamilyText = process.env.NUXT_PUBLIC_FONT || 'Red Hat Text';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      sfTypography: () => ({
        'display-1': {
          fontFamily: 'inherit',
        },
        'display-2': {
          fontFamily: 'inherit',
        },
        'headline-1': {
          fontFamily: 'inherit',
        },
        'headline-2': {
          fontFamily: 'inherit',
        },
        'headline-3': {
          fontFamily: 'inherit',
        },
        'headline-4': {
          fontFamily: 'inherit',
        },
        'headline-5': {
          fontFamily: 'inherit',
        },
        'headline-6': {
          fontFamily: 'inherit',
        },
      }),
      fontFamily: {
        body: [`${fontFamilyText}`, ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          '50': 'var(--primary-50)',
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)',
          '950': 'var(--primary-950)',
        },
        secondary: {
          '50': 'var(--secondary-50)',
          '100': 'var(--secondary-100)',
          '200': 'var(--secondary-200)',
          '300': 'var(--secondary-300)',
          '400': 'var(--secondary-400)',
          '500': 'var(--secondary-500)',
          '600': 'var(--secondary-600)',
          '700': 'var(--secondary-700)',
          '800': 'var(--secondary-800)',
          '900': 'var(--secondary-900)',
          '950': 'var(--secondary-950)',
        },
        editor: {
          'body-bg': '#F1F3F5',
          button: '#062633',
          danger: '#a40e26',
        },
        'red-color': '#D21246'
      },
      gridTemplateAreas: {
        'product-page': ['left-top right', 'left-bottom right'],
      },
      gridTemplateColumns: {
        'product-page': 'minmax(56%, 500px) auto',
      },
      gridTemplateRows: {
        'category-sidebar': 'min-content auto min-content',
      },
      screens: {
        '4xl': '1920px',
        '3xl': '1536px',
        '2xl': '1366px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '376px',
        '2xs': '360px',
      },
      width: {
        '128': '32rem',
      },
      spacing: {
        s: '1.875rem',
        m: '2.5rem',
        l: '3.125rem',
        xl: '3.75rem',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1240px',
      },
    },

  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas')],
} as Config;
