/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-bg': "url('/src/components/img/about-bg-1.jpg')",
      }
    },
    screens: {
      phone2: {max: '370px'},
      tablet1: {max: '664px'},
      tablet2: {max: '768px'},
      laptop1: {max: '1072px'},
      laptop2: {max: '1280px'},
      desktop: {max: '1536px'},
    }
  },
  plugins: [],
}
