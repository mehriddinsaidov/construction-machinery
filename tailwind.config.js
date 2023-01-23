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
  },
  plugins: [],
}
