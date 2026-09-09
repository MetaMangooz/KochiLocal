import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  site: 'https://your-ngo.netlify.app',
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});