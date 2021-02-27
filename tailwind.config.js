// tailwind.config.js
module.exports = {
  purge: [],

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#111111",
      },
      maxWidth: {
        copy: "320px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
