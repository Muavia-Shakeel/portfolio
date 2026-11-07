import Seo from '../components/Seo'
import About from '../components/About'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import { personJsonLd } from '../seo'

export default function AboutPage() {
  return (
    <div className="pt-12">
      <Seo
        title="About Muavia Shakeel | AI/ML Engineer and Researcher"
        description="Background, skills and experience of Muavia Shakeel: AI/ML engineer at Kohinoor Textile Mills, MS AI student at FAST-NU, based in Rawalpindi."
        path="/about"
        jsonLd={[personJsonLd]}
      />
      <About asH1 />
      <Skills />
      <Timeline />
    </div>
  )
}
