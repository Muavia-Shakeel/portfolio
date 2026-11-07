import { Head } from 'vite-react-ssg'
import { SITE, SITE_NAME, OG_IMAGE, OG_IMAGE_ALT } from '../seo'

// path: '/projects' (no trailing slash; '/' for home). Limits are enforced by scripts/seo-check.mjs.
export default function Seo({ title, description, path = '/', jsonLd = [], noindex = false }) {
  const url = path === '/' ? SITE : `${SITE}${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj).replace(/</g, '\\u003c')}
        </script>
      ))}
    </Head>
  )
}
