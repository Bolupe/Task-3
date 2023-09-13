/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'home': 'DM Sans, sans-serif',
      'detail': 'Poppins, sans-serif',
    },
    extend: {
       backgroundImage : {
      "hero" : "url('/src/assets/hero.png')"
      }
    },
  },
  plugins: [],
}