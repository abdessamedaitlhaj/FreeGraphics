/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#EEF5FF',
        secondary: '#176B87',
        tertiary: '#86B6F6',
        back: 'rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}