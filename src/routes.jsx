import Layout from './Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import ResearchPage from './pages/ResearchPage'
import BlogPage from './pages/BlogPage'
import { projects } from './data/projects'

// vite-react-ssg prerenders every path here to dist/<path>/index.html at build time.
export const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: AboutPage },
      { path: 'projects', Component: ProjectsPage },
      {
        path: 'projects/:slug',
        Component: ProjectDetail,
        getStaticPaths: () => projects.map((p) => `projects/${p.slug}`),
      },
      { path: 'research', Component: ResearchPage },
      { path: 'blog', Component: BlogPage },
    ],
  },
]
