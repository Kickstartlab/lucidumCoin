/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "#8E8E8E",
        "50": "#161b1c",
        "100": "#040612",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "100": "#4889D6",
      },
    },
    fontFamily: {
      'orbitron': ["'Orbitron', sans-serif"],
      'jakarta': ["'Plus Jakarta Sans', sans-serif"]
    }
  },
  plugins: [],
}
