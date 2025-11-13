const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => (
  <div className={`section-heading${align === 'left' ? ' section-heading--left' : ''}`}>
    {eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}
    {title ? <h2 className="section-heading__title">{title}</h2> : null}
    {description ? (
      <p className="section-heading__description">{description}</p>
    ) : null}
  </div>
)

export default SectionHeading

