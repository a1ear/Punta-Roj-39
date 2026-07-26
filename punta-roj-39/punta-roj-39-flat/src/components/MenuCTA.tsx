import { Link } from "react-router-dom"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export function MenuCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden bg-cafe-dark py-24 lg:py-32" id="menu-cta">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/thai-basil-chicken.jpg"
          alt="Authentic Thai basil chicken stir-fry with rice and fried egg"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-dark/95 via-cafe-dark/85 to-cafe-dark/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cafe-tan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cafe-tan/30 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div
            className={`max-w-xl text-center lg:text-left transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative line */}
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-12 bg-cafe-tan/60" />
              <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-cafe-tan uppercase">
                Our Menu
              </span>
              <span className="h-px w-12 bg-cafe-tan/60" />
            </div>

            <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Something Delicious
              <br />
              <span className="text-cafe-tan-light">Is Waiting</span>
            </h2>

            <p className="mb-8 text-base leading-relaxed text-white/60 sm:text-lg">
              Explore our full selection of burgers, Thai dishes, coffee and more.
              Every dish tells a story of quality, passion, and flavor.
            </p>

            <Link
              to="/menu"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-cafe-brown px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(107,66,38,0.4)] transition-all duration-300 hover:bg-cafe-brown-hover hover:shadow-[0_8px_36px_rgba(107,66,38,0.55)] hover:-translate-y-0.5"
            >
              View Full Menu
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
          </div>

          {/* Side Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-cafe-tan/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:h-[340px] sm:w-[340px]">
              <img
                src="/images/ayas-ultimate-burger.jpg"
                alt="Signature burger from Kape Al Vista"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/5" />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-cafe-tan/15" />
          </div>
        </div>
      </div>
    </section>
  )
}
