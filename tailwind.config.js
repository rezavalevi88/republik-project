module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      m: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#0052A3',
        accentHover: '#00376',
        grey: '#F5F5F5',
        bg1: '#E1E1E1',
      },
      backgroundImage: {
        overview: "url('../src/img/overview/bg1.png')",
        cta: "url('../src/img/overview/bg1.png')",
      },
    },
  },
  plugins: [],
};
