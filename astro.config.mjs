// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://thefrontendprojects.soyandres.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  experimental: {
    fonts: [
      {
        // Display: titulares editoriales con carácter
        provider: fontProviders.google(),
        name: 'Bricolage Grotesque',
        weights: [400, 500, 600, 700, 800],
        styles: ['normal'],
        subsets: ['latin'],
        cssVariable: '--font-bricolage',
        display: 'swap'
      },
      {
        // Texto: neutra y legible
        provider: fontProviders.google(),
        name: 'Geist',
        weights: [400, 500, 600],
        styles: ['normal'],
        subsets: ['latin'],
        cssVariable: '--font-geist',
        display: 'swap'
      },
      {
        // Mono: etiquetas, números y metadatos
        provider: fontProviders.google(),
        name: 'Geist Mono',
        weights: [400, 500],
        styles: ['normal'],
        subsets: ['latin'],
        cssVariable: '--font-geist-mono',
        display: 'swap'
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: [
        'thefrontendprojects-sitioweb-ms262o-e92d27-138-201-188-139.traefik.me',
        'thefrontendprojects.soyandres.dev',
        'localhost'
      ]
    }
  }
})
