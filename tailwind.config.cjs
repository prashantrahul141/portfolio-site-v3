/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'primary-theme': {
          bg: '#0a192f',
          'cyan-100': '#1df2dd',
          'cyan-200': '#21a6a6',
          'white-100': '#ccd6f6',
          'white-200': '#8892b0',
        },
      },
      fontFamily: {
        inconsolata: 'Inconsolata, monospace',
        'archivo-narrow': 'Archivo Narrow, sans-serif',
      },
    },
  },
  plugins: [],
};
