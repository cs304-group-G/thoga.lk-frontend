/** @type {import('tailwindcss').Config} */


module.exports =  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'agri1': "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'agri2': "url('https://images.unsplash.com/photo-1621459555843-9a77f1d03fae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'agri3': "url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  
  plugins: [
    
    require('flowbite/plugin'),require('tailwindcss-font-inter'),require('@tailwindcss/forms'),require('tailwindcss-font-inter'),
  ],
};
