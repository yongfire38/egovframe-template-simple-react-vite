import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
    ],
  },
  build: {
    chunkSizeWarningLimit: 100000000
},
})
