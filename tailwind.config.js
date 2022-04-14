module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}'
    ]
  },
  darkMode: 'class', 
  theme: {
    extend: {
      screens: {
        'lg': {'max': '1050px'},
      },
      colors: {
        'greenFluffyBag': '#0A642E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};