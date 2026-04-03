/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#18312E',
          light: '#243F3B',
        },
        blush: {
          DEFAULT: '#F1DBDE',
          dark: '#E0C4C8',
        },
        wine: {
          DEFAULT: '#7A3045',
          light: '#943A54',
          dark: '#5E2435',
        },
        sage: {
          DEFAULT: '#A7DA92',
          dark: '#8BC473',
        },
        cream: '#FAF6F0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
