/** @type {import('tailwindcss').Config} */


module.exports =  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'agri1': "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'agri2': "url('https://images.unsplash.com/photo-1621459555843-9a77f1d03fae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      
    },
  },
  
  plugins: [
    
    require('flowbite/plugin'),require('tailwindcss-font-inter'),require('@tailwindcss/forms'),require('tailwindcss-font-inter'),
  ],
};
