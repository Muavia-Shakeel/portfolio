import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // nested => dist/projects/index.html, which Vercel serves at /projects with no extra rewrites
  ssgOptions: { dirStyle: 'nested' },
})
