/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      config: path.resolve(__dirname, 'src/config'),
      core: path.resolve(__dirname, 'src/core'),
      entities: path.resolve(__dirname, 'src/entities'),
      features: path.resolve(__dirname, 'src/features'),
      models: path.resolve(__dirname, 'src/models'),
      pages: path.resolve(__dirname, 'src/pages'),
      shared: path.resolve(__dirname, 'src/shared'),
      stories: path.resolve(__dirname, 'src/stories'),
      utilities: path.resolve(__dirname, 'src/utilities'),
    },
  },
  plugins: [react()],
  build: {
    manifest: 'manifest.json',
    rollupOptions: {
      output: {
        format: 'iife',
        dir: '../monopoly-server/application/static'
      },
    },
  },
  server: {
    hmr: {
      protocol: "ws",
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      include: ['src'],
    },
  },
  publicDir: 'src/assets/'
})
