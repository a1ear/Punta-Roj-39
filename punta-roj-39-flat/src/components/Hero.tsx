import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-landing.jpg"
          alt="Premium café dining experience with burgers, coffee, and Thai cuisine"
          className="h-full w-full object-cover"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2016]/85 via-[#3B2314]/60 to-[#2D2016]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2016]/50 via-transparent to-[#2D2016]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl pb-20 pt-32">
          {/* Eyebrow */}
          <p
            className={`mb-4 text-xs font-semibold tracking-[0.25em] text-cafe-tan uppercase transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Good Food. Great Coffee.
          </p>

          {/* Headline */}
          <h1
            className={`mb-6 font-heading text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl transition-all duration-700 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Burgers, Coffee
            <br />
            <span className="text-cafe-tan-light">&amp; Thai Cuisine</span>
          </h1>

          {/* Description */}
          <p
            className={`mb-10 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A perfect blend of bold flavors, quality ingredients,
            and warm hospitality. Every dish is crafted with care,
            every cup brewed with precision.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-[450ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-cafe-brown px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(107,66,38,0.4)] transition-all duration-300 hover:bg-cafe-brown-hover hover:shadow-[0_6px_32px_rgba(107,66,38,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              View Menu
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 transition-all duration-700 delay-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[0.65rem] font-medium tracking-[0.2em] text-white/50 uppercase">
          Scroll Down
        </span>
        <div className="animate-scroll-bounce flex h-8 w-5 items-start justify-center rounded-full border border-white/30 pt-1.5">
          <div className="h-1.5 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}
