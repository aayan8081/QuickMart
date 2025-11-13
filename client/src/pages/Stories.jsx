import SectionHeading from '../components/SectionHeading'

const Stories = ({ posts = [] }) => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__content surface-card--soft">
          <div>
            <span className="badge">Kitchen Journal</span>
            <h1>Seasonal stories and chef-driven recipes</h1>
            <p>
              Discover how GreenCart chefs build menus around hyper-local produce and get inspired
              to transform your weekly meals.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Posts"
            title="Chef insights, sustainability notes, and zero-waste tips"
            description="Fresh articles land every Friday with nutrition-forward ideas and behind-the-scenes farm highlights."
            align="left"
          />

          <div className="blog-highlights__grid">
            {posts.length ? (
              posts.map((post) => (
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
              ))
            ) : (
              <div className="empty-state surface-card">
                <h3>No stories published yet</h3>
                <p>We are preparing fresh content—check back soon or subscribe for updates.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories

