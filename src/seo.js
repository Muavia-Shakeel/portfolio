// Shared by the <Seo> component, scripts/sitemap.mjs and scripts/seo-check.mjs (plain ESM, no JSX).
export const SITE = 'https://muaviashakeel.tech'
export const SITE_NAME = 'Muavia Shakeel'
export const OG_IMAGE = `${SITE}/og-image.jpg` // 1200x630
export const OG_IMAGE_ALT = 'Muavia Shakeel, AI/ML Engineer: computer vision and LLM agents'

export const LINKEDIN = 'https://www.linkedin.com/in/muavia-shakeel'
export const GITHUB = 'https://github.com/muavia-shakeel'
// TODO(owner): add the Google Scholar profile URL here; it is included in Person.sameAs when set.
export const SCHOLAR = null

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE}/#person`,
  name: 'Muavia Shakeel',
  url: SITE,
  image: `${SITE}/profile-640.jpg`,
  jobTitle: 'AI/ML Engineer',
  description:
    'AI/ML engineer building computer-vision pipelines and LLM agents that run in production, integrated with Oracle ERP.',
  worksFor: { '@type': 'Organization', name: 'Kohinoor Textile Mills Limited' },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'FAST National University of Computer and Emerging Sciences (FAST-NU)',
      url: 'https://www.nu.edu.pk',
    },
    { '@type': 'CollegeOrUniversity', name: 'Hazara University' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Rawalpindi', addressCountry: 'PK' },
  knowsAbout: ['Computer Vision', 'Deep Learning', 'LLM Agents', 'Retrieval-Augmented Generation', 'Explainable AI'],
  sameAs: [LINKEDIN, GITHUB, SCHOLAR].filter(Boolean),
}

export const articleJsonLd = (pub) => ({
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: pub.title,
  name: pub.title,
  abstract: pub.abstract,
  keywords: pub.tags.join(', '),
  inLanguage: 'en',
  author: pub.authors.split(',').map((n) => ({
    '@type': 'Person',
    name: n.trim(),
    ...(n.trim() === 'Muavia Shakeel' ? { '@id': `${SITE}/#person` } : {}),
  })),
  ...(pub.url ? { url: pub.url, sameAs: pub.url } : { url: `${SITE}/research#${pub.slug}` }),
  ...(pub.doi ? { identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: pub.doi } } : {}),
})
