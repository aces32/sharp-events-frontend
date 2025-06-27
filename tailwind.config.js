/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bglanding: '#FFFFFF',
        primary: '#0166FF',
        primarybg: '#D8DAE8',
        layoutbg: '#F4F3FF',
        primaryText: '#0166FF',
        secondaryText: '#777777',
        secondaryText2: '#393939',
        secondaryText3: '',
        black: '#000000',
        white: '#ffffff',
        inputbg: '#F2F2F2',
        customformbg: 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        'Inria-Serif': ['Inria Serif', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        'Roboto-Slab': ['Roboto Slab', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        heroImage: "url('/src/assets/image/hero-back.png')",
        footerImage: "url('/src/assets/image/footer-back.png')",
      },
    },
  },
  plugins: [],
};
