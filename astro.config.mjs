// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const BASE_PATH = '/';

export default defineConfig({
	site: 'https://compQx7.github.io',
	base: BASE_PATH,
	output: 'static', // hybrid
	integrations: [
		react(),
		sitemap({}),
	],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
});
