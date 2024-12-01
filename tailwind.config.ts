import type { Config } from "tailwindcss";

const config: Config = {
<<<<<<< Updated upstream
=======
  darkMode: ["class"],
>>>>>>> Stashed changes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< Updated upstream
        black: { DEFAULT: "#000", 100: "#000319" },
        primary: { DEFAULT: "#fff" },
        secondary: { DEFAULT: "#fff" },
        accent: { DEFAULT: "#facc15" },
      },
      keyframes: {
        marquee: {
          "100%": { transform: "translateX(-50%)" },
=======
        black: {
          "100": "#000319",
          DEFAULT: "#000",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        marquee: {
          "100%": {
            transform: "translateX(-50%)",
          },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      //   dropShadow: {
      //     glow: [
      //       "0 0px 20px rgba(255,255, 255, 0.35)",
      //       "0 0px 65px rgba(255, 255,255, 0.2)",
      //     ],
      //   },
>>>>>>> Stashed changes
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
