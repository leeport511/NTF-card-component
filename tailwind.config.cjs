/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                //primary
                "soft-blue": 'hsl(215, 51%, 70%)',
                'cyan': 'hsl(178, 100%, 50%)',
                'cyan-trans': 'hsla(178, 100%, 50%, 0.6)',
                //neutral
                'very-dark-blue-mbg': 'hsl(217, 54%, 11%)', //main Bg
                'very-dark-blue-cbg': 'hsl(216, 50%, 16%)', //card Bg
                'very-dark-blue-l': 'hsl(215, 32%, 27%)', //line

            },
            fontFamily: {
                Outfit : ['Outfit', 'sans-serif']
            }
        },
    },
    plugins: [],
};
