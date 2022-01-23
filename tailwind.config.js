module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend : {
      colors:{
        primary: '#EE2455',
        secondary: '#22A2D5'
      },
      height: {
        0.4: "0.077rem",
       },
       fontFamily: {
        MontSerrat : ['Montserrat']
      },
      screens: { 'sm': { 'max': '640px' } },
      boxShadow: {
        blue: '0 25px 50px -12px rgba(19, 51, 81, 0.39)',
      },
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
