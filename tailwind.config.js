/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B2A4A',
          aqua: '#18B7B0',
          gold: '#D4AF37',
          slate: '#07111F',
          mist: '#EAF6F6',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(24, 183, 176, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(24,183,176,0.18), transparent 45%), linear-gradient(180deg, rgba(7,17,31,0.98), rgba(11,42,74,0.96))',
      },
    },
  },
  plugins: [],
};
