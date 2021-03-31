const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      keyframes: true,
    },
    safelist: [],
  },
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      code: ["Fira Code", ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["5vmin", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        gray: {
          950: "#010810",
        },
      },
      fontWeight: {
        semibold: "550",
      },
      height: {
        "screen-1/8": "12.5vh",
        "screen-1/4": "25vh",
        "screen-1/3": "33.333333vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66.666667vh",
        "screen-3/4": "75vh",
        "screen-7/8": "87.5vh",
      },
      maxHeight: {
        "screen-1/8": "12.5vh",
        "screen-1/4": "25vh",
        "screen-1/3": "33.333333vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66.666667vh",
        "screen-3/4": "75vh",
        "screen-7/8": "87.5vh",
      },
      minHeight: {
        "screen-1/8": "12.5vh",
        "screen-1/4": "25vh",
        "screen-1/3": "33.333333vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66.666667vh",
        "screen-3/4": "75vh",
        "screen-7/8": "87.5vh",
      },
      maxWidth: {
        0: 0,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-full": "100vw",
        "screen-2xl": "1920px",
      },
      minWidth: {
        0: 0,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-full": "100vw",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      width: {
        0: 0,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-full": "100vw",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
