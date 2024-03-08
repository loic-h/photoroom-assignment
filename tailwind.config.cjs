/* eslint-env node */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
    spacing: {
      200: '16px',
      250: '20px',
      300: '24px',
      350: '28px',
      400: '32px',
      450: '36px',
      500: '40px',
      550: '44px',
      600: '48px',
      650: '52px',
      700: '56px',
      750: '60px',
      800: '64px',
    },
    fontSize: {
      700: ["20px", {
        lineHeight: "150%",
        fontWeight: "500",
      }],
      "strong-2000": ["50px", {
        lineHeight: "110%",
        fontWeight: "700",
        letterSpacing: "-0.5px"
      }]
    }
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function ({ addBase, addComponents }) {
      addBase({
        ":root": {
          "--color-accent": "blue",
        },
        ".dark": {
          "--color-accent": "red",
        },
      });
      addComponents({
        ".heading-900": {
          "@apply text-[42px]": {},
          "@apply font-[700]": {},
          "@apply leading-[110%]": {},
          "@apply -tracking-[0.42px]": {},
        },
      });
    }),
  ],
};
