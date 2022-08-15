/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/login/index.{js,ts,jsx,tsx}",
    "./pages/login/index.tsx",
    "./pages/instructions/index.tsx",
    "./pages/dashboard/*.tsx",
    "./components/NavbarComponent/NavbarComponent.tsx",
    "./adminComponents/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather"],
      },
    },
  },
  plugins: [],
};
