/**
 * Contact page — /contact
 *
 * Changes:
 *  - Removed "Send a message" form section entirely
 *  - Map now spans full width
 *  - Social card icon changed from instagram → facebook
 *  - ContactForm import removed
 */

import PageMeta from '../components/PageMeta.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/ScrollReveal.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const addr = site.address

  return (
    <main id="main">
      <PageMeta
        title="Contact & Visit — Punta Roj 39 | Kabankalan City, Negros Occidental"
        description="Visit Punta Roj 39 in Kabankalan City, Negros Occidental. Find our address, phone number, opening hours, and social links."
      />

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Say Hello</p>
          <h1 className="page-title text-balance">Visit Punta Roj 39</h1>
          <p className="page-lead text-pretty">
            Come for the coffee, stay for the view. We&apos;re in the heart of
            Kabankalan City and always happy to welcome you.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">

          {/* ── INFO CARDS ────────────────────────────────────────── */}
          <div className="row g-4">

            {/* Address */}
            <div className="col-md-6 col-lg-3">
              <Reveal tag="article" className="contact-card h-100">
                <span className="contact-icon" aria-hidden="true">
                  <Icon name="map" />
                </span>
                <h2 className="contact-card-title">Address</h2>
                <address className="contact-card-text">
                  {addr.street}
                  <br />
                  {addr.city}
                  <br />
                  {addr.region}
                  <br />
                  {addr.country}
                </address>
              </Reveal>
            </div>

            {/* Contact */}
            <div className="col-md-6 col-lg-3">
              <Reveal tag="article" className="contact-card h-100">
                <span className="contact-icon" aria-hidden="true">
                  <Icon name="phone" />
                </span>
                <h2 className="contact-card-title">Contact</h2>
                <p className="contact-card-text">
                  <a href={`tel:${site.phone_href}`}>{site.phone}</a>
                </p>
              </Reveal>
            </div>

            {/* Payment Options */}
            <div className="col-md-6 col-lg-3">
              <Reveal tag="article" className="contact-card h-100">
                <span className="contact-icon" aria-hidden="true">
                  <Icon name="wallet" />
                </span>
                <h2 className="contact-card-title">Payment Options</h2>
                <p className="contact-card-text">
                  <strong>GCash Accepted</strong>
                  <br />
                  <span style={{ fontSize: '0.875rem', opacity: 0.75 }}>
                    Fast, secure, and convenient cashless payments.
                  </span>
                </p>
              </Reveal>
            </div>

            {/* Social — Facebook only */}
            <div className="col-md-6 col-lg-3">
              <Reveal tag="article" className="contact-card h-100">
                <span className="contact-icon" aria-hidden="true">
                  <Icon name="facebook" />
                </span>
                <h2 className="contact-card-title">Follow Us</h2>
                <p className="contact-card-text">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── HOURS + MAP ───────────────────────────────────────── */}
          <div className="row g-5 align-items-stretch mt-1">

            {/* Expanded hours card */}
            <div className="col-lg-5">
              <Reveal className="hours-card h-100">
                <span className="contact-icon" aria-hidden="true">
                  <Icon name="clock" />
                </span>
                <h2 className="section-title">Opening Hours</h2>
                <p className="section-lead text-pretty">
                  Walk-ins welcome — no reservations needed. Come as you are.
                </p>

                <ul className="hours-list">
                  {site.hours.map((h) => (
                    <li key={h.days} className={h.time === 'Closed' ? 'hours-list__item--closed' : ''}>
                      <span className="hours-list__days">{h.days}</span>
                      <span className="hours-list__time">{h.time}</span>
                    </li>
                  ))}
                </ul>

                <p className="hours-note">
                  Hours may vary on public holidays. Follow us on{' '}
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>{' '}
                  for the latest updates.
                </p>

                <a
                  className="btn btn-brand mt-auto"
                  href={`https://www.google.com/maps/dir/?api=1&destination=39+Rojas+St,+Kabankalan,+Negros+Occidental,+Philippines`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Reveal>
            </div>

            {/* Map */}
            <div className="col-lg-7">
              <Reveal className="map-frame map-frame--tall h-100">
                <iframe
                  src={site.map_embed}
                  title="Map showing Punta Roj 39 in Kabankalan City"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </Reveal>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
