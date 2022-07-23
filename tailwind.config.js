/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#E8D58C",
        bg: "#212121",
        teal: "#21CBCB",
      },
      backgroundImage: {
        "hero-background": "url('/images/background.png')",
        chemist: "url('/images/bg-chemist.png')",
      },
      fontFamily: {
        iceberg: ["Iceberg", "sans-serif"],
      },
    },
  },
  plugins: [],
};
