// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const BASE_PATH = '/blog/';

export default defineConfig({
  site: 'https://massa-kj.github.io/blog',
  base: BASE_PATH,

  output: 'static',

  integrations: [
    react(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
