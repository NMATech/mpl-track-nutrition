/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          green: "#D1E8E0",
        },
        dark: {
          green: "#508F6D",
        },
        background: "#F2F5F2",
      },
    },
  },
  plugins: [],
};
