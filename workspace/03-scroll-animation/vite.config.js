import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/demo/03-scroll-animation/' : '/'
  }
})
