const express = require('express');
const {
  getProducts,
  getProductBySlug,
  getFeaturedProducts,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:slug', getProductBySlug);

module.exports = router;

