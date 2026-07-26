import { useScrollReveal } from "@/hooks/useScrollReveal"
import { site } from "@/data/site"

/**
 * Contact page — /contact
 *
 * Dark page hero → info cards (address, phone, payment, social) →
 * opening hours + embedded Google Map.
 * Based on Contact.jsx reference, restyled with the café design system.
 */
export function ContactPage() {
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollReveal<HTMLDivElement>()
  const { ref: mapRef, isVisible: mapVisible } =
    useScrollReveal<HTMLDivElement>()

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
            Say Hello
          </p>
          <h1 className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Visit {site.name}
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Come for the coffee, stay for the view. We&apos;re in the heart of
            Kabankalan City and always happy to welcome you.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ────────────────────────────────────── */}
      <section className="bg-cafe-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Info Cards */}
          <div
            ref={cardsRef}
            className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Address */}
            <InfoCard
              isVisible={cardsVisible}
              delay={0}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cafe-brown"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="Address"
            >
              <address className="not-italic text-sm leading-relaxed text-cafe-muted">
                {site.address.street}
                <br />
                {site.address.city}
                <br />
                {site.address.region}
                <br />
                {site.address.country}
              </address>
            </InfoCard>

            {/* Phone */}
            <InfoCard
              isVisible={cardsVisible}
              delay={100}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cafe-brown"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
              title="Contact"
            >
              <p className="text-sm text-cafe-muted">
                <a
                  href={`tel:${site.phone_href}`}
                  className="transition-colors hover:text-cafe-brown"
                >
                  {site.phone}
                </a>
              </p>
            </InfoCard>

            {/* Payment */}
            <InfoCard
              isVisible={cardsVisible}
              delay={200}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cafe-brown"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              }
              title="Payment"
            >
              <p className="text-sm text-cafe-muted">
                <strong className="text-cafe-dark">GCash Accepted</strong>
                <br />
                <span className="text-xs opacity-75">
                  Fast, secure, and convenient cashless payments.
                </span>
              </p>
            </InfoCard>

            {/* Social */}
            <InfoCard
              isVisible={cardsVisible}
              delay={300}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-cafe-brown"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              }
              title="Follow Us"
            >
              <p className="text-sm text-cafe-muted">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cafe-brown"
                >
                  Facebook
                </a>
              </p>
            </InfoCard>
          </div>

          {/* ── HOURS + MAP ─────────────────────────────────────── */}
          <div
            ref={mapRef}
            className="grid grid-cols-1 gap-8 lg:grid-cols-5"
          >
            {/* Hours Card */}
            <div
              className={`flex flex-col rounded-2xl border border-cafe-border/40 bg-cafe-warm-white p-8 transition-all duration-700 lg:col-span-2 ${
                mapVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cafe-cream">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cafe-brown"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <h2 className="mb-2 font-heading text-xl font-semibold text-cafe-dark">
                Opening Hours
              </h2>
              <p className="mb-6 text-sm text-cafe-muted">
                Walk-ins welcome — no reservations needed. Come as you are.
              </p>

              <ul className="mb-6 space-y-3">
                {site.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-cafe-dark">
                      {h.days}
                    </span>
                    <span
                      className={
                        h.time === "Closed"
                          ? "text-red-500/70"
                          : "text-cafe-muted"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mb-6 text-xs text-cafe-muted">
                Hours may vary on public holidays. Follow us on{" "}
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cafe-brown hover:underline"
                >
                  Facebook
                </a>{" "}
                for the latest updates.
              </p>

              <a
                href={site.maps_direction}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-cafe-brown px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(107,66,38,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cafe-brown-hover hover:shadow-[0_6px_24px_rgba(107,66,38,0.35)]"
              >
                Get Directions
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Map */}
            <div
              className={`overflow-hidden rounded-2xl border border-cafe-border/40 transition-all duration-700 delay-200 lg:col-span-3 ${
                mapVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <iframe
                src={site.map_embed}
                title={`Map showing ${site.name} in ${site.address.city}`}
                className="h-full min-h-[400px] w-full border-0 lg:min-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Reusable Info Card ────────────────────────────────────── */

function InfoCard({
  isVisible,
  delay,
  icon,
  title,
  children,
}: {
  isVisible: boolean
  delay: number
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`rounded-2xl border border-cafe-border/40 bg-cafe-warm-white p-6 transition-all duration-700 hover:shadow-[0_8px_30px_rgba(59,35,20,0.08)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cafe-cream">
        {icon}
      </div>
      <h2 className="mb-2 font-heading text-lg font-semibold text-cafe-dark">
        {title}
      </h2>
      {children}
    </div>
  )
}
