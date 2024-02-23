/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 30%": { transform: "rotate(-6deg)" },
          "30%, 60%": { transform: "rotate(-9deg)" },
          "50%, 20%": { transform: "rotate(6deg)" },
          "20%, 0%": { transform: "rotate(3deg)" },
        },
        ripple: {
          from: {
            opacity: 1,
            transform: "scale(0)",
          },
          to: {
            opacity: 0,
            transform: "scale(10)",
          },
        },
      },
      animation: {
        bell: "wiggle 300ms ease-in-out",
        ripple: "ripple 1s",
      },
      backgroundColor: {
        base: "#1a1a1b",
        nsfw: "#f45658",
      },
      textColor: {
        description: "#6e7071",
        error: "#dc2626",
      },
      ringColor: {
        base: "#2b2b2c",
      },
      boxShadow: {
        "active-tab": "0 5px 2px -2px white",
      },
      ringColor: {
        base: "#2b2b2c",
      },
      borderColor: {
        base: "#2b2b2c",
      },
    },
  },
  plugins: [],
};
