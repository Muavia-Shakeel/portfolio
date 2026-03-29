export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-700 font-body text-sm">
          © {year} Muavia Shakeel. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-slate-700">
          Built with{' '}
          <span className="text-electric/70">React</span>
          {' '}+{' '}
          <span className="text-electric/70">Vite</span>
          {' '}+{' '}
          <span className="text-electric/70">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
