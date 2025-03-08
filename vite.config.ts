import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import build from '@hono/vite-build/cloudflare-workers'
import honox from 'honox/vite'
import adapter from '@hono/vite-dev-server/cloudflare'

export default defineConfig({
  plugins: [
    vue(), // Vue plugin for .vue files
    honox({
      devServer: { adapter },
      client: {
        input: ['./static/style.css'], // Ensure CSS is included
      },
    }),
    build(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    assetsDir: "static", // ✅ Change this to store assets in `dist/static/`
    rollupOptions: {
      output: {
        assetFileNames: "static/[name].[ext]", // ✅ Ensure assets go into `static/`
        chunkFileNames: "static/[name].js",
        entryFileNames: "static/[name].js",
      },
    },
  },
})
