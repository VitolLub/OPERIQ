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
        ink: {
          950: "#17211b",
          800: "#27362e",
          600: "#526159",
        },
        field: {
          50: "#f7f8f5",
          100: "#ecefe8",
          200: "#d7ddd2",
        },
        signal: {
          green: "#1d7d5a",
          amber: "#b66b13",
          red: "#b23b3b",
          blue: "#2867a6",
          violet: "#7252a3",
        },
      },
      boxShadow: {
        panel: "0 1px 2px rgba(23, 33, 27, 0.06), 0 8px 28px rgba(23, 33, 27, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
