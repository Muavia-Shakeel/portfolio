import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Cpu, Heart } from 'lucide-react'
import SectionHeader from './SectionHeader'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
})

const facts = [
  { Icon: MapPin,         label: 'Location',    value: 'Rawalpindi, Pakistan' },
  { Icon: Briefcase,      label: 'Role',         value: 'AI/ML Engineer at Kohinoor Textile Mills' },
  { Icon: GraduationCap,  label: 'Education',    value: 'MS AI — FAST-NU  ·  BS AI — Hazara University' },
  { Icon: Cpu,            label: 'Speciality',   value: 'Computer Vision & Industrial AI' },
  { Icon: Heart,          label: 'Interests',    value: 'AI research, backend systems, cybersecurity, continuous learning' },
]

export default function About() {
  return (
    <section id="about-me" className="py-28 px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="// about me"
        title="Who I Am"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Bio — wider column */}
        <motion.div {...fade(0)} className="lg:col-span-3 space-y-5">
          <p className="text-slate-300 text-base leading-relaxed">
            I'm an AI/ML Engineer based in Rawalpindi, Pakistan, currently building production-grade
            computer vision and deep learning systems at Kohinoor Textile Mills Limited — one of
            Pakistan's largest textile manufacturers.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            My day-to-day involves deploying real models on real hardware: GPU-accelerated object
            detection pipelines, OCR engines for industrial documents, factory monitoring systems,
            and AI integrations inside Oracle ERP. I care about systems that actually work under
            production constraints — variable lighting, noisy data, tight latency budgets.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Alongside my job I'm pursuing an MS in Artificial Intelligence at FAST-NU, where my
            research focuses on attention mechanisms for document-level understanding. I enjoy the
            gap between academic ideas and what survives contact with the real world.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Outside work I build side projects, contribute to open source when I can, and spend
            too much time reading about things that may or may not be useful someday.
          </p>
        </motion.div>

        {/* Facts card */}
        <motion.div {...fade(0.1)} className="lg:col-span-2">
          <div className="glass-card p-6 space-y-0 divide-y divide-slate-800/60">
            {facts.map(({ Icon, label, value }, i) => (
              <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <div className="w-8 h-8 bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={13} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 tracking-[0.1em] uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="text-slate-300 text-sm leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
