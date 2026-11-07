import { m as motion } from 'framer-motion'
import { Eye, FileText, Brain, Layers, Database, Cpu, BookOpen } from 'lucide-react'
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
      <div className="w-9 h-9 bg-accent-ink/8 dark:bg-accent/8 border border-accent-ink/15 dark:border-accent/15 flex items-center justify-center group-hover:bg-accent-ink/15 dark:group-hover:bg-accent/15 group-hover:border-accent-ink/30 dark:group-hover:border-accent/30 transition-all duration-200">
        <Icon size={15} className="text-accent-ink dark:text-accent" />
      </div>
      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-tight group-hover:text-accent-ink dark:group-hover:text-accent transition-colors duration-200">
        {area.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
        {area.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
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
          title="Research"
          as="h1"
          subtitle="Active areas of investigation — computer vision, generative AI, explainability, and beyond."
        />
        <h2 className="sr-only">Research areas</h2>
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
        <div className="flex flex-col gap-5">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              id={pub.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-ink/8 dark:bg-accent/8 border border-accent-ink/15 dark:border-accent/15 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={16} className="text-accent-ink dark:text-accent" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-accent-ink dark:text-accent tracking-[0.1em] uppercase">
                    {pub.venue}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug mt-1">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{pub.authors}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {pub.abstract}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                {pub.tags.map((tag) => (
                  <span key={tag} className="tech-label">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

