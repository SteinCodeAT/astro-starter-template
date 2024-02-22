import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap'
import compressor from "astro-compressor";

export default defineConfig({
  site: 'https://www.your-site.com',
  base: '',
  integrations: [
    mdx(), 
    sitemap(),
    icon({
			iconDir: "src/icons",
		}),
    compressor()
  ],
});
