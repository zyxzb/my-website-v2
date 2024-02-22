import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        black: '#12232E',
        white: '#EEFBFB',
        darkBlue: '#203647',
        lightBlue: '#4DA2DA',
      },
      fontFamily: {
        sans: ['Inconsolata', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        xSmallHeight: { raw: '(max-height: 490px)' },
        smallHeight: { raw: '(max-height: 725px)' },
      },
      height: {
        '100dvh': '100dvh',
      },
    },
  },
  plugins: [],
};
export default config;
