/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'myPhoto': "url(../public/images/Stadion.JPG)"
      }
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
