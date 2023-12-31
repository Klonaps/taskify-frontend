import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@app': path.resolve('src/app'),
      '@pages': path.resolve('src/pages'),
      '@widgets': path.resolve('src/widgets'),
      '@features': path.resolve('src/features'),
      '@entities': path.resolve('src/entities'),
      '@shared': path.resolve('src/shared'),
    },
  },
})
