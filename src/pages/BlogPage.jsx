import Seo from '../components/Seo'
import SectionHeader from '../components/SectionHeader'
import { posts } from '../data/content'

// Post pages (/blog/[slug]) are not built yet: add a route like ProjectDetail when the first post exists.
export default function BlogPage() {
  return (
    <section className="pt-36 pb-28 px-6 lg:px-8 max-w-3xl mx-auto min-h-[60vh]">
      <Seo
        title="Blog | Muavia Shakeel"
        description="Notes on production computer vision, LLM agents and ERP integration by Muavia Shakeel."
        path="/blog"
        noindex={posts.length === 0}
      />
      <SectionHeader as="h1" eyebrow="// writing" title="Blog" subtitle="Notes on production computer vision, LLM agents and ERP integration." />
      {posts.length === 0 ? (
        <p className="text-slate-600 dark:text-slate-400">First posts are on the way.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((p) => (
            <li key={p.slug}>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">{p.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{p.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
