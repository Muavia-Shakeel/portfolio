import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, ImagePlus } from 'lucide-react'
import SectionHeader from './SectionHeader'

const inputClass =
  'w-full glass-card px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 focus:border-accent-ink/40 dark:focus:border-accent/40 focus:outline-none rounded-lg'

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', role: '', company: '', country: '', quote: '' })
  const [photo, setPhoto] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const data = new FormData()
      data.append('_subject', 'New portfolio testimonial submission')
      data.append('form_type', 'testimonial')
      Object.entries(form).forEach(([k, v]) => data.append(k, v))
      if (photo) data.append('photo', photo)

      const res = await fetch('https://formspree.io/f/xykrvaly', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Formspree request failed')
      setStatus('sent')
      setForm({ name: '', role: '', company: '', country: '', quote: '' })
      setPhoto(null)
    } catch {
      setStatus('idle')
      alert('Submission failed. Please try again or email directly.')
    }
  }

  return (
    <section id="feedback" className="py-28 px-6 lg:px-8 max-w-3xl mx-auto">
      <SectionHeader
        title="Leave Feedback"
        subtitle="Worked with me on a project? A few lines on what it was like helps a lot — thank you."
      />

      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-10 flex flex-col items-center justify-center gap-5 text-center min-h-[300px] rounded-2xl border-2 border-accent-ink/30 dark:border-accent/30"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}>
              <CheckCircle size={52} className="text-accent-ink dark:text-accent" />
            </motion.div>
            <h3 className="font-display font-semibold text-2xl text-slate-900 dark:text-white">Thank you!</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xs">
              Really appreciate you taking the time.
            </p>
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
                <label className="text-xs text-accent-ink dark:text-accent font-medium">Name</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Your name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-accent-ink dark:text-accent font-medium">Role</label>
                <input type="text" name="role" required value={form.role} onChange={handleChange}
                  placeholder="e.g. Production Manager" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-accent-ink dark:text-accent font-medium">Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange}
                  placeholder="Company name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-accent-ink dark:text-accent font-medium">Country</label>
                <input type="text" name="country" value={form.country} onChange={handleChange}
                  placeholder="e.g. Pakistan" className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-accent-ink dark:text-accent font-medium">Your Feedback</label>
              <textarea name="quote" required rows={4} value={form.quote} onChange={handleChange}
                placeholder="What was it like working together? What changed for your team?"
                className={`${inputClass} resize-none`} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-accent-ink dark:text-accent font-medium">Profile Picture (optional)</label>
              <label className={`${inputClass} flex items-center gap-2 cursor-pointer text-slate-500 dark:text-slate-400`}>
                <ImagePlus size={15} />
                {photo ? photo.name : 'Upload a photo'}
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => setPhoto(e.target.files?.[0] || null)} />
              </label>
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
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Submit Feedback
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  )
}
