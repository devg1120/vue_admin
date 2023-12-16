/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import vue from '@vitejs/plugin-vue';

export default getViteConfig({
  plugins: [vue()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': '/src/pages',
      '@layouts': '/src/layouts',
      '@components': '/src/components',
      '@assets': '/src/shared/assets',
      '@stores': '/src/shared/stores',
    },
  },
});
