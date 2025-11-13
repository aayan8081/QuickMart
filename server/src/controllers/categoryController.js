const Category = require('../models/Category');

exports.getCategories = async (_req, res) => {
  try {
    const categories = await Category.find().sort({ featured: -1, name: 1 }).lean();
    res.json({ data: categories });
  } catch (error) {
    console.error('getCategories error:', error);
    res.status(500).json({ message: 'Failed to fetch categories.' });
  }
};

