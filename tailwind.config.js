/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(88, 58, 34, 0.12)',
      },
      keyframes: {
        fadeSlide: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        tickerSlow: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.333%)' },
        },
        floatA: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '25%': { transform: 'translate3d(24px, -28px, 0)' },
          '50%': { transform: 'translate3d(-18px, 18px, 0)' },
          '75%': { transform: 'translate3d(30px, 10px, 0)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '25%': { transform: 'translate3d(-20px, -16px, 0)' },
          '50%': { transform: 'translate3d(14px, 24px, 0)' },
          '75%': { transform: 'translate3d(26px, -6px, 0)' },
        },
        floatC: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '25%': { transform: 'translate3d(16px, -22px, 0)' },
          '50%': { transform: 'translate3d(-22px, 10px, 0)' },
          '75%': { transform: 'translate3d(8px, 18px, 0)' },
        },
        floatD: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '25%': { transform: 'translate3d(-14px, -24px, 0)' },
          '50%': { transform: 'translate3d(20px, 12px, 0)' },
          '75%': { transform: 'translate3d(-8px, 22px, 0)' },
        },
      },
      animation: {
        'fade-slide': 'fadeSlide 450ms ease',
        'ticker-slow': 'tickerSlow 42s linear infinite',
        'float-a': 'floatA 10s ease-in-out infinite',
        'float-b': 'floatB 11s ease-in-out infinite',
        'float-c': 'floatC 9.5s ease-in-out infinite',
        'float-d': 'floatD 10.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
