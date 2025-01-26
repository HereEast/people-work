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
        "8xl": "1440px",
      },
      colors: {
        "brand-blue": {
          "600": "#0047FF",
          DEFAULT: "#0047FF",
        },
        "gradient-color-1": "rgb(var(--gradient-color-1))",
        "gradient-color-2": "rgb(var(--gradient-color-2))",
        "gradient-color-3": "rgb(var(--gradient-color-3))",
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
        "gradient-base": "linear-gradient(to right, #ffc814, #ff185d, #1e7fff)",
        "gradient-base-diagonal":
          "linear-gradient(to right bottom, #ffc814, #ff185d, #1e7fff)",
      },
      keyframes: {
        anime: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        anime: "anime 8s linear infinite",
        "anime-sm": "anime 5s linear infinite",
      },
    },
  },
  plugins: [],
  safelist: ["scroll-smooth"],
};

export default config;
