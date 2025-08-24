/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50: 'oklch(var(--brand-50))',
          100: 'oklch(var(--brand-100))',
          200: 'oklch(var(--brand-200))',
          300: 'oklch(var(--brand-300))',
          400: 'oklch(var(--brand-400))',
          500: 'oklch(var(--brand-500))',
          600: 'oklch(var(--brand-600))',
          700: 'oklch(var(--brand-700))',
          800: 'oklch(var(--brand-800))',
          900: 'oklch(var(--brand-900))',
        }
      }
    },
  },
  plugins: [],
}
