// Post-build guard: fails the build if a prerendered page breaks the SEO contract.
import { readFileSync, existsSync } from 'node:fs'
import { SITE } from '../src/seo.js'
import { posts } from '../src/data/content.js'
import { paths } from './sitemap.mjs'

const errors = []
const all = [...paths, ...(posts.length ? [] : ['/blog'])]

for (const path of all) {
  const file = `dist${path === '/' ? '' : path}/index.html`
  if (!existsSync(file)) { errors.push(`${path}: not prerendered (${file} missing)`); continue }
  const html = readFileSync(file, 'utf8')
  const err = (m) => errors.push(`${path}: ${m}`)
  const decode = (t) => t?.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'")
  // helmet adds data-rh="true" and its own attribute order, so find the tag first, then read the attribute
  const tag = (name, key, val) => html.match(new RegExp(`<${name}\\b[^>]*\\b${key}="${val}"[^>]*>`))?.[0]
  const attr = (t, a) => decode(t?.match(new RegExp(`\\b${a}="([^"]*)"`))?.[1])

  const titles = html.match(/<title[^>]*>/g) || []
  const title = decode(html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1])
  if (titles.length !== 1 || !title) err(`expected exactly 1 <title>, found ${titles.length}`)
  else if (title.length > 60) err(`title ${title.length} chars > 60: "${title}"`)

  const desc = attr(tag('meta', 'name', 'description'), 'content')
  if (!desc) err('missing meta description')
  else if (desc.length > 155) err(`description ${desc.length} chars > 155`)

  const canonical = attr(tag('link', 'rel', 'canonical'), 'href')
  if (canonical !== (path === '/' ? SITE : SITE + path)) err(`canonical is ${canonical}`)

  const content = (kind, key) => attr(tag('meta', kind, key), 'content')
  const expect = { 'og:title': title, 'og:description': desc, 'og:url': canonical }
  for (const [k, v] of Object.entries(expect)) if (!v || content('property', k) !== v) err(`${k} missing or != page value`)
  for (const [k, v] of [['twitter:title', title], ['twitter:description', desc]]) {
    if (!v || content('name', k) !== v) err(`${k} missing or != page value`)
  }
  for (const [kind, k] of [['property', 'og:image'], ['name', 'twitter:image']]) {
    if (content(kind, k) !== `${SITE}/og-image.jpg`) err(`${k} is ${content(kind, k)}`)
  }
  if (content('name', 'twitter:card') !== 'summary_large_image') err('twitter:card must be summary_large_image')

  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1])
  if (levels.filter((l) => l === 1).length !== 1) err(`expected 1 <h1>, found ${levels.filter((l) => l === 1).length}`)
  levels.forEach((l, i) => { if (i && l > levels[i - 1] + 1) err(`heading jumps h${levels[i - 1]} -> h${l}`) })

  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\balt="[^"]+"/.test(img)) err(`img without alt: ${img.slice(0, 80)}`)

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)) {
    try { JSON.parse(json) } catch { err('invalid JSON-LD') }
  }
  if (path === '/blog' && !posts.length && !html.includes('noindex')) err('empty blog must be noindex')
}

if (errors.length) { console.error('SEO check failed:\n' + errors.map((e) => ' - ' + e).join('\n')); process.exit(1) }
console.log(`seo-check: ${all.length} pages OK`)
