/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: This content array tells Tailwind where to find your utility classes.
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables manual toggling of dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      // ... (other custom theme settings)
    },
  },
  plugins: [],
}