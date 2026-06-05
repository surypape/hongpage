import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fire-1': '#ff2200',
        'fire-2': '#ff8800',
        'fire-3': '#ffcc00',
        'page-bg': '#080008',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        sans:  ['"Noto Sans KR"',   'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
