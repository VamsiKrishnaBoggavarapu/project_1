/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        firaSans: `"Fira Sans", sans-serif`, // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
};
