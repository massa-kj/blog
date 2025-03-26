// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const BASE_PATH = '/blog';

export default defineConfig({
	site: 'https://compQx7.github.io',
	base: BASE_PATH,
	output: 'static', // hybrid
	integrations: [
		react(),
		tailwind(),
		sitemap({}),
	],
});
