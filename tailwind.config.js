/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors : {
        'accent-color' : 'hsl(var(--accent-color))',
        'primary-color': 'hsl(var(--primary-color))',
        'emphasis': ' hsl(var(--emphasis))'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

