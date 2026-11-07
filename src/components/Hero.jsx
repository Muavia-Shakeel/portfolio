import { Link } from 'react-router-dom'
import { ArrowRight, FileDown, Mail } from 'lucide-react'

const RESUME_URL = '/resume.pdf'

// CSS-only entrance (see .animate-fade-up): the hero is the LCP, so it must paint without waiting for JS/hydration.
const delay = (ms) => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-6 lg:px-8 overflow-hidden">
      {/* Dot-grid backdrop */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-center">

          {/* Text */}
          <div>
            <p style={delay(0)} className="animate-fade-up font-mono text-xs text-accent-ink dark:text-accent tracking-[0.15em] uppercase mb-6">
              Computer Vision · LLM Agents · Rawalpindi
            </p>

            {/* One h1 for the page: name + role, split into display lines */}
            <h1 style={delay(70)} className="animate-fade-up font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight uppercase mb-8">
              <span className="block text-slate-900 dark:text-white">Muavia</span>
              <span className="block text-slate-900 dark:text-white mb-8">Shakeel</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-outline">
                <span className="sr-only">, </span>AI/ML Engineer
              </span>
            </h1>

            <p style={delay(160)} className="animate-fade-up text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              I build agentic LLM systems and computer-vision pipelines that run in
              production, not proofs of concept. My WhatsApp ERP bot replaced 1,500 lines
              of regex with a 13-tool Gemini function-calling loop; my vision pipelines
              process 100+ CNICs a day at 96% accuracy on live GPU infrastructure.
              Whichever the problem calls for, I wire it into real ERP systems and
              real infrastructure.
            </p>

            <div style={delay(230)} className="animate-fade-up flex flex-wrap gap-3 mb-12">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-void font-display font-bold text-sm tracking-wide hover:bg-accent-dark transition-colors duration-150"
              >
                See my work
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-display font-bold text-sm tracking-wide hover:border-accent-ink dark:hover:border-accent hover:text-accent-ink dark:hover:text-accent transition-colors duration-150"
              >
                <FileDown size={14} />
                Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToContact()
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-700 dark:text-slate-300 font-display font-bold text-sm tracking-wide hover:text-accent-ink dark:hover:text-accent transition-colors duration-150"
              >
                <Mail size={14} />
                Get in touch
              </a>
            </div>

            {/* Stats row */}
            <div style={delay(300)} className="animate-fade-up flex items-center gap-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              {[
                { n: '5+', label: 'Production systems' },
                { n: '2+', label: 'Years experience' },
                { n: 'MS', label: 'AI — FAST-NU' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-0.5">{n}</div>
                  <div className="font-body text-xs text-slate-500 dark:text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={delay(100)} className="animate-fade-up flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Offset background square */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-accent-ink/8 dark:bg-accent/8 border border-accent-ink/15 dark:border-accent/15" />

              {/* Photo container */}
              <div className="group relative w-full h-full overflow-hidden bg-slate-100 dark:bg-slate-900 ring-2 ring-accent-ink/20 dark:ring-accent/20 transition-all duration-300 hover:ring-accent-ink/60 dark:hover:ring-accent/60 hover:scale-[1.03] cursor-pointer">
                {/* 26 KB WebP at 2x instead of the 68 KB 896px JPEG; JPEG kept as fallback. Eager: it is above the fold. */}
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/profile-320.webp 320w, /profile-640.webp 640w"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 256px"
                  />
                  <img
                    src="/profile-640.jpg"
                    width="640"
                    height="788"
                    alt="Portrait of Muavia Shakeel, AI/ML engineer"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent-ink/8 dark:group-hover:bg-accent/8 transition-colors duration-300" />
              </div>

              {/* Bottom-right label */}
              <div className="absolute -bottom-5 right-0 font-mono text-[10px] text-slate-400 dark:text-slate-700 tracking-[0.1em]">
                muavia.shakeel · ai/ml
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
