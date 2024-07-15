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
        "medium-grey": "#222222",
        "dark-grey": "#171A20",
        "light-white": "#EEEEEE",
        "menu-grey": "#5E5C62",
      },
      fontFamily: {
        "display-regular": ["Universal-Sans-Display-Regular", "sans-serif"],
        "display-medium": ["Universal-Sans-Display-Medium", "sans-serif"],
        "text-bold": ["Universal-Sans-Text-Bold", "sans-serif"],
        "text-medium": ["Universal-Sans-Text-Medium", "sans-serif"],
        "text-regular": ["Universal-Sans-Text-Regular", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
      gridTemplateColumns: {
        "auto-repeat": "repeat(12, 1fr)",
      },
      screens: {
        small: "600px",
        // => @media (min-width: 640px) { ... }

        medium: "1200px",
        // => @media (min-width: 1024px) { ... }

        large: "1440px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
};
