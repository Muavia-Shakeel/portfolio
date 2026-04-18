import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/content'
import SectionHeader from './SectionHeader'

function TimelineEntry({ entry, index, isLast }) {
  const isEducation = entry.type === 'education'

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="relative flex gap-6"
    >
      {/* Icon + line column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Icon */}
        <motion.div
          whileInView={{ scale: [0.8, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
          className={`relative w-11 h-11 rounded-xl border-2 flex items-center justify-center z-10 ${
            isEducation
              ? 'border-primary/30 bg-primary/10 text-primary'
              : 'border-accent/30 bg-accent/10 text-accent'
          }`}
        >
          {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <div className="w-0.5 flex-1 mt-3 min-h-[80px] bg-slate-800/30" />
        )}
      </div>

      {/* Card */}
      <div className="pb-10 flex-1 min-w-0">
        <motion.div
          className="group glass-card p-6 hover:border-accent/30 transition-all duration-300"
        >
          {/* Period badge */}
          <span
            className={`inline-block text-xs px-3 py-1.5 mb-4 rounded-md font-medium ${
              isEducation
                ? 'text-primary bg-primary/10 border border-primary/20'
                : 'text-accent bg-accent/10 border border-accent/20'
            }`}
          >
            {entry.period}
          </span>

          <h3 className="font-display font-semibold text-lg text-white mb-1 group-hover:text-accent transition-colors duration-300">
            {entry.role}
          </h3>
          <p className="text-sm text-slate-400 mb-5">
            {entry.company}
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-3">
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                <CheckCircle2
                  size={14}
                  className={`flex-shrink-0 mt-0.5 ${isEducation ? 'text-primary/60' : 'text-accent/60'}`}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        eyebrow="// journey"
        title="Experience & Education"
        subtitle="From intern to AI/ML Engineer — work history and academic background."
      />

      <div className="relative">
        {experience.map((entry, i) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
