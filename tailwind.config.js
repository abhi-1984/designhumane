// tailwind.config.js
module.exports = {
  purge: [],

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
      blur: "blur(10px)",
    },
    extend: {
      colors: {
        black: "#111111",
        linkedin: "#0a66c2",
        twitter: "#1da1f2",
        dribbble: "#ea4c89",
      },
      backdropFilter: {
        // defaults to {}
        none: "none",
        blur: "blur(20px)",
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
  plugins: [require("tailwindcss-filters")],
};
