/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      }, 
      width: {
        "95": "95.0%", //html
        "85": "90.0%", // css / react
        "82": "82.0%", // js
        "60": "60.0%", // java
      },
      
    },
    variants: {
      extend: {
        display: ["group-focus"],
        opacity: ["group-focus"],
        inset: ["group-focus"],
      },
    },
  },
  plugins: [],
}