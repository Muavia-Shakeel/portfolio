import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Research from '../components/Research'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
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
      </main>
      <Footer />
    </div>
  )
}
