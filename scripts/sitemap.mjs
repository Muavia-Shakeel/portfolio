// Runs after `vite-react-ssg build`: writes dist/sitemap.xml from the same data that drives the routes.
import { writeFileSync } from 'node:fs'
import { SITE } from '../src/seo.js'
import { projects } from '../src/data/projects.js'
import { posts } from '../src/data/content.js'

export const paths = [
  '/',
  '/about',
  '/projects',
  ...projects.map((p) => `/projects/${p.slug}`),
  '/research',
  ...(posts.length ? ['/blog'] : []), // empty blog is noindex, so keep it out of the sitemap
]

const urls = paths.map((p) => `  <url><loc>${p === '/' ? SITE : SITE + p}</loc></url>`).join('\n')
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${paths.length} urls`)
