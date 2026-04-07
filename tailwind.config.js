/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: '#f7f9fb',
        surface: {
          DEFAULT: '#f7f9fb',
          bright: '#f7f9fb',
          dim: '#d8dadc',
          variant: '#e0e3e5',
          'container-lowest': '#ffffff',
          'container-low': '#f2f4f6',
          container: '#eceef0',
          'container-high': '#e6e8ea',
          'container-highest': '#e0e3e5',
          tint: '#1A6B8A',
        },
        primary: {
          DEFAULT: '#1A6B8A',
          container: '#1a7d96',
          fixed: '#cce8f4',
          'fixed-dim': '#94cfe5',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#c6e6f3',
          fixed: '#002030',
          'fixed-variant': '#145570',
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#464555',
        },
        'on-background': '#191c1e',
        secondary: {
          DEFAULT: '#5f5e5e',
          container: '#e5e2e1',
          fixed: '#e5e2e1',
          'fixed-dim': '#c8c6c5',
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#656464',
          fixed: '#1c1b1b',
          'fixed-variant': '#474646',
        },
        tertiary: {
          DEFAULT: '#7e3000',
          container: '#a44100',
          fixed: '#ffdbcc',
          'fixed-dim': '#ffb695',
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#ffd2be',
          fixed: '#351000',
          'fixed-variant': '#7b2f00',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#93000a',
        },
        outline: {
          DEFAULT: '#777587',
          variant: '#c7c4d8',
        },
        'inverse-surface': '#2d3133',
        'inverse-on-surface': '#eff1f3',
        'inverse-primary': '#94cfe5',
        slate: {
          950: '#0a0f1e',
        },
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'ambient': '0px 24px 48px rgba(18, 18, 18, 0.06)',
        'card': '0px 8px 24px rgba(18, 18, 18, 0.04)',
        'card-hover': '0px 16px 40px rgba(18, 18, 18, 0.08)',
        'nav': '0 4px 20px rgba(18, 18, 18, 0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'ticker': 'ticker 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
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
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
