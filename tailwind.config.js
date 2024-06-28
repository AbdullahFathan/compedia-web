/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3730A3",
        secondaryL: "#818CF8",
        textBlack: "#212427",
        hint: "#74696D",
        red: "#E84C3D",
        green: "#0CD373",
        yellow: "#FFBC05",
        border: "#CBC4C6",
        "neutural-white": "#FCFCFC",
        neutral80: "#695D62",
        neutral70: "#74696D",
      },
      boxShadow: {
        "custom-shadow": "0px 1px 8px 0px #00000026",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3730A3",
          accent: "#FCFCFC",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
