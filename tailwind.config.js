/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Now scanning ALL files under src/ for Tailwind classes.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        },
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
        }
      }
    },
  },
  plugins: [],
}