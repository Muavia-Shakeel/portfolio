import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <span className="inline-block font-mono text-electric text-xs tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-7 flex items-center justify-center gap-3">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-electric/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-electric" />
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-electric/50" />
      </div>
    </motion.div>
  )
}
