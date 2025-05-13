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
        "4xl": ["32px", { lineHeight: "1.2" }],
        "5xl": ["52px", { lineHeight: "1" }],
      },
      letterSpacing: {
        text: "-0.02em",
      },
      borderRadius: {
        xxl: "30px",
        xl: "25px",
        lg: "20px",
        md: "15px",
        sm: "10px",
      },
      colors: {
        // back: "#eaeaea",
      },
    },
  },
  plugins: [],
  safelist: ["scroll-smooth"],
};

export default config;
