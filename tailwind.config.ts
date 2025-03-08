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
        primary: {
          purple: "#8c52ff",
          green: "#00bf63",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #8c52ff 0%, #00bf63 100%)",
        "radial-gradient":
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
