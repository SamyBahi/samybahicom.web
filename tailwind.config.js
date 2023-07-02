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
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        popover: "rgb(var(--color-popover) / <alpha-value>)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
      },
      typography: ({ theme }) => ({
        secondary: {
          css: {
            "--tw-prose-body": theme("colors.secondary"),
            "--tw-prose-headings": theme("colors.secondary"),
            "--tw-prose-lead": theme("colors.secondary"),
            "--tw-prose-links": theme("colors.secondary"),
            "--tw-prose-bold": theme("colors.secondary"),
            "--tw-prose-counters": theme("colors.secondary"),
            "--tw-prose-bullets": theme("colors.secondary"),
            "--tw-prose-hr": theme("colors.secondary"),
            "--tw-prose-quotes": theme("colors.secondary"),
            "--tw-prose-quote-borders": theme("colors.secondary"),
            "--tw-prose-captions": theme("colors.secondary"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
