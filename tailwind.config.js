/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['League Spartan', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1E40AF',
          'blue-mid': '#2563EB',
          'blue-light': '#DBEAFE',
          'blue-pale': '#EFF6FF',
          teal: '#0D9488',
          'teal-light': '#CCFBF1',
          'teal-pale': '#F0FDFA',
        },
        slate: {
          950: '#0A0F1E',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'ticker': 'ticker 30s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'dash': 'dash 1.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        dash: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
        'blue': '0 8px 32px rgba(37,99,235,0.2)',
        'blue-lg': '0 16px 48px rgba(37,99,235,0.25)',
      },
    },
  },
  plugins: [],
}
