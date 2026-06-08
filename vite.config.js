import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/quest-hq-command-center/' : '/',
  server: {
    fs: {
      allow: ['..']
    }
  }
});
