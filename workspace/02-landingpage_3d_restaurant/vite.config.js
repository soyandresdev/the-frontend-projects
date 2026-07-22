import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/demo/02-landingpage_3d_restaurant/' : '/',
  build: {
    chunkSizeWarningLimit: 1200
  }
}))
