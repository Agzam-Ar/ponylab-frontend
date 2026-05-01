import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  server: {
    //    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:1919',
        changeOrigin: true,
      },
      '/debugtest': {
        target: 'http://192.168.0.10',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/debugtest/, '')
      },
      '/state': {
        target: "http://192.168.0.10",
      },
      '/cmd': {
        target: "http://192.168.0.10",
      },
      '/cfg': {
        target: "http://192.168.0.10",
      }
    },
  },
});
