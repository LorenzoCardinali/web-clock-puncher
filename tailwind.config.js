/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': "#0D0F15",
        'gray-dark': "#13151B",
        'gray-light': "#17191F",
        'white-light': "#979BA2",
        'orange': "#F6AA1C"
      },
      fontFamily: {
        'inter': ['inter']
      },
      fontSize: {
        'xxs': '8px'
      }
    },
  },
  plugins: [],
}