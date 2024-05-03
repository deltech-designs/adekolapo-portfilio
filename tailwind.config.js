/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: "5rem",
    },

    mdContainer: {
      padding: "2rem",
    },

    fontFamily: {
      sans: "poppins",
    },

    fontSize: {
      12: "12px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      32: "32px",
      36: "36px",
      48: "48px",
      50: "50px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        magenta: "#E70FAA",
        cyan: "#00C0FD",
        darkblue: "#42446E",
        darkgray: "#666666",
        solidblue: "#42446E",
        lightsuccess: "#D7FFE0",
        success: "#018C0F",
      },
    },
  },

  plugins: [],
};
