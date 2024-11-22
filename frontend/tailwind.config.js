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
          neutral: "#1f2937",
          "base-100": "#F6FBFF",
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
