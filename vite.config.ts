import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import build from '@hono/vite-build/cloudflare-workers'
import honox from 'honox/vite'
import adapter from '@hono/vite-dev-server/cloudflare'

export default defineConfig({
  plugins: [
    vue(), // Add Vue plugin
    honox({
      devServer: { adapter },
      client: {
        input: ['./static/style.css'],
      },
    }),
    build(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    assetsDir: "",
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
      },
    },
  },
})
