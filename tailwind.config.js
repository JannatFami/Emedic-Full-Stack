const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.blueGray,
      stone: colors.stone,
    },
    extend: {
      animation: {
        modal: "modal 0.5s",
        "drawer-right": "drawer-right 0.3s",
        "drawer-left": "drawer-left 0.3s",
        "drawer-top": "drawer-top 0.3s",
        "drawer-bottom": "drawer-bottom 0.3s",
      },
      keyframes: {
        modal: {
          "0%, 100%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "drawer-right": {
          "0%, 100%": { right: "-500px" },
          "100%": { right: "0" },
        },
        "drawer-left": {
          "0%, 100%": { left: "-500px" },
          "100%": { left: "0" },
        },
        "drawer-top": {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },
        "drawer-bottom": {
          "0%, 100%": { bottom: "-500px" },
          "100%": { bottom: "0" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};
