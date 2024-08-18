import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: { DEFAULT: "#000", 100: "#000319" },
        primary: { DEFAULT: "#fff" },
        secondary: { DEFAULT: "#fff" },
        accent: { DEFAULT: "#facc15" },
      },
      keyframes: {
        marquee: {
          "100%": { transform: "translateX(-50%)" },
        },
        autoRotate: {
          "0%": {
            transform: "rotateX(0deg) rotateY(360deg)",
          },
          "100%": {
            transform: "rotateX(0deg) rotateY(0deg)",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration) linear infinite",
        autoRotate: "autoRotate linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    require("@xpd/tailwind-3dtransforms"),
  ],
};
export default config;
