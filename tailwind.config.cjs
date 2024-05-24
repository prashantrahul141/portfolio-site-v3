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
          bg: '#000',
          'bg-50': '#0A0A0A', // main background.
          'bg-40': '#222526', // secondary background.
          'cyan-100': '#EDEDED',
          'cyan-200': '#52A8FF', // for links
          'white-50': '#EDEDED', // blog text
          'white-100': '#EDEDED', // main text.
          'white-200': '#A1A1A1', // secondary text.
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
