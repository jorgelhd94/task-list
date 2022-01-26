module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      screens: {
        lg: '1230px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
