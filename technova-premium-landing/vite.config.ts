import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// Obține __dirname în module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  define: {
    // Pentru variabilele de mediu (dacă sunt necesare)
    'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || ''),
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || '')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  // IMPORTANT: Pentru Vercel, folosește '/' 
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  }
});