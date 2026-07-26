import { Link } from "react-router-dom"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const foods = [
  {
    category: "Burger",
    name: "Signature Classic Burger",
    description:
      "A juicy handcrafted beef patty with fresh lettuce, tomato, onions, and our house sauce.",
    price: "₱189",
    image: "/images/classic-cheeseburger.jpg",
    badgeColor: "text-[#8C6239] bg-[#8C6239]/10 border-[#8C6239]/20",
  },
  {
    category: "Thai Cuisine",
    name: "Signature Pad Thai",
    description:
      "Stir-fried rice noodles with shrimp, tofu, egg, bean sprouts, and our special Pad Thai sauce.",
    price: "₱219",
    image: "/images/pad-thai.jpg",
    badgeColor: "text-[#5C7050] bg-[#5C7050]/10 border-[#5C7050]/20",
  },
  {
    category: "Coffee",
    name: "Signature Latte",
    description:
      "Smooth espresso balanced with creamy steamed milk for the perfect cup.",
    price: "₱149",
    image: "/images/spanish-latte.jpg",
    badgeColor: "text-[#B89456] bg-[#B89456]/10 border-[#B89456]/20",
  },
]

export function PopularFoods() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="popular" className="relative bg-cafe-cream py-24 lg:py-32">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cafe-tan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cafe-brown/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 flex flex-col items-center text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-3 text-xs font-semibold tracking-[0.3em] text-cafe-brown uppercase block">
            Popular Foods
          </span>
          <h2 className="font-heading text-4xl font-bold text-cafe-dark sm:text-5xl relative inline-block">
            Our Best Sellers
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-cafe-tan" />
          </h2>
        </div>

        {/* 3-Card Static Grid (Modern Editorial Design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {foods.map((food, index) => (
            <div
              key={food.name}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-cafe-warm-white border border-cafe-border/30 shadow-[0_4px_30px_rgba(59,35,20,0.02)] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(59,35,20,0.06)] hover:-translate-y-1.5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${150 * index}ms` : "0ms" }}
            >
              {/* Image Container with Custom Zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-charcoal/20 to-transparent" />
                
                {/* Category Badge - Modern pill style */}
                <span
                  className={`absolute top-4 left-4 rounded-full border px-3.5 py-1 text-[0.65rem] font-bold tracking-wider uppercase backdrop-blur-sm ${food.badgeColor}`}
                >
                  {food.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <h3 className="mb-2.5 font-heading text-xl font-bold text-cafe-dark transition-colors duration-300 group-hover:text-cafe-brown">
                  {food.name}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-cafe-muted">
                  {food.description}
                </p>
                
                {/* Footer Section */}
                <div className="mt-auto flex items-center justify-between border-t border-cafe-border/30 pt-5">
                  <div>
                    <span className="text-[10px] text-cafe-muted uppercase tracking-wider block mb-0.5">Price</span>
                    <span className="font-heading text-2xl font-bold text-cafe-dark">
                      {food.price}
                    </span>
                  </div>
                  
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 rounded-lg bg-cafe-brown/5 group-hover:bg-cafe-brown text-cafe-brown group-hover:text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
                  >
                    View Menu
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
