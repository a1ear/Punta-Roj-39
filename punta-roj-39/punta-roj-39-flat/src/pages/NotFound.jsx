/**
 * 404 Not Found page
 */

import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'

export default function NotFound() {
  return (
    <main id="main">
      <PageMeta title="Page Not Found — Punta Roj 39" />
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <p className="eyebrow">404</p>
          <h1 className="page-title text-balance">Page Not Found</h1>
          <p className="page-lead text-pretty" style={{ margin: '0 auto 2rem' }}>
            Looks like this page wandered off. Let&apos;s get you back on track.
          </p>
          <Link className="btn btn-brand" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
