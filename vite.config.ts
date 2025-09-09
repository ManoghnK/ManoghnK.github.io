// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: base must match the repo name when deploying to GitHub Pages
  base: '/manoghn-ai-showcase/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
})

