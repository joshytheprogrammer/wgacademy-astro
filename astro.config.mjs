import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: 'jjs4hd8k',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      apiVersion: "2024-08-6", // insert the current date to access the latest version of the API
    }), 
    react()]
});