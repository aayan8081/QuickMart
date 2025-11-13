import SectionHeading from '../components/SectionHeading'
import CategoryCard from '../components/CategoryCard'

const CategoryShowcase = ({ categories = [] }) => {
  if (!categories.length) return null

  return (
    <section id="categories" className="section category-showcase">
      <div className="container">
        <SectionHeading
          eyebrow="Shop By Need"
          title="Explore categories curated for every meal"
          description="Everything from sun-ripe fruits to pantry staples and chef-designed bundles for your weekly meal prep."
        />

        <div className="category-showcase__grid">
          {categories.slice(0, 4).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryShowcase

