import SectionHeading from '../components/SectionHeading'

const FAQ = ({ faqs = [] }) => {
  if (!faqs.length) return null

  return (
    <section className="section faq">
      <div className="container">
        <SectionHeading
          eyebrow="Questions"
          title="Everything you need to know"
          description="We keep groceries simple—here are answers to the most common questions from the GreenCart community."
        />

        <div className="faq__grid">
          {faqs.map((item) => (
            <article key={item.question} className="faq__item surface-card">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

