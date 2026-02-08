/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: "#e6362e",
        ink: "#0b0b0f",
        snow: "#f6f6f6",
      },
      boxShadow: {
        bento: "0 20px 50px rgba(11, 11, 15, 0.12)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at top, rgba(230, 54, 46, 0.15), transparent 60%)",
        "bento-lines": "linear-gradient(115deg, rgba(11,11,15,0.06) 0%, rgba(11,11,15,0.02) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
