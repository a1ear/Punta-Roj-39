/**
 * Menu data — items, categories, and helpers.
 *
 * Used by MenuPage for the full menu and PopularFoods for best sellers.
 * Prices in Philippine peso (₱).
 */

export interface MenuItem {
  name: string
  category: string
  subcategory: string
  description: string
  price: string
  image: string
}

export const menuCategories = ["Burgers", "Coffee", "Thai Cuisine"]

export const menuItems: MenuItem[] = [
  // ── Burgers ───────────────────────────────────────────────
  {
    name: "Classic Cheeseburger",
    category: "Burgers",
    subcategory: "",
    description: "Beef patty, tomatoes, lettuce, caramelized onions, cheese, special sauce.",
    price: "₱125",
    image: "/images/classic-cheeseburger.jpg",
  },
  {
    name: "Bacon Cheeseburger",
    category: "Burgers",
    subcategory: "",
    description: "Beef patty, bacon, tomatoes, lettuce, caramelized onions, cheese, special sauce.",
    price: "₱155",
    image: "",
  },
  {
    name: "Double Cheeseburger",
    category: "Burgers",
    subcategory: "",
    description: "Double beef patty, tomatoes, lettuce, caramelized onions, cheese, special sauce.",
    price: "₱200",
    image: "",
  },
  {
    name: "Bacon Double Cheeseburger",
    category: "Burgers",
    subcategory: "",
    description: "Double beef patty, bacon, tomatoes, lettuce, caramelized onions, cheese, special sauce.",
    price: "₱230",
    image: "",
  },
  {
    name: "Aya's Ultimate Burger",
    category: "Burgers",
    subcategory: "",
    description: "Triple beef patty, triple cheddar cheese, tomatoes, lettuce, caramelized onions, special sauce.",
    price: "₱290",
    image: "/images/ayas-ultimate-burger.jpg",
  },
  {
    name: "Aloha Cheeseburger",
    category: "Burgers",
    subcategory: "",
    description: "Beef patty, pineapple, tomatoes, lettuce, caramelized onions, cheese, special sauce.",
    price: "₱145",
    image: "",
  },

  // ── Coffee ────────────────────────────────────────────────
  {
    name: "Cafe Latte",
    category: "Coffee",
    subcategory: "Hot Coffee",
    description: "Smooth espresso layered with steamed milk and a soft crema.",
    price: "₱65",
    image: "",
  },
  {
    name: "Cappuccino",
    category: "Coffee",
    subcategory: "Hot Coffee",
    description: "Equal parts espresso, steamed milk and velvety foam.",
    price: "₱65",
    image: "",
  },
  {
    name: "Long Black",
    category: "Coffee",
    subcategory: "Hot Coffee",
    description: "Double shot poured over hot water for a bold, clean cup.",
    price: "₱50",
    image: "",
  },
  {
    name: "Americano",
    category: "Coffee",
    subcategory: "Hot Coffee",
    description: "Espresso lengthened with hot water — light and aromatic.",
    price: "₱50",
    image: "",
  },
  {
    name: "Spanish Latte",
    category: "Coffee",
    subcategory: "Iced Coffee",
    description: "Sweetened condensed milk and espresso over ice.",
    price: "₱120",
    image: "/images/spanish-latte.jpg",
  },
  {
    name: "Mocha Latte",
    category: "Coffee",
    subcategory: "Iced Coffee",
    description: "Rich chocolate and espresso balanced with cold milk.",
    price: "₱130",
    image: "",
  },
  {
    name: "Caramel Macchiato",
    category: "Coffee",
    subcategory: "Iced Coffee",
    description: "Vanilla, milk and espresso finished with caramel drizzle.",
    price: "₱130",
    image: "",
  },
  {
    name: "Caramel Matcha",
    category: "Coffee",
    subcategory: "Non-Coffee",
    description: "Stone-ground matcha with caramel and chilled milk.",
    price: "₱130",
    image: "",
  },
  {
    name: "Matcha Latte",
    category: "Coffee",
    subcategory: "Non-Coffee",
    description: "Ceremonial-grade matcha whisked into creamy milk.",
    price: "₱130",
    image: "/images/matcha-latte.jpg",
  },
  {
    name: "Cha Yen",
    category: "Coffee",
    subcategory: "Non-Coffee",
    description: "Traditional Thai iced tea, sweet and fragrant.",
    price: "₱90",
    image: "",
  },
  {
    name: "Jasmine Green Tea",
    category: "Coffee",
    subcategory: "Non-Coffee",
    description: "Delicate jasmine-scented green tea served chilled.",
    price: "₱90",
    image: "",
  },
  {
    name: "Bottled Water",
    category: "Coffee",
    subcategory: "Non-Coffee",
    description: "Purified drinking water.",
    price: "₱20",
    image: "",
  },
  {
    name: "Soda",
    category: "Coffee",
    subcategory: "Non-Coffee",
    description: "Chilled soft drink.",
    price: "₱25",
    image: "",
  },

  // ── Thai Cuisine ──────────────────────────────────────────
  {
    name: "Pad Thai",
    category: "Thai Cuisine",
    subcategory: "Main Course",
    description: "Stir-fried rice noodles, egg, peanuts and tamarind sauce.",
    price: "₱160",
    image: "/images/pad-thai.jpg",
  },
  {
    name: "Thai Basil Chicken",
    category: "Thai Cuisine",
    subcategory: "Main Course",
    description: "Wok-tossed chicken with holy basil, chili and garlic.",
    price: "₱170",
    image: "/images/thai-basil-chicken.jpg",
  },
  {
    name: "Mango Sticky Rice",
    category: "Thai Cuisine",
    subcategory: "Desserts",
    description: "Sweet sticky rice cooked in coconut milk, served with fresh ripe sweet mango slices and sesame seeds.",
    price: "₱159",
    image: "/images/mango-sticky-rice.png",
  },
]

/** URL-safe slug from a category or subcategory name. */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

/** Group items within a category by their subcategory field. */
export function groupBySubcategory(
  items: MenuItem[],
  category: string,
): Record<string, MenuItem[]> {
  const filtered = items.filter((item) => item.category === category)
  const groups: Record<string, MenuItem[]> = {}
  for (const item of filtered) {
    const key = item.subcategory || ""
    if (!groups[key]) groups[key] = []
    groups[key].push(item)
  }
  return groups
}
