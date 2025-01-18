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
        "2xl": "1400px",
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
      borderRadius: {
        "5xl": "70px",
        "3xl": "50px",
        "2xl": "40px",
        xxl: "30px",
        xl: "25px",
      },
      backgroundSize: {
        "600%": "600%",
      },
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
};

export default config;
