import build from '@hono/vite-build/cloudflare-workers'
import honox from 'honox/vite'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    assetsDir: "static"
  },
  plugins: [
    honox({
      devServer: { adapter },
      client: {
        input: ['./app/style.css']
      }
    }),
    build()
  ]
})