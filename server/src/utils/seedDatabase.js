const Category = require('../models/Category');
const Product = require('../models/Product');
const { categories, products } = require('../data/seedData');

const seedDatabase = async () => {
  await Category.deleteMany({});
  await Category.insertMany(categories);
  console.log(`Seeded ${categories.length} categories`);

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);
};

module.exports = seedDatabase;

