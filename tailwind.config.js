/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#636363", // Gray for dark class
        "custom-orange": "#FFA500", // Orange for the orange section
      },
      spacing: {
        200: "200%", // For custom width in white section
        300: "300%", // For custom width in orange section
      },
      fontSize: {
        "5xl": "50px", // For your introduction section text size
      },
    },
  },
  plugins: [],
};
