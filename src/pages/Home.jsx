import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import FeedbackForm from '../components/FeedbackForm'
import { personJsonLd } from '../seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Muavia Shakeel: AI/ML Engineer, Computer Vision, LLM Agents"
        description="AI/ML engineer in Rawalpindi building production computer-vision pipelines and LLM agents integrated with Oracle ERP. MS AI at FAST-NU."
        path="/"
        jsonLd={[personJsonLd]}
      />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      {/* Unlisted: not in the nav. Share the /#feedback link directly with clients/colleagues. */}
      <FeedbackForm />
    </>
  )
}
