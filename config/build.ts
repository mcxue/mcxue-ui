import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  },
  resolve: {
    alias: {
      'mcxue-ui': path.resolve(path.resolve(), 'index'),
    },
  },
  build: {
    chunkSizeWarningLimit: 4500,
  },
});
