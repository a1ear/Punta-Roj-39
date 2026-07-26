import { useScrollReveal } from "@/hooks/useScrollReveal"

export function AboutUs() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative overflow-hidden bg-cafe-cream-alt py-24 lg:py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
      >
        {/* Left — Image */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(59,35,20,0.15)]">
            <img
              src="/images/cafe-interior.jpg"
              alt="Warm and inviting Roj Café interior with cozy seating and ambient lighting"
              className="h-[400px] w-full object-cover lg:h-[520px]"
            />
            {/* Decorative overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/20 via-transparent to-transparent" />
          </div>

          {/* Decorative floating accent */}
          <div className="absolute -top-4 -left-4 hidden h-20 w-20 rounded-xl border border-cafe-brown/15 lg:block" />
        </div>

        {/* Right — Content */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          }`}
        >
          {/* Eyebrow */}
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-cafe-brown uppercase">
            <span className="inline-block h-px w-8 bg-cafe-tan" />
            Our Story
          </p>

          {/* Heading */}
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-cafe-dark sm:text-4xl lg:text-5xl">
            Good Food. Great Coffee.
            <br />
            <span className="text-cafe-brown">Made With Passion.</span>
          </h2>

          {/* Description */}
          <div className="mb-8 space-y-4 text-base leading-relaxed text-cafe-charcoal/80">
            <p>
              We are a small café and restaurant that started with a simple
              idea — to serve food that makes people happy.
            </p>
            <p>
              From juicy burgers and comforting Thai dishes to expertly brewed
              coffee, everything we serve is made with fresh ingredients,
              honest flavors, and a whole lot of heart.
            </p>
            <p>
              Welcome to a place where good food brings people together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
