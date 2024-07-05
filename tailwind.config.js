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
        spt: '450px',
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
      },
    },
  },
  plugins: [
    require("daisyui"), 
  ],
  daisyui: {
    themes: ["pastel", "dracula"], 
    darkTheme: "dracula",
    base: true,
    styled: true,
    utils: true,
    logs: true,
  },
};