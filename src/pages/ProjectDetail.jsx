import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Seo from '../components/Seo'
import { getProject } from '../data/projects'
import { SITE, personJsonLd } from '../seo'

const h2 = 'font-display font-bold text-xl text-slate-900 dark:text-white mt-12 mb-4'

export default function ProjectDetail() {
  const project = getProject(useParams().slug)
  if (!project) return null // unknown slugs are never prerendered; the client router shows an empty page

  return (
    <article className="pt-36 pb-28 px-6 lg:px-8 max-w-3xl mx-auto">
      <Seo
        title={`${project.metaTitle} | Muavia Shakeel`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
              { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE}/projects/${project.slug}` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.summary,
            keywords: project.tech.join(', '),
            author: { '@id': personJsonLd['@id'] },
          },
        ]}
      />
      <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs text-accent-ink dark:text-accent mb-8 hover:underline">
        <ArrowLeft size={14} /> All projects
      </Link>

      <p className="font-mono text-xs text-slate-500 tracking-[0.15em] uppercase mb-3">
        {project.kind === 'production' ? 'Production system' : 'Self-directed project'}
      </p>
      <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
        {project.title}
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{project.summary}</p>

      <h2 className={h2}>Problem</h2>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>

      <h2 className={h2}>Approach</h2>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.approach}</p>

      <h2 className={h2}>Metrics</h2>
      <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
        {project.metrics.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      <h2 className={h2}>Stack</h2>
      <ul className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li key={t} className="tech-label">{t}</li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link}
          rel="noopener"
          className="mt-10 inline-flex items-center gap-2 font-display font-bold text-sm text-accent-ink dark:text-accent hover:underline"
        >
          GitHub profile <ExternalLink size={14} />
        </a>
      )}
    </article>
  )
}
