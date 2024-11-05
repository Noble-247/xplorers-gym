import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007fff",
        "primary-variant": "#4da6ff",
        secondary: "#ffb116",
        "gray-100": "#e9f0f7",
        "gray-200": "#afbfd0",
        "gray-300": "#8da3b9",
        "gray-400": "#586979",
        "gray-500": "#007fff",
        "gray-600": "#142639",
      },
      backgroundImage: {
        "bulls-eye": "url('/img/bullseye-gradient.svg')",
      },
      fontSize: {
        "heading-1": [
          "3rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "heading-2": [
          "2rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "heading-3": [
          "1.7rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "heading-4": [
          "1.5rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "heading-5": [
          "1.2rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        // medium screen headings
        "medium-heading-1": [
          "2.2rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "medium-heading-2": [
          "2rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "medium-heading-3": [
          "1.7rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "medium-heading-4": [
          "1.4rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "medium-heading-5": [
          "1.2rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        // small screen headings
        "small-heading-1": [
          "2rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "small-heading-2": [
          "1.7rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "small-heading-3": [
          "1.5rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "small-heading-4": [
          "1.3rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
        "small-heading-5": [
          "1.1rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "700",
          },
        ],
      },
      /* NavBar Keyframe */
      keyframes: {
        navAnimation: {
          to: { transform: "rotateX(0)", opacity: "1" },
        },
      },
      /* Navbar Animation */
      animation: {
        navAnimation: "navAnimation 600ms ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
