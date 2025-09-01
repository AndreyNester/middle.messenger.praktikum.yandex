import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslint({
      include: ['src/**/*.{js,jsx}'],
      cache: false,
    }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/index.scss" as *;
        `,
      },
    },
  },
});
