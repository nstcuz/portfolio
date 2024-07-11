/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*',
    './src/pages/*',
    './src/App.jsx',
    './src/Main.jsx'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
        Archivo: ['Archivo', 'sans-serif'],
        UbuntuMono: ['Ubuntu Mono', 'monospace'],
      },
      screens: {
        spt: '600px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      height: {
        heightHome: 'calc(100vh - 5rem)',
        heightForProject: 'calc(100vh - 8rem)',

      },
      width: {
        widthForNav: 'calc(100vw + 50rem)',
        sptWidthForMargin: 'calc(100% - 2rem)'
      },
    },
  },
  plugins: [
    require("daisyui"), 
  ],
  daisyui: {
    themes: ["pastel", "dark"], 
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: true,
  },
};