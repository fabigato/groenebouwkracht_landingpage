/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-dark': '#0955d6',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto'],
        manrope: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system'],
        grotesk: ['Space Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system'],
        dmsans: ['DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--text)',
            h1: {
              fontWeight: '800',
              letterSpacing: '-0.02em',
              lineHeight: '1.05'
            },
            h2: {
              fontWeight: '700'
            },
            a: {
              color: theme('colors.accent')
            }
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
