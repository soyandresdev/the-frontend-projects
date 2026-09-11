import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The demo is published as a static build under /demo/33-stash/, so the base
// has to match or every asset URL 404s once it is copied into the site.
export default defineConfig({
  plugins: [react()],
  base: '/demo/33-stash/',
  build: {
    rollupOptions: {
      output: {
        // Recharts is most of the weight; splitting the vendors keeps the app
        // chunk small and cacheable instead of one 560 kB blob.
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts']
        }
      }
    }
  }
})
