import { build } from 'vite';
import { syncSpaAssets } from './sync-spa-assets.mjs';

process.env.GITHUB_PAGES = 'true';

await build({
  build: {
    outDir: 'docs',
  },
});

await syncSpaAssets('docs');
