import { motion } from 'framer-motion'
import { Eye, FileText, Brain, Layers, Database, Cpu, BookOpen, Clock } from 'lucide-react'
import { researchAreas, publications } from '../data/content'
import SectionHeader from './SectionHeader'

const iconMap = {
  eye: Eye,
  document: FileText,
  brain: Brain,
  integration: Layers,
  rag: Database,
  xai: Cpu,
  rl: Brain,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function AreaCard({ area }) {
  const Icon = iconMap[area.icon] || Brain

  return (
    <motion.div
      variants={item}
      className="group flex flex-col gap-4 glass-card p-6"
    >
      <div className="w-9 h-9 bg-accent/8 border border-accent/15 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-200">
        <Icon size={15} className="text-accent" />
      </div>
      <h3 className="font-display font-bold text-base text-white leading-tight group-hover:text-accent transition-colors duration-200">
        {area.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {area.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
        {area.tags.map((tag) => (
          <span key={tag} className="tech-label">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Research() {
  return (
    <section id="research" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Research Areas */}
      <div className="mb-24">
        <SectionHeader
          eyebrow="// research"
          title="Research Areas"
          subtitle="Active areas of investigation — computer vision, generative AI, explainability, and beyond."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {researchAreas.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </motion.div>
      </div>

      {/* Publications */}
      <div>
        <SectionHeader
          eyebrow="// publications"
          title="Research Publications"
          subtitle="Academic papers and preprints."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-10 flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="w-12 h-12 bg-accent/6 border border-accent/15 flex items-center justify-center">
            <BookOpen size={18} className="text-accent/60" />
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-accent/50" />
            <span className="font-mono text-xs text-accent/60 tracking-[0.15em] uppercase">Coming Soon</span>
          </div>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            Research work currently in progress. Publications will be listed here once submitted or accepted.
          </p>
        </motion.div>
      </div>

    </section>
  )
}

