/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "index.html",
    "script.js",
    "about.html",
    "blogMSIB.html",
    "blogkuliah.html",
    "bloghelu.html",
    "kontak.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E30202",
        secondary: "#F04646",
        tertiary: "#E6E1E1",
        accent: "#D6A1A1",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
