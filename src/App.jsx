import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="section-divider" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Research />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
