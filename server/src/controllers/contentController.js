const { heroSlides, testimonials, faqs, blogPosts } = require('../data/seedData');

exports.getHighlights = (_req, res) => {
  res.json({
    data: {
      heroSlides,
      testimonials,
      faqs,
      blogPosts,
    },
  });
};

