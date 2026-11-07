import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'

export function ProjectCard({ project }) {
  const num = String(project.id).padStart(2, '0')

  return (
    <article className="group relative flex flex-col gap-4 glass-card p-6">
      <span className="project-number">{num}</span>

      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug group-hover:text-accent-ink dark:group-hover:text-accent transition-colors duration-200">
        <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">
          {project.title}
        </Link>
      </h3>

      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{project.summary}</p>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="tech-label">{t}</span>
        ))}
      </div>
    </article>
  )
}

export const ProjectGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((p) => (
      <ProjectCard key={p.id} project={p} />
    ))}
  </div>
)

// Home-page teaser: production work only; the full list lives on /projects.
export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="// work"
        title="Projects"
        subtitle="Production systems built at the intersection of computer vision, LLM agents, and industrial automation."
      />
      <ProjectGrid items={projects.filter((p) => p.kind === 'production')} />
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 font-display font-bold text-sm text-accent-ink dark:text-accent hover:underline"
      >
        All projects and case studies <ArrowRight size={14} />
      </Link>
    </section>
  )
}
