// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/weather_app_react/',  // Set the base path to match your GitHub Pages URL
  build: {
    outDir: 'dist'
  }
});
