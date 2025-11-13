import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button className="button button--primary" type="submit">
        <FiSend />
        Subscribe
      </button>
      {submitted ? <span className="newsletter-form__success">Thanks for joining!</span> : null}
    </form>
  )
}

export default NewsletterForm

