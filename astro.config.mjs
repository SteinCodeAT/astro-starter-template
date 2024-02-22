import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap'
import compressor from "astro-compressor";

export default defineConfig({
  site: 'https://steincodeat.github.io/',
  base: 'astro-starter-template/',
  integrations: [
    sitemap(),
    icon({
			iconDir: "src/icons",
		}),
    compressor()
  ],
});
