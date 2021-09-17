module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      nightwind: {
        transitionDuration: '200ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("nightwind")],
}
