import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "main-background": "var(--main-background)",
        red: {
          45: "var(--red-45)",
          50: "var(--red-50)",
          55: "var(--red-55)",
          60: "var(--red-60)",
          80: "var(--red-80)",
          90: "var(--red-90)",
          95: "var(--red-95)",
          99: "var(--red-99)",
        },
        black: {
          "06": "var(--black-06)",
          "08": "var(--black-08)",
          10: "var(--black-10)",
          12: "var(--black-12)",
          15: "var(--black-15)",
          20: "var(--black-20)",
          25: "var(--black-25)",
          30: "var(--black-30)",
        },
        grey: {
          60: "var(--grey-60)",
          65: "var(--grey-65)",
          70: "var(--grey-70)",
          75: "var(--grey-75)",
          90: "var(--grey-90)",
          95: "var(--grey-95)",
          97: "var(--grey-97)",
          99: "var(--grey-99)",
        },
      },
      backgroundImage: {
        "hero-background": "url('/hero.png')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1921px",
      },
    },
  },
  plugins: [],
};
export default config;
