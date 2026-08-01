import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about-me' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      // Track active section
      const sections = navLinks.map((l) => l.href.slice(1))
      let current = 'about'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/95 border-b border-slate-200 shadow-lg shadow-black/5 dark:bg-slate-950/95 dark:border-white/[0.05] dark:shadow-2xl dark:shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="flex items-center gap-3 group">
            <div className="w-8 h-8 border-2 border-accent-ink/50 dark:border-accent/50 group-hover:border-accent-ink dark:group-hover:border-accent flex items-center justify-center font-mono font-bold text-xs text-accent-ink dark:text-accent tracking-wider transition-all duration-200">
              MS
            </div>
            <span className="font-body text-slate-700 dark:text-slate-200 font-semibold text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
              Muavia Shakeel
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`relative block px-4 py-2 font-body text-sm pb-2.5 transition-all duration-200 ${
                      isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-0.5 left-2 right-2 h-0.5 bg-accent-ink dark:bg-accent"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:border-accent-ink/50 dark:hover:border-accent/50 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun size={16} className="hidden dark:inline" />
              <Moon size={16} className="inline dark:hidden" />
            </button>

            {/* Mobile button */}
            <button
              className="md:hidden p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-canvas/98 border-b border-slate-200 shadow-lg dark:bg-slate-950/98 dark:border-white/[0.05] dark:shadow-2xl md:hidden"
          >
            <ul className="px-4 py-3 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200 font-body text-sm border-l-2 border-transparent hover:border-accent-ink/50 dark:hover:border-accent/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
