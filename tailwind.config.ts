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
        primary: "hsl(210, 100%, 50%)",
        "primary-variant": "hsl(210, 100%, 65%",
        secondary: "#ffb116",
        "gray-100": "hsl(240, 47%, 94%)",
        "gray-200": "hsl(240, 26%, 75%)",
        "gray-300": "hsl(240, 24%, 64%)",
        "gray-400": "hsl(240, 16%, 41%)",
        "gray-500": "hsl(240, 44%, 25%)",
        "gray-600": "hsl(240, 48%, 15%)",
      },
      backgroundImage: {
        "bulls-eye": "url('/img/bullseye-gradient.svg')",
      },
      fontSize: {
        "xl-heading-1": [
          "2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "xl-heading-2": [
          "1.6rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "xl-heading-3": [
          "1.4rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "xl-heading-4": [
          "1.2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "xl-heading-5": [
          "1.1rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        // medium screen headings
        "lg-heading-1": [
          "2.2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "lg-heading-2": [
          "2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "lg-heading-3": [
          "1.7rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "lg-heading-4": [
          "1.4rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "lg-heading-5": [
          "1.2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        // small screen headings
        "sm-heading-1": [
          "1.7rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "sm-heading-2": [
          "1.5rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "sm-heading-3": [
          "1.3rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "sm-heading-4": [
          "1.2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "sm-heading-5": [
          "1.1rem",
          {
            lineHeight: "1.5",
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
