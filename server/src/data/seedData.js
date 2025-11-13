const categories = [
  {
    name: 'Vegetables',
    slug: 'vegetables',
    description: 'Fresh Indian sabzi staples from local mandis, cleaned and ready to cook.',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    name: 'Fruits',
    slug: 'fruits',
    description: 'Juicy seasonal fruits from Nashik, Himachal, and beyond for your fruit basket.',
    image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    name: 'Grains & Pulses',
    slug: 'grains',
    description: 'Premium rice, atta, dals, and millets sourced directly from farmer producer groups.',
    image: 'https://images.unsplash.com/photo-1589302143257-e31ef40b0f09?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    name: 'Snacks & Staples',
    slug: 'snacks',
    description: 'Tiffin-friendly namkeens, cold-pressed oils, masalas, and homemade pickles.',
    image: 'https://images.unsplash.com/photo-1626082927389-4bafcd35f251?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
];

const products = [
  {
    name: 'Organic Palak (Spinach)',
    slug: 'organic-palak',
    description:
      'Bright green palak leaves washed and ready for palak paneer, dal palak, or smoothies.',
    category: 'vegetables',
    price: 1.49,
    unit: '250 g',
  image: '/images/Organic Palak (Spinach).jpeg',
    tags: ['leafy', 'iron-rich'],
    organic: true,
    discountPercentage: 10,
    rating: 4.8,
    featured: true,
    bestSeller: true,
  },
  {
    name: 'Desi Kheera (Cucumber)',
    slug: 'desi-kheera',
    description:
      'Crisp cucumbers perfect for salads, raita, and refreshing detox water.',
    category: 'vegetables',
    price: 0.99,
    unit: '500 g',
  image: '/images/Desi Kheera (Cucumber).jpeg',
    tags: ['hydrating', 'salad'],
    organic: true,
    discountPercentage: 0,
    rating: 4.6,
    featured: false,
    bestSeller: false,
  },
  {
    name: 'Alphonso Mango Box',
    slug: 'alphonso-mango-box',
    description:
      'Handpicked Devgad Alphonso mangoes with naturally sweet pulp, perfect for aamras.',
    category: 'fruits',
    price: 8.99,
    unit: '1.5 kg',
  image: '/images/Alphonso Mango Box.jpeg',
    tags: ['summer', 'aamras'],
    organic: true,
    discountPercentage: 15,
    rating: 4.7,
    featured: true,
    bestSeller: true,
  },
  {
    name: 'Nagpur Oranges',
    slug: 'nagpur-oranges',
    description:
      'Sweet and tangy santra ideal for fresh juice or an afternoon snack.',
    category: 'fruits',
    price: 2.49,
    unit: '1 kg',
  image: '/images/Nagpur Oranges.jpeg',
    tags: ['vitamin-c', 'winter'],
    organic: false,
    discountPercentage: 0,
    rating: 4.5,
    featured: true,
    bestSeller: true,
  },
  {
    name: 'Kolam Rice',
    slug: 'kolam-rice',
    description:
      'Light, fluffy Kolam rice ideal for everyday meals and pulao. Low starch, easy to digest.',
    category: 'grains',
    price: 4.49,
    unit: '5 kg',
  image: '/images/Kolam Rice.jpeg',
    tags: ['staple', 'nonsticky'],
    organic: false,
    discountPercentage: 0,
    rating: 4.4,
    featured: true,
    bestSeller: true,
  },
  {
    name: 'Organic Toor Dal',
    slug: 'organic-toor-dal',
    description:
      'Sun-dried pigeon pea split dal sourced from Latur farmers, perfect for sambhar and varan.',
    category: 'grains',
    price: 3.99,
    unit: '1 kg',
  image: '/images/Organic Toor Dal.jpeg',
    tags: ['protein', 'comfort'],
    organic: true,
    discountPercentage: 12,
    rating: 4.6,
    featured: false,
    bestSeller: true,
  },
  {
    name: 'Masala Khakhra Pack',
    slug: 'masala-khakhra-pack',
    description:
      'Whole wheat Gujarati khakhra roasted with ghee and house masala for tea-time munching.',
    category: 'snacks',
    price: 2.49,
    unit: '6 pieces',
  image: '/images/Masala Khakhra Pack.jpeg',
    tags: ['namkeen', 'tea-time'],
    organic: false,
    discountPercentage: 5,
    rating: 4.8,
    featured: true,
    bestSeller: true,
  },
  {
    name: 'Spicy Peanut Chutney',
    slug: 'spicy-peanut-chutney',
    description:
      'Family recipe peanut chutney with garlic and red chilli tadka, perfect with idli or snacks.',
    category: 'snacks',
    price: 1.99,
    unit: '200 g',
  image: '/images/Spicy Peanut Chutney.jpeg',
    tags: ['condiment', 'homemade'],
    organic: false,
    discountPercentage: 0,
    rating: 4.5,
    featured: false,
    bestSeller: false,
  },
];

const heroSlides = [
  {
    heading: 'Farm-to-Home Goodness',
    subheading: 'Shop handpicked organic produce delivered within 2 hours.',
    ctaLabel: 'Shop Fresh Picks',
    ctaLink: '/shop',
    highlight: 'Up to 25% off on seasonal fruits',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
  },
  {
    heading: 'Sustainable Pantry Staples',
    subheading: 'Stock your pantry with wholesome grains, pulses, and snacks.',
    ctaLabel: 'Browse Pantry',
    ctaLink: '/shop?category=pantry-essentials',
    highlight: 'Starter bundles beginning at $19.99',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e',
  },
];

const testimonials = [
  {
    name: 'Ava Martinez',
    role: 'Fitness Coach',
    quote:
      'GreenCart keeps my meal prep effortless. The produce stays crisp for days and delivery is always on time.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
  },
  {
    name: 'Noah Patel',
    role: 'Restaurant Owner',
    quote:
      'Love that I can rely on locally sourced vegetables and dairy every morning. Quality and service are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
];

const faqs = [
  {
    question: 'Do you deliver on the same day?',
    answer:
      'Yes, place your order before 4 PM and we deliver within 2 hours in select zip codes. Next-day delivery is available across the city.',
  },
  {
    question: 'Are your products organic?',
    answer:
      'Over 80% of our catalog is certified organic. We clearly tag items and ensure transparent sourcing information.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'If something is not right, let us know within 24 hours. We will replace the item or issue store credit instantly.',
  },
];

const blogPosts = [
  {
    title: '5 Immune-Boosting Smoothies for Busy Mornings',
    slug: 'immune-boosting-smoothies',
    excerpt:
      'Blend your way to a stronger immune system with these simple, nutrient-packed smoothie recipes.',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37',
    readTime: '4 min read',
    publishedAt: '2025-08-01',
  },
  {
    title: 'Meal Prep Like a Pro with Fresh Seasonal Produce',
    slug: 'meal-prep-seasonal-produce',
    excerpt:
      'Discover how chefs plan weekly menus around seasonal ingredients to keep meals vibrant and balanced.',
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d',
    readTime: '6 min read',
    publishedAt: '2025-07-18',
  },
  {
    title: 'The Ultimate Guide to Sustainable Grocery Shopping',
    slug: 'sustainable-grocery-shopping-guide',
    excerpt:
      'Reduce food waste and embrace eco-friendly packaging with our curated checklist for mindful grocery runs.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    readTime: '5 min read',
    publishedAt: '2025-06-30',
  },
];

module.exports = {
  categories,
  products,
  heroSlides,
  testimonials,
  faqs,
  blogPosts,
};

