import { ViteReactSSG } from 'vite-react-ssg'
import '@fontsource-variable/epilogue'
import '@fontsource-variable/figtree'
import '@fontsource-variable/fira-code'
import './index.css'
import { routes } from './routes'

// SSG entry: `vite-react-ssg build` prerenders each route to static HTML, then hydrates on the client.
export const createRoot = ViteReactSSG({ routes })
