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
        IBMPlex: ['IBM Plex Mono', 'monospace'],
        UbuntuMono: ['Ubuntu Mono', 'monospace'],
      },
      screens: {
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
        heightHome: 'calc(100vh - 6rem)',
        // heightNav: 'calc(100vh + 1rem)',
      },
      width: {
        aboutListW: 'calc(100vw - 2rem)',
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