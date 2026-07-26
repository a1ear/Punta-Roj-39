import { useState } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import {
  menuItems,
  menuCategories,
  groupBySubcategory,
  slugify,
} from "@/data/menu"
import type { MenuItem } from "@/data/menu"

/**
 * Full Menu page — /menu
 *
 * Dark page hero → category tabs → grouped menu cards.
 * Based on Menu.jsx reference, restyled with the café design system.
 */
export function MenuPage() {
  const [activeTab, setActiveTab] = useState(menuCategories[0])
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const groups = groupBySubcategory(menuItems, activeTab)
  const entries = Object.entries(groups)

  return (
    <main>
      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cafe-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cafe-charcoal/80 via-cafe-dark to-cafe-charcoal/60" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cafe-tan/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-cafe-tan uppercase">
            Our Offerings
          </p>
          <h1 className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            The Menu
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Handcrafted coffee, gourmet burgers, and authentic Thai cooking —
            prepared fresh to order. Prices are in Philippine peso.
          </p>
        </div>
      </section>

      {/* ── MENU CONTENT ───────────────────────────────────────── */}
      <section
        className="bg-cafe-cream py-16 lg:py-24"
        aria-label="Menu by category"
      >
        <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Tabs */}
          <div
            className={`mb-14 flex flex-wrap justify-center gap-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {menuCategories.map((category) => {
              const id = slugify(category)
              const isActive = category === activeTab
              return (
                <button
                  key={category}
                  id={`tab-${id}`}
                  onClick={() => setActiveTab(category)}
                  role="tab"
                  aria-selected={isActive}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-cafe-brown text-white shadow-[0_4px_16px_rgba(107,66,38,0.25)]"
                      : "border border-cafe-border bg-cafe-warm-white text-cafe-charcoal/70 hover:text-cafe-brown hover:border-cafe-tan/40"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Tab Panels */}
          <div
            role="tabpanel"
            aria-labelledby={`tab-${slugify(activeTab)}`}
          >
            {entries.length === 0 ? (
              <p className="py-12 text-center text-cafe-muted">
                New dishes are simmering. Check back soon.
              </p>
            ) : (
              entries.map(([sub, items]) => (
                <div key={sub} className="mb-12 last:mb-0">
                  {sub !== "" && (
                    <h2 className="mb-8 font-heading text-2xl font-semibold text-cafe-dark">
                      {sub}
                    </h2>
                  )}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                      <MenuCard
                        key={item.name}
                        item={item}
                        index={index}
                        isVisible={isVisible}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <p className="mt-16 text-center text-sm text-cafe-muted">
            Menu and prices may vary. Ask our team about seasonal specials and
            daily brews.
          </p>
        </div>
      </section>
    </main>
  )
}

/* ── Menu Card ─────────────────────────────────────────────── */

function MenuCard({
  item,
  index,
  isVisible,
}: {
  item: MenuItem
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-cafe-border/40 bg-cafe-warm-white shadow-[0_2px_16px_rgba(59,35,20,0.03)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(59,35,20,0.08)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms",
      }}
    >
      {/* Image / Placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-cafe-cream-alt/60 to-cafe-cream-alt/20">
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/15 via-transparent to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-cafe-muted/30">
            {item.category === "Burgers" ? (
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3 11h18M3 11c0-3.5 3-6 9-6s9 2.5 9 6M2 13c1-1 2-1 3 0s2 1 3 0 2-1 3 0 2 1 3 0 2-1 3 0 2 1 3 0M3 15h18M4 19h16" />
              </svg>
            ) : item.category === "Coffee" ? (
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M17 8h1a3 3 0 1 1 0 6h-1M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
            ) : (
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 10h20M4 10c0 5 3 9 8 9s8-4 8-9M8 4l2 4M16 4l-2 4" />
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1.5 font-heading text-lg font-bold text-cafe-dark transition-colors duration-300 group-hover:text-cafe-brown">
          {item.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-cafe-muted">
          {item.description}
        </p>
        <div className="mt-auto border-t border-cafe-border/40 pt-3">
          <span className="font-heading text-xl font-bold text-cafe-brown">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  )
}
