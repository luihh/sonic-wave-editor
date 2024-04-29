/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#161929',
          100: '#1e2132',
        },
        secondary: {
          900: '#212337',
          100: '#7c85b3',
        },
      },
    },
  },
  plugins: [],
};
