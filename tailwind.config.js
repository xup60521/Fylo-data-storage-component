/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                g_1: "hsl(6, 100%, 80%)",
                g_2: "hsl(335, 100%, 65%)",
                c_Pale_Blue: "hsl(243, 100%, 93%)",
                c_Grayish_Blue: "hsl(229, 7%, 55%)",
                c_Dark_Blue: "hsl(228, 56%, 26%)",
                c_Very_Dark_Blue: "hsl(229, 57%, 11%)",
            },
            fontFamily: {
                raleway: ["Raleway", "sans-serif"]
            }
        },
    },
    plugins: [],
}

