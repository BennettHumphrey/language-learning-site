import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xxsm: '365px',
      xsm: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      // https://coolors.co/3a015c-987284-35012c-eadeda-11001c
      colors: {
        'main': '#35012C', //Dark Purple
        'accent': '#987284', //Aqua
        'menu': '#3A015C', //Accent but a bit darker
        'bg': '#f8f8f8', //White
        'text-dark': '#11001C',
        'text': '#EADEDA', //Essencially white
        'line': 'black',
        'deck': '#15803d',
        'deck-dark': '#166534',
      },
      height: {
        'screen-width': '100vw'
      }
  },
},
  plugins: [require('daisyui')],
};
export default config;
