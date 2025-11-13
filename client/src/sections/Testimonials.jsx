import SectionHeading from '../components/SectionHeading'

const Testimonials = ({ testimonials = [] }) => {
  if (!testimonials.length) return null

  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Loved Locally"
          title="What our community is saying"
          description="Chefs, nutritionists, and busy families rave about ultra-fresh produce and zero-waste delivery."
        />

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card surface-card">
              <div className="testimonial-card__profile">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p>“{testimonial.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

