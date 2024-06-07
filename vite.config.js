import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  build: {
    outDir: 'dist'  // Ensure this matches the directory gh-pages expects
  }
};
