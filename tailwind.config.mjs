/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Universal-Sans-Display-Medium",
        "Universal-Sans-Display-Regular",
        "Universal-Sans-Text-Bold",
        "Universal-Sans-Text-Medium",
        "Universal-Sans-Text-Regular",
        "sans-serif", // Fuente de respaldo
      ],
    },
    extend: {
      colors: {
        "light-grey": "#393C41",
        "dark-grey": "#171A20",
        "light-white": "#EEEEEE",
      },
      fontFamily: {
        "display-regular": ["Universal-Sans-Display-Regular", "sans-serif"],
        "display-medium": ["Universal-Sans-Display-Medium", "sans-serif"],
        "text-bold": ["Universal-Sans-Text-Bold", "sans-serif"],
        "text-medium": ["Universal-Sans-Text-Medium", "sans-serif"],
        "text-regular": ["Universal-Sans-Text-Regular", "sans-serif"],
      },
      transitionDuration: {
        '400': "400ms",
      },
    },
  },
  plugins: [],
};