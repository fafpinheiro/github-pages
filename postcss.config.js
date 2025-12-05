module.exports = {
  // This array syntax explicitly tells PostCSS to load these modules, which is much more reliable.
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}