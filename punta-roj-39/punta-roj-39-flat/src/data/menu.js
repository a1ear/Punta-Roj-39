/**
 * Central menu data source for Punta Roj 39.
 * Migrated from data/menu.php
 */

// ── Image imports ────────────────────────────────────────────────────────────
import heroCoffee from '../assets/images/hero-coffee.jpg'
import spanishLatte from '../assets/images/spanish-latte.jpg'
import matchaLatte from '../assets/images/matcha-latte.jpg'
import classicCheeseburger from '../assets/images/classic-cheeseburger.jpg'
import ayasUltimateBurger from '../assets/images/ayas-ultimate-burger.jpg'
import padThai from '../assets/images/pad-thai.jpg'
import greenCurry from '../assets/images/green-curry.jpg'
import thaBasilChicken from '../assets/images/thai-basil-chicken.jpg'

// Items whose images are not in the ZIP use null; the dish-card handles fallback.
export const menuItems = [

  // ── COFFEE ────────────────────────────────────────────────────────────────
  {
    name: 'Cafe Latte',
    category: 'Coffee',
    subcategory: 'Hot Coffee',
    price: '₱65',
    description: 'Smooth espresso layered with steamed milk and a soft crema.',
    image: null,
    featured: false,
  },
  {
    name: 'Cappuccino',
    category: 'Coffee',
    subcategory: 'Hot Coffee',
    price: '₱65',
    description: 'Equal parts espresso, steamed milk and velvety foam.',
    image: null,
    featured: false,
  },
  {
    name: 'Long Black',
    category: 'Coffee',
    subcategory: 'Hot Coffee',
    price: '₱50',
    description: 'Double shot poured over hot water for a bold, clean cup.',
    image: null,
    featured: false,
  },
  {
    name: 'Americano',
    category: 'Coffee',
    subcategory: 'Hot Coffee',
    price: '₱50',
    description: 'Espresso lengthened with hot water — light and aromatic.',
    image: null,
    featured: false,
  },
  {
    name: 'Spanish Latte',
    category: 'Coffee',
    subcategory: 'Iced Coffee',
    price: '₱120',
    description: 'Sweetened condensed milk and espresso over ice.',
    image: spanishLatte,
    featured: true,
  },
  {
    name: 'Mocha Latte',
    category: 'Coffee',
    subcategory: 'Iced Coffee',
    price: '₱130',
    description: 'Rich chocolate and espresso balanced with cold milk.',
    image: null,
    featured: false,
  },
  {
    name: 'Caramel Macchiato',
    category: 'Coffee',
    subcategory: 'Iced Coffee',
    price: '₱130',
    description: 'Vanilla, milk and espresso finished with caramel drizzle.',
    image: null,
    featured: false,
  },
  {
    name: 'Caramel Matcha',
    category: 'Coffee',
    subcategory: 'Non-Coffee',
    price: '₱130',
    description: 'Stone-ground matcha with caramel and chilled milk.',
    image: null,
    featured: false,
  },
  {
    name: 'Matcha Latte',
    category: 'Coffee',
    subcategory: 'Non-Coffee',
    price: '₱130',
    description: 'Ceremonial-grade matcha whisked into creamy milk.',
    image: matchaLatte,
    featured: true,
  },
  {
    name: 'Cha Yen',
    category: 'Coffee',
    subcategory: 'Non-Coffee',
    price: '₱90',
    description: 'Traditional Thai iced tea, sweet and fragrant.',
    image: null,
    featured: false,
  },
  {
    name: 'Jasmine Green Tea',
    category: 'Coffee',
    subcategory: 'Non-Coffee',
    price: '₱90',
    description: 'Delicate jasmine-scented green tea served chilled.',
    image: null,
    featured: false,
  },
  {
    name: 'Bottled Water',
    category: 'Coffee',
    subcategory: 'Non-Coffee',
    price: '₱20',
    description: 'Purified drinking water.',
    image: null,
    featured: false,
  },
  {
    name: 'Soda',
    category: 'Coffee',
    subcategory: 'Non-Coffee',
    price: '₱25',
    description: 'Chilled soft drink.',
    image: null,
    featured: false,
  },

  // ── BURGERS ───────────────────────────────────────────────────────────────
  {
    name: 'Classic Cheeseburger',
    category: 'Burgers',
    price: '₱125',
    description:
      'Beef patty, tomatoes, lettuce, caramelized onions, cheese, special sauce.',
    image: classicCheeseburger,
    featured: true,
  },
  {
    name: 'Bacon Cheeseburger',
    category: 'Burgers',
    price: '₱155',
    description:
      'Beef patty, bacon, tomatoes, lettuce, caramelized onions, cheese, special sauce.',
    image: null,
    featured: false,
  },
  {
    name: 'Double Cheeseburger',
    category: 'Burgers',
    price: '₱200',
    description:
      'Double beef patty, tomatoes, lettuce, caramelized onions, cheese, special sauce.',
    image: null,
    featured: false,
  },
  {
    name: 'Bacon Double Cheeseburger',
    category: 'Burgers',
    price: '₱230',
    description:
      'Double beef patty, bacon, tomatoes, lettuce, caramelized onions, cheese, special sauce.',
    image: null,
    featured: false,
  },
  {
    name: "Aya's Ultimate Burger",
    category: 'Burgers',
    price: '₱290',
    description:
      'Triple beef patty, triple cheddar cheese, tomatoes, lettuce, caramelized onions, special sauce.',
    image: ayasUltimateBurger,
    featured: true,
  },
  {
    name: 'Aloha Cheeseburger',
    category: 'Burgers',
    price: '₱145',
    description:
      'Beef patty, pineapple, tomatoes, lettuce, caramelized onions, cheese, special sauce.',
    image: null,
    featured: false,
  },

  // ── THAI CUISINE ──────────────────────────────────────────────────────────
  {
    name: 'Pad Thai',
    category: 'Thai Cuisine',
    price: '₱160',
    description: 'Stir-fried rice noodles, egg, peanuts and tamarind sauce.',
    image: padThai,
    featured: true,
  },
  {
    name: 'Green Curry',
    category: 'Thai Cuisine',
    price: '₱180',
    description: 'Aromatic coconut green curry with herbs and vegetables.',
    image: greenCurry,
    featured: false,
  },
  {
    name: 'Thai Basil Chicken',
    category: 'Thai Cuisine',
    price: '₱170',
    description: 'Wok-tossed chicken with holy basil, chili and garlic.',
    image: thaBasilChicken,
    featured: false,
  },
]

/** Category display order for the Menu page tabs. */
export const menuCategories = ['Coffee', 'Burgers', 'Thai Cuisine']

/** Return only featured items, optionally limited. */
export function getFeaturedItems(limit = 0) {
  const featured = menuItems.filter((i) => i.featured)
  return limit > 0 ? featured.slice(0, limit) : featured
}

/** Group items of a category by subcategory (preserving order). */
export function groupBySubcategory(items, category) {
  const groups = {}
  for (const item of items) {
    if (item.category !== category) continue
    const sub = item.subcategory || ''
    if (!groups[sub]) groups[sub] = []
    groups[sub].push(item)
  }
  return groups
}

/** Slug helper: "Thai Cuisine" → "thai-cuisine" */
export function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
