import { FiAward, FiFeather, FiShield, FiZap } from 'react-icons/fi'

const features = [
  {
    icon: FiFeather,
    title: 'Zero-mile freshness',
    description: 'Produce travels from farm to door in under 12 hours for crisp flavor.',
  },
  {
    icon: FiShield,
    title: 'Transparent sourcing',
    description: 'Every item includes farm partner origin and growing practices.',
  },
  {
    icon: FiZap,
    title: 'Lightning delivery',
    description: 'Electric delivery fleet reaches you in 120 minutes flat, daily.',
  },
  {
    icon: FiAward,
    title: 'Chef-curated picks',
    description: 'Seasonal bundles designed with award-winning local chefs.',
  },
]

const FeatureGrid = () => (
  <section className="section section--tighter">
    <div className="container feature-grid">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card surface-card">
          <span className="feature-card__icon">
            <feature.icon />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  </section>
)

export default FeatureGrid

