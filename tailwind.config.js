/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/*',
    './src/pages/*'
  ],
  theme: {
    extend: {
      colors: {
        'softBlack': '#232323',
      },
      fontFamily: {
        IBMPlex: ['IBM Plex Mono', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif']
      },
      keyframes: {
        'random-blob': {
          '0%': {
            backgroundPosition: '100% 0%',
            WebkitBackdropFilter: 'saturate(1.5)',
            backdropFilter: 'saturate(1.5)',
          },
          '50%': {
            backgroundPosition: '70% 7%',
            WebkitBackdropFilter: 'saturate(1.5) hue-rotate(100deg)',
            backdropFilter: 'saturate(1.5) hue-rotate(100deg)',
          },
          '100%': {
            backgroundPosition: '0% 94%',
            WebkitBackdropFilter: 'saturate(1.5)',
            backdropFilter: 'saturate(1.5)',
          },
        },
      },
      animation: {
        'random-blob': 'random-blob 15s ease infinite',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: { // daisy config is optional...
    themes: ["pastel"
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
  ], // "dracula", "retro", "coffee", "pastel",
    // themeRoot: ":root", // The element that receives theme color CSS variables
    darkTheme: "coffee", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}