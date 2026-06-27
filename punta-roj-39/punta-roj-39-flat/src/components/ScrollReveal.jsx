/**
 * ScrollReveal hook + wrapper component.
 * Migrated from the IntersectionObserver logic in assets/js/script.js
 *
 * Usage:
 *   import { useReveal } from './ScrollReveal'
 *   const ref = useReveal()
 *   <div ref={ref} className="reveal">...</div>
 *
 * Or use the wrapper:
 *   <Reveal tag="article" className="feature-card">...</Reveal>
 */

import { useEffect, useRef } from 'react'

const ioOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }

let sharedIO = null
function getIO() {
  if (!sharedIO && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    sharedIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          sharedIO.unobserve(entry.target)
        }
      })
    }, ioOptions)
  }
  return sharedIO
}

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('reveal')

    const io = getIO()
    if (io) {
      io.observe(el)
    } else {
      el.classList.add('is-visible')
    }
    return () => {
      if (io) io.unobserve(el)
    }
  }, [])

  return ref
}

/** Convenience wrapper that adds reveal behaviour to any element. */
export default function Reveal({ tag: Tag = 'div', className = '', children, ...props }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
