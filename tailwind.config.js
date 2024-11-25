/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary : "#161a1d",
        secondary : "#252422",
        button : "#0bda51",
        border : "#adb5bd",
        bg : "#403d39",
        login : "rgb(128,128,128)"
      },
      fontFamily : {
        bodyFont : ['Allerta']
      }
    },
  },
  plugins: [],
}

