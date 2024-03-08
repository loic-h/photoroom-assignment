/* eslint-env node */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: {},
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      content: {
        primary: "#000000",
        secondary: "#707177"
      },
      neutral: {
        2: "#E6E7ED"
      }
    },
    spacing: {
      0: 0,
      100: '8px',
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
      "body-700": ["20px", {
        lineHeight: "150%",
        fontWeight: "500",
      }],
      "comp-semi-400": ["12px", {
        lineHeight: "130%",
        fontWeight: "600",
      }],
      "comp-500": ["14px", {
        lineHeight: "130%",
        fontWeight: "500",
      }],
      "comp-600": ["17px", {
        lineHeight: "130%",
        fontWeight: "500",
      }],
      "head-1000": ["50px", {
        lineHeight: "110%",
        fontWeight: "700",
        letterSpacing: "-0.5px"
      }]
    },
    borderRadius: {
      full: "99999px",
      500: "10px",
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
