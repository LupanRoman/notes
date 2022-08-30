// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'btnColor': '#FFA500',
      'mainBackground': '#FFA500',
    },
    borderRadius: {
      'sm': '5px',
    },
    extend: {
      width: {
        '30': '30px',
        '100': '100px',
        '250': '250px',
        '300': '300px',
        'hei': '510px', 
      },
      height: {
        '510': '600px',
      },
      margin: {
        '40px': '40px'
      },
    },
  },
  plugins: [],
}
