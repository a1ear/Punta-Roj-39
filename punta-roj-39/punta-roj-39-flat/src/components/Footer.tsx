import { Link } from "react-router-dom"
import { site } from "@/data/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-cafe-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Area */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cafe-tan/40">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </div>
              <div>
                <span className="font-heading text-lg font-bold tracking-tight text-white uppercase">
                  {site.name}
                </span>
                <p className="-mt-0.5 text-[0.55rem] font-medium tracking-[0.2em] text-cafe-tan uppercase">
                  {site.tagline}
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              {site.description}
            </p>

            {/* Social Icons - Facebook only as specified */}
            <div className="flex items-center gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all duration-300 hover:bg-cafe-brown hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-cafe-tan uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-cafe-tan uppercase">
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Burgers
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Coffee
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Thai Cuisine
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-cafe-tan uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-cafe-tan/60"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-cafe-tan/60"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <a
                    href={`tel:${site.phone_href}`}
                    className="hover:underline"
                  >
                    {site.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-cafe-tan/60"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span>Mon – Sun: 10:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row lg:px-8">
          <p className="text-xs text-white/35">
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
            <span className="text-white/15">|</span>
            <a
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
