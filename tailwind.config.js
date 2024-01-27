/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow' : 'spin 3s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(3deg)'},
          '50%': {transform: 'rotate(-3deg)'},
          
        }
      }

    },
  },
  plugins: [],
 
}

