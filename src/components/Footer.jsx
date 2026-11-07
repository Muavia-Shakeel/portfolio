import { Link } from 'react-router-dom'
import { GITHUB, LINKEDIN } from '../seo'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Research', to: '/research' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/50 py-10 px-6 lg:px-8 bg-canvas dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © {year} Muavia Shakeel. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-accent-ink dark:hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
          <a href={GITHUB} rel="me noopener" className="hover:text-accent-ink dark:hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={LINKEDIN} rel="me noopener" className="hover:text-accent-ink dark:hover:text-accent transition-colors">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
