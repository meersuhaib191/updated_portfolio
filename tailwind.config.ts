import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050509",
        surface: "rgba(15, 23, 42, 0.85)",
        primary: "#38bdf8",
        accent: "#f97316"
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.6)",
        "glow-soft": "0 0 18px rgba(56, 189, 248, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

