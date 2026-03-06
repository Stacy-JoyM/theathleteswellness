import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import { CONTACT, NAV_LINKS, AOB_TAGLINE } from '../constants'
import { getAssetUrl } from '../utils/assets'
import './Layout.css'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

function Layout() {
  const { insurance: insuranceNavigation, main: navigation } = NAV_LINKS
  const logoPath = getAssetUrl('tawc_logo.png')
  const location = useLocation()
  const insuranceActive = insuranceNavigation.some((item) => location.pathname === item.href)

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
        <nav className="header-nav">
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
            Apply Now
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
