/**
 * Menu page — /menu
 * Migrated from menu.php
 *
 * Replaces Bootstrap pill tabs (data-bs-toggle="pill") with React state,
 * preserving identical HTML structure and CSS classes.
 */

import { useState } from 'react'
import PageMeta from '../components/PageMeta.jsx'
import MenuCard from '../components/MenuCard.jsx'
import Reveal from '../components/ScrollReveal.jsx'
import {
  menuItems,
  menuCategories,
  groupBySubcategory,
  slugify,
} from '../data/menu.js'

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuCategories[0])

  return (
    <main id="main">
      <PageMeta
        title="Menu — Punta Roj 39 | Coffee, Burgers & Thai Cuisine"
        description="Browse the Punta Roj 39 menu: specialty hot and iced coffee, non-coffee drinks, gourmet burgers, and authentic Thai dishes in Kabankalan City."
      />

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Offerings</p>
          <h1 className="page-title text-balance">The Menu</h1>
          <p className="page-lead text-pretty">
            Handcrafted coffee, gourmet burgers, and authentic Thai cooking —
            prepared fresh to order. Prices are in Philippine peso.
          </p>
        </div>
      </section>

      {/* ── MENU TABS + PANELS ────────────────────────────────────── */}
      <section className="section menu-section" aria-label="Menu by category">
        <div className="container">

          {/* Category tabs */}
          <ul
            className="nav menu-tabs justify-content-center"
            id="menuTabs"
            role="tablist"
          >
            {menuCategories.map((category) => {
              const id = slugify(category)
              const isActive = category === activeTab
              return (
                <li className="nav-item" role="presentation" key={category}>
                  <button
                    className={`menu-tab${isActive ? ' active' : ''}`}
                    id={`tab-${id}`}
                    type="button"
                    role="tab"
                    aria-controls={`panel-${id}`}
                    aria-selected={isActive}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Tab panels */}
          <div className="tab-content menu-panels" id="menuTabsContent">
            {menuCategories.map((category) => {
              const id = slugify(category)
              const isActive = category === activeTab
              const groups = groupBySubcategory(menuItems, category)
              const groupEntries = Object.entries(groups)

              return (
                <div
                  key={category}
                  className={`tab-pane fade${isActive ? ' show active' : ''}`}
                  id={`panel-${id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${id}`}
                  tabIndex="0"
                >
                  {groupEntries.length === 0 ? (
                    <p className="menu-empty">
                      New dishes are simmering. Check back soon.
                    </p>
                  ) : (
                    groupEntries.map(([sub, items]) => (
                      <div key={sub}>
                        {sub !== '' && (
                          <h2 className="menu-group-title">{sub}</h2>
                        )}
                        <div className="row g-4 mb-2">
                          {items.map((item) => (
                            <div
                              className="col-md-6 col-xl-4"
                              key={item.name}
                            >
                              <Reveal>
                                <MenuCard item={item} />
                              </Reveal>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )
            })}
          </div>

          <p className="menu-note text-center">
            Menu and prices may vary. Ask our team about seasonal specials and
            daily brews.
          </p>
        </div>
      </section>
    </main>
  )
}
