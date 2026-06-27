/**
 * Application router.
 * Maps PHP pages to React Router routes:
 *
 *   index.php   →  /
 *   menu.php    →  /menu
 *   gallery.php →  /gallery
 *   contact.php →  /contact
 */

import { createBrowserRouter } from 'react-router-dom'
import App     from './App.jsx'
import Home    from './pages/Home.jsx'
import Menu    from './pages/Menu.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,          element: <Home />     },
      { path: 'menu',         element: <Menu />     },
      { path: 'gallery',      element: <Gallery />  },
      { path: 'contact',      element: <Contact />  },
      { path: '*',            element: <NotFound /> },
    ],
  },
])

export default router
