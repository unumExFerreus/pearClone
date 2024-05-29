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
        sm: "430px",
        md: "1024px",
        xl: "1920px",
        "2xl": "2560px",
        "3xl": "3840px",
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2.813rem',
        xl: '17%',
        '2xl': '25%',
        '3xl': '33%',
      },
    },
  },
  plugins: [],
};
export default config;
