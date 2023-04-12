/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '10rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: [
    import('@tailwindcss/typography'),
    import('@tailwindcss/forms'),
    import('flowbite/plugin')
  ]
}
