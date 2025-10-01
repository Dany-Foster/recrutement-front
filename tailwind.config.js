import withMT from '@material-tailwind/react/utils/withMT'
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default withMT(config)