/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'xs': '430px',
      'sm': '600px',
      'md': '905px',
      'lg': '1240px',
      'xl': '1440px'
    },
  },
  plugins: [],
}

