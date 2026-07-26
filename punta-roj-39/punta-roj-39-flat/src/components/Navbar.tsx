import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { site } from "@/data/site"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Scroll to hash elements if needed
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    // If it's a section on the same page
    if (href.startsWith("#") && location.pathname === "/") {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cafe-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(59,35,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={() => handleLinkClick("#home")} className="group flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
              scrolled ? "border-cafe-brown" : "border-white/60"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={scrolled ? "#6B4226" : "#FFFCF7"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
          </div>
          <div>
            <span
              className={`font-heading text-xl font-bold tracking-tight transition-colors duration-300 uppercase ${
                scrolled ? "text-cafe-dark" : "text-white"
              }`}
            >
              {site.name}
            </span>
            <p
              className={`-mt-1 text-[0.6rem] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? "text-cafe-muted" : "text-white/70"
              }`}
            >
              {site.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("#home")}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-cafe-brown ${
                scrolled
                  ? "text-cafe-charcoal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={() => handleLinkClick("#about")}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-cafe-brown ${
                scrolled
                  ? "text-cafe-charcoal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-cafe-brown ${
                scrolled
                  ? "text-cafe-charcoal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-cafe-brown ${
                scrolled
                  ? "text-cafe-charcoal"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/menu"
          className={`hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
            scrolled
              ? "bg-cafe-brown text-white hover:bg-cafe-brown-hover shadow-[0_2px_12px_rgba(107,66,38,0.25)] hover:shadow-[0_4px_20px_rgba(107,66,38,0.35)]"
              : "bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25"
          }`}
        >
          View Menu
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
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            scrolled
              ? "text-cafe-dark hover:bg-cafe-cream-alt"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-cafe-dark" : "bg-white"
              } ${mobileOpen ? "top-[9px] rotate-45" : "top-[3px]"}`}
            />
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-cafe-dark" : "bg-white"
              } ${mobileOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-[2px] w-5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-cafe-dark" : "bg-white"
              } ${mobileOpen ? "top-[9px] -rotate-45" : "top-[15px]"}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-cafe-cream transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <Link
            to="/"
            onClick={() => handleLinkClick("#home")}
            className="font-heading text-3xl font-semibold text-cafe-dark transition-colors hover:text-cafe-brown animate-fade-in"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
            }}
          >
            Home
          </Link>
          <Link
            to="/#about"
            onClick={() => handleLinkClick("#about")}
            className="font-heading text-3xl font-semibold text-cafe-dark transition-colors hover:text-cafe-brown animate-fade-in"
            style={{
              transitionDelay: "80ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
            }}
          >
            About Us
          </Link>
          <Link
            to="/menu"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-3xl font-semibold text-cafe-dark transition-colors hover:text-cafe-brown animate-fade-in"
            style={{
              transitionDelay: "160ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
            }}
          >
            Menu
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-3xl font-semibold text-cafe-dark transition-colors hover:text-cafe-brown animate-fade-in"
            style={{
              transitionDelay: "240ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
            }}
          >
            Contact
          </Link>
          <Link
            to="/menu"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cafe-brown px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-cafe-brown-hover"
            style={{
              transitionDelay: "320ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, background 0.2s ease",
            }}
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
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
