import { useEffect, useLayoutEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import { CONTACT, NAV_LINKS, AOB_TAGLINE } from '../constants'
import { getAssetUrl } from '../utils/assets'
import './Layout.css'

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname, location.key])

  return null
}

function Layout() {
  const { insurance: insuranceNavigation, main: navigation } = NAV_LINKS
  const logoPath = getAssetUrl('tawc_logo.png')
  const location = useLocation()
  const insuranceActive = insuranceNavigation.some((item) => location.pathname === item.href)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <div className="app-shell">
      <ScrollToTop />
      <div className="header-stack">
        <div className="header-aob">
          <div className="aob-inner">
            <span className="aob-item">✉️ {CONTACT.email}</span>
            <span className="aob-item">📞 {CONTACT.phoneDisplay}</span>
            <span className="aob-tagline">{AOB_TAGLINE}</span>
          </div>
        </div>
        <header className="header">
          <NavLink to="/" className="brand-wrap">
          <img
            className="brand-logo"
            src={logoPath}
            alt="TAWC - Athletes Wellness Club"
          />
          </NavLink>
        <button
          type="button"
          className="header-mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          <span className="header-mobile-toggle-bar" />
          <span className="header-mobile-toggle-bar" />
          <span className="header-mobile-toggle-bar" />
        </button>
        {mobileMenuOpen && (
          <div
            className="header-nav-backdrop"
            aria-hidden
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        <nav className={`header-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item-dropdown ${insuranceActive ? 'is-active' : ''}`}>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `nav-dropdown-trigger ${isActive || insuranceActive ? 'active-link' : ''}`
                }
              >
                Wellness
              </NavLink>
              <ul className="nav-dropdown-menu">
                {insuranceNavigation.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            {navigation.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-cta">
          <NavLink
            to="/apply-now"
            className={({ isActive }) => `apply-now-button ${isActive ? 'active-link' : ''}`}
          >
            Join the Club
          </NavLink>
        </div>
      </header>
      </div>

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
