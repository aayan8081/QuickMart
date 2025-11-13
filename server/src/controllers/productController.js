const Product = require('../models/Product');

const buildFilters = (query) => {
  const filters = {};

  if (query.category) {
    filters.category = query.category;
  }

  if (query.featured) {
    filters.featured = query.featured === 'true';
  }

  if (query.bestSeller) {
    filters.bestSeller = query.bestSeller === 'true';
  }

  if (query.search) {
    filters.$or = [
      { name: new RegExp(query.search, 'i') },
      { description: new RegExp(query.search, 'i') },
      { tags: { $in: [new RegExp(query.search, 'i')] } },
    ];
  }

  return filters;
};

exports.getProducts = async (req, res) => {
  try {
    const filters = buildFilters(req.query);

    const sortField = req.query.sortBy || 'createdAt';
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const products = await Product.find(filters)
      .sort({ [sortField]: sortDirection })
      .lean();

    res.json({ data: products });
  } catch (error) {
    console.error('getProducts error:', error);
    res.status(500).json({ message: 'Failed to fetch products.' });
  }
};

exports.getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).lean();

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.json({ data: product });
  } catch (error) {
    console.error('getProductBySlug error:', error);
    res.status(500).json({ message: 'Failed to fetch product.' });
  }
};

exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).limit(8).lean();
    res.json({ data: products });
  } catch (error) {
    console.error('getFeaturedProducts error:', error);
    res.status(500).json({ message: 'Failed to fetch featured products.' });
  }
};

