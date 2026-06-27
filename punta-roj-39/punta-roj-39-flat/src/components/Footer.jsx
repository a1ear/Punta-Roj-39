/**
 * Footer component.
 * Migrated from partials/footer.php
 */

import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

const navLinks = [
  { label: 'Home',    to: '/' },
  { label: 'Menu',    to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const { address: addr } = site
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-5">

          {/* Brand + blurb + social */}
          <div className="col-lg-4">
            <Link className="footer-brand" to="/">
              <span className="brand-mark">PR</span>
              <span className="brand-text">
                <span className="brand-name">Punta Roj 39</span>
                <span className="brand-tagline">Kape Al Vista</span>
              </span>
            </Link>
            <p className="footer-blurb">{site.description}</p>
            <div className="footer-social">
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>

          {/* Explore nav */}
          <div className="col-6 col-lg-2 offset-lg-1">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit / address */}
          <div className="col-6 col-lg-2">
            <h3 className="footer-title">Visit</h3>
            <address className="footer-address">
              {addr.street}
              <br />
              {addr.city}
              <br />
              {addr.region}
              <br />
              {addr.country}
            </address>
          </div>

          {/* Hours */}
          <div className="col-lg-3">
            <h3 className="footer-title">Open Hours</h3>
            <ul className="footer-hours">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            {addr.city}, {addr.region}
          </p>
        </div>
      </div>
    </footer>
  )
}
