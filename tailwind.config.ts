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
        "2xl": "1440px",
      },
      maxWidth: {
        "8xl": "1720px",
        "9xl": "1920px",
      },
      fontFamily: {
        base: ["var(--font-base)"],
        accent: ["var(--font-accent)"],
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        sm: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "40px",
        "5xl": "50px",
        "7xl": "76px",
      },
      letterSpacing: {
        text: "-0.02em",
      },
      borderRadius: {
        "2xl": "40px",
        xxl: "30px",
        xl: "25px",
        lg: "20px",
        md: "15px",
        sm: "10px",
        xs: "8px",
      },
      colors: {
        bg: "var(--background)",
        linkedin: "var(--linkedin)",
      },
    },
  },
  plugins: [],
  safelist: ["scroll-smooth"],
};

export default config;
