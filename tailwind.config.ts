import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/Background-image.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#571244",
          hover: "#451037",
          shade: "#DDD0DA",
          dark: "#11040E"
        },
        secondary: {
          DEFAULT: "#EF4353",
          hover: "#C33644",
        },
        white: "#FFFFFF",
        black: "#000000",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
