import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiTruck } from 'react-icons/fi'
import { toRupees } from '../utils/currency'

const Hero = ({ slides = [], bestSellers = [] }) => {
  const heroSlide = useMemo(() => slides[0] || null, [slides])
  const heroImage = heroSlide?.image

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__pill">
            <span className="eyebrow-icon">
              <FiClock />
            </span>
            Delivered in under 2 hours
          </div>

          <h1 className="hero__title">{heroSlide?.heading || 'Farm-fresh groceries at your door'}</h1>
          <p className="hero__description">
            {heroSlide?.subheading ||
              'Discover locally sourced produce, sustainable pantry staples, and chef-approved essentials curated for your kitchen.'}
          </p>

          <div className="hero__cta-group">
            <Link className="button button--primary" to="/shop">
              {heroSlide?.ctaLabel || 'Shop fresh picks'}
              <FiArrowRight />
            </Link>
            <Link className="button button--outline" to="/stories">
              Browse bundles
            </Link>
          </div>

          <div className="hero__stats">
            <div>
              <strong>2K+</strong>
              <span>Happy weekly shoppers</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Produce satisfaction score</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>Partner farms & makers</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-card surface-card--soft">
            {heroImage ? <img src={heroImage} alt={heroSlide?.heading} /> : null}
            <div className="hero__floating-card">
              <FiTruck />
              <div>
                <strong>Eco-delivery routes</strong>
                <span>100% electric fleet</span>
              </div>
            </div>
          </div>

          <div className="hero__best-sellers">
            <span className="pill">Trending now</span>
            <div className="hero__best-sellers-list">
              {bestSellers.slice(0, 3).map((item) => (
                <div key={item.slug} className="hero__best-seller">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <span>{toRupees(item.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

