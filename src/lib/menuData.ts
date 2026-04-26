// Menu data for Gallegos Restaurant
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
  variants?: string[];
  isNew?: boolean;
  isPromo?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

export const categories: MenuCategory[] = [
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'sizzlers', name: 'Sizzlers', icon: '🔥' },
  { id: 'pasta', name: 'Pasta', icon: '🍝' },
  { id: 'wings', name: 'Wings', icon: '🍗' },
  { id: 'sides', name: 'Sides', icon: '🍟' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'chicken-fillet-burger',
    name: 'Chicken Fillet Burger Meal',
    description: 'Crispy chicken fillet burger served with golden fries and a refreshing drink.',
    price: '£7.99',
    category: 'burgers',
    image: '/images/chicken-burger.jpg',
    badge: 'Popular',
  },
  {
    id: 'chicken-tower-burger',
    name: 'Chicken Fillet Tower Burger',
    description: 'Stacked high with hashbrown, melted cheese, crispy fillet, fries and a drink.',
    price: '£9.99',
    category: 'burgers',
    image: '/images/tower-burger.jpg',
    badge: 'Best Seller',
  },
  {
    id: 'beef-smash-burger',
    name: 'Beef Smash Burger',
    description: 'Double smashed beef patties with melted cheese, special sauce, and brioche bun.',
    price: 'Coming Soon',
    category: 'burgers',
    image: '/images/smash-burger.jpg',
    isNew: true,
    badge: 'New',
  },
  {
    id: 'classic-burger',
    name: 'Classic Chicken Burger',
    description: 'Simple, delicious crispy chicken burger with fresh lettuce and mayo.',
    price: '£5.99',
    category: 'burgers',
    image: '/images/classic-burger.jpg',
  },
  {
    id: 'chicken-sizzler',
    name: 'Chicken Sizzler',
    description: 'Sizzling hot chicken served on a cast iron plate with peppers, onions, and rice.',
    price: '£12.99',
    category: 'sizzlers',
    image: '/images/chicken-sizzler.jpg',
    isPromo: true,
    badge: '40% Off',
  },
  {
    id: 'beef-sizzler',
    name: 'Beef Steak Sizzler',
    description: 'Premium beef steak sizzler with grilled vegetables, rice, and our signature sauce.',
    price: '£14.99',
    category: 'sizzlers',
    image: '/images/beef-sizzler.jpg',
    isPromo: true,
    badge: '40% Off',
  },
  {
    id: 'mix-sizzler',
    name: 'Mix Sizzler',
    description: 'The best of both worlds — chicken and beef steak on a sizzling hot plate.',
    price: '£13.99',
    category: 'sizzlers',
    image: '/images/mix-sizzler.jpg',
    isPromo: true,
    badge: '40% Off',
  },
  {
    id: 'chicken-pasta',
    name: 'Chicken Pasta',
    description: 'Creamy chicken pasta with herbs, garlic, and parmesan.',
    price: '£4.99',
    category: 'pasta',
    image: '/images/chicken-pasta.jpg',
    isPromo: true,
    badge: '£4.99 Deal',
  },
  {
    id: 'beef-pasta',
    name: 'Beef Pasta',
    description: 'Rich beef ragu pasta with slow-cooked beef in tomato sauce.',
    price: '£4.99',
    category: 'pasta',
    image: '/images/beef-pasta.jpg',
    isPromo: true,
    badge: '£4.99 Deal',
  },
  {
    id: 'arrabbiata-pasta',
    name: 'Arrabbiata Pasta',
    description: 'Spicy tomato pasta with chilli flakes and fresh basil.',
    price: '£4.99',
    category: 'pasta',
    image: '/images/arrabbiata-pasta.jpg',
    isPromo: true,
    badge: '£4.99 Deal',
  },
  {
    id: 'creamy-pasta',
    name: 'Creamy Pasta',
    description: 'Silky cream sauce pasta with garlic and herbs.',
    price: '£4.99',
    category: 'pasta',
    image: '/images/creamy-pasta.jpg',
    isPromo: true,
    badge: '£4.99 Deal',
  },
  {
    id: 'buffalo-chicken-pasta',
    name: 'Buffalo Chicken Pasta',
    description: 'Fiery buffalo chicken tossed with penne and creamy buffalo sauce.',
    price: '£4.99',
    category: 'pasta',
    image: '/images/buffalo-pasta.jpg',
    isPromo: true,
    badge: '£4.99 Deal',
  },
  {
    id: 'peri-peri-wings',
    name: '6 Peri Peri Buffalo Wings + Chips',
    description: 'Six crispy buffalo wings tossed in peri peri sauce, served with golden chips.',
    price: '£7.99',
    category: 'wings',
    image: '/images/wings.jpg',
    badge: 'Collection Only',
  },
  {
    id: 'fries',
    name: 'Golden Fries',
    description: 'Crispy golden fries seasoned to perfection.',
    price: '£2.49',
    category: 'sides',
    image: '/images/fries.jpg',
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: 'Fries loaded with cheese, jalapeños, and our special sauce.',
    price: '£4.99',
    category: 'sides',
    image: '/images/loaded-fries.jpg',
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: 'Fresh, creamy homemade coleslaw.',
    price: '£1.99',
    category: 'sides',
    image: '/images/coleslaw.jpg',
  },
  {
    id: 'soft-drink',
    name: 'Soft Drink',
    description: 'Choice of Coca-Cola, Fanta, Sprite, or Diet Coke.',
    price: '£1.99',
    category: 'drinks',
    image: '/images/soft-drink.jpg',
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    description: 'Thick, creamy milkshake — Chocolate, Vanilla, or Strawberry.',
    price: '£3.99',
    category: 'drinks',
    image: '/images/milkshake.jpg',
  },
  {
    id: 'water',
    name: 'Water',
    description: 'Still or sparkling water.',
    price: '£0.99',
    category: 'drinks',
    image: '/images/water.jpg',
  },
];

export const deals = [
  {
    id: 'sizzler-deal',
    title: '40% Off Any Sizzler',
    description: 'Show this post in store or mention when ordering by phone. Valid on Chicken, Beef Steak, or Mix Sizzler.',
    terms: 'Show Facebook post in store. Cannot be combined with other offers.',
    validUntil: '2026-06-30',
    image: '/images/sizzler-deal.jpg',
  },
  {
    id: 'pasta-deal',
    title: '£4.99 Any Pasta',
    description: 'Choose from six delicious pasta dishes, all at the incredible price of just £4.99.',
    terms: 'Available for dine-in, collection, and delivery.',
    validUntil: '2026-06-30',
    image: '/images/pasta-deal.jpg',
  },
  {
    id: 'burger-meal-deal',
    title: 'Chicken Fillet Burger Meal £7.99',
    description: 'Complete meal with chicken fillet burger, golden fries, and a refreshing drink.',
    terms: 'Available for dine-in and collection.',
    validUntil: '2026-06-30',
    image: '/images/burger-deal.jpg',
  },
  {
    id: 'wings-deal',
    title: '6 Wings + Chips £7.99',
    description: 'Peri peri buffalo wings with crispy chips. Collection only.',
    terms: 'Collection only. Cannot be combined with other offers.',
    validUntil: '2026-06-30',
    image: '/images/wings-deal.jpg',
  },
];
