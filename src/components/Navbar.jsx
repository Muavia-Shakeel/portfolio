import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { posts } from '../data/content'

// Real routes, so every section is a crawlable URL. Blog is hidden until it has posts.
const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Research', to: '/research' },
  ...(posts.length ? [{ label: 'Blog', to: '/blog' }] : []),
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  // Starts false so server HTML and first client render match; the inline script in index.html already set the class.
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative block px-4 py-2 font-body text-sm pb-2.5 transition-colors duration-200 ${
      isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/95 border-b border-slate-200 shadow-lg shadow-black/5 dark:bg-slate-950/95 dark:border-white/[0.05] dark:shadow-2xl dark:shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <nav aria-label="Main" className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 group">
            <div className="w-8 h-8 border-2 border-accent-ink/50 dark:border-accent/50 group-hover:border-accent-ink dark:group-hover:border-accent flex items-center justify-center font-mono font-bold text-xs text-accent-ink dark:text-accent tracking-wider transition-all duration-200">
              MS
            </div>
            <span className="font-body text-slate-700 dark:text-slate-200 font-semibold text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
              Muavia Shakeel
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                {/* Hash links never match the active route, so Contact is a plain Link */}
                {link.to.includes('#') ? (
                  <Link to={link.to} className={linkClass({ isActive: false })}>
                    {link.label}
                  </Link>
                ) : (
                  <NavLink to={link.to} className={linkClass}>
                    {({ isActive }) => (
                      <>
                        {isActive && <span className="absolute bottom-0.5 left-2 right-2 h-0.5 bg-accent-ink dark:bg-accent" />}
                        {link.label}
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:border-accent-ink/50 dark:hover:border-accent/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile button */}
            <button
              className="md:hidden p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-canvas/98 border-b border-slate-200 shadow-lg dark:bg-slate-950/98 dark:border-white/[0.05] dark:shadow-2xl md:hidden animate-fade-up">
          <ul className="px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200 font-body text-sm border-l-2 border-transparent hover:border-accent-ink/50 dark:hover:border-accent/50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
