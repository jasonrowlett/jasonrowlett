import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  define: {
    'import.meta.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(
      process.env.VITE_CLERK_PUBLISHABLE_KEY
    ),
    'import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY': JSON.stringify(
      process.env.VITE_STRIPE_PUBLISHABLE_KEY
    ),
  },
});
