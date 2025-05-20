/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          container: '#1a1a1a',
          hover: '#333333'
        }
      },
      fontSize: {
        'menu': ['1.2rem', '1.5'],
        'menu-hover': ['1.4rem', '1.5']
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};