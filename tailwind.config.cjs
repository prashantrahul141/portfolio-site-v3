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
          bg: '#1d2021',
          'bg-50': '#262a2b',
          'bg-40': '#222526',
          'cyan-100': '#fff',
          'cyan-200': '#e1e1e1',
          'white-50': '#d1d1d1',
          'white-100': '#ccc',
          'white-200': '#a9a9a9',
          'repo-100': '#F8D866',
        },
      },
      fontFamily: {
        inconsolata: 'Inconsolata, monospace',
        'archivo-narrow': 'Archivo Narrow, sans-serif',
      },
      animation: {
        'bounce-slow': 'bounce-slower 2s linear infinite',
      },
      keyframes: {
        'bounce-slower': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },

      boxShadow: {
        mobileNavBar: '-13px 2px 37px -6px rgba(0,0,0,0.6);',
      },
    },
  },
  plugins: [],
};
