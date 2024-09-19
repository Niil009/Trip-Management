/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'back-image': "url('/images/backImg1.jpg')",
      }
    },
  },
  plugins: [],
}

