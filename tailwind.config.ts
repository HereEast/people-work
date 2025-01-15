import type { Config } from "tailwindcss";

const config: Config = {
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
          DEFAULT: "#0044FF",
          600: "#0044FF",
        },
      },
      fontSize: {
        "4xl": ["38px", { lineHeight: "100%" }],
      },
    },
  },
  plugins: [],
};
export default config;
