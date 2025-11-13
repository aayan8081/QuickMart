import SectionHeading from '../components/SectionHeading'
import Newsletter from '../sections/Newsletter'

const FaqPage = ({ faqs = [] }) => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__content surface-card--soft">
          <div>
            <span className="badge">Help Center</span>
            <h1>Answers for smooth grocery runs</h1>
            <p>
              From delivery slots to sourcing standards, we have covered everything the GreenCart
              community asks most frequently.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Still curious? Reach out to hello@greencart.com or call our concierge team at +1 (800) 555-0123."
            align="left"
          />

          <div className="faq__grid">
            {faqs.length ? (
              faqs.map((item) => (
                <article key={item.question} className="faq__item surface-card">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </article>
              ))
            ) : (
              <div className="empty-state surface-card">
                <h3>No questions yet</h3>
                <p>Our team is preparing helpful resources. Check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}

export default FaqPage

