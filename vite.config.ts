import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'mcxue-ui': path.resolve(path.resolve(), 'index'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(path.resolve(), 'index.ts'),
      name: 'mcxue-ui',
      fileName: (format) => `mcxue-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
      plugins: [
        typescript({
          tslib: path.resolve('typescript'),
          outDir: path.resolve(path.resolve(), 'dist'),
        }),
      ],
    },
  },
});
