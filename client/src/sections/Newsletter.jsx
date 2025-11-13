import NewsletterForm from '../components/NewsletterForm'

const Newsletter = () => (
  <section className="section newsletter">
    <div className="container newsletter__card surface-card--soft">
      <div className="newsletter__content">
        <span className="badge">Stay in the loop</span>
        <h3>Get harvest updates, chef recipes, and exclusive bundles each week.</h3>
        <p>
          Join thousands of food lovers receiving seasonal tips, zero-waste inspiration, and first
          dibs on limited-edition farm boxes.
        </p>
      </div>
      <NewsletterForm />
    </div>
  </section>
)

export default Newsletter

