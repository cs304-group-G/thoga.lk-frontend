/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'agri1': "url('/src/assets/1.jpg')",
      },
    },
  },
  
  plugins: [
    
    require('flowbite/plugin'),require('tailwindcss-font-inter'),require('@tailwindcss/forms'),
  ],
};
