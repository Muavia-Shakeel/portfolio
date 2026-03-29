import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Clock, RotateCcw, CheckCircle } from 'lucide-react'
import { research } from '../data/content'
import SectionHeader from './SectionHeader'

const statusConfig = {
  yellow: {
    label: 'In Progress',
    classes: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    Icon: Clock,
  },
  orange: {
    label: 'Under Review',
    classes: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
    Icon: RotateCcw,
  },
  green: {
    label: 'Published',
    classes: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    Icon: CheckCircle,
  },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function ResearchCard({ paper }) {
  const config = statusConfig[paper.statusColor] || statusConfig.yellow
  const StatusIcon = config.Icon

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col gap-4 rounded-2xl p-6 glass-hover overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon row */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors duration-300">
          <BookOpen size={16} className="text-electric" />
        </div>
        {/* Status badge */}
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-full border flex-shrink-0 ${config.classes}`}
        >
          <StatusIcon size={11} />
          {paper.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-white leading-snug group-hover:text-electric transition-colors duration-300">
        {paper.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {paper.description}
      </p>

      {/* Footer */}
      <div className="pt-3 border-t border-white/[0.06]">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-electric transition-colors duration-200 group/link"
        >
          <ExternalLink size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
          View Paper
        </a>
      </div>
    </motion.div>
  )
}

export default function Research() {
  return (
    <section
      id="research"
      className="py-28"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(13,20,36,0.5) 20%, rgba(13,20,36,0.5) 80%, transparent)' }}
    >
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// research"
          title="Publications & Research"
          subtitle="Academic work on deep learning, computer vision, and AI integration in industrial systems."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {research.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
