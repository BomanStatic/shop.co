const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            satoshi: ['"Satoshi"', "sans-serif"],
            integral: ['"Integral"', "sans-serif"],
        },
        extend: {
            fontSize: {
                hero: "4rem",
            },
            gridTemplateColumns: {
                newsletter: "1fr 350px",
            },
        },
    },
    plugins: [addDynamicIconSelectors()],
};
