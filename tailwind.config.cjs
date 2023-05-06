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
          bg: '#0c1d37',
          'bg-50': '#0e2343',
          'bg-40': '#112a4e',
          'cyan-100': '#1df2dd',
          'cyan-200': '#21a6a6',
          'white-50': '#E9EDFB',
          'white-100': '#ccd6f6',
          'white-200': '#8892b0',
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
