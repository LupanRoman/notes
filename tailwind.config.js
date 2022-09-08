// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'mainBackground': 'rgba(255, 165, 0, 0.4)',
      'elementsBg': '#FFA500',
      'activeState': 'rgba(255, 165, 0, 0.5)',
    },
    fontSize: {
      'sm': '12px',
      'md': '18px',
      'lg': '24px',
      'xl': '30px',
    },
    fontWeight: {
      'light': '300',
      'regular': '400',
      'medium': '500',
      'semiBold': '600',
    },
    borderRadius: {
      'sm': '5px',
      'full': '50px',
    },
    extend: {
      boxShadow: {
        'basic': ' 2px 15px 25px -2px rgba(0,0,0,0.15)',

      },
      height: {
        'btnH': '30px',
        'inputH': '40px',
        'drawerH': '50px',
        'featuresH': '1600px'

      },
      width: {
        'btnW': '100px',
        'features': '300px',
        'featuresW': '200px',
        'inputW': '256px',

      },

    },
  },
  plugins: [],
}
