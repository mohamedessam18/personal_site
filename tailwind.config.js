/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa',  // Bright blue
          dark: '#3b82f6',   // Deep blue
        },
        secondary: {
          light: '#a855f7',  // Bright purple
          dark: '#7c3aed',   // Deep purple
        },
        background: {
          light: '#ffffff',  // Pure white
          dark: '#0f172a',   // Deep navy
        },
        text: {
          light: '#1e293b',  // Slate gray
          dark: '#f1f5f9',   // Light gray
        },
        accent: {
          light: '#f472b6',  // Pink
          dark: '#db2777',   // Deep pink
        }
      },
    },
  },
  plugins: [],
};