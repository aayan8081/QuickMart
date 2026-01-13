import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/layout.css'
import './styles/sections.css'
import './styles/pages.css'
import { getCategories, getHighlights, getProducts } from './services/api'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ErrorBanner from './components/ErrorBanner'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { createOrder } from './services/api'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [cartItems, setCartItems] = useState([])
  const [checkoutMessage, setCheckoutMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoryRes, contentRes] = await Promise.all([
          getProducts(),
          getCategories(),
          getHighlights(),
        ])

        setProducts(productRes)
        setCategories(categoryRes)
        setContent(contentRes)
      } catch (err) {
        console.error(err)
        setError(
          'Unable to load data. Please ensure the API server is running and accessible.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  )

  const handleAddToCart = (product) => {
    if (!product) return
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.slug === product.slug)
      if (existing) {
        return prev.map((item) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (slug, quantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemoveFromCart = (slug) => {
    setCartItems((prev) => prev.filter((item) => item.product.slug !== slug))
  }

  const handleCheckout = async (details) => {
    if (!cartItems.length) return

    const payload = {
      customerName: details.name,
      phone: details.phone,
      address: details.address,
      notes: details.notes,
      items: cartItems.map((item) => ({
        productId: item.product._id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        unit: item.product.unit,
      })),
      total: cartItems.reduce(
        (sum, item) => sum + Number(item.product.price ?? 0) * item.quantity,
        0
      ),
    }

    if (details.email) {
      payload.email = details.email
    }

    try {
      const response = await createOrder(payload)
      setCheckoutMessage(response.message || 'You have successfully purchased the product!')
      alert('You have successfully purchased the product!')
      setCartItems([])
    } catch (err) {
      console.error('Order placement failed', err)
      setCheckoutMessage('Unable to place order. Please try again.')
    }
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />

      {error ? <ErrorBanner message={error} /> : null}

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                categories={categories}
                products={products}
                content={content}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveFromCart}
                onCheckout={handleCheckout}
                checkoutMessage={checkoutMessage}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
