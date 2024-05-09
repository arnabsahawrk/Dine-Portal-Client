const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: '"Raleway", sans-serif',
        DotGothic16: '"DotGothic16", sans-serif',
      },
    },
  },
  plugins: [],
});
