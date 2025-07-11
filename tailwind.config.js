/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a23',
        foreground: '#ffffff',
        card: '#1a1a3e',
        'card-foreground': '#ffffff',
        popover: '#1a1a3e',
        'popover-foreground': '#ffffff',
        primary: '#8b5cf6',
        'primary-foreground': '#ffffff',
        secondary: '#6366f1',
        'secondary-foreground': '#ffffff',
        muted: '#1e1e3f',
        'muted-foreground': '#a1a1aa',
        accent: '#a855f7',
        'accent-foreground': '#ffffff',
        destructive: '#ef4444',
        border: '#2d2d5f',
        input: '#2d2d5f',
        ring: '#8b5cf6',
      },
      borderRadius: {
        lg: '0.625rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Desabilitar plugins não utilizados
    container: false,
    accessibility: false,
  },
}

