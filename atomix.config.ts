import { defineConfig } from "@shohojdhara/atomix";

export default defineConfig({
  prefix: "atomix",
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#00f2ff',
          light: '#33f4ff',
          dark: '#00d1db',
        },
        secondary: {
          main: '#001a33',
          light: '#020d1a',
          dark: '#000810',
        },
        success: {
          main: '#10b981',
        },
        purple: {
          main: '#7c3aed',
        },
        surface: {
          main: 'rgba(4, 20, 38, 0.9)',
          card: 'rgba(4, 20, 38, 0.8)',
        },
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      spacing: {
        section: '7rem',
      },
    },
  },
});