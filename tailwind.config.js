module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'brick': ['brick'],
        'boloon': ['boloon'],
        'craft': ['craft'],
        'Shadeerah': ['Shadeerah'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
