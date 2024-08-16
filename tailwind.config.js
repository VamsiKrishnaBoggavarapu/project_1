/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        firaSans: `"Fira Sans", sans-serif`, // Adds a new `font-display` class
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "13xl": "12rem",
      },
      gridTemplateColumns: {
        autoOneFrameColumns: "auto 1fr",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
