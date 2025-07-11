// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cloudflare } from '@cloudflare/vite-plugin'; // <--- Importa el plugin
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    cloudflare() // <--- Agrega el plugin aquí
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});