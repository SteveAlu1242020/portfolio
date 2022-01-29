module.exports = {
  darkMode: 'class', // ... ,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F4F9FC',
        secondary: {
          100: '#',
          200: '#'
        }
      },

      width: {
        custom1: 'calc(100% - 2rem)'
      }
    },
  },
  plugins: [],
}
