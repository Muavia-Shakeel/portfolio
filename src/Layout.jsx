import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import epilogueLatin from '@fontsource-variable/epilogue/files/epilogue-latin-wght-normal.woff2?url'
import figtreeLatin from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2?url'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Sections that moved off the home page: old shared links like /#research still land in the right place.
const LEGACY_HASH = { '#about-me': '/about', '#experience': '/about#experience', '#research': '/research' }

// Router links don't scroll on their own: handle #hash targets, redirect legacy hashes, reset to top on new pages.
// Back/forward (POP) is left to the browser so visitors keep their place.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === '/' && LEGACY_HASH[hash]) {
      navigate(LEGACY_HASH[hash], { replace: true })
      return
    }
    const el = hash && document.getElementById(hash.slice(1))
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72 })
    else if (navType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, navType, navigate])
  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen relative z-0">
      {/* Preload only the two above-the-fold faces (display + body). Fira Code is below the fold. */}
      <Head>
        <link rel="preload" as="font" type="font/woff2" href={epilogueLatin} crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href={figtreeLatin} crossOrigin="anonymous" />
      </Head>
      <ScrollManager />
      <Navbar />
      {/* `m` + domAnimation instead of the full `motion` bundle: ~25 KB less JS on every page */}
      <LazyMotion features={domAnimation}>
        <main>
          <Outlet />
        </main>
      </LazyMotion>
      <Footer />
      <Analytics />
    </div>
  )
}
