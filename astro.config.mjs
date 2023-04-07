// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Poppins',
        weights: [100, 300, 400, 500, 600, 700, 800, 900],
        cssVariable: '--font-poppins'
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: [
        'thefrontendprojects-sitioweb-ms262o-e92d27-138-201-188-139.traefik.me',
        'thefrontendprojects.dev',
        'localhost'
      ]
    }
  }
})
