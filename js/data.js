// Default catalog data
const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Classic Navy Blue Crocs",
    category: "Crocs",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 5.0,
    reviewsCount: 124,
    images: ["assets/crocs_navy.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Experience premium comfort with these Classic Navy Blue Crocs. Perfect for college youth, students, and trend followers. Made from lightweight, water-friendly Croslite material. Featuring a pivoting heel strap for a secure fit.",
    inStock: true,
    isTrending: true,
    isBestSeller: true
  },
  {
    id: "prod-2",
    name: "Premium Minimalist White Slides",
    category: "Slides",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.9,
    reviewsCount: 88,
    images: ["assets/slides_white.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Nike-style premium minimalist white slides. Engineered with a contoured footbed for all-day cushioning. The bold, clean strap features a soft lining to prevent friction. Lightweight and water-resistant, making them ideal for everyday wear.",
    inStock: true,
    isTrending: true,
    isBestSeller: false
  },
  {
    id: "prod-3",
    name: "Authentic White Comfort Clogs",
    category: "Crocs",
    price: 1599,
    originalPrice: 2699,
    discount: 40,
    rating: 5.0,
    reviewsCount: 145,
    images: ["assets/crocs_white_real.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Premium white clogs directly from our store inventory. Highly breathable with ventilation ports, allowing you to customize your style with jibbitz charms. Made of high-grade flexible rubber that molds to your feet.",
    inStock: true,
    isTrending: false,
    isBestSeller: true
  },
  {
    id: "prod-4",
    name: "Retro Panda Dunk Sneakers",
    category: "Sneakers",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 5.0,
    reviewsCount: 210,
    images: ["assets/sneakers_blackwhite_real.png"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "The trending black & white sneaker style dominating street fashion. Crafted with synthetic leather panels, a heavily padded ankle collar, and a durable rubber cupsole for maximum traction. A perfect choice for college students and streetwear lovers.",
    inStock: true,
    isTrending: true,
    isBestSeller: true
  },
  {
    id: "prod-5",
    name: "Apple-Style Clean White Sneakers",
    category: "Sneakers",
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    rating: 4.8,
    reviewsCount: 76,
    images: ["assets/sneakers_white.png"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Aesthetic, clean white sneakers inspired by Apple-like cleanliness and Nike-like presentation. Constructed with breathable mesh and leather overlays for a sleek, contemporary silhouette. Features an elevated cushioning midsole.",
    inStock: true,
    isTrending: false,
    isBestSeller: false
  },
  {
    id: "prod-6",
    name: "Classic Black Comfort Slides",
    category: "Slides",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.7,
    reviewsCount: 92,
    images: ["assets/slides_black.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Classic black athletic slide sandals for multi-purpose comfort. Features a quick-dry mesh lining and textured traction pattern on the outsole to prevent slipping on wet surfaces.",
    inStock: true,
    isTrending: true,
    isBestSeller: false
  },
  {
    id: "prod-7",
    name: "Premium Adjustable Outdoor Sandals",
    category: "Sandals",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.9,
    reviewsCount: 63,
    images: ["assets/sandals_outdoor.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Heavy-duty outdoor sandals featuring triple-strap adjustments, a heavily cushioned EVA footbed, and a rugged rubber outsole. Tailored for comfort, durability, and secure walking.",
    inStock: true,
    isTrending: false,
    isBestSeller: false
  },
  {
    id: "prod-8",
    name: "AS Custom Jibbitz Pack (10 Pcs)",
    category: "Accessories",
    price: 299,
    originalPrice: 599,
    discount: 50,
    rating: 4.9,
    reviewsCount: 112,
    images: ["assets/jibbitz_pack.png"],
    sizes: ["One Size"],
    description: "Personalize your Crocs and clogs with this curated set of 10 trending lifestyle, gadget, and footwear charms. Waterproof and easy to plug in.",
    inStock: true,
    isTrending: false,
    isBestSeller: false
  },
  {
    id: "prod-9",
    name: "Olive Green Cushioned Slides",
    category: "Slides",
    price: 999,
    originalPrice: 1599,
    discount: 37,
    rating: 4.9,
    reviewsCount: 65,
    images: ["assets/slides_olive.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Premium olive green slides designed for ergonomic comfort. Engineered with double-cushioned footbeds, supportive side contours, and anti-slip water drainage ports. An absolute college fashion essential.",
    inStock: true,
    isTrending: true,
    isBestSeller: true
  },
  {
    id: "prod-10",
    name: "Retro Red Athletic Sneakers",
    category: "Sneakers",
    price: 2799,
    originalPrice: 4499,
    discount: 37,
    rating: 5.0,
    reviewsCount: 142,
    images: ["assets/sneakers_red.png"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Bold red and white retro style sports sneakers. Stitched leather overlays, heavily padded heel support, and vulcanized rubber treads for high durability and excellent everyday college streetwear aesthetics.",
    inStock: true,
    isTrending: true,
    isBestSeller: false
  },
  {
    id: "prod-11",
    name: "Premium Black Adventure Sandals",
    category: "Sandals",
    price: 1399,
    originalPrice: 2199,
    discount: 36,
    rating: 4.8,
    reviewsCount: 55,
    images: ["assets/sandals_black.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Durable black outdoor sandals built for travel and adventure. Feature quick-dry adjustable nylon straps, a highly shock-absorbing midsole, and deep-grooved mud-grip outsole patterns.",
    inStock: true,
    isTrending: false,
    isBestSeller: false
  },
  {
    id: "prod-12",
    name: "Sleek White Streetwear Sliders",
    category: "Slides",
    price: 849,
    originalPrice: 1399,
    discount: 39,
    rating: 4.9,
    reviewsCount: 95,
    images: ["assets/slides_white.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Classic clean white streetwear sliders featuring double density foam contours. Light, water-friendly, and perfect for active campus use or loungewear.",
    inStock: true,
    isTrending: false,
    isBestSeller: true
  },
  {
    id: "prod-13",
    name: "Triple Black Premium Crocs",
    category: "Crocs",
    price: 1599,
    originalPrice: 2699,
    discount: 40,
    rating: 5.0,
    reviewsCount: 94,
    images: ["assets/crocs_black.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Step into bold comfort with the Triple Black Premium Crocs. Designed with standard slip-resistant Croslite soles and customizable strap positions for all-day campus walking, work, or casual wear.",
    inStock: true,
    isTrending: true,
    isBestSeller: true
  },
  {
    id: "prod-14",
    name: "Charcoal Grey Comfort Slides",
    category: "Slides",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.8,
    reviewsCount: 43,
    images: ["assets/slides_grey.png"],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Ergonomic charcoal grey comfort slides featuring a soft double-density footbed and flexible padded strap. Excellent water drainage channels make it perfect for both outdoor and home wear.",
    inStock: true,
    isTrending: false,
    isBestSeller: false
  },
  {
    id: "prod-15",
    name: "Royal Blue Streetwear Sneakers",
    category: "Sneakers",
    price: 2899,
    originalPrice: 4799,
    discount: 40,
    rating: 5.0,
    reviewsCount: 81,
    images: ["assets/sneakers_blue.png"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Make a statement with these royal blue and white retro streetwear sneakers. Crafted with fine stitched leather overlays, heavily cushioned ankles, and deep tread vulcanized soles for maximum everyday style.",
    inStock: true,
    isTrending: true,
    isBestSeller: false
  },
  {
    id: "prod-16",
    name: "Cream White Runner Shoes",
    category: "Sneakers",
    price: 2699,
    originalPrice: 4299,
    discount: 37,
    rating: 4.9,
    reviewsCount: 52,
    images: ["assets/sneakers_cream.png"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Super lightweight, breathable cream-white runner shoes. Designed with an elastic mesh upper and shock-absorbing midsole, perfect for students, casual walking, and light sports.",
    inStock: true,
    isTrending: false,
    isBestSeller: true
  }
];

const DEFAULT_CATEGORIES = ["Crocs", "Slides", "Slippers", "Sandals", "Sneakers", "Accessories"];

const DEFAULT_BANNERS = [
  {
    id: "banner-1",
    title: "Curated by the Founder",
    subtitle: "Premium footwear handpicked for comfort and style by our founder.",
    cta: "Explore Collection",
    bgGradient: "linear-gradient(135deg, #111111 0%, #333333 100%)",
    textColor: "#ffffff",
    image: "assets/founder_real.png"
  },
  {
    id: "banner-2",
    title: "Jangareddygudem Store",
    subtitle: "Visit our physical retail outlet beside Old Bus Stand to explore our displays.",
    cta: "Get Directions",
    bgGradient: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
    textColor: "#111111",
    image: "assets/store_front_real.png"
  },
  {
    id: "banner-3",
    title: "Free Shipping Above ₹999",
    subtitle: "Browse custom styles and checkout directly via WhatsApp Business.",
    cta: "Order Now",
    bgGradient: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
    textColor: "#111111",
    image: "assets/crocs_white_real.png"
  }
];

const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    name: "Kiran Kumar",
    location: "Vijayawada",
    rating: 5,
    comment: "The WhatsApp ordering is mind-blowing! I selected my Panda Dunks and size, clicked order, and within minutes the owner confirmed my size and dispatched it. Highly professional store!",
    image: "assets/founder_portrait_mock.png"
  },
  {
    id: "rev-2",
    name: "Divya Teja",
    location: "Jangareddygudem",
    rating: 5,
    comment: "AS Gadgets Store is my go-to for footwear. Bought white slides and they look so premium. Everyone in college asked me where I bought them.",
    image: "assets/founder_portrait_mock.png"
  },
  {
    id: "rev-3",
    name: "Suresh P.",
    location: "Eluru",
    rating: 5,
    comment: "Excellent collection of Crocs and accessories. 5.0 rating is well-deserved. Best customer support on WhatsApp. Super fast delivery!",
    image: "assets/founder_portrait_mock.png"
  }
];

const DEFAULT_SETTINGS = {
  storeName: "AS GADGETS STORE",
  whatsappNumber: "8555939592", // Primary number from shop banner
  whatsappNumberAlt: "7036622494", // Alt number from shop banner
  instagram: "as_gadget_store_jrg",
  address: "Beside Old Bus Stand, Jangareddygudem, Andhra Pradesh, 534324",
  googleMapsLink: "https://maps.google.com/?q=AS+Gadgets+Store+Jangareddygudem",
  googleRating: "5.0",
  businessTimings: "9:30 AM - 9:30 PM (All Days)",
  deliveryInfo: "Free delivery across India for orders above ₹999. Standard shipping charges of ₹60 apply below that."
};

// Store State class to manage LocalStorage
class StoreState {
  constructor() {
    this.init();
  }

  init() {
    // Check and load from LocalStorage or initialize with defaults
    const storedProducts = localStorage.getItem("as_products");
    if (!storedProducts || JSON.parse(storedProducts).length < DEFAULT_PRODUCTS.length) {
      localStorage.setItem("as_products", JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem("as_categories")) {
      localStorage.setItem("as_categories", JSON.stringify(DEFAULT_CATEGORIES));
    }
    if (!localStorage.getItem("as_banners")) {
      localStorage.setItem("as_banners", JSON.stringify(DEFAULT_BANNERS));
    }
    if (!localStorage.getItem("as_reviews")) {
      localStorage.setItem("as_reviews", JSON.stringify(DEFAULT_REVIEWS));
    }
    if (!localStorage.getItem("as_settings")) {
      localStorage.setItem("as_settings", JSON.stringify(DEFAULT_SETTINGS));
    }
    if (!localStorage.getItem("as_cart")) {
      localStorage.setItem("as_cart", JSON.stringify([]));
    }
    if (!localStorage.getItem("as_wishlist")) {
      localStorage.setItem("as_wishlist", JSON.stringify([]));
    }
    if (!localStorage.getItem("as_visitors")) {
      localStorage.setItem("as_visitors", Math.floor(Math.random() * 500) + 1200);
    }
    if (!localStorage.getItem("as_orders_count")) {
      localStorage.setItem("as_orders_count", Math.floor(Math.random() * 40) + 85);
    }

    // Increment visitors for demo realism
    const currentVisitors = parseInt(localStorage.getItem("as_visitors"));
    localStorage.setItem("as_visitors", currentVisitors + 1);
  }

  // Getters
  getProducts() {
    return JSON.parse(localStorage.getItem("as_products"));
  }

  getCategories() {
    return JSON.parse(localStorage.getItem("as_categories"));
  }

  getBanners() {
    return JSON.parse(localStorage.getItem("as_banners"));
  }

  getReviews() {
    return JSON.parse(localStorage.getItem("as_reviews"));
  }

  getSettings() {
    return JSON.parse(localStorage.getItem("as_settings"));
  }

  getCart() {
    return JSON.parse(localStorage.getItem("as_cart"));
  }

  getWishlist() {
    return JSON.parse(localStorage.getItem("as_wishlist"));
  }

  getStats() {
    const products = this.getProducts();
    const categories = this.getCategories();
    const ordersCount = parseInt(localStorage.getItem("as_orders_count"));
    const visitors = parseInt(localStorage.getItem("as_visitors"));

    return {
      totalProducts: products.length,
      totalCategories: categories.length,
      totalOrders: ordersCount,
      totalVisitors: visitors
    };
  }

  // Setters
  saveProducts(products) {
    localStorage.setItem("as_products", JSON.stringify(products));
  }

  saveCategories(categories) {
    localStorage.setItem("as_categories", JSON.stringify(categories));
  }

  saveBanners(banners) {
    localStorage.setItem("as_banners", JSON.stringify(banners));
  }

  saveReviews(reviews) {
    localStorage.setItem("as_reviews", JSON.stringify(reviews));
  }

  saveSettings(settings) {
    localStorage.setItem("as_settings", JSON.stringify(settings));
  }

  // Cart operations
  addToCart(productId, size, quantity = 1) {
    const cart = this.getCart();
    const products = this.getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    // Check if item already in cart with same size
    const existingIndex = cart.findIndex(item => item.id === productId && item.selectedSize === size);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.images[0],
        selectedSize: size,
        quantity: quantity
      });
    }

    localStorage.setItem("as_cart", JSON.stringify(cart));
    // Dispatch custom event to notify UI
    window.dispatchEvent(new Event("cartUpdated"));
  }

  removeFromCart(productId, size) {
    let cart = this.getCart();
    cart = cart.filter(item => !(item.id === productId && item.selectedSize === size));
    localStorage.setItem("as_cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  updateCartQty(productId, size, quantity) {
    const cart = this.getCart();
    const index = cart.findIndex(item => item.id === productId && item.selectedSize === size);
    if (index > -1) {
      cart[index].quantity = Math.max(1, quantity);
      localStorage.setItem("as_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
    }
  }

  clearCart() {
    localStorage.setItem("as_cart", JSON.stringify([]));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  incrementOrdersCount() {
    const orders = parseInt(localStorage.getItem("as_orders_count"));
    localStorage.setItem("as_orders_count", orders + 1);
  }

  // Wishlist operations
  toggleWishlist(productId) {
    const wishlist = this.getWishlist();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem("as_wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }
}

// Export a global state instance
window.Store = new StoreState();
