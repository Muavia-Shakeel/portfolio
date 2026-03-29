import { motion } from 'framer-motion'
import { ChevronDown, Download, ArrowRight, MapPin, GraduationCap } from 'lucide-react'

const PROFILE_URL = '/profile.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.querySelector('#projects')
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="relative flex items-start overflow-hidden"
    >
      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated blobs */}
        <div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07] animate-blob"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.05] animate-blob"
          style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)', animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] animate-blob"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent 60%)', animationDelay: '1.5s' }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0F19] to-transparent" />
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left — text (60%) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-emerald-400/90 tracking-widest uppercase">
                Available for collaborations
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.1)} className="font-display font-bold leading-[1.08] mb-5">
              <span className="block text-5xl sm:text-6xl lg:text-[5rem] text-white">
                Muavia
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-[5rem] text-white">
                Shakeel
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-[2.8rem] text-gradient italic font-normal mt-2">
                Engineering Intelligence
              </span>
            </motion.h1>

            {/* Role & location pills */}
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-electric bg-electric/10 border border-electric/20 px-3 py-1.5 rounded-full">
                <MapPin size={11} />
                AI/ML Engineer · Kohinoor Textile Mills
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full">
                <GraduationCap size={11} />
                MS AI · FAST-NU
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
            >
              AI/ML Engineer at Kohinoor Textile Mills, specializing in computer
              vision and industrial automation. I design and deploy end-to-end AI
              pipelines — from custom YOLOv8 models and DeepStream-accelerated
              inference to Oracle ERP integration — that turn complex factory-floor
              workflows into scalable, automated systems. Currently pursuing an MS
              in AI at FAST-NU, with research focused on attention mechanisms and
              intelligent document processing.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-electric hover:bg-electric-dark text-white font-body font-medium rounded-xl transition-all duration-300 glow hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <a
                href="/resume.pdf"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 glass text-slate-300 hover:text-white font-body font-medium rounded-xl transition-all duration-300 hover:border-electric/40 hover:bg-electric/5"
              >
                <Download
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
                Download CV
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/8"
            >
              {[
                { value: '5+', label: 'Production Systems' },
                { value: '3+', label: 'Years at Kohinoor' },
                { value: '12+', label: 'Camera Feeds Live' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-2xl text-white">{value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator — inline after stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-3 mt-8"
            >
              <ChevronDown size={14} className="text-slate-700 animate-bounce" />
              <span className="font-mono text-xs text-slate-700 tracking-widest uppercase">Scroll</span>
            </motion.div>
          </div>

          {/* Right — profile image (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer decorative ring — animated */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-18px] rounded-full border border-dashed border-electric/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-36px] rounded-full border border-dashed border-cyan-400/10"
              />

              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-full bg-electric/20 blur-3xl scale-110" />

              {/* Image frame */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl ring-glow overflow-hidden">
                  <img
                    src={PROFILE_URL}
                    alt="Muavia Shakeel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials div if image fails
                      e.target.style.display = 'none'
                      e.target.parentNode.style.background = '#1e2d4d'
                      e.target.parentNode.style.display = 'flex'
                      e.target.parentNode.style.alignItems = 'center'
                      e.target.parentNode.style.justifyContent = 'center'
                    }}
                  />
                </div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
