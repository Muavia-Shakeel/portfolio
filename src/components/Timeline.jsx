import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/content'
import SectionHeader from './SectionHeader'

function TimelineEntry({ entry, index, isLast }) {
  const isEducation = entry.type === 'education'

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="relative flex gap-6"
    >
      {/* Icon + line column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Icon */}
        <motion.div
          whileInView={{ scale: [0.7, 1.1, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
          className={`relative w-11 h-11 rounded-full border-2 flex items-center justify-center z-10 ${
            isEducation
              ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
              : 'border-electric bg-electric/10 text-electric'
          }`}
        >
          {/* Pulse ring */}
          <span
            className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
              isEducation ? 'bg-cyan-400' : 'bg-electric'
            }`}
            style={{ animationDuration: '3s' }}
          />
          {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
        </motion.div>

        {/* Glowing connector line */}
        {!isLast && (
          <div className="w-px flex-1 mt-3 min-h-[80px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-electric/30 via-electric/10 to-transparent" />
          </div>
        )}
      </div>

      {/* Card */}
      <div className="pb-10 flex-1 min-w-0">
        <motion.div
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          className="group rounded-2xl p-6 glass-hover overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Period badge */}
          <span
            className={`inline-block font-mono text-xs px-3 py-1.5 rounded-full mb-4 ${
              isEducation
                ? 'text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/20'
                : 'text-electric/80 bg-electric/10 border border-electric/20'
            }`}
          >
            {entry.period}
          </span>

          <h3 className="font-display font-semibold text-xl text-white mb-0.5 group-hover:text-electric transition-colors duration-300">
            {entry.role}
          </h3>
          <p className="font-body text-sm font-medium text-slate-400 mb-5">
            @ {entry.company}
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-2.5">
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                <CheckCircle2
                  size={14}
                  className={`flex-shrink-0 mt-0.5 ${isEducation ? 'text-cyan-400/60' : 'text-electric/60'}`}
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
    <section id="experience" className="py-28 px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeader
        eyebrow="// journey"
        title="Experience"
        subtitle="My path from intern to AI/ML Engineer, alongside ongoing graduate research."
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
