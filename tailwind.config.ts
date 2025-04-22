import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '350px',
        // => @media (min-width: 350px) { ... }

        'xs': '500px',
        // => @media (min-width: 450px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'cmd': '900px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1360px',
        // => @media (min-width: 1360px) { ... }

        '3xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '4xl': '1680px',
        // => @media (min-width: 1680px) { ... }

        '5xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        primary: {
          DEFAULT: '#8e0028',
          text_color: "#999999",
        },
        secondary: {
          DEFAULT: '#f39c12',
        },

      },
      fontFamily: {
        primary: ["AbrilFatface-Regular", "sans-serif"],
        cookie_regular: ['Cookie-Regular', 'sans-serif'],
        playfair_regular: ["PlayfairDisplay-Regular", "sans-serif"],
        playfair_bold: ["PlayfairDisplay-Bold", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [
    heroui(),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.green_bg_gradient': {
          'background': 'linear-gradient(180deg, #FFFFFF 0%, #E7FDF8 100%)',
          'border': '1px solid #EDEDED66',
        },
        '.blue_bg_gradient': {
          'background': 'linear-gradient(180deg, #FFFFFF 0%, #E4F0FA 100%)',
          'border': '1px solid #EDEDED66',
        },
        '.orange_bg_gradient': {
          'background': 'linear-gradient(180deg, #FFFFFF 0%, #FEF7EA 100%)',
          'border': '1px solid #EDEDED66',
        },
        '.pink_bg_gradient': {
          'background': 'linear-gradient(180deg, #FFFFFF 0%, #FCEBF3 100%)',
          'border': '1px solid #EDEDED66',
        },
      })
    }
  ]
} satisfies Config;
