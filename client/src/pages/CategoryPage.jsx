import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'

const CategoryPage = ({ products = [], categories = [] }) => {
  const { slug } = useParams()

  const category = useMemo(
    () => categories.find((item) => item.slug === slug),
    [categories, slug]
  )

  const categoryProducts = useMemo(
    () => products.filter((product) => product.category === slug),
    [products, slug]
  )

  if (!category) {
    return (
      <div className="page">
        <section className="page-hero">
          <div className="container empty-state surface-card">
            <h2>Category not found</h2>
            <p>The page you are looking for may have been moved or removed.</p>
            <Link className="button button--primary" to="/shop">
              Back to shop
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__content page-hero__content--split surface-card--soft">
          <div>
            <span className="badge">Category</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            <div className="hero__cta-group">
              <Link className="button button--primary" to="/shop">
                Browse all groceries
              </Link>
              <Link className="button button--outline" to="/stories">
                Get recipe inspiration
              </Link>
            </div>
          </div>

          {category.image ? (
            <div className="category-hero-image surface-card">
              <img src={category.image} alt={category.name} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Fresh Picks"
            title={`Shop ${category.name.toLowerCase()}`}
            description="Add your favorites to the basket and schedule delivery in under 3 minutes."
            align="left"
          />

          <div className="product-grid">
            {categoryProducts.length ? (
              categoryProducts.map((product) => <ProductCard key={product.slug} product={product} />)
            ) : (
              <div className="empty-state surface-card">
                <h3>Currently out of stock</h3>
                <p>
                  We are restocking this aisle. Meanwhile, explore other categories or follow our
                  newsletter for instant updates.
                </p>
                <Link className="button button--primary" to="/shop">
                  Explore shop
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryPage

