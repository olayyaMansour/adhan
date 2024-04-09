/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        masgid: "url('../assets/bg-2.jpg')",
      },
      colors: {
        soft: "#D9CAB3",
        dark: "rgba(0, 0, 0, 0.4)",
        customGreen: "#528348",
        dark2: "rgba(0, 0, 0, 0.87)",
        lightGreen: "#8ED051",
        inBetween: "#70A94D",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "40px",
        7: "50px",
        8: "70px",
        9: "128px",
        10: "192px",
        11: "256px",
      },
    },
  },
  plugins: [],
};
