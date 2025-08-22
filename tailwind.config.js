/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        celestial: '#70B9F0',
        emerald: '#1CA75B',
        ruby: '#C41E3A',
        amber: '#F2B63D',
      },
      keyframes: {
          slideUpAndFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        slideUpAndFade: 'slideUpAndFade 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}
