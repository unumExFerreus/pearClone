import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "390px",
        md: "768px",
        lg: "1024px",
        "xl": "1920px",
        "2xl": "2560px",
        "3xl": "3840px",
      },
    },
  },
  plugins: [],
};
export default config;
