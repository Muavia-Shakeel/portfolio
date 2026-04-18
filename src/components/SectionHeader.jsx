import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      {eyebrow && (
        <p className="font-mono text-xs text-accent tracking-[0.15em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
