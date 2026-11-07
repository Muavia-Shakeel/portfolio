import Seo from '../components/Seo'
import SectionHeader from '../components/SectionHeader'
import { ProjectGrid } from '../components/Projects'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <section className="pt-36 pb-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <Seo
        title="Projects | Muavia Shakeel, AI/ML Engineer"
        description="Case studies: a Gemini WhatsApp ERP bot, DeepStream video analytics, AI ID-card OCR, plus RAG, multi-agent and voice-agent prototypes."
        path="/projects"
      />
      <SectionHeader
        as="h1"
        eyebrow="// work"
        title="Projects"
        subtitle="Production systems and self-directed prototypes. Each has a case study covering the problem, approach, metrics and stack."
      />
      <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">Production systems</h2>
      <ProjectGrid items={projects.filter((p) => p.kind === 'production')} />
      <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-16 mb-6">Self-directed projects</h2>
      <ProjectGrid items={projects.filter((p) => p.kind === 'self-directed')} />
    </section>
  )
}
