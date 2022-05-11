import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lit(), tailwind(), sitemap()]
});