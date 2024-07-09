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
      backgroundImage: {
        paperBG: 'url(src/assets/beige-paper.png)'
      },
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
      colors: {
        // Primary:
        // Secondary:
        // Accent:
        // Neutral:
        // Base-100:
        // Base-200:
        // Base-300:
        // Info:
        // Success:
        // Warning:
        // Error:
      },
      height: {
        heightHome: 'calc(100vh - 5rem)',
        heightForNav: 'calc(100vh + 5rem)',
      },
      width: {
        widthForNav: 'calc(100vw + 5rem)',
        sptWidthForMargin: 'calc(100% - 2rem)'
      },
    },
  },
  plugins: [
    require("daisyui"), 
  ],
  daisyui: {
    themes: ["pastel", "black"], 
    darkTheme: "black",
    base: true,
    styled: true,
    utils: true,
    logs: true,
  },
};