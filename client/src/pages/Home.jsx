import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'

const Home = ({ products, content, onAddToCart }) => {
  const heroSlide = content?.heroSlides?.[0]
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.scrollTo === 'products') {
      const section = document.getElementById('products')
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  return (
    <div className="layout home-simple">
      <section className="home-hero section">
        <div className="container">
          <div className="home-hero__body surface-card--soft">
            <div className="home-hero__copy">
              <span className="badge">Fresh from farms</span>
              <h1>{heroSlide?.heading || 'Farm-to-home goodness, now in minutes'}</h1>
              <p>
                {heroSlide?.subheading ||
                  'Browse the full range of sabzi, fruits, grains, and snacks. Tap add to cart and schedule delivery at checkout.'}
              </p>
              <div className="hero__cta-group">
                <a className="button button--primary" href="#products">
                  Start shopping
                </a>
                <Link className="button button--outline" to="/cart">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container">
          <SectionHeading
            eyebrow="All products"
            title="Add to cart & checkout"
            description="Tap add on any item to fill your basket. Totals update inside the cart page."
            align="left"
          />
          <div className="home-product-grid home-product-grid--full">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} onAdd={onAddToCart} />
            ))}
          </div>
          <div className="home-cta-footer">
            <Link className="button button--primary" to="/cart">
              Go to cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

