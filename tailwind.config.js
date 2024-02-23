/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    spacing: {
      0: 0,
      0.5: "calc(var(--spacing) / 2)",
      1: "var(--spacing)",
      2: "calc(var(--spacing) * 2)",
      3: "calc(var(--spacing) * 3)",
      4: "calc(var(--spacing) * 4)",
      5: "calc(var(--spacing) * 5)",
      6: "calc(var(--spacing) * 6)",
      8: "calc(var(--spacing) * 8)",
      9: "calc(var(--spacing) * 9)",
      10: "calc(var(--spacing) * 10)",
      11: "calc(var(--spacing) * 11)",
      12: "calc(var(--spacing) * 12)",
      13: "calc(var(--spacing) * 13)",
      16: "calc(var(--spacing) * 16)",
      mobile: "var(--mobile-size)",
      tablet: "var(--tablet-size)",
      desktop: "var(--desktop-size)",
      "desktop-xl": "var(--desktop-xl-size)",
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      md: "20px",
      lg: [
        "24px",
        {
          fontWeight: 700,
        },
      ],
      xl: "32px",
      "2xl": "48px",
      "3xl": "64px",
    },
    borderRadius: {
      none: "0",
      sm: "5px",
      DEFAULT: "10px",
      full: "50px",
    },
    extend: {
      colors: {
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        white: "var(--white)",
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      keyframes: {
        appearLeft: {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        appearRight: {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        appearLeft: "appearLeft 1s ease-in-out",
        appearRight: "appearRight 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
