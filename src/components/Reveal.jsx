import { useEffect, useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'

// useLayoutEffect is a no-op (with a warning) during SSR — there is no DOM to
// measure against. Fall back to useEffect there; the browser never runs the
// server bundle so this never mixes on the client.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const tagToMotion = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  li: motion.li,
  form: motion.form,
}

// framer-motion's `initial` prop is what gets baked into the static HTML at
// build time (vite-react-ssg runs a real render, not a browser snapshot).
// Rendering the motion element unmounted means bots/no-JS clients see final,
// visible markup; the reveal animation still plays for real visitors, just
// starting on client mount instead of being present at first paint. Server
// render and the client's pre-effect render both take the `false` branch, so
// hydration never mismatches. The flag flips via useLayoutEffect so the swap
// lands in the same frame as hydration rather than a tick after paint.
//
// That swap still resets to `initial` before animating back to `animate` —
// fine for `whileInView` content, since it's off-screen until scrolled to,
// well after hydration finishes. Content that animates via `animate` (plays
// immediately on mount, e.g. Hero) was already painted visible by the SSR
// HTML before hydration completed; replaying `initial` on the swap makes
// already-visible text vanish and refade — confirmed empirically (180ms+
// even unthrottled, longer on slow connections). For that case we skip the
// replay (`initial={false}`) so it just stays put instead of flashing.
export default function Reveal({ as = 'div', className, children, initial, animate, whileInView, ...rest }) {
  const [mounted, setMounted] = useState(false)
  useIsomorphicLayoutEffect(() => setMounted(true), [])

  if (!mounted) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = tagToMotion[as] ?? motion.div
  const isMountTriggered = Boolean(animate) && !whileInView

  return (
    <MotionTag
      className={className}
      initial={isMountTriggered ? false : initial}
      animate={animate}
      whileInView={whileInView}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
