/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in",
        fadeinslow: "fadein 7s ease-in",
      },
      fontFamily: {
        mono: ["Jetbrains Mono"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
