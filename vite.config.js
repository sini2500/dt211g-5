import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sass: resolve(__dirname, 'sass.html'),
        animering: resolve(__dirname, 'animering.html'),
        diagram: resolve(__dirname, 'diagram.html'),
        karta: resolve(__dirname, 'karta.html'),
      },
    },
  },
})