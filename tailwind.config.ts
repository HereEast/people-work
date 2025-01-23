import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        xl: "1280px",
        "2xl": "1400px",
      },
      maxWidth: {
        // card: "340px",
        "8xl": "1440px",
      },
      minWidth: {
        // card: "280px",
      },
      gridTemplateColumns: {
        main: "repeat(4, minmax(0, 300px))",
        "cards-2": "repeat(2, minmax(0, 320px))",
      },
      colors: {
        "brand-blue": {
          "600": "#0047FF",
          DEFAULT: "#0047FF",
        },
      },
      fontSize: {
        "4xl": [
          "38px",
          {
            lineHeight: "100%",
          },
        ],
      },
      letterSpacing: {
        header: "-0.02em",
      },
      borderRadius: {
        "6xl": "80px",
        "5xl": "70px",
        "4xl": "60px",
        "3xl": "50px",
        "2xl": "40px",
        xxl: "30px",
        xl: "25px",
      },
      backgroundSize: {
        "600%": "600%",
      },
      backgroundImage: {
        "animate-gradient":
          "linear-gradient(to right, #ffc814, #ff185d, #1e7fff)",
      },
      // boxShadow: {
      //   header: "0 1px 4px rgba(0,0,0,0.4)",
      // },
      keyframes: {
        anime: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        anime: "anime 5s linear infinite",
      },
    },
  },
  plugins: [],
  safelist: ["scroll-smooth"],
};

export default config;
