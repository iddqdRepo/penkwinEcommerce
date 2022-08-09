/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/login/index.{js,ts,jsx,tsx}", "./pages/login/index.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather"],
      },
    },
  },
  plugins: [],
};
