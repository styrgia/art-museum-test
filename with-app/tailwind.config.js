const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.neutral,
            },
            fontFamily: {
                sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
                serif: ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
                stock: [defaultTheme.fontFamily.sans],
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '2/3': '2 / 3',
                '9/16': '9 / 16',
                landscape: '16 / 9',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [typography],
};
