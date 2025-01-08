import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  colors: {
    'text': '#323353',
    'background': '#def1f7',
    'primary': '#a2ddb1',
    'secondary': '#eacda9',
    'accent': '#513168',
   },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["pastel", "forest"],
  },
};
