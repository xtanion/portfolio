import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            ibm: ['IBM Plex Mono'],
            mono: [defaultTheme.fontFamily.mono]
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
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
            yellow: colors.yellow
        },
        listStyleImage: {
            right: 'url("/public/arrow.svg")',
        }
    },
    plugins: [
        require('tailwind-scrollbar'),

    ],
};
export default config;
