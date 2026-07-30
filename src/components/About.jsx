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
  { Icon: Cpu,            label: 'Speciality',   value: 'ML, Deep Learning, Computer Vision & Agentic Gen AI' },
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
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            I'm an AI/ML Engineer in Rawalpindi, Pakistan, working at Kohinoor Textile Mills —
            one of the country's largest textile manufacturers. I got there by accident: an
            internship writing Python scripts turned into the person who owns "make the AI
            stuff actually work on the factory floor."
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            That's turned into two very different kinds of problems. Some days it's a camera
            pointed at a production line with terrible lighting, and a YOLO model that needs
            to stop flagging shadows as defects. Other days it's staff typing broken English-Urdu
            into WhatsApp, and an LLM agent that has to figure out what they actually meant before
            it touches Oracle ERP. Neither one forgives sloppy edge-case handling — that's the
            part I find genuinely satisfying, not the model training.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            I'm doing an MS in AI at FAST-NU on the side, poking at attention mechanisms for
            document understanding — mostly because the gap between what a paper claims and
            what survives a messy real dataset keeps being more interesting than I expect.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Outside work: side projects that mostly don't ship, an open-source PR here and there,
            and a reading list on cybersecurity and systems design that's longer than I'll admit.
          </p>
        </motion.div>

        {/* Facts card */}
        <motion.div {...fade(0.1)} className="lg:col-span-2">
          <div className="glass-card p-6 space-y-0 divide-y divide-slate-200 dark:divide-slate-800/60">
            {facts.map(({ Icon, label, value }, i) => (
              <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <div className="w-8 h-8 bg-accent-ink/8 dark:bg-accent/8 border border-accent-ink/15 dark:border-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={13} className="text-accent-ink dark:text-accent" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-600 tracking-[0.1em] uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
