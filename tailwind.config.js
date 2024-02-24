/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'xs': '342px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
      'xl': '1700px',
      '2xl': '1900px'
    },
  },
  plugins: [],
}

