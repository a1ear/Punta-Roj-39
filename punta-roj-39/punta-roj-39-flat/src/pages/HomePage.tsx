import { Hero } from "@/components/Hero"
import { PopularFoods } from "@/components/PopularFoods"
import { AboutUs } from "@/components/AboutUs"
import { MenuCTA } from "@/components/MenuCTA"

/**
 * Homepage — /
 *
 * Section order: Hero → Best Sellers → About Us → Menu CTA
 * Categories and inline Menu sections removed.
 */
export function HomePage() {
  return (
    <main>
      <Hero />
      <PopularFoods />
      <AboutUs />
      <MenuCTA />
    </main>
  )
}
