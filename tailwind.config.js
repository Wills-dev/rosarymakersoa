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
      backgroundColor: {
        "full-transparent": "rgba(0, 0, 0, 0.1)",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "part-transparent": "rgba(0, 0, 0, 0.9)",
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
        "primary-color": "#efede7",
        "primary-black": "#2e2e2e",
        "primary-brown": "#6b6864",
        brown: "#a4a098",
        cream: "#fefcf6",
      },
      backgroundImage: {
        "join-us": "url('/assets/images/RMOA-000.png')",
        "hero-img": "url('/assets/images/image-1.jpg')",
        "gallery-img":
          "url('/assets/images/Ikena-at-High-School-Graduation.jpg')",
        "gallery-img2": "url('/assets/images/RMOA3.jpg')",
        "gallery-img3": "url('/assets/images/RMOA4.jpg')",
        "gallery-img4": "url('/assets/images/RMOA2.jpg')",
        "about-us": "url('/assets/images/RMOA-01.png')",
        "join-uss": "url('/assets/images/RMOA-003.jpg')",
        "news-img1": "url('/assets/images/rmoa2.jpeg')",
        saint1:
          "url('/assets/images/3st__josemaria_escriva_rosary156768602457.jpg')",
        saint2: "url('/assets/images/pope john paul.jpg')",
        saint3: "url('/assets/images/teresa.jpg')",
        saint4: "url('/assets/images/pio.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
