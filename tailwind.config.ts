import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pearl: "#FAF4E9",
        dusk: "#E5BBA3",
        teal: "#355D65",
        sand: "#E6D1B7",
      },
    },
  },
  plugins: [],
} satisfies Config;
