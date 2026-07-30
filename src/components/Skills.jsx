import { motion } from 'framer-motion'
import { Brain, Eye, Code2, Server, Database, FlaskConical, Globe, BarChart2, Cloud } from 'lucide-react'
import { skills } from '../data/content'
import SectionHeader from './SectionHeader'

const iconMap = {
  brain: Brain,
  eye: Eye,
  code: Code2,
  server: Server,
  database: Database,
  flask: FlaskConical,
  globe: Globe,
  chart: BarChart2,
  cloud: Cloud,
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
      className="group glass-card p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-accent-ink/8 dark:bg-accent/8 border border-accent-ink/15 dark:border-accent/15 flex items-center justify-center group-hover:bg-accent-ink/12 dark:group-hover:bg-accent/12 transition-colors duration-200">
          <Icon size={16} className="text-accent-ink dark:text-accent" />
        </div>
        <h3 className="font-display font-bold text-slate-900 dark:text-white text-base leading-tight">
          {category.category}
        </h3>
      </div>

      {/* Note */}
      <p className="text-slate-500 dark:text-slate-600 text-xs mb-4 leading-relaxed">
        {category.note}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <span key={item} className="tech-label">
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
      className="py-28 px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div>
        <SectionHeader
          eyebrow="// stack"
          title="Skills & Technologies"
          subtitle="Tools and frameworks for building, training, and deploying intelligent systems at production scale."
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
