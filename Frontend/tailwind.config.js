/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'add': 'rgb(29, 78, 216)',
      'delete': 'rgb(185, 28, 28)',
      'done': 'rgb(21, 128, 61)',
      'white': 'rgb(255, 255, 255)',
      'disable': 'rgb(107, 114, 128)',
      'text': 'rgb(17, 24, 39)',
      'inputBorder': 'rgb(37, 99, 235)',
    },

    screens: {
      lg: { max: "991px" },
      md: { max: "769px" },
      sm: { max: "479px" },
    },
    extend: {},
  },
  plugins: [],
}
