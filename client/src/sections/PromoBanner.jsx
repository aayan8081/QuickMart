import { FiGift, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const PromoBanner = ({ highlight }) => {
  if (!highlight) return null

  return (
    <section className="promo-banner">
      <div className="container promo-banner__content surface-card--soft">
        <div className="promo-banner__icon">
          <FiGift />
        </div>
        <div className="promo-banner__copy">
          <span className="badge">Limited time</span>
          <h3>{highlight}</h3>
          <p>
            Sustainable harvest bundles refreshed every week with chef recipes, zero plastic
            packaging, and community farm notes inside.
          </p>
        </div>
        <Link className="button button--primary" to="/shop">
          Build my basket
          <FiArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default PromoBanner

