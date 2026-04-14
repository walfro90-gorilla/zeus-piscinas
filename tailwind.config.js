/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1C3C5A',   // navy (era #0B2A4A)
          aqua: '#3AACAC',   // teal principal (era #18B7B0)
          gold: '#C49B3C',   // dorado (era #D4AF37)
          slate: '#0D1F33',  // navy oscuro fondo (era #07111F)
          mist: '#EAF9F9',   // teal muy claro (era #EAF6F6)
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(58, 172, 172, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(58,172,172,0.18), transparent 45%), linear-gradient(180deg, rgba(13,31,51,0.98), rgba(28,60,90,0.96))',
      },
    },
  },
  plugins: [],
};
