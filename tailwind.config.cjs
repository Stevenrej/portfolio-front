module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'class',
};
