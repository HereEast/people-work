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
      fontFamily: {
        base: ["var(--font-base)"],
        accent: ["var(--font-accent)"],
      },
      fontSize: {
        "4xl": [
          "32px",
          {
            lineHeight: "100%",
          },
        ],
      },
      letterSpacing: {
        text: "-0.02em",
      },
      borderRadius: {
        "4xl": "60px",
        "3xl": "50px",
        "2xl": "40px",
        xl: "30px",
        lg: "25px",
        md: "20px",
        xs: "10px",
      },
    },
  },
  plugins: [],
  safelist: ["scroll-smooth"],
};

export default config;
