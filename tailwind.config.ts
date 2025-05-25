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
        "8xl": "1440px",
        "9xl": "1800px",
      },
      fontFamily: {
        base: ["var(--font-base)"],
        accent: ["var(--font-accent)"],
      },
      fontSize: {
        sm: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "50px",
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
        sm: "12px",
        xs: "10px",
      },
      colors: {
        bg: "#EEEEEE",
      },
    },
  },
  plugins: [],
  safelist: ["scroll-smooth"],
};

export default config;
