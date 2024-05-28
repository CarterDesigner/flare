import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "50px": "50px",
        "75px": "75px",
      },
      top: {
        "50px": "50px",
      }
    },
  },
  variants: [],
  plugins: [],
};
export default config;
