import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  
  theme: {
    extend: {
      dropShadow:{
        'md': '0px 3px 10px 0px rgba(0, 0, 0, 0.16)'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '1rem',
        'full': '9999px',
        'large': '12px',
      },
      colors: {
        'orange-25': '#FFFCFA',
        'orange-50': '#FEF6F0',
        'orange-100': '#FDEDE1',
        'orange-200': '#FDE5D3',
        'orange-300': '#FCD3B6',
        'orange-400': '#F9B17B',
        'orange-500': '#F89F5E',
        'orange-600': '#F89F5E',
        'orange-700': '#F78633',
        'orange-800': '#E57C2F',
        'orange-900': '#D3722B',
        'gray-darkf': '#475467',
        'dark':'#222',
        'dark-gray-color':'#667085',
      },
      backgroundColor:{
        'orange-light':'#FEF6F0'
      },
      backgroundImage: {
        'credit-card': "linear-gradient(rgba(248, 159, 94, 0.08), rgba(248, 159, 94, 0) url('./img/backgrounds/credit-card-bg.svg'))",
        'main-banner': "url('./img/backgrounds/hero-section-bg.png')",
        'server-section': "linear-gradient(rgba(248, 159, 94, 0.08), rgba(248, 159, 94, 0)) url('./img/backgrounds/server-section-bg.png')",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config



