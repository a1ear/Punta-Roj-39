/**
 * PageMeta — updates <title> and <meta name="description"> for each page.
 * Migrated from the $pageTitle / $pageDescription logic in partials/head.php
 *
 * React doesn't render into <head> by default; we use DOM APIs directly.
 * For a production app you'd use react-helmet-async or Vite's SSR — this
 * covers the SPA case perfectly.
 */

import { useEffect } from 'react'
import { site } from '../data/site.js'

export default function PageMeta({ title, description }) {
  const resolvedTitle  = title       ?? `${site.name} — ${site.tagline}`
  const resolvedDesc   = description ?? site.description

  useEffect(() => {
    document.title = resolvedTitle

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = resolvedDesc
  }, [resolvedTitle, resolvedDesc])

  return null
}
