/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bomb: {
          bg: '#0a0a0f',
          surface: '#14141f',
          surfaceHover: '#1a1a28',
          border: '#2a2a3f',
        },
        accent: {
          red: '#ff3333',
          redGlow: 'rgba(255, 51, 51, 0.4)',
          amber: '#ffaa00',
          amberGlow: 'rgba(255, 170, 0, 0.4)',
        },
        text: {
          primary: '#f0f0f5',
          secondary: '#a0a0b0',
          muted: '#6a6a7a',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shake': 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        'countdown': 'countdown 1s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 51, 51, 0.3), 0 0 40px rgba(255, 51, 51, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 51, 51, 0.5), 0 0 80px rgba(255, 51, 51, 0.2)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        countdown: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,51,51,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,51,51,0.03) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(255,51,51,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}