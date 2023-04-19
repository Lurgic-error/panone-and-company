/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("./src/assets/imgs/checkmark.png")'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '1rem',
        '2xl': '1rem'
      }
    }
  },
  plugins: [
    import('@tailwindcss/typography'),
    import('@tailwindcss/forms'),
    import('flowbite/plugin')
  ]
}
