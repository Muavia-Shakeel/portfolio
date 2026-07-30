import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'

const socialLinks = [
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/muavia-shakeel',
    href: 'https://linkedin.com/in/muavia-shakeel/0bb783203',
    icon: Linkedin,
  },
  {
    label: 'Email',
    handle: 'muaviashakeel70@gmail.com',
    href: 'mailto:muaviashakeel70@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    handle: '+92 314 199 4982',
    href: 'https://wa.me/923141994982',
    icon: MessageCircle,
  },
]

const inputClass =
  'w-full glass-card px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 focus:border-accent-ink/40 dark:focus:border-accent/40 focus:outline-none rounded-lg'

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
        eyebrow="// let's connect"
        title="Contact"
        subtitle="Open to AI/ML consulting, research collaborations, and industrial automation projects."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10"
      >
        {/* ── Left panel ─────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="border-l-2 border-accent-ink/30 dark:border-accent/30 pl-6">
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-3">
              Availability
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Available for consulting, research collaborations, and contract work.
              Response time: &lt; 48 hours.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-accent-ink dark:text-accent font-medium mb-1">
              Connect Online
            </p>
            {socialLinks.map(({ label, handle, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex items-center gap-4 px-4 py-3 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:border-accent-ink/30 dark:hover:border-accent/30"
              >
                <Icon size={16} className="flex-shrink-0 text-accent-ink dark:text-accent" />
                <div className="min-w-0">
                  <div className="text-sm font-medium leading-none mb-1 text-slate-900 dark:text-white">{label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{handle}</div>
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
                className="glass-card p-10 flex flex-col items-center justify-center gap-5 text-center min-h-[380px] rounded-2xl border-2 border-accent-ink/30 dark:border-accent/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
                >
                  <CheckCircle size={52} className="text-accent-ink dark:text-accent" />
                </motion.div>
                <h3 className="font-display font-semibold text-2xl text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xs">
                  Response time: &lt; 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-1 text-sm font-medium text-accent-ink dark:text-accent hover:opacity-80 transition-opacity"
                >
                  Send Another →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="glass-card p-6 flex flex-col gap-5 rounded-2xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-accent-ink dark:text-accent font-medium">
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
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-accent-ink dark:text-accent font-medium">
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

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-accent font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project subject"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-accent font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-2 flex items-center justify-center gap-2 px-8 py-4 bg-accent disabled:opacity-50 disabled:cursor-not-allowed text-void font-medium text-sm transition-all duration-300 rounded-xl hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-void/30 border-t-void rounded-full animate-spin" />
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
