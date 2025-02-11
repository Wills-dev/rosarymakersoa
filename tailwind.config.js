/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "serif"],
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        "primary-color": "#0c71c3",
      },
      backgroundImage: {
        "join-us": "url('/assets/images/RMOA-000.png')",
        "hero-img": "url('/assets/images/RMOA-006.svg')",
        "gallery-img":
          "url('/assets/images/Ikena-at-High-School-Graduation.jpg')",
        "gallery-img2": "url('/assets/images/RMOA3.jpg')",
        "gallery-img3": "url('/assets/images/RMOA4.jpg')",
        "about-us": "url('/assets/images/RMOA-01.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
