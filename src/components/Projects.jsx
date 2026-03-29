import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/content'
import SectionHeader from './SectionHeader'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project }) {
  const num = String(project.id).padStart(2, '0')

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group relative flex flex-col gap-4 rounded-2xl p-6 glass-hover cursor-default overflow-hidden"
    >
      {/* Top shimmer accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card top row */}
      <div className="flex items-start justify-between gap-3">
        <span className="project-number select-none">{num}</span>
        <a
          href={project.link}
          className="flex-shrink-0 p-1.5 text-slate-700 hover:text-electric rounded-lg hover:bg-electric/10 transition-all duration-200"
          aria-label={`View ${project.title}`}
        >
          <ExternalLink size={15} />
        </a>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-white leading-snug group-hover:text-electric transition-colors duration-300 -mt-1">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-electric/75 bg-electric/8 border border-electric/15 px-2.5 py-1 rounded-md group-hover:border-electric/30 group-hover:text-electric transition-all duration-300"
          >
            {t}
          </span>
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
