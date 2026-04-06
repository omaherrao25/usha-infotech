/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['League Spartan', 'system-ui', 'sans-serif'],
        spartan: ['League Spartan', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Responsive clamp-based scale
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '900' }],
        'h2': ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', fontWeight: '800' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.25', fontWeight: '700' }],
        'hero': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '1.05', fontWeight: '900' }],
      },
      colors: {
        brand: {
          // Primary — extracted from logo (deep trust blue)
          blue: '#1E40AF',
          'blue-mid': '#2563EB',
          'blue-light': '#DBEAFE',
          'blue-pale': '#EFF6FF',
          // Secondary — growth teal
          teal: '#0D9488',
          'teal-light': '#CCFBF1',
          'teal-pale': '#F0FDFA',
          // Accent — warm amber for highlights
          amber: '#F59E0B',
          'amber-light': '#FEF3C7',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          subtle: '#F1F5F9',
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
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.04)',
        'blue': '0 8px 32px rgba(37,99,235,0.18)',
        'blue-lg': '0 16px 48px rgba(37,99,235,0.22)',
        'nav': '0 1px 0 rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
