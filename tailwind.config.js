/** @type {import('tailwindcss').Config} */
import { THEME } from "./zyph/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: THEME,
  },
  plugins: [],
};