/**
 * App — root layout component.
 * Renders the shared Header and Footer around every page via <Outlet />.
 * Migrated from the require of partials/header.php and partials/footer.php
 * that appeared at the top/bottom of every PHP page.
 *
 * Also handles the scroll-to-top behaviour on route change.
 */

import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on every route change (mirrors fresh PHP page loads)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
