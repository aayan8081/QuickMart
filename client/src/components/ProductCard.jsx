import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'
import { useState } from 'react'
import { toRupees } from '../utils/currency'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=600&q=80'

const ProductCard = ({ product, onAdd }) => {
  if (!product) return null

  const [imageSrc, setImageSrc] = useState(product.image || FALLBACK_IMAGE)

  return (
    <article className="product-card surface-card">
      <div className="product-card__media">
        {product.discountPercentage ? (
          <span className="product-card__badge">-{product.discountPercentage}%</span>
        ) : null}
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
          onError={() => setImageSrc(FALLBACK_IMAGE)}
        />
        <button className="product-card__wishlist" type="button" aria-label="Save to wishlist">
          <FiHeart />
        </button>
      </div>

      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">{product.category?.replace(/-/g, ' ')}</span>
          <span className="product-card__rating">
            <FiStar />
            {Number(product.rating ?? 4.5).toFixed(1)}
          </span>
        </div>
        <h4 className="product-card__title">{product.name}</h4>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <div className="product-card__price">
            <span className="product-card__amount">{toRupees(product.price)}</span>
            <span className="product-card__unit">{product.unit}</span>
          </div>
          <button
            className="button button--ghost"
            type="button"
            onClick={() => onAdd?.(product)}
          >
            <FiShoppingCart />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard

