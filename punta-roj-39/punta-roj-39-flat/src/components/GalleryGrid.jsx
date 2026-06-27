/**
 * GalleryGrid — masonry grid + lightbox modal.
 * Migrated from gallery.php + the lightbox JS in script.js
 *
 * Replaces Bootstrap's data-bs-toggle="modal" JS with React state,
 * keeping the exact same visual output and CSS classes.
 */

import { useState, useEffect, useCallback } from 'react'

export default function GalleryGrid({ items }) {
  const [lightbox, setLightbox] = useState(null) // { src, caption }

  const openLightbox = useCallback((src, caption) => {
    setLightbox({ src, caption })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox])

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <div className="masonry">
        {items.map((g, i) => (
          <figure
            key={i}
            className={`masonry-item${g.size ? ` masonry-item--${g.size}` : ''}`}
          >
            <button
              type="button"
              className="masonry-btn"
              aria-label={`View larger: ${g.alt}`}
              onClick={() => openLightbox(g.src, g.alt)}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width="640"
                height="640"
                onError={(e) => {
                  e.currentTarget.classList.add('img-fallback')
                  e.currentTarget.alt = 'Image coming soon'
                }}
              />
              <span className="masonry-cat">{g.cat}</span>
            </button>
          </figure>
        ))}
      </div>

      {/* Lightbox — rendered as a portal-style overlay */}
      {lightbox && (
        <div
          className="modal fade lightbox show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.82)' }}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
          onClick={closeLightbox}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <button
                type="button"
                className="lightbox-close"
                aria-label="Close"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="lightbox-img"
              />
              {lightbox.caption && (
                <p className="lightbox-caption">{lightbox.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
