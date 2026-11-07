import { m as motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import SectionHeader from './SectionHeader'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function TestimonialCard({ t }) {
  return (
    <motion.div variants={item} className="glass-card p-6 flex flex-col gap-4">
      <Quote size={18} className="text-accent-ink/50 dark:text-accent/50" />
      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        {t.photo ? (
          <img src={t.photo} alt={`Photo of ${t.name}`} width="40" height="40" loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-accent-ink/10 dark:bg-accent/10 flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-accent-ink dark:text-accent">
            {t.name.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">{t.name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
            {t.role}{t.company ? `, ${t.company}` : ''}{t.country ? ` · ${t.country}` : ''}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="// what people say"
        title="Feedback"
        subtitle="From clients and colleagues I've worked with directly."
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </motion.div>
    </section>
  )
}
