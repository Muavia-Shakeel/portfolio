export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/50 py-10 px-6 lg:px-8 bg-canvas dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © {year} Muavia Shakeel. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Built with{' '}
          <span className="text-accent-ink dark:text-accent">React</span>
          {' '}+{' '}
          <span className="text-accent-ink dark:text-accent">Vite</span>
          {' '}+{' '}
          <span className="text-accent-ink dark:text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  )
}
