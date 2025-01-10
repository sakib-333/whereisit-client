/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#16100d",
        background: "#faf8f5",
        primary: "#a17863",
        secondary: "#c6d0af",
        accent: "#a3bd8f",
      },
    },
  },
  plugins: [require("daisyui")],
};
