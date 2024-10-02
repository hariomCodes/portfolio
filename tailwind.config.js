// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'class' for manual toggling
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', 'monospace'], // Set your preferred font family
      },
      colors: {
        darkBackground: '#1c1c1e',
        lightBackground: '#f5f5f5',
        darkHeader: '#2c2c2e',
        lightHeader: '#ffffff',
        accent: '#61dafb',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Add more plugins as needed
  ],
}
