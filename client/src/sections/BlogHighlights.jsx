import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const BlogHighlights = ({ posts = [] }) => {
  if (!posts.length) return null

  return (
    <section id="stories" className="section blog-highlights">
      <div className="container">
        <div className="blog-highlights__header">
          <SectionHeading
            eyebrow="Kitchen Stories"
            title="Fresh inspiration from the GreenCart journal"
            description="Seasonal recipes, zero-waste hacks, and sustainability spotlights updated each week."
            align="left"
          />
          <Link className="button button--outline" to="/stories">
            Explore journal
          </Link>
        </div>

        <div className="blog-highlights__grid">
          {posts.slice(0, 3).map((post) => (
            <article key={post.slug} className="blog-card surface-card">
              <div className="blog-card__image">
                <img src={post.image} alt={post.title} />
                <span className="blog-card__meta">{post.readTime}</span>
              </div>
              <div className="blog-card__body">
                <span className="blog-card__date">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <button className="blog-card__cta" type="button">
                  Read story →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogHighlights

