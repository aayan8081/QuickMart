import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FiShoppingBag, FiPhone, FiMenu, FiX, FiSearch, FiShoppingCart } from 'react-icons/fi'

const Header = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinkClass = ({ isActive }) => `site-nav__link${isActive ? ' active' : ''}`

  const handleProductsClick = () => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      const section = document.getElementById('products')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.hash = '#products'
      }
    } else {
      navigate('/', { state: { scrollTo: 'products' } })
    }
  }

  return (
    <header className="site-header">
      <div className="site-header__topbar">
        <div className="container site-header__topbar-content">
          <span className="site-header__tagline">
            <strong>Free same-day delivery</strong> on orders above ₹999
          </span>
          <div className="site-header__contact">
            <FiPhone />
            <span>+1 (800) 555-0123</span>
          </div>
        </div>
      </div>

      <div className="container site-header__main">
        <div className="site-header__branding">
          <Link to="/" className="site-logo">
            <span className="site-logo__icon">
              <FiShoppingBag />
            </span>
            <span className="site-logo__text">
              QuickMart<span className="site-logo__dot">.</span>
            </span>
          </Link>
        </div>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <NavLink to="/" end className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <button
            type="button"
            className="site-nav__link site-nav__link--button"
            onClick={handleProductsClick}
          >
            Products
          </button>
          <NavLink to="/cart" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            <span className="site-nav__cart">
              <FiShoppingCart />
              Cart{cartCount ? ` (${cartCount})` : ''}
            </span>
          </NavLink>
        </nav>

        <div className="site-header__actions">
          <div className={`site-search ${searchOpen ? 'site-search--expanded' : ''}`}>
            <FiSearch
              className="site-search__icon"
              onClick={() => setSearchOpen((prev) => !prev)}
            />
            <input
              type="search"
              placeholder="Search groceries..."
              className="site-search__input"
            />
          </div>

          <Link
            className="button button--primary site-header__cta"
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            View Cart
          </Link>

          <button
            className="site-header__menu-toggle"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

