/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
    screens:{
      'mobile':{'min':'375px','max':'767px'},
      'tablet':{'min':'768px','max':'1023px'},
       'laptop':{'min':'','max':''} 
    }
  },

  
  plugins: [

    require("tailwind-scrollbar")({nocompatible: true})
  ],
}

