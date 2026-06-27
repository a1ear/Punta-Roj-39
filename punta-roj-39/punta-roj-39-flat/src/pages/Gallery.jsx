/**
 * Gallery page — /gallery
 * Migrated from gallery.php + lightbox JS in script.js
 */

import PageMeta from '../components/PageMeta.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { galleryItems } from '../data/gallery.js'

export default function Gallery() {
  return (
    <main id="main">
      <PageMeta
        title="Gallery — Punta Roj 39 | Café Moments in Kabankalan"
        description="A visual tour of Punta Roj 39 — specialty coffee, gourmet burgers, Thai dishes, and our café interior and exterior in Kabankalan City."
      />

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">In Frame</p>
          <h1 className="page-title text-balance">Gallery</h1>
          <p className="page-lead text-pretty">
            A few moments from the counter to the table — and the warm corner
            of Kabankalan we call home.
          </p>
        </div>
      </section>

      {/* ── MASONRY GRID ──────────────────────────────────────────── */}
      <section className="section gallery-section" aria-label="Photo gallery">
        <div className="container">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </main>
  )
}
