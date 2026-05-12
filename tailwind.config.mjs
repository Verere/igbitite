/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        electric: '#2563EB',
        light: '#F3F6FB',
        accent: {
          blue: '#2563EB',
          gradient1: 'linear-gradient(90deg, #2563EB 0%, #0A192F 100%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(36, 99, 235, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
