import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'

const ProductShowcase = ({ id, eyebrow, title, description, products = [] }) => {
  if (!products.length) return null

  return (
    <section id={id} className="section product-showcase">
      <div className="container">
        <div className="product-showcase__header">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />
          <Link className="button button--outline" to="/shop">
            View all
          </Link>
        </div>

        <div className="product-showcase__grid">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

