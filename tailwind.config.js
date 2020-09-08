module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        'print': {'raw': 'print'},
        'portrait': {'raw': '(orientation: portrait)'},
      },
      fontFamily: {
        'roboto': ['roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
