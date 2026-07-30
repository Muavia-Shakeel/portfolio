/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0d0d0f',
        surface: '#131315',
        'surface-2': '#1a1a1d',
        border: '#252528',
        canvas: '#f7f5f0',
        lime: {
          DEFAULT: '#b6ff4a',
          dark: '#9de032',
          muted: '#6a9e2a',
        },
        slate: {
          950: '#0d0d0f',
          900: '#131315',
          850: '#1a1a1d',
          800: '#252528',
          750: '#2e2e32',
          700: '#3a3a3f',
          600: '#52525a',
          500: '#71717a',
          400: '#9898a3',
          300: '#c4c4cb',
          200: '#dfdfe5',
          100: '#f0f0ef',
        },
        accent: {
          DEFAULT: '#b6ff4a',
          dark: '#9de032',
          light: '#ccff7a',
          ink: '#4d7a1a',
        },
        primary: {
          DEFAULT: '#b6ff4a',
          dark: '#9de032',
          light: '#ccff7a',
          ink: '#4d7a1a',
        },
      },
      fontFamily: {
        display: ['Epilogue', 'system-ui', 'sans-serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
