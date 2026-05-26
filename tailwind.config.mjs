/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

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
        ...colors,
        navy: '#0A192F', // deep navy
        electric: '#00AEEF', // electric blue
        dark: '#111827',
        light: '#F8FAFC',
        text: '#1F2937',
        accent: {
          blue: '#00AEEF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Arial', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'Arial', 'sans-serif'],
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
