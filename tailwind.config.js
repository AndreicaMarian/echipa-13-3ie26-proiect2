/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],   // font 1 - titluri principale
        heading: ['"Lora"', 'serif'],               // font 2 - subtitluri/headings
        body: ['"Source Sans 3"', 'sans-serif'],    // font 3 - text body
      },
      colors: {
        cream:  { DEFAULT: '#FDF6EC', dark: '#F5E6D0' },
        wheat:  { DEFAULT: '#E8C99A', dark: '#C9A870' },
        brown:  { DEFAULT: '#6B3F1F', dark: '#4A2810' },
        crust:  { DEFAULT: '#A0522D', dark: '#7A3F22' },
        warm:   { DEFAULT: '#D4691E', dark: '#B8561A' },
        charcoal: '#1C1C1C',
      },
    },
  },
  plugins: [],
}
