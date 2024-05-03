/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jacquard: ["Jacquard 24", "system-ui"],
      },
      colors: {
        xt: "#9e9eac",
      },
    },
  },
  plugins: [],
};
