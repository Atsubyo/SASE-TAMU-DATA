import { type Config } from "tailwindcss";
const { fontfamily } = require("tailwindcss/defaultTheme")


export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        'informational': "url('/footer/index_bg.jpg')",
        'meow': "url('/footer/meow.jpg')",
        'officer': "url('/footer/officer.jpg')",
        'officer_mobile': "url('/footer/officer_mobile.jpg')",
        'sponsor': "url('/footer/sponsor.jpg')",
        'cuties': "url('/footer/cutiess.jpg')",
        'karaoke': "url('/footer/karaoke.jpg')",
        'big': "url('/footer/big.jpg')",
        'sweet': "url('/footer/sweet.jpg')",
        'elevator': "url('/footer/elevator.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
