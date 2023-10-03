/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'mobile':{'min':'375px','max':'426px'}
    }
  },

  
  plugins: [

    require("tailwind-scrollbar")({nocompatible: true})
  ],
}

