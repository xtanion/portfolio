import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      ibm: ["IBM Plex Mono"],
      mono: [defaultTheme.fontFamily.mono],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      cyan: colors.cyan,
      teal: colors.teal,
      blue: colors.blue,
      sky: colors.sky,
      purple: colors.purple,
      fushchia: colors.fushchia,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: {
        "50": "#f0fdf4",
        "100": "#ddfbe7",
        "20": "#bdf5d0",
        "300": "#89ecac",
        "400": "#4eda80",
        "500": "#27c05d",
        "600": "#1a9d49",
        "700": "#187d3d",
        "800": "#186334",
        "900": "#16512c",
        "950": "#062d16",
      },
      orange: {
        "50": "#fdf8ed",
        "100": "#f8ebcd",
        "200": "#f1d496",
        "300": "#eab95f",
        "400": "#e5a13a",
        "500": "#dd8223",
        "600": "#c3611c",
        "700": "#a3451a",
        "800": "#84371c",
        "900": "#6d2e1a",
        "950": "#3e160a",
      },
    },
    listStyleImage: {
      right: 'url("/public/arrow.svg")',
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
