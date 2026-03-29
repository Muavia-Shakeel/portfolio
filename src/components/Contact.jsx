import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, BookOpen, Send, CheckCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'

const socialLinks = [
  {
    label: 'GitHub',
    handle: 'github.com/muavia-shakeel',
    href: 'https://github.com/muavia-shakeel',
    icon: Github,
    hoverClass: 'hover:text-white hover:border-white/25 hover:bg-white/5',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/muavia-shakeel',
    href: 'https://linkedin.com/in/muavia-shakeel',
    icon: Linkedin,
    hoverClass: 'hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5',
  },
  {
    label: 'Email',
    handle: 'muavia.shakeel@example.com',
    href: 'mailto:muavia.shakeel@example.com',
    icon: Mail,
    hoverClass: 'hover:text-electric hover:border-electric/30 hover:bg-electric/5',
  },
  {
    label: 'Google Scholar',
    handle: 'scholar.google.com',
    href: 'https://scholar.google.com',
    icon: BookOpen,
    hoverClass: 'hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/5',
  },
]

const inputClass =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 font-body transition-all duration-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Wire up real Formspree endpoint:
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        eyebrow="// contact"
        title="Let's Build Something Together"
        subtitle="Whether you're looking to integrate AI into industrial workflows, discuss a research collaboration, or explore a consulting engagement — I'd love to hear from you."
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-10"
      >
        {/* ── Left panel ─────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-7">
          <div>
            <h3 className="font-display font-semibold text-xl text-white mb-3 leading-snug">
              Open to opportunities
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Available for AI/ML consulting, research collaborations, and
              contract work. I respond to all serious inquiries within 48 hours.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] text-electric/70 tracking-[0.18em] uppercase mb-1">
              Find me online
            </p>
            {socialLinks.map(({ label, handle, href, icon: Icon, hoverClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-slate-400 transition-all duration-200 ${hoverClass}`}
              >
                <Icon size={15} className="flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-body text-xs font-semibold leading-none mb-0.5">{label}</div>
                  <div className="font-mono text-[10px] text-slate-600 truncate">{handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Form ───────────────────────────── */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-10 flex flex-col items-center justify-center gap-5 text-center min-h-[380px] glass-hover"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
                >
                  <CheckCircle size={52} className="text-emerald-400" />
                </motion.div>
                <h3 className="font-display font-semibold text-2xl text-white">Message sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-1 text-xs font-mono text-electric hover:text-electric-light transition-colors"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 flex flex-col gap-4 glass-hover"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-electric to-electric-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-body font-medium rounded-xl transition-all duration-300 glow hover:shadow-electric/30 hover:shadow-lg"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
