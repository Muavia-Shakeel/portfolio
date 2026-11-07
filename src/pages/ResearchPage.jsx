import Seo from '../components/Seo'
import Research from '../components/Research'
import { publications } from '../data/content'
import { articleJsonLd } from '../seo'

export default function ResearchPage() {
  return (
    <div className="pt-12">
      <Seo
        title="Research & Publications | Muavia Shakeel"
        description="Research in computer vision, agentic AI, RAG and explainable AI, including federated GradCAM aggregation for chest X-ray diagnosis (ICAISF 2026)."
        path="/research"
        jsonLd={publications.map(articleJsonLd)}
      />
      <Research />
    </div>
  )
}
