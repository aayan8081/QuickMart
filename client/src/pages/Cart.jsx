import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { toRupees } from '../utils/currency'

const Cart = ({ items = [], onUpdateQuantity, onRemoveItem, onCheckout, checkoutMessage }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  })

  const hasItems = items.length > 0

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + Number(item.product.price ?? 0) * item.quantity,
      0
    )
    const deliveryFee = subtotal > 0 ? 60 / 83 : 0 // charge ₹60 for delivery
    const grandTotal = subtotal + deliveryFee

    return {
      subtotal,
      deliveryFee,
      grandTotal,
    }
  }, [items])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!hasItems) return
    onCheckout?.(formState)
    setFormState({
      name: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
    })
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__content surface-card--soft">
          <div>
            <span className="badge">Cart</span>
            <h1>Your basket</h1>
            <p>
              Review the items in your cart, adjust quantities, and confirm the delivery details to
              place your order.
            </p>
            <Link className="button button--outline" to="/">
              Continue shopping
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cart-layout">
          <div className="cart-items surface-card">
            <h2>Items</h2>
            {!hasItems ? (
              <div className="empty-state">
                <h3>Your cart is empty</h3>
                <p>Add some farm-fresh produce to get started.</p>
              </div>
            ) : (
              <div className="cart-items__list">
                {items.map((item) => (
                  <div key={item.product.slug} className="cart-item">
                    <div className="cart-item__info">
                      <img src={item.product.image} alt={item.product.name} />
                      <div>
                        <strong>{item.product.name}</strong>
                        <span>{toRupees(item.product.price)}</span>
                      </div>
                    </div>
                    <div className="cart-item__actions">
                      <div className="cart-quantity">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity?.(item.product.slug, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity?.(item.product.slug, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <span className="cart-item__total">
                        {toRupees(Number(item.product.price ?? 0) * item.quantity)}
                      </span>
                      <button
                        className="cart-remove"
                        type="button"
                        onClick={() => onRemoveItem?.(item.product.slug)}
                        aria-label="Remove item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="cart-summary surface-card">
            <h2>Buy section</h2>
            <div className="cart-summary__totals">
              <div>
                <span>Subtotal</span>
                <strong>{toRupees(totals.subtotal)}</strong>
              </div>
              <div>
                <span>Delivery fee</span>
                <strong>{totals.deliveryFee ? toRupees(totals.deliveryFee) : 'Free'}</strong>
              </div>
              <div>
                <span>Payable</span>
                <strong>{toRupees(totals.grandTotal)}</strong>
              </div>
            </div>

            <form className="cart-form" onSubmit={handleSubmit}>
              <h3>Delivery details</h3>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile number"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email (optional)
                <input
                  type="email"
                  name="email"
                  placeholder="Email for updates"
                  value={formState.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Address
                <textarea
                  name="address"
                  placeholder="Flat / Street / Landmark"
                  value={formState.address}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </label>
              <label>
                Notes (optional)
                <textarea
                  name="notes"
                  placeholder="Delivery instructions"
                  value={formState.notes}
                  onChange={handleChange}
                  rows={2}
                />
              </label>
              <button className="button button--primary" type="submit" disabled={!hasItems}>
                Place order
              </button>
              {checkoutMessage ? <p className="cart-form__success">{checkoutMessage}</p> : null}
            </form>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Cart

