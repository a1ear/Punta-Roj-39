/**
 * Header / Navbar component.
 * Migrated from partials/header.php
 *
 * Change: removed redundant "View Menu" button — nav link "Menu" serves
 * the same purpose. Nav now ends at Contact.
 */

import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home',    to: '/' },
  { label: 'Menu',    to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen]         = useState(false)
  const collapseRef = useRef(null)

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false)
    if (collapseRef.current && window.bootstrap) {
      const bsCollapse =
        window.bootstrap.Collapse.getInstance(collapseRef.current) ||
        new window.bootstrap.Collapse(collapseRef.current, { toggle: false })
      bsCollapse.hide()
    }
  }

  const toggleMenu = () => setIsOpen((v) => !v)

  return (
    <header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
      data-header=""
    >
      <nav className="navbar navbar-expand-lg" aria-label="Primary">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            aria-label="Punta Roj 39 home"
            onClick={closeMenu}
          >
            <span className="brand-mark">
              <img
                src="/logo-placeholder.png"
                alt="Punta Roj 39 logo"
                className="brand-logo-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'inline'
                }}
              />
              <span className="brand-mark-fallback" style={{ display: 'none' }}>PR</span>
            </span>
            <span className="brand-text">
              <span className="brand-name">Punta Roj 39</span>
              <span className="brand-tagline">Kape Al Vista</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="primaryNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end${isOpen ? ' show' : ''}`}
            id="primaryNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-1">
              {navItems.map(({ label, to }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${isActive ? ' active' : ''}`
                    }
                    to={to}
                    end={to === '/'}
                    aria-current={undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
