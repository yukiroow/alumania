/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#032543",
                    secondary: "#0065E8",
                    accent: "#93c5fd",
                    neutral: "#ff00ff",
                    "base-100": "#fae8ff",
                    info: "#60a5fa",
                    success: "#00ff00",
                    warning: "#ea580c",
                    error: "#ff0000",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
