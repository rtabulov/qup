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
    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },
    colors: {
      primary: colors.stone,
      secondary: colors.cyan,
      neutral: colors.slate,
      danger: colors.rose,
      warning: colors.amber,
    },
  },
  plugins: [],
};
