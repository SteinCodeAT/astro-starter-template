import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap'
import compressor from "astro-compressor";

export default defineConfig({
  site: 'https://www.your-site.com',
  base: '',
  integrations: [
    sitemap(),
    icon({
			iconDir: "src/icons",
		}),
    compressor()
  ],
});
