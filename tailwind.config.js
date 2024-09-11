/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  darkMode: "selector",
  theme: {
    extend: {
      backgroundColor: {
        "body-gray": "hsl(0, 0%, 90%)",
        "body-blue": "hsl(222, 26%, 31%)",
        "screen-gray": "hsl(0, 0%, 93%)",
        "screen-blue": "hsl(224, 36%, 15%)",
        "keypad-gray": "hsl(0, 5%, 81%)",
        "keypad-blue": "hsl(223, 31%, 20%)",
        "key-cyan": "hsl(185, 42%, 37%)",
        "key-orange": "hsl(25, 99%, 27%)",
        "key-blue": "hsl(225, 21%, 49%)",
        "key-orange": "hsl(30, 25%, 89%)",
      },
      textColor: {
        "text-blue": "hsl(221, 14%, 31%)",
        "text-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        nm: "32px",
      },
    },
  },
  plugins: [],
};
