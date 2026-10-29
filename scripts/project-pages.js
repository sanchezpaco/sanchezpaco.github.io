// GitHub Pages only serves real files, so copy the SPA entry to /<slug>/index.html for each project route.
// Keep in sync with the slugs in src/data/projects.ts.
import { copyFileSync, mkdirSync } from 'node:fs';

const slugs = ['twisty', 'kapow', 'procesionariapp'];

for (const slug of slugs) {
  mkdirSync(`dist/${slug}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${slug}/index.html`);
}
