/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Roboto Condensed", "Sans-Serif"],
      body: ["Cabin", "Sans-Serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
    },
    colors: {
      transparent: "transparent",
      black: "#222",
      white: "#fff",
      grey: {
        50: "#f0f4f8",
        100: "#d9e2ec",
        200: "#bcccdc",
        300: "#9fb3c8",
        400: "#829ab1",
        500: "#627d98",
        600: "#486581",
        700: "#334e68",
        800: "#243b53",
        900: "#102a43",
      },
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      warning: {
        light: "#f8d7da",
        main: "#842029",
      },
      success: {
        light: "#d1e7dd",
        main: "#0f5132",
      },
      textColor: {},
      textColor: {},
    },
    letterSpacing: {
      normal: "1px",
    },
    extend: {
      boxShadow: {
        sm: "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
        default: "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
        md: "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
        lg: "0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)",
      },
      transitionProperty: {
        default: "0.3s ease-in-out all",
      },
    },
  },
  plugins: [],
};
