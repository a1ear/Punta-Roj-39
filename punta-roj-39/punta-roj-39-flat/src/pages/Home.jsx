/**
 * Home page — /
 * Migrated from index.php
 */

import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'
import DishCard from '../components/DishCard.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/ScrollReveal.jsx'
import { site } from '../data/site.js'
import { getFeaturedItems } from '../data/menu.js'

import heroCoffee from '../assets/images/hero-coffee.jpg'
import heroBurger from '../assets/images/hero-burger.jpg'
import heroThai   from '../assets/images/hero-thai.jpg'

const featured = getFeaturedItems(6)

const categories = [
  {
    icon: 'coffee',
    title: 'Specialty Coffee',
    text: 'Single-origin beans, pulled with precision and poured with care.',
  },
  {
    icon: 'burger',
    title: 'Gourmet Burgers',
    text: 'Hand-pressed patties stacked with bold, house-made toppings.',
  },
  {
    icon: 'chili',
    title: 'Thai Cuisine',
    text: 'Authentic recipes balancing sweet, sour, salty and spice.',
  },
]

export default function Home() {
  const addr = site.address

  return (
    <main id="main">
      <PageMeta
        title="Punta Roj 39 — Specialty Coffee, Gourmet Burgers & Thai Kitchen | Kabankalan City"
        description="Punta Roj 39 (Kape Al Vista) in Kabankalan City, Negros Occidental — where handcrafted specialty coffee, gourmet burgers, and authentic Thai flavors meet."
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="hero-eyebrow">Kabankalan City · Negros Occidental</p>
              <h1 className="hero-title">Punta&nbsp;Roj&nbsp;39</h1>
              <p className="hero-sub">{site.subheadline}</p>
              <p className="hero-desc text-pretty">{site.description}</p>
              <div className="hero-actions">
                <Link className="btn btn-brand" to="/menu">View Menu</Link>
                <Link className="btn btn-outline-dark-brand" to="/contact">Visit Us</Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-collage">
                <figure className="hero-img hero-img--lg">
                  <img
                    src={heroCoffee}
                    alt="A handcrafted latte with layered foam art"
                    fetchpriority="high"
                    width="640"
                    height="800"
                  />
                </figure>
                <figure className="hero-img hero-img--sm hero-img--top">
                  <img
                    src={heroBurger}
                    alt="A gourmet cheeseburger with fresh toppings"
                    fetchpriority="high"
                    width="420"
                    height="420"
                  />
                </figure>
                <figure className="hero-img hero-img--sm hero-img--bottom">
                  <img
                    src={heroThai}
                    alt="A vibrant plate of authentic Thai cuisine"
                    fetchpriority="high"
                    width="420"
                    height="420"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="section about" aria-labelledby="about-title">
        <div className="container">
          <Reveal className="section-head text-center mx-auto">
            <p className="eyebrow">About Punta Roj 39</p>
            <h2 id="about-title" className="section-title text-balance">
              Three Culinary Worlds. One Destination.
            </h2>
            <p className="section-lead text-pretty">
              Born in the heart of Kabankalan, Punta Roj 39 brings together the craft of specialty
              coffee, the comfort of gourmet burgers, and the soul of Thai cooking — all under one
              warm, light-filled roof.
            </p>
          </Reveal>

          <div className="row g-4 mt-2">
            {categories.map((cat) => (
              <div className="col-md-4" key={cat.title}>
                <Reveal tag="article" className="feature-card h-100">
                  <span className="feature-icon" aria-hidden="true">
                    <Icon name={cat.icon} />
                  </span>
                  <h3 className="feature-title">{cat.title}</h3>
                  <p className="feature-text text-pretty">{cat.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DISHES ──────────────────────────────────────── */}
      <section className="section featured" aria-labelledby="featured-title">
        <div className="container">
          <Reveal className="section-head section-head--split">
            <div>
              <p className="eyebrow">From the Kitchen</p>
              <h2 id="featured-title" className="section-title text-balance">
                Featured Dishes
              </h2>
            </div>
            <Link className="link-arrow" to="/menu">
              See full menu <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>

          <div className="row g-4">
            {featured.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.name}>
                <Reveal>
                  <DishCard item={item} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cta-inner">
            <p className="eyebrow eyebrow--light">Kape Al Vista</p>
            <h2 id="cta-title" className="cta-title text-balance">
              Good coffee, great food, and a view worth lingering for.
            </h2>
            <p className="cta-text text-pretty">
              Drop by for your morning cup or stay for a slow evening meal.
              There&apos;s always a seat for you at Punta Roj 39.
            </p>
            <div className="hero-actions justify-content-center">
              <Link className="btn btn-light-brand" to="/menu">
                Explore the Menu
              </Link>
              <Link className="btn btn-ghost-light" to="/contact">
                Get Directions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LOCATION PREVIEW ─────────────────────────────────────── */}
      <section className="section location" aria-labelledby="location-title">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <p className="eyebrow">Find Us</p>
              <h2 id="location-title" className="section-title text-balance">
                Right here in Kabankalan
              </h2>
              <p className="section-lead text-pretty">
                Tucked into Negros Occidental&apos;s sugarlandia, our doors are open daily for
                coffee, comfort food and conversation.
              </p>
              <ul className="location-list">
                <li>
                  <span className="location-label">Address</span>
                  <span>
                    {addr.street}, {addr.city}, {addr.region}
                  </span>
                </li>
                <li>
                  <span className="location-label">Today</span>
                  <span>{site.hours[0].time}</span>
                </li>
                <li>
                  <span className="location-label">Phone</span>
                  <span>
                    <a href={`tel:${site.phone_href}`}>{site.phone}</a>
                  </span>
                </li>
              </ul>
              <Link className="btn btn-brand" to="/contact">
                Contact &amp; Hours
              </Link>
            </div>

            <div className="col-lg-7">
              <Reveal className="map-frame">
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
