const colors = require('tailwindcss/colors');

module.exports = {
  content: {
    files: ['./src/**/*.vue'],
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    fontFamily: {
      body: ['Source Code Pro', 'Menlo', 'monospace'],
      display: ['Source Code Pro', 'Menlo', 'monospace'],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: 'transparent',
      light: '#f2f2f2',
      dark: '#1c2129',
      gray: '#4e4e50',
      muted: '#192a42',
      lightblue: '#1eb1e6',
      blue: '#355da8',
      // primary: colors.stone,
      // secondary: colors.cyan,
      // neutral: colors.slate,
      // danger: colors.rose,
      warning: colors.amber,
    },
  },
  plugins: [],
};
