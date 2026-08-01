import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Research from './components/Research'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen relative z-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Research />
        <Testimonials />
        <Contact />
        {/* Unlisted — not in Navbar. Share the /#feedback link directly with clients/colleagues. */}
        <FeedbackForm />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
