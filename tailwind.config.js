module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',   // => @media (min-width: 640px) { ... }
      'md': '768px',   // => @media (min-width: 768px) { ... }
      'lg': '1024px',  // => @media (min-width: 1024px) { ... }
      'xl': '1280px',  // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {},
      boxShadow: {},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hk: ['HK Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'checkbox-checked': "url('../src/assets/images/checkbox-checked.svg')",
        "gradient-1": "linear-gradient(to bottom, rgb(18,27,46), transparent)",
        "gradient-2": "linear-gradient(to bottom, rgb(18,27,46), transparent)"
      },
      keyframes: {
        ping: {
          '35%': { opacity: .4 },
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0
          },
        },
      },
      animation: {
        'ping-0': "ping 8s ease-in-out infinite",
        'ping-1': "ping 8s ease-in-out infinite 2s",
        'ping-2': "ping 8s ease-in-out infinite 4s",
        'ping-3': "ping 8s ease-in-out infinite 6s",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    }
  ],
};
