import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0a",
          900: "#111112",
          800: "#161617",
        },
        stone: {
          light: "#d6d3cd",
          mid: "#a8a49c",
          dim: "#8a8782",
        },
        gold: {
          DEFAULT: "#c9b380",
          soft: "#b8a678",
          faint: "rgba(201, 179, 128, 0.25)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      transitionTimingFunction: {
        slow: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
