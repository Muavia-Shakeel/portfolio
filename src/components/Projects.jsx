import { motion } from 'framer-motion'
import { projects } from '../data/content'
import SectionHeader from './SectionHeader'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project }) {
  const num = String(project.id).padStart(2, '0')

  return (
    <motion.div
      variants={item}
      className="group flex flex-col gap-4 glass-card p-6"
    >
      {/* Top row */}
      <div className="flex items-center justify-between gap-3">
        <span className="project-number">{num}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug group-hover:text-accent-ink dark:group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
        {project.tech.map((t) => (
          <span key={t} className="tech-label">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="// work"
        title="Projects"
        subtitle="Production systems and research prototypes built at the intersection of computer vision, deep learning, and industrial automation."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
