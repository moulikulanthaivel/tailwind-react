/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "4px",
        sm: "8px",
        base: "12px",
        lg: "16px",
        xl: "32px",
      },
      colors: {
        vuejs: {
          100: "#e3da5d",
          200: "#5e03fc",
        },
      },
    },
  },
  plugins: [],
};
