import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  if (!category) return null

  return (
    <article className="category-card surface-card">
      <div className="category-card__image-wrapper">
        <img src={category.image} alt={category.name} loading="lazy" />
      </div>
      <div className="category-card__body">
        <span className="badge">Popular</span>
        <h4>{category.name}</h4>
        <p>{category.description}</p>
        <Link className="category-card__cta" to={`/category/${category.slug}`}>
          Shop now
          <FiArrowUpRight />
        </Link>
      </div>
    </article>
  )
}

export default CategoryCard

