import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo from a /intlearnersnetwork/ subpath; every
  // other host (Netlify, a custom domain) serves it from the root.
  base: process.env.GITHUB_PAGES ? '/intlearnersnetwork/' : '/',
  plugins: [react(), tailwindcss()],
})
