import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const PROFILE_URL = '/profile.jpg'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section id="about" className="min-h-[88vh] flex items-center pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.p {...fade(0)} className="font-mono text-xs text-accent tracking-[0.15em] uppercase mb-6">
              Available for opportunities
            </motion.p>

            <motion.h1 {...fade(0.07)} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight mb-2">
              Hi, I'm
            </motion.h1>
            <motion.h1 {...fade(0.12)} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.0] tracking-tight mb-8">
              <span className="text-accent">Muavia Shakeel.</span>
            </motion.h1>

            <motion.p {...fade(0.18)} className="text-slate-400 text-lg leading-relaxed mb-4 max-w-lg">
              AI/ML Engineer building computer vision and deep learning systems
              for industrial automation.
            </motion.p>

            <motion.p {...fade(0.22)} className="text-slate-500 text-sm leading-relaxed mb-10 max-w-lg">
              Currently at Kohinoor Textile Mills, deploying production AI on GPU
              infrastructure. Pursuing MS in AI at FAST-NU.
            </motion.p>

            <motion.div {...fade(0.28)} className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-void font-display font-bold text-sm tracking-wide hover:bg-accent-dark transition-colors duration-150"
              >
                See my work
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fade(0.35)} className="flex items-center gap-10 pt-8 border-t border-slate-800">
              {[
                { n: '5+', label: 'Production systems' },
                { n: '2+', label: 'Years experience' },
                { n: 'MS', label: 'AI — FAST-NU' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="font-display font-extrabold text-2xl text-white mb-0.5">{n}</div>
                  <div className="font-body text-xs text-slate-600">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Offset background circle */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-accent/8 border border-accent/15" />

              {/* Photo container */}
              <div className="group relative w-full h-full overflow-hidden rounded-full bg-slate-900 ring-2 ring-accent/20 transition-all duration-300 hover:ring-accent/60 hover:scale-[1.03] cursor-pointer">
                <img
                  src={PROFILE_URL}
                  alt="Muavia Shakeel"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/8 transition-colors duration-300" />
              </div>

              {/* Bottom-right label */}
              <div className="absolute -bottom-5 right-0 font-mono text-[10px] text-slate-700 tracking-[0.1em]">
                muavia.shakeel · ai/ml
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
