/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')",
        'nlw': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 40.94%, #E1D55D 33.57%)',
      },
    },
  },
  plugins: [],
}