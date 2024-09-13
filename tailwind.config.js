/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chemins vers tous les fichiers JS, JSX, TS, et TSX
    "./public/index.html" // Chemin vers votre fichier HTML principal
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
      },
      fontFamily: {
        'baloo': ['"Baloo 2"', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'afacad': ['Afacad', 'sans-serif'],
        'abeezee': ['ABeeZee', 'sans-serif'],
        'antonio': ['Antonio', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dmserif': ['"DM Serif Display"', 'serif'], // Correct format

      }, 
      colors: {
        primary: '#A6654E',
        accent: '#FFE3CC',
        text1: '#6BABFF',
        text2: '#DE69F0'
      }
    }
  },
  plugins: [],
};
