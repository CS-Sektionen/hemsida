// Copies dist/index.html into dist/<route>/index.html for every static route.
//
// Loopia's hosting (Autobahn) serves purely static files with no rewrite or
// custom-error-document support, so a direct request to e.g. /kontakt gets a
// generic 404 from the server before React Router ever runs. Standard static
// file servers resolve /kontakt to kontakt/index.html on their own, though,
// so pre-placing a copy of index.html at each route path makes clean URLs
// work without needing any server-side configuration. React Router then
// takes over for further client-side navigation as usual.
import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';

const routes = [
  'kontakt',
  'foretag',
  'aktiviteter',
  'sektionsmote',
  'nystudent',
  'styrelsen',
  'dokument',
  'kalender',
  'undergrupper',
];

const distDir = path.resolve(import.meta.dirname, '..', 'dist');
const indexHtml = path.join(distDir, 'index.html');

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await cp(indexHtml, path.join(routeDir, 'index.html'));
}
