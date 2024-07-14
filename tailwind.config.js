/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // General colors
        white: "#FFFFFF",
        black: "#000000",
        light: "#D9D9D9",
        dark: "#343439",
        green: "#6A753D",
        blue: "#344767",
        pink: "#E73875",
        gray: "#5D6679",
        grayLight: "#858D9D",
        lightText: "#8181A5",
        line: "#F0F0F3",
        card: "#F5F5FA66",
      },
    },
  },
  plugins: [],
};
