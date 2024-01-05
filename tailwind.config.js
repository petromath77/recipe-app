/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '18': '72px'
      },
      height: {
        '18': '72px'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(15rem, 1fr))'
      }
    },
  },
  plugins: [],
}
