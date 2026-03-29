import { motion } from 'framer-motion'
import { Brain, Eye, Code2, Server, Database, FlaskConical } from 'lucide-react'
import { skills } from '../data/content'
import SectionHeader from './SectionHeader'

const iconMap = {
  brain: Brain,
  eye: Eye,
  code: Code2,
  server: Server,
  database: Database,
  flask: FlaskConical,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function SkillCard({ category }) {
  const Icon = iconMap[category.icon] || Brain

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-6 glass-hover overflow-hidden"
    >
      {/* Subtle corner glow on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-electric/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric/20 group-hover:border-electric/35 group-hover:shadow-lg group-hover:shadow-electric/10 transition-all duration-300">
          <Icon size={18} className="text-electric" />
        </div>
        <div>
          <h3 className="font-body font-semibold text-white text-sm leading-tight">
            {category.category}
          </h3>
        </div>
      </div>

      {/* Note tagline */}
      <p className="font-mono text-[11px] text-slate-600 mb-4 leading-none tracking-wide">
        {category.note}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:border-electric/35 hover:text-electric hover:bg-electric/5 transition-all duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(13,20,36,0.6) 20%, rgba(13,20,36,0.6) 80%, transparent)' }}
    >
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// stack"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build, train, and deploy intelligent systems at scale."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((category) => (
            <SkillCard key={category.category} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
