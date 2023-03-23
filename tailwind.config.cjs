module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
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
