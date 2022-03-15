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
      dark: '#1a1a1d',
      gray: '#4e4e50',
      muted: '#6f2232',
      pink: '#950740',
      red: '#c3073f',
      // primary: colors.stone,
      // secondary: colors.cyan,
      // neutral: colors.slate,
      // danger: colors.rose,
      warning: colors.amber,
    },
  },
  plugins: [],
};
