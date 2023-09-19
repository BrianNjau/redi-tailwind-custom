/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./src/**/*.{ts,tsx,jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d","950":"#052e16"}
      }
  },
},
  plugins: [
    require('flowbite/plugin'),
    
  ],
}
