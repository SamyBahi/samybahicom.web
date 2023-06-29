/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryl: "#F2F2F7",
        secondaryl: "#1C1C1E",
        primaryd: "#1C1C1E",
        secondaryd: "#F2F2F7",
      },
    },
  },
  plugins: [],
};
