/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#171717",
        "c-white": "#EBEBEB",
        "c-yellow": "#FFE050",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bglinear.svg')",
      },
      animation: {
        marquee: "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
