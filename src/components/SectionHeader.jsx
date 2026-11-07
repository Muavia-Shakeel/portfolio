import { m as motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, as: Tag = 'h2' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      {eyebrow && (
        <p className="font-mono text-xs text-accent-ink dark:text-accent tracking-[0.15em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <Tag className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
