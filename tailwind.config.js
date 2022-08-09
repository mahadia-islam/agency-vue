module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "769px",
      extra_md: "1281px",
      sm:"376px"
    },
    extend: {
      fontFamily: {
        openSans: "'Open sans',sans-serif",
        poppin:"'Poppins',sans-serif"
      }
    },
  },
  plugins: [],
}
