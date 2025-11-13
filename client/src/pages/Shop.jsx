import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

const Shop = ({ products = [], categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const featuredCategories = useMemo(
    () => (categories.length ? categories.slice(0, 3) : []),
    [categories]
  )

  const categoryFilters = useMemo(
    () => [{ name: 'All', slug: 'all' }, ...categories.map((cat) => ({ name: cat.name, slug: cat.slug }))],
    [categories]
  )

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory, products])

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__content surface-card--soft">
          <div>
            <span className="badge">Weekly Harvest</span>
            <h1>Browse fresh produce and pantry staples</h1>
            <p>
              Shop curated collections from local farms, discover seasonal specials, and stock your
              kitchen with chef-approved ingredients.
            </p>
          </div>
          <div className="page-hero__stats">
            <div>
              <strong>{products.length}</strong>
              <span>Products available today</span>
            </div>
            <div>
              <strong>{categories.length}</strong>
              <span>Distinct categories</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Plastic-free packaging</span>
            </div>
          </div>
        </div>
      </section>

      {featuredCategories.length ? (
        <section className="section section--tighter">
          <div className="container">
            <SectionHeading
              eyebrow="Discover"
              title="Featured collections handpicked for you"
              description="Tap into limited-run harvest boxes and seasonal assortments refreshed every Thursday."
            />

            <div className="page-featured-categories">
              {featuredCategories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--left">
            <span className="section-heading__eyebrow">Filter</span>
            <h2 className="section-heading__title">Shop by category</h2>
            <p className="section-heading__description">
              Quickly toggle between categories to find the perfect ingredients for your next meal.
            </p>
          </div>

          <div className="filter-chips">
            {categoryFilters.map((category) => (
              <button
                key={category.slug}
                className={`filter-chip${activeCategory === category.slug ? ' filter-chip--active' : ''}`}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.length ? (
              filteredProducts.map((product) => <ProductCard key={product.slug} product={product} />)
            ) : (
              <div className="empty-state surface-card">
                <h3>No items found in this category</h3>
                <p>Try exploring another aisle or reset your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop

