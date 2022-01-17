module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', 
  theme: {
    screens: {
      'lg': {'max': '1050px'},
    },
    colors: {
      'greenFluffyBag': '#0A642E',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};