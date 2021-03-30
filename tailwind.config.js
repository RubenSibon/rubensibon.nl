module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "Source Sans Pro", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      serif: ["Iowan Old Style", "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times", "Source Serif Pro", "serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      title: ["Fira Sans", "Source Sans Pro", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      code: ["Fira Code", "Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Liberation Mono", "Lucida Console", "Cascadia Mono", "Droid Sans Mono", "Courier", "monospace"],
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
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      height: {
        "screen-1/8": "12vh",
        "screen-1/4": "24vh",
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
      },
      minHeight: {
        "screen-1/8": "12vh",
        "screen-1/4": "24vh",
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
      },
      maxHeight: {
        "screen-1/8": "12vh",
        "screen-1/4": "24vh",
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
