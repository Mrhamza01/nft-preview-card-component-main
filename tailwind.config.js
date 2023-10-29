/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        "Soft-blue": "hsl(215, 51%, 70%)",
        "Cyan-logo": "hsl(178, 100%, 50%)",

        // ### Neutral
        // (main BG)
        mainBG: "hsl(217, 54%, 11%)",

        // (card BG)

        cardBG: "hsl(216, 50%, 16%)",
        // (line)
        line: "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
