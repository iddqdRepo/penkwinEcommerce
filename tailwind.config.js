/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/login/index.{js,ts,jsx,tsx}",
    "./pages/login/index.tsx",
    "./pages/instructions/index.tsx",
    "./components/NavbarComponent/NavbarComponent.tsx",
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
