// SVG Icons helper object for premium styling
const ICONS = {
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  cart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  admin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  categories: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  minus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
};

// Router and Controller Class
class AppController {
  constructor() {
    this.viewport = document.getElementById("app-viewport");
    this.activeCategory = null;
    this.searchQuery = "";
    this.currentSlideIndex = 0;
    this.sliderTimer = null;
    
    // Bind Event Listeners
    window.addEventListener("hashchange", () => this.handleRouting());
    window.addEventListener("cartUpdated", () => this.updateHeaderBadges());
    window.addEventListener("wishlistUpdated", () => this.updateHeaderBadges());
    
    // Initialize UI Elements
    this.setupGlobalHandlers();
    
    // Initial Route
    this.handleRouting();
    this.updateHeaderBadges();
  }

  setupGlobalHandlers() {
    // Header search submissions
    const searchForm = document.getElementById("header-search-form");
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = searchForm.querySelector("input");
        this.searchQuery = input.value.trim();
        window.location.hash = `#/search?q=${encodeURIComponent(this.searchQuery)}`;
      });
    }
  }

  // Handle routing based on hash
  handleRouting() {
    // Stop any slider timers running on homepage
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
      this.sliderTimer = null;
    }

    const hash = window.location.hash || "#/";
    const pathParts = hash.split("?");
    const route = pathParts[0];
    const queryParams = new URLSearchParams(pathParts[1] || "");

    // Clear active links in headers/bottom navs
    this.updateActiveNavLinks(route);

    // Scroll to top on page navigation
    window.scrollTo(0, 0);

    // Simple Route Matching
    if (route === "#/" || route === "") {
      this.renderHome();
    } else if (route.startsWith("#/product/")) {
      const productId = route.replace("#/product/", "");
      this.renderProductDetail(productId);
    } else if (route === "#/cart") {
      this.renderCart();
    } else if (route === "#/wishlist") {
      this.renderWishlist();
    } else if (route === "#/admin") {
      this.renderAdmin();
    } else if (route === "#/search") {
      const q = queryParams.get("q") || "";
      this.searchQuery = q;
      this.renderSearchPage(q);
    } else if (route === "#/categories") {
      this.renderCategoriesPage();
    } else {
      this.viewport.innerHTML = `<div class="container section-padding text-center"><h2>404 - Page Not Found</h2><p class="mb-4">The page you are looking for does not exist.</p><a href="#/" class="btn btn-primary">Go to Home</a></div>`;
    }
  }

  updateActiveNavLinks(route) {
    // Update Desktop Nav Links
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (href === route) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update Bottom Nav Links (Mobile)
    document.querySelectorAll(".mobile-nav-item").forEach(item => {
      const href = item.getAttribute("onclick");
      if (href && href.includes(route)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  updateHeaderBadges() {
    const cart = window.Store.getCart();
    const wishlist = window.Store.getWishlist();
    
    // Count total unique cart items or total sum of quantities
    const totalCartQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    // Desktop header badges
    const cartBadge = document.querySelector("#header-cart-badge");
    const wishlistBadge = document.querySelector("#header-wishlist-badge");
    
    if (cartBadge) {
      cartBadge.textContent = totalCartQty;
      cartBadge.style.display = totalCartQty > 0 ? "flex" : "none";
    }
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlist.length;
      wishlistBadge.style.display = wishlist.length > 0 ? "flex" : "none";
    }

    // Mobile nav badges
    const mobileCartBadge = document.querySelector("#mobile-cart-badge");
    if (mobileCartBadge) {
      mobileCartBadge.textContent = totalCartQty;
      mobileCartBadge.style.display = totalCartQty > 0 ? "flex" : "none";
    }
  }

  showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `${ICONS.check} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideIn 0.3s ease-out reverse forwards";
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // --- RENDERING VIEWS ---

  // RENDER HOMEPAGE
  renderHome() {
    const banners = window.Store.getBanners();
    const categories = window.Store.getCategories();
    const products = window.Store.getProducts();
    const reviews = window.Store.getReviews();
    const settings = window.Store.getSettings();

    // Split products for sections
    const trendingProducts = products.filter(p => p.isTrending);
    const bestsellerProducts = products.filter(p => p.isBestSeller);
    const featuredProducts = products.slice(0, 4);

    let html = `
      <!-- Premium Auto-playing Slideshow Carousel Section -->
      <section class="home-slider-section">
        <div class="slider-container">
          <div class="slider-wrapper" id="home-slider-wrapper">
            
            <!-- Slide 1: Founder's Comfort Collection with Premium Designer Frame -->
            <div class="slide slide-dark" style="background: linear-gradient(135deg, #18181b 0%, #0c0c0e 100%);">
              <div class="slide-content">
                <span class="slide-badge" style="background: rgba(255, 140, 0, 0.15); color: #ff8c00;">FOUNDER'S CHOICE</span>
                <h1 class="slide-title">AS GADGETS STORE</h1>
                <p class="slide-subtitle">Premium Crocs • Slides • Retro Sneakers. Comfort wear handpicked by the founder, delivered across India.</p>
                <div class="slide-actions">
                  <a href="#/categories" class="btn btn-primary" style="background:#fff; color:#000;">Shop Collection</a>
                  <a href="https://wa.me/91${settings.whatsappNumber}?text=Hello%20AS%20Gadgets%20Store%2C%20I%20would%20like%20to%20order%20from%20your%20premium%20footwear%20collection." target="_blank" class="btn btn-whatsapp">
                    Order on WhatsApp
                  </a>
                </div>
              </div>
              <div class="slide-image-container premium-designer-frame">
                <!-- Background decorative shapes -->
                <div class="frame-bg-circle"></div>
                <div class="frame-accent-line pink"></div>
                <div class="frame-accent-line cyan"></div>
                
                <!-- Main owner image -->
                <img src="assets/founder_real.png" alt="AS Gadgets Founder" class="slide-img founder-main-img">
                
                <!-- Floating product tags -->
                <div class="floating-product-tag clogs-tag">
                  <img src="assets/crocs_navy.png" alt="Clog tag">
                  <span>Comfort Crocs</span>
                </div>
                <div class="floating-product-tag sneaker-tag">
                  <img src="assets/sneakers_white.png" alt="Sneaker tag">
                  <span>Sneakers</span>
                </div>
              </div>
            </div>

            <!-- Slide 2: Official Designed Banner Graphic (Hotspots mapped to graphic buttons) -->
            <div class="slide slide-dark" style="padding: 0; background: #0c0c0e; min-height: auto; display:block;">
              <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                <img src="assets/crop_hero_d2c.jpg" alt="AS GADGETS STORE Hero Graphic Banner" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                
                <!-- Transparent Hotspots mapped to designed buttons in the banner graphic -->
                <a href="#/categories" style="position: absolute; left: 2.9%; bottom: 6.0%; width: 12.0%; height: 12.0%; cursor: pointer; z-index: 10;" title="Shop Collection"></a>
                <a href="https://wa.me/91${settings.whatsappNumber}?text=Hello%20AS%20Gadgets%20Store%2C%20I%20would%20like%20to%20order%20from%20your%20premium%20footwear%20collection." target="_blank" style="position: absolute; left: 16.2%; bottom: 6.0%; width: 13.8%; height: 12.0%; cursor: pointer; z-index: 10;" title="Order on WhatsApp"></a>
              </div>
            </div>

            <!-- Slide 3: Physical Store Visit -->
            <div class="slide slide-light" style="background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); color: #111;">
              <div class="slide-content">
                <span class="slide-badge" style="background: rgba(17, 17, 17, 0.08); color: #111;">VISIT OUR BRANCH</span>
                <h1 class="slide-title" style="color: #111;">VISIT PHYSICAL OUTLET</h1>
                <p class="slide-subtitle" style="color: #4b5563;">Beside Old Bus Stand, Jangareddygudem, Andhra Pradesh. Check out our physical catalog of 100+ trending footwear models in person.</p>
                <div class="slide-actions">
                  <a href="https://maps.google.com/?q=AS+Gadgets+Store+Jangareddygudem" target="_blank" class="btn btn-primary">Get Location Maps</a>
                </div>
              </div>
              <div class="slide-image-container">
                <img src="assets/store_front_real.png" alt="AS Gadgets Storefront" class="slide-img" style="border-radius: var(--border-radius-lg); box-shadow: var(--shadow-lg);">
              </div>
            </div>

            <!-- Slide 4: Exclusive Comfort Clogs Banner -->
            <div class="slide slide-dark" style="background: linear-gradient(135deg, #09090b 0%, #1c1917 100%);">
              <div class="slide-content">
                <span class="slide-badge" style="background: rgba(255, 255, 255, 0.15); color: #fff;">LIMITED STOCK DEALS</span>
                <h1 class="slide-title">EXPLORE COMFORT WEAR</h1>
                <p class="slide-subtitle">Authentic lightweight clogs and customizable footwear Jibbitz charms. Starting from ₹299.</p>
                <div class="slide-actions">
                  <a href="#/categories?cat=Crocs" class="btn btn-outline" style="border-color:#fff; color:#fff;">Explore Clogs</a>
                  <a href="#/categories?cat=Accessories" class="btn btn-primary" style="background:#fff; color:#000;">View Charms</a>
                </div>
              </div>
              <div class="slide-image-container">
                <img src="assets/crop_hero_d2c.jpg" alt="Comfort wear collection" class="slide-img" style="border-radius: var(--border-radius-lg); box-shadow: var(--shadow-lg);">
              </div>
            </div>

          </div>

          <!-- Slide Nav Arrows -->
          <button class="slider-nav prev" onclick="event.stopPropagation(); window.app.prevSlide()">&#10094;</button>
          <button class="slider-nav next" onclick="event.stopPropagation(); window.app.nextSlide()">&#10095;</button>

          <!-- Slider Dots -->
          <div class="slider-dots">
            <div class="slider-dot active" onclick="event.stopPropagation(); window.app.setSlide(0)"></div>
            <div class="slider-dot" onclick="event.stopPropagation(); window.app.setSlide(1)"></div>
            <div class="slider-dot" onclick="event.stopPropagation(); window.app.setSlide(2)"></div>
            <div class="slider-dot" onclick="event.stopPropagation(); window.app.setSlide(3)"></div>
          </div>
        </div>
      </section>

      <!-- Brand scrolling trust ticker -->
      <section class="brand-ticker-container">
        <div class="brand-ticker-wrapper">
          <div class="ticker-item"><span class="icon">🔥</span><span>New Arrivals Every Week</span></div>
          <div class="ticker-item"><span class="icon">⭐</span><span>5.0 Google Rating</span></div>
          <div class="ticker-item"><span class="icon">🚚</span><span>Delivery Across India</span></div>
          <div class="ticker-item"><span class="icon">🎁</span><span>Buy 2 Get 1 Free</span></div>
          <div class="ticker-item"><span class="icon">📍</span><span>Jangareddygudem Trusted Store</span></div>
          <div class="ticker-item"><span class="icon">📲</span><span>Order Directly On WhatsApp</span></div>
          <div class="ticker-item"><span class="icon">🔥</span><span>Limited Stock Collections</span></div>
          
          <!-- Duplicate set for infinite animation loop -->
          <div class="ticker-item"><span class="icon">🔥</span><span>New Arrivals Every Week</span></div>
          <div class="ticker-item"><span class="icon">⭐</span><span>5.0 Google Rating</span></div>
          <div class="ticker-item"><span class="icon">🚚</span><span>Delivery Across India</span></div>
          <div class="ticker-item"><span class="icon">🎁</span><span>Buy 2 Get 1 Free</span></div>
          <div class="ticker-item"><span class="icon">📍</span><span>Jangareddygudem Trusted Store</span></div>
          <div class="ticker-item"><span class="icon">📲</span><span>Order Directly On WhatsApp</span></div>
          <div class="ticker-item"><span class="icon">🔥</span><span>Limited Stock Collections</span></div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="section-padding">
        <div class="container">
          <div class="text-center mb-8">
            <h2 style="font-size: 2.2rem; margin-bottom: 8px;">Explore Categories</h2>
            <p style="color: var(--text-secondary);">Find your perfect comfort with our premium curated catalogs</p>
          </div>
          <div class="categories-grid">
            ${categories.map(cat => {
              // Icon selector mapping based on category
              let emoji = "👟";
              if (cat.toLowerCase().includes("croc")) emoji = "🐊";
              else if (cat.toLowerCase().includes("slide")) emoji = "🩴";
              else if (cat.toLowerCase().includes("slip")) emoji = "🥿";
              else if (cat.toLowerCase().includes("sand")) emoji = "👡";
              else if (cat.toLowerCase().includes("access")) emoji = "🎒";
              
              return `
                <div class="category-card" onclick="window.location.hash = '#/categories?cat=${encodeURIComponent(cat)}'">
                  <div class="category-icon-wrapper" style="font-size: 1.85rem;">
                    ${emoji}
                  </div>
                  <span class="category-name">${cat}</span>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </section>

      <!-- Exclusive Banners compilation Section -->
      <section class="section-padding bg-light">
        <div class="container">
          <div class="text-center mb-8">
            <span class="d2c-orange-badge" style="background-color: var(--bg-dark); color: #fff;">Exclusive Promotions</span>
            <h2 style="font-size: 2.2rem; margin-top: 8px; margin-bottom: 8px;">Deals of the Week</h2>
            <p style="color: var(--text-secondary);">Limited time footwear campaigns from our physical branch</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="compilation-banners-grid">
            <!-- Card 1: New Arrivals -->
            <div style="position: relative; border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-color); background: #000; cursor:pointer;" onclick="window.location.hash = '#/categories?cat=Sneakers'">
              <img src="assets/crop_new_arrivals.jpg" alt="New Arrivals" style="width: 100%; height: auto; display: block; transition: transform 0.3s ease;">
            </div>
            
            <!-- Card 2: Buy 2 Get 1 Free -->
            <div style="position: relative; border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-color); background: #fff; cursor:pointer;" onclick="window.location.hash = '#/categories?cat=Slides'">
              <img src="assets/crop_buy2_get1.jpg" alt="Buy 2 Get 1 Free" style="width: 100%; height: auto; display: block; transition: transform 0.3s ease;">
            </div>

            <!-- Card 3: Visit Our Store -->
            <div style="position: relative; border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-color); background: #fff; cursor:pointer;" onclick="window.open('https://maps.google.com/?q=AS+Gadgets+Store+Jangareddygudem', '_blank')">
              <img src="assets/crop_visit_store.jpg" alt="Visit Our Store" style="width: 100%; height: auto; display: block; transition: transform 0.3s ease;">
            </div>
          </div>
        </div>
      </section>

      <!-- Trending Footwear Seated Founder Picks -->
      <section class="section-padding">
        <div class="container">
          <div class="text-center mb-8">
            <span class="d2c-orange-badge" style="background-color: var(--bg-dark); color: #fff;">Featured Products</span>
            <h2 style="font-size: 2.2rem; margin-top: 8px; margin-bottom: 8px;">Founder's Choice picks</h2>
            <p style="color: var(--text-secondary);">Direct from our physical shelves. Selected premium options of Crocs, Slides, and Sneakers. Order directly on WhatsApp.</p>
          </div>
          <div class="products-grid mb-8">
            ${products.slice(0, 8).map(p => this.compileProductCardHTML(p)).join("")}
          </div>
        </div>
      </section>

      <!-- Limited Stock Alert Countdown Banner (White Luxury Background) -->
      <section class="section-padding bg-light">
        <div class="container" style="max-width: 900px; margin: 0 auto;">
          <div class="luxury-white-banner" style="grid-template-columns: 1.1fr 0.9fr;">
            <div class="luxury-white-content">
              <span class="d2c-orange-badge">LIMITED STOCK ALERT</span>
              <h2 style="font-size: 2.2rem; line-height: 1.1; margin-bottom: 12px; font-weight:800;">Premium Crocs Collection</h2>
              <p style="color: var(--text-secondary); font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Starting From <span style="color:#ff8c00; font-size:1.6rem; font-weight:800;">₹499</span></p>
              
              <!-- Dynamic Countdown clocks -->
              <div class="countdown-box">
                <div class="countdown-digit-wrapper">
                  <span class="countdown-num" id="timer-hours">04</span>
                  <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-digit-wrapper">
                  <span class="countdown-num" id="timer-mins">12</span>
                  <span class="countdown-label">Mins</span>
                </div>
                <div class="countdown-digit-wrapper">
                  <span class="countdown-num" id="timer-secs">45</span>
                  <span class="countdown-label">Secs</span>
                </div>
              </div>

              <button onclick="window.location.hash = '#/categories?cat=Crocs'" class="btn btn-primary" style="background-color: var(--bg-dark); color: #fff; border:none; padding: 14px 28px;">Claim Limited Deal</button>
            </div>
            
            <div style="position: relative; overflow:hidden; border-left:1px solid var(--border-color); display:flex; align-items:center;">
              <!-- Using the designed crop limited stock image! -->
              <img src="assets/crop_limited_stock.jpg" alt="Limited Stock Clogs Banner" style="width: 100%; height: auto; display: block; object-fit:cover;">
              <!-- absolute hotspot overlay for Shop Now in the graphic -->
              <a href="#/categories?cat=Crocs" style="position: absolute; left: 5%; bottom: 10%; width: 32%; height: 16%; cursor: pointer; z-index: 10;"></a>
            </div>
          </div>
        </div>
      </section>

      <!-- Meet The Founder stats rewrite (Incorporating designed Built by Passion banner) -->
      <section class="section-padding">
        <div class="container founder-d2c-grid">
          
          <!-- Designed "Built by Passion" banner card -->
          <div style="border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); position: relative; background:#000;">
            <img src="assets/crop_built_passion.jpg" alt="Built by Passion Driven by Trust" style="width: 100%; height: auto; display: block;">
            <!-- Hotspot mapped to "Explore Collection" button on the banner -->
            <a href="#/categories" style="position: absolute; left: 6%; bottom: 12%; width: 28%; height: 16%; cursor: pointer; z-index: 10;"></a>
          </div>

          <!-- Stats block -->
          <div class="founder-d2c-stats" style="padding-left: 20px;">
            <div style="grid-column: span 3; margin-bottom: 10px;">
              <h2 style="font-size: 1.8rem; margin-bottom: 8px;">D2C Footwear Passion</h2>
              <p style="color: var(--text-secondary); line-height: 1.5;">Every batch is hand-selected and comfort-verified by our founder before shipping from Jangareddygudem.</p>
            </div>
            <div class="founder-stat-item">
              <span class="founder-stat-num">5000+</span>
              <span class="founder-stat-desc">Happy Customers</span>
            </div>
            <div class="founder-stat-item">
              <span class="founder-stat-num">1000+</span>
              <span class="founder-stat-desc">Products Sold</span>
            </div>
            <div class="founder-stat-item">
              <span class="founder-stat-num">5.0★</span>
              <span class="founder-stat-desc">Google Rating</span>
            </div>
            <div class="founder-stat-item">
              <span class="founder-stat-num">All India</span>
              <span class="founder-stat-desc">Delivery</span>
            </div>
            <div class="founder-stat-item">
              <span class="founder-stat-num">24 Hours</span>
              <span class="founder-stat-desc">Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Premium Brand Tech & Footwear Destination Wide Banner -->
      <section class="section-padding bg-light" style="padding-bottom:0;">
        <div class="container" style="max-width: 1100px; margin: 0 auto; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-lg); position: relative;">
          <img src="assets/banner_wide_store.jpg" alt="AS GADGETS STORE Tech & Footwear Destination" style="width: 100%; height: auto; display: block;">
          <!-- Hotspot to maps -->
          <a href="https://maps.google.com/?q=AS+Gadgets+Store+Jangareddygudem" target="_blank" style="position: absolute; inset: 0; cursor: pointer; z-index: 10;" title="Get directions to AS Gadgets Store"></a>
        </div>
      </section>

      <!-- Customer Reviews -->
      <section class="section-padding bg-light">
        <div class="container">
          <div class="text-center mb-8">
            <h2 style="font-size: 2.2rem; margin-bottom: 8px;">Loved By Customers</h2>
            <p style="color: var(--text-secondary);">See what our community says about their buying experience</p>
          </div>
          <div class="reviews-grid">
            ${reviews.map(rev => `
              <div class="review-card">
                <div class="review-stars">
                  ${Array(rev.rating).fill(ICONS.star).join("")}
                </div>
                <p class="review-text">"${rev.comment}"</p>
                <div class="review-user">
                  <div class="review-user-avatar">
                    ${rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 class="review-user-name">${rev.name}</h4>
                    <span class="review-user-loc">${rev.location}</span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Instagram Section -->
      <section class="section-padding">
        <div class="container">
          <div class="text-center mb-8">
            <h2 style="font-size: 2.2rem; margin-bottom: 8px;">Follow Us On Instagram</h2>
            <p style="color: var(--text-secondary);">Tag us @<a href="https://instagram.com/${settings.instagram}" target="_blank" style="text-decoration: underline; font-weight:600;">${settings.instagram}</a> to get featured!</p>
          </div>
          <div class="instagram-grid">
            <div class="instagram-item">
              <img src="assets/crocs_navy.png" alt="Instagram post">
              <a href="https://instagram.com/${settings.instagram}" target="_blank" class="instagram-overlay">${ICONS.instagram}</a>
            </div>
            <div class="instagram-item">
              <img src="assets/crocs_white_real.png" alt="Instagram post">
              <a href="https://instagram.com/${settings.instagram}" target="_blank" class="instagram-overlay">${ICONS.instagram}</a>
            </div>
            <div class="instagram-item">
              <img src="assets/sneakers_blackwhite_real.png" alt="Instagram post">
              <a href="https://instagram.com/${settings.instagram}" target="_blank" class="instagram-overlay">${ICONS.instagram}</a>
            </div>
            <div class="instagram-item">
              <img src="assets/slides_white.png" alt="Instagram post">
              <a href="https://instagram.com/${settings.instagram}" target="_blank" class="instagram-overlay">${ICONS.instagram}</a>
            </div>
            <div class="instagram-item">
              <img src="assets/sneakers_white.png" alt="Instagram post">
              <a href="https://instagram.com/${settings.instagram}" target="_blank" class="instagram-overlay">${ICONS.instagram}</a>
            </div>
            <div class="instagram-item">
              <img src="assets/store_interior_mock.png" alt="Instagram post">
              <a href="https://instagram.com/${settings.instagram}" target="_blank" class="instagram-overlay">${ICONS.instagram}</a>
            </div>
          </div>
        </div>
      </section>
    `;

    this.viewport.innerHTML = html;
    this.startBannerSlider();

    // Start Luxury Urgency Countdown interval
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(() => {
      const hDom = document.getElementById("timer-hours");
      const mDom = document.getElementById("timer-mins");
      const sDom = document.getElementById("timer-secs");
      if (!hDom || !mDom || !sDom) return;

      let h = parseInt(hDom.textContent);
      let m = parseInt(mDom.textContent);
      let s = parseInt(sDom.textContent);

      if (s > 0) {
        s--;
      } else {
        s = 59;
        if (m > 0) {
          m--;
        } else {
          m = 59;
          if (h > 0) {
            h--;
          } else {
            h = 23;
          }
        }
      }

      hDom.textContent = h.toString().padStart(2, '0');
      mDom.textContent = m.toString().padStart(2, '0');
      sDom.textContent = s.toString().padStart(2, '0');
    }, 1000);
  }

  // Compile individual Product Card HTML (Amazon-style data presentation + clean layout)
  compileProductCardHTML(p) {
    const wishlist = window.Store.getWishlist();
    const isLiked = wishlist.includes(p.id);
    
    return `
      <div class="product-card">
        <button class="product-wishlist-btn ${isLiked ? 'active' : ''}" onclick="event.stopPropagation(); window.app.toggleWishlist('${p.id}')">
          ${ICONS.heart}
        </button>
        <div class="product-image-wrapper" onclick="window.location.hash = '#/product/${p.id}'" style="cursor:pointer;">
          <img src="${p.images[0]}" alt="${p.name}" class="product-image">
          ${p.discount > 0 ? `<span class="product-discount-tag">${p.discount}% OFF</span>` : ""}
        </div>
        <div class="product-info">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-title" onclick="window.location.hash = '#/product/${p.id}'" style="cursor:pointer;">${p.name}</h3>
          
          <div class="rating-bar">
            <span class="rating-stars">
              ${Array(Math.floor(p.rating)).fill(ICONS.star).join("")}
            </span>
            <span>(${p.reviewsCount})</span>
          </div>

          <div class="product-price-row">
            <span class="curr-price">₹${p.price}</span>
            ${p.originalPrice > p.price ? `<span class="orig-price">₹${p.originalPrice}</span>` : ""}
          </div>

          <div class="product-actions">
            <button onclick="window.app.quickAdd('${p.id}')" class="btn btn-outline btn-sm">Add To Cart</button>
            <button onclick="window.app.quickBuy('${p.id}')" class="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    `;
  }

  // --- HERO SLIDER TIMERS ---
  startBannerSlider() {
    const totalSlides = 4;
    if (this.sliderTimer) clearInterval(this.sliderTimer);
    this.sliderTimer = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % totalSlides;
      this.setSlide(this.currentSlideIndex);
    }, 5000);
  }

  setSlide(index) {
    this.currentSlideIndex = index;
    const wrapper = document.getElementById("home-slider-wrapper");
    const dots = document.querySelectorAll(".slider-dot");
    
    if (wrapper) {
      wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    this.restartBannerSliderTimer();
  }

  restartBannerSliderTimer() {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
    }
    const totalSlides = 4;
    this.sliderTimer = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % totalSlides;
      this.setSlide(this.currentSlideIndex);
    }, 5000);
  }

  prevSlide() {
    const totalSlides = 4;
    let nextIndex = (this.currentSlideIndex - 1 + totalSlides) % totalSlides;
    this.setSlide(nextIndex);
  }

  nextSlide() {
    const totalSlides = 4;
    let nextIndex = (this.currentSlideIndex + 1) % totalSlides;
    this.setSlide(nextIndex);
  }

  // Quick actions from Catalog Cards
  quickAdd(productId) {
    const products = window.Store.getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Use default first size
    const size = product.sizes[0] || "One Size";
    window.Store.addToCart(productId, size, 1);
    this.showToast(`Added ${product.name} (Size: ${size}) to Cart!`);
  }

  quickBuy(productId) {
    const products = window.Store.getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const size = product.sizes[0] || "One Size";
    window.Store.addToCart(productId, size, 1);
    window.location.hash = "#/cart";
  }

  toggleWishlist(productId) {
    window.Store.toggleWishlist(productId);
    this.showToast("Wishlist updated!");
    // Re-render current catalog list pages if active
    const hash = window.location.hash || "#/";
    if (hash === "#/" || hash.startsWith("#/search") || hash.startsWith("#/categories")) {
      this.handleRouting();
    }
  }

  // RENDER PRODUCT DETAIL PAGE
  renderProductDetail(productId) {
    const products = window.Store.getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      this.viewport.innerHTML = `<div class="container section-padding text-center"><h2>Product Not Found</h2><a href="#/" class="btn btn-primary mt-4">Back to Home</a></div>`;
      return;
    }

    // Default local variables for detail controls
    this.selectedSize = product.sizes[0] || "One Size";
    this.selectedQty = 1;
    this.activeImgIdx = 0;

    const renderDetailHTML = () => {
      const settings = window.Store.getSettings();
      const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

      let html = `
        <div class="container section-padding">
          <div class="product-detail-grid">
            
            <!-- Gallery (Left) -->
            <div class="product-gallery-container">
              <div class="main-image-wrapper">
                <img id="detail-main-img" src="${product.images[this.activeImgIdx]}" alt="${product.name}">
              </div>
              ${product.images.length > 1 ? `
                <div class="thumbnail-row">
                  ${product.images.map((img, idx) => `
                    <div class="thumb-item ${idx === this.activeImgIdx ? 'active' : ''}" onclick="window.app.changeDetailImg(${idx})">
                      <img src="${img}" alt="thumbnail">
                    </div>
                  `).join("")}
                </div>
              ` : ""}
            </div>

            <!-- Options Details (Right) -->
            <div class="product-detail-info">
              <div class="product-meta-header">
                <span class="product-cat" style="font-size: 0.85rem; letter-spacing: 0.05em;">${product.category}</span>
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="rating-bar" style="font-size: 0.95rem;">
                  <span class="rating-stars">
                    ${Array(Math.floor(product.rating)).fill(ICONS.star).join("")}
                  </span>
                  <strong>${product.rating} / 5.0</strong>
                  <span style="color: var(--text-muted);">(${product.reviewsCount} Google customer reviews)</span>
                </div>
                
                <div class="product-detail-price">
                  <span class="detail-curr-price">₹${product.price}</span>
                  ${product.originalPrice > product.price ? `
                    <span class="detail-orig-price">₹${product.originalPrice}</span>
                    <span class="detail-discount">${product.discount}% OFF</span>
                  ` : ""}
                </div>
              </div>

              <!-- Offer list block -->
              <div class="mb-6" style="padding: 16px; border: 1.5px dashed var(--border-color); border-radius: var(--border-radius-md); background-color: var(--bg-secondary);">
                <span style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--danger); display: block; margin-bottom: 8px;">🔥 Special Offers:</span>
                <ul style="list-style-type: none; font-size: 0.9rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 6px;">
                  <li>✔ Buy 2 Get 1 Free (Mix Slides and Crocs)</li>
                  <li>✔ Extra 5% off on orders above ₹1999</li>
                  <li>✔ Free Shipping across India above ₹999</li>
                </ul>
              </div>

              <!-- Size selector -->
              <div class="selector-section">
                <div class="selector-label">
                  <span>Select Size (UK/India)</span>
                  <span style="text-decoration: underline; cursor: pointer; color: var(--text-muted); font-size: 0.85rem;" onclick="window.app.showSizeGuide()">Size Chart</span>
                </div>
                <div class="size-grid">
                  ${product.sizes.map(size => `
                    <div class="size-option ${size === this.selectedSize ? 'active' : ''}" onclick="window.app.changeDetailSize('${size}')">
                      ${size}
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Quantity Selector -->
              <div class="selector-section">
                <div class="selector-label">Quantity</div>
                <div class="qty-input-wrapper">
                  <button class="qty-btn" onclick="window.app.changeDetailQty(-1)">${ICONS.minus}</button>
                  <span class="qty-value" id="detail-qty-val">${this.selectedQty}</span>
                  <button class="qty-btn" onclick="window.app.changeDetailQty(1)">${ICONS.plus}</button>
                </div>
              </div>

              <!-- Buying Action Buttons -->
              <div class="detail-actions">
                <div class="detail-action-row">
                  <button onclick="window.app.detailAddToCart('${product.id}')" class="btn btn-outline" style="padding: 15px;">Add To Cart</button>
                  <button onclick="window.app.detailDirectWhatsApp('${product.id}')" class="btn btn-whatsapp" style="padding: 15px;">
                    ${ICONS.phone} Order on WhatsApp
                  </button>
                </div>
                <button onclick="window.app.detailBuyNow('${product.id}')" class="btn btn-primary btn-full" style="padding: 16px;">Buy Now (Checkout Cart)</button>
              </div>

              <!-- Accordions Descriptions -->
              <div class="product-info-tabs">
                <div class="tab-item active" id="tab-desc">
                  <div class="tab-header" onclick="window.app.toggleDetailTab('tab-desc')">
                    <span>Product Description</span>
                    ${ICONS.chevronDown}
                  </div>
                  <div class="tab-body">
                    ${product.description}
                  </div>
                </div>
                <div class="tab-item" id="tab-delivery">
                  <div class="tab-header" onclick="window.app.toggleDetailTab('tab-delivery')">
                    <span>Shipping & Delivery Details</span>
                    ${ICONS.chevronDown}
                  </div>
                  <div class="tab-body">
                    ${settings.deliveryInfo}<br><br>
                    Orders placed before 2:00 PM are dispatched on the same business day. Delivery usually takes 3-5 working days depending on your location.
                  </div>
                </div>
                <div class="tab-item" id="tab-payment">
                  <div class="tab-header" onclick="window.app.toggleDetailTab('tab-payment')">
                    <span>How WhatsApp Ordering Works</span>
                    ${ICONS.chevronDown}
                  </div>
                  <div class="tab-body">
                    AS GADGETS STORE utilizes a quick order verification process on WhatsApp:
                    <ol style="margin-left: 18px; margin-top: 8px; display:flex; flex-direction:column; gap:6px;">
                      <li>Click "Order on WhatsApp" or "Buy Now".</li>
                      <li>You will be redirected to WhatsApp Business with pre-written cart text.</li>
                      <li>Send the message to confirm size availability.</li>
                      <li>Our representative will confirm and collect address/shipping details immediately.</li>
                    </ol>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- Related Products Section -->
          ${related.length > 0 ? `
            <div class="section-padding" style="border-top: 1px solid var(--border-color); margin-top: 60px;">
              <h2 class="mb-6" style="font-size: 1.8rem;">Related Products</h2>
              <div class="products-grid">
                ${related.map(p => this.compileProductCardHTML(p)).join("")}
              </div>
            </div>
          ` : ""}

        </div>
      `;

      this.viewport.innerHTML = html;
    };

    renderDetailHTML();
    
    // Attaching specific state mutators to global window for access
    window.app.changeDetailSize = (size) => {
      this.selectedSize = size;
      const sizeOptions = document.querySelectorAll(".size-option");
      sizeOptions.forEach(opt => {
        if (opt.textContent.trim() === size) opt.classList.add("active");
        else opt.classList.remove("active");
      });
    };

    window.app.changeDetailQty = (diff) => {
      this.selectedQty = Math.max(1, this.selectedQty + diff);
      const qtyLabel = document.getElementById("detail-qty-val");
      if (qtyLabel) qtyLabel.textContent = this.selectedQty;
    };

    window.app.changeDetailImg = (idx) => {
      this.activeImgIdx = idx;
      const mainImg = document.getElementById("detail-main-img");
      if (mainImg) mainImg.src = product.images[idx];
      
      const thumbs = document.querySelectorAll(".thumb-item");
      thumbs.forEach((t, i) => {
        if (i === idx) t.classList.add("active");
        else t.classList.remove("active");
      });
    };

    window.app.toggleDetailTab = (tabId) => {
      const tab = document.getElementById(tabId);
      if (tab) tab.classList.toggle("active");
    };

    window.app.detailAddToCart = (prodId) => {
      window.Store.addToCart(prodId, this.selectedSize, this.selectedQty);
      this.showToast(`Added ${this.selectedQty}x ${product.name} (Size: ${this.selectedSize}) to Cart!`);
    };

    window.app.detailBuyNow = (prodId) => {
      window.Store.addToCart(prodId, this.selectedSize, this.selectedQty);
      window.location.hash = "#/cart";
    };

    // Direct WhatsApp Checkout for a single product bypasses cart
    window.app.detailDirectWhatsApp = (prodId) => {
      const settings = window.Store.getSettings();
      const message = `Hello AS Gadgets Store,

I would like to order:

1. ${product.name}
   Size: ${this.selectedSize}
   Qty: ${this.selectedQty}

Please confirm availability.

Thank you.`;

      window.Store.incrementOrdersCount();
      const waUrl = `https://wa.me/91${settings.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    };
  }

  showSizeGuide() {
    alert("Size Chart (Standard UK/India Footwear):\n\nUK 6 - Foot Length 25.0 cm\nUK 7 - Foot Length 25.8 cm\nUK 8 - Foot Length 26.6 cm\nUK 9 - Foot Length 27.5 cm\nUK 10 - Foot Length 28.3 cm\nUK 11 - Foot Length 29.2 cm");
  }

  // RENDER CART PAGE
  renderCart() {
    const cart = window.Store.getCart();
    const settings = window.Store.getSettings();

    if (cart.length === 0) {
      this.viewport.innerHTML = `
        <div class="container section-padding text-center">
          <div class="cart-empty">
            <div style="font-size: 4rem; margin-bottom: 20px;">🛒</div>
            <h2 class="mb-2">Your Shopping Cart is Empty</h2>
            <p style="color: var(--text-secondary);" class="mb-6">Browse our categories and add products to start shopping.</p>
            <a href="#/" class="btn btn-primary">Start Browsing</a>
          </div>
        </div>
      `;
      return;
    }

    // Calculations
    const itemsTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = itemsTotal >= 999 ? 0 : 60;
    const finalTotal = itemsTotal + shipping;

    let html = `
      <div class="container section-padding">
        <h1 class="mb-8" style="font-size: 2.2rem;">Your Cart</h1>
        <div class="cart-page-grid">
          
          <!-- Items List -->
          <div class="cart-items-wrapper">
            ${cart.map((item, index) => `
              <div class="cart-item">
                <div class="cart-item-img">
                  <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                  <h3 class="cart-item-name">${item.name}</h3>
                  <span class="cart-item-meta">Category: ${item.category} | Size: ${item.selectedSize}</span>
                  <div>
                    <button class="cart-item-remove" onclick="window.app.removeFromCart('${item.id}', '${item.selectedSize}')">Remove item</button>
                  </div>
                </div>
                <div>
                  <div class="qty-input-wrapper" style="transform: scale(0.95);">
                    <button class="qty-btn" onclick="window.app.updateCartQty('${item.id}', '${item.selectedSize}', ${item.quantity - 1})">${ICONS.minus}</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="window.app.updateCartQty('${item.id}', '${item.selectedSize}', ${item.quantity + 1})">${ICONS.plus}</button>
                  </div>
                </div>
                <div class="cart-item-price text-center">
                  ₹${item.price * item.quantity}
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Checkout Summary -->
          <div class="cart-summary-wrapper">
            <h2 class="cart-summary-title">Order Summary</h2>
            
            <div class="summary-row">
              <span>Items Total (${cart.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
              <span>₹${itemsTotal}</span>
            </div>
            
            <div class="summary-row">
              <span>Shipping Charges</span>
              <span>${shipping === 0 ? '<strong style="color: var(--whatsapp-color);">FREE</strong>' : `₹${shipping}`}</span>
            </div>

            <div class="mb-4" style="font-size: 0.82rem; color: var(--text-secondary); background: var(--bg-tertiary); padding: 10px; border-radius: var(--border-radius-md);">
              💡 <em>${itemsTotal >= 999 ? 'Congrats! Your order qualifies for Free Shipping.' : 'Add ₹' + (999 - itemsTotal) + ' more to get FREE shipping!'}</em>
            </div>

            <div class="summary-row total">
              <span>Total Amount</span>
              <span>₹${finalTotal}</span>
            </div>

            <div class="mb-6 mt-4" style="font-size: 0.85rem; color: var(--text-secondary);">
              🔒 Orders are finalized securely over WhatsApp Business. No registration or card details needed.
            </div>

            <button onclick="window.app.checkoutWhatsApp()" class="btn btn-whatsapp btn-full" style="padding: 16px;">
              ${ICONS.phone} Proceed to WhatsApp Checkout
            </button>
            <button onclick="window.location.hash = '#/'" class="btn btn-outline btn-full mt-2" style="padding: 12px; font-size: 0.88rem;">
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    `;

    this.viewport.innerHTML = html;

    window.app.removeFromCart = (id, size) => {
      window.Store.removeFromCart(id, size);
      this.showToast("Item removed from cart.");
      this.renderCart();
    };

    window.app.updateCartQty = (id, size, qty) => {
      window.Store.updateCartQty(id, size, qty);
      this.renderCart();
    };

    window.app.checkoutWhatsApp = () => {
      const activeCart = window.Store.getCart();
      const storeSettings = window.Store.getSettings();
      if (activeCart.length === 0) return;

      // Construct WhatsApp order text
      let message = `Hello AS Gadgets Store,\n\nI would like to order:\n\n`;
      
      activeCart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n   Size: ${item.selectedSize}\n   Qty: ${item.quantity}\n\n`;
      });

      const finalItemsVal = activeCart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
      const deliveryPrice = finalItemsVal >= 999 ? 0 : 60;
      const netTotal = finalItemsVal + deliveryPrice;

      message += `Total Amount: ₹${netTotal}\n`;
      if (deliveryPrice === 0) {
        message += `Shipping: FREE\n`;
      } else {
        message += `Shipping: ₹${deliveryPrice}\n`;
      }
      message += `\nPlease confirm availability.\n\nThank you.`;

      // Log order stats
      window.Store.incrementOrdersCount();
      
      // Clear cart
      window.Store.clearCart();

      // Open WhatsApp Link
      const waUrl = `https://wa.me/91${storeSettings.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    };
  }

  // RENDER WISHLIST PAGE
  renderWishlist() {
    const wishlist = window.Store.getWishlist();
    const products = window.Store.getProducts();
    const wishlistProducts = products.filter(p => wishlist.includes(p.id));

    if (wishlistProducts.length === 0) {
      this.viewport.innerHTML = `
        <div class="container section-padding text-center">
          <div class="cart-empty">
            <div style="font-size: 4rem; margin-bottom: 20px;">❤️</div>
            <h2 class="mb-2">Your Wishlist is Empty</h2>
            <p style="color: var(--text-secondary);" class="mb-6">Save items you like to order them later.</p>
            <a href="#/" class="btn btn-primary">Discover Footwear</a>
          </div>
        </div>
      `;
      return;
    }

    this.viewport.innerHTML = `
      <div class="container section-padding">
        <h1 class="mb-8" style="font-size: 2.2rem;">Your Saved Collection</h1>
        <div class="products-grid">
          ${wishlistProducts.map(p => this.compileProductCardHTML(p)).join("")}
        </div>
      </div>
    `;
  }

  // RENDER CATEGORIES / FILTER VIEW
  renderCategoriesPage() {
    const categories = window.Store.getCategories();
    const products = window.Store.getProducts();

    // Read current filtering category from URL param if any
    const hash = window.location.hash || "";
    const params = new URLSearchParams(hash.split("?")[1] || "");
    const selectedCat = params.get("cat") || null;
    this.activeCategory = selectedCat;

    const filtered = selectedCat 
      ? products.filter(p => p.category.toLowerCase() === selectedCat.toLowerCase())
      : products;

    let html = `
      <div class="container section-padding">
        <h1 class="mb-4" style="font-size: 2.2rem;">Catalog Explorer</h1>
        
        <!-- Category Filter Pills -->
        <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 30px;" class="cat-pill-row">
          <button onclick="window.app.filterCategory(null)" class="btn btn-sm ${!this.activeCategory ? 'btn-primary' : 'btn-outline'}" style="border-radius: var(--border-radius-full); white-space: nowrap;">
            All Products (${products.length})
          </button>
          ${categories.map(cat => {
            const count = products.filter(p => p.category === cat).length;
            const isActive = this.activeCategory && this.activeCategory.toLowerCase() === cat.toLowerCase();
            return `
              <button onclick="window.app.filterCategory('${cat}')" class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" style="border-radius: var(--border-radius-full); white-space: nowrap;">
                ${cat} (${count})
              </button>
            `;
          }).join("")}
        </div>

        <!-- Catalog list Grid -->
        ${filtered.length > 0 ? `
          <div class="products-grid">
            ${filtered.map(p => this.compileProductCardHTML(p)).join("")}
          </div>
        ` : `
          <div class="text-center" style="padding: 60px 0;">
            <h3>No products found under this category</h3>
            <button onclick="window.app.filterCategory(null)" class="btn btn-primary mt-4">Show All Products</button>
          </div>
        `}
      </div>
    `;

    this.viewport.innerHTML = html;

    window.app.filterCategory = (catName) => {
      if (catName) {
        window.location.hash = `#/categories?cat=${encodeURIComponent(catName)}`;
      } else {
        window.location.hash = `#/categories`;
      }
    };
  }

  // RENDER SEARCH PAGE
  renderSearchPage(query) {
    const products = window.Store.getProducts();
    const queryLower = query.toLowerCase();

    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(queryLower) || 
      p.category.toLowerCase().includes(queryLower) ||
      p.description.toLowerCase().includes(queryLower)
    );

    this.viewport.innerHTML = `
      <div class="container section-padding">
        <h1 class="mb-2" style="font-size: 2.2rem;">Search Results</h1>
        <p class="mb-8" style="color: var(--text-secondary);">Showing results for "<strong>${query}</strong>" (${filtered.length} items found)</p>
        
        ${filtered.length > 0 ? `
          <div class="products-grid">
            ${filtered.map(p => this.compileProductCardHTML(p)).join("")}
          </div>
        ` : `
          <div class="text-center" style="padding: 60px 0;">
            <div style="font-size: 3rem; margin-bottom: 20px;">🔍</div>
            <h3>We couldn't find anything matching your search.</h3>
            <p style="color: var(--text-secondary);" class="mb-6">Double check the spelling or try searching for generic categories like "Crocs", "Slides" or "Sneakers".</p>
            <a href="#/" class="btn btn-primary">Back to Homepage</a>
          </div>
        `}
      </div>
    `;
  }

  // --- RENDERING ADMIN PANEL ---
  renderAdmin() {
    // Simple presentation auth check (Bypassable easily as this is a demo, let's render a basic screen)
    if (!sessionStorage.getItem("admin_authenticated")) {
      this.renderAdminLogin();
      return;
    }

    const stats = window.Store.getStats();
    const products = window.Store.getProducts();
    const categories = window.Store.getCategories();
    const settings = window.Store.getSettings();

    // Default admin tab selection
    this.adminTab = this.adminTab || "products";

    let html = `
      <div class="admin-layout">
        
        <!-- Sidebar Navigation -->
        <aside class="admin-sidebar">
          <div style="padding: 12px 16px; margin-bottom: 20px;">
            <h3 style="font-size: 1.15rem; color: var(--text-primary); text-transform: uppercase; tracking: 0.05em;">Admin Panel</h3>
            <span style="font-size: 0.75rem; color: var(--text-muted);">AS Gadgets Control Room</span>
          </div>
          <div class="admin-nav-item ${this.adminTab === 'products' ? 'active' : ''}" onclick="window.app.setAdminTab('products')">
            📦 Product Catalog
          </div>
          <div class="admin-nav-item ${this.adminTab === 'categories' ? 'active' : ''}" onclick="window.app.setAdminTab('categories')">
            🏷️ Categories
          </div>
          <div class="admin-nav-item ${this.adminTab === 'settings' ? 'active' : ''}" onclick="window.app.setAdminTab('settings')">
            ⚙️ Store Settings
          </div>
          <div style="margin-top: auto; border-top: 1px solid var(--border-color); padding-top: 16px;">
            <div class="admin-nav-item" onclick="window.app.adminLogout()" style="color: var(--danger);">
              🚪 Log Out
            </div>
          </div>
        </aside>

        <!-- Main Workspace -->
        <main class="admin-viewport">
          
          <!-- Title / Stats Summary -->
          <div class="admin-title-row">
            <div>
              <h1 style="font-size: 2rem;">Dashboard Overview</h1>
              <p style="color: var(--text-secondary);">Real-time store metrics and listings manager</p>
            </div>
            <div style="display:flex; gap:10px;">
              <button onclick="window.location.hash = '#/'" class="btn btn-outline btn-sm">Preview Storefront</button>
              ${this.adminTab === 'products' ? `<button onclick="window.app.openAddProductModal()" class="btn btn-primary btn-sm">${ICONS.plus} Add Product</button>` : ""}
              ${this.adminTab === 'categories' ? `<button onclick="window.app.openAddCategoryModal()" class="btn btn-primary btn-sm">${ICONS.plus} Add Category</button>` : ""}
            </div>
          </div>

          <!-- Statistics cards -->
          <section class="admin-stats-grid">
            <div class="admin-stat-card">
              <span class="admin-stat-num">${stats.totalProducts}</span>
              <span class="admin-stat-label">Total Products</span>
            </div>
            <div class="admin-stat-card">
              <span class="admin-stat-num">${stats.totalCategories}</span>
              <span class="admin-stat-label">Categories</span>
            </div>
            <div class="admin-stat-card">
              <span class="admin-stat-num">${stats.totalOrders}</span>
              <span class="admin-stat-label">Total Orders</span>
            </div>
            <div class="admin-stat-card">
              <span class="admin-stat-num">${stats.totalVisitors}</span>
              <span class="admin-stat-label">Total Visitors</span>
            </div>
          </section>

          <!-- Dynamic Workspace Content depending on selected Tab -->
          <section id="admin-subviewport">
            ${this.compileAdminTabHTML()}
          </section>

        </main>

      </div>

      <!-- Add/Edit Product Modal -->
      <div class="modal-backdrop" id="product-modal">
        <div class="admin-modal">
          <div class="modal-header">
            <h3 id="modal-title" style="font-size: 1.35rem;">Add New Product</h3>
            <span class="modal-close" onclick="window.app.closeProductModal()" style="font-size: 1.5rem; font-weight:700;">&times;</span>
          </div>
          <form id="product-form" onsubmit="window.app.handleProductSubmit(event)">
            <input type="hidden" id="prod-form-id">
            
            <div class="form-group">
              <label class="form-label" for="prod-name">Product Name</label>
              <input type="text" id="prod-name" class="form-control" required placeholder="e.g. Crocs Navy Blue">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="prod-category">Category</label>
                <select id="prod-category" class="form-control">
                  ${categories.map(c => `<option value="${c}">${c}</option>`).join("")}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="prod-image">Image path/URL</label>
                <input type="text" id="prod-image" class="form-control" placeholder="assets/crocs_navy.png">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="prod-price">Selling Price (₹)</label>
                <input type="number" id="prod-price" class="form-control" required placeholder="1499">
              </div>
              <div class="form-group">
                <label class="form-label" for="prod-original-price">Original Price (₹)</label>
                <input type="number" id="prod-original-price" class="form-control" required placeholder="2499">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="prod-sizes">Sizes (Comma separated)</label>
              <input type="text" id="prod-sizes" class="form-control" value="6, 7, 8, 9, 10" placeholder="e.g. 6, 7, 8, 9, 10">
            </div>

            <div class="form-group">
              <label class="form-label" for="prod-desc">Description</label>
              <textarea id="prod-desc" class="form-control" rows="4" placeholder="Enter detailed catalog features..."></textarea>
            </div>

            <div class="form-row mb-6">
              <div style="display:flex; align-items:center; gap:8px;">
                <input type="checkbox" id="prod-trending">
                <label for="prod-trending" style="font-weight:600; font-size:0.9rem; cursor:pointer;">Set as Trending</label>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <input type="checkbox" id="prod-bestseller">
                <label for="prod-bestseller" style="font-weight:600; font-size:0.9rem; cursor:pointer;">Set as Best Seller</label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-full">Save Product</button>
          </form>
        </div>
      </div>
    `;

    this.viewport.innerHTML = html;

    // Attach Admin Sub-routing
    window.app.setAdminTab = (tabName) => {
      this.adminTab = tabName;
      this.renderAdmin();
    };

    window.app.adminLogout = () => {
      sessionStorage.removeItem("admin_authenticated");
      window.location.hash = "#/";
      this.showToast("Logged out successfully.");
    };

    // Modal control actions
    window.app.openAddProductModal = () => {
      document.getElementById("modal-title").textContent = "Add New Product";
      document.getElementById("product-form").reset();
      document.getElementById("prod-form-id").value = "";
      document.getElementById("prod-sizes").value = "6, 7, 8, 9, 10";
      
      const modal = document.getElementById("product-modal");
      if (modal) modal.classList.add("active");
    };

    window.app.closeProductModal = () => {
      const modal = document.getElementById("product-modal");
      if (modal) modal.classList.remove("active");
    };

    // Edit Product modal populating
    window.app.openEditProductModal = (id) => {
      const activeProds = window.Store.getProducts();
      const p = activeProds.find(item => item.id === id);
      if (!p) return;

      document.getElementById("modal-title").textContent = "Edit Product Details";
      document.getElementById("prod-form-id").value = p.id;
      document.getElementById("prod-name").value = p.name;
      document.getElementById("prod-category").value = p.category;
      document.getElementById("prod-image").value = p.images[0];
      document.getElementById("prod-price").value = p.price;
      document.getElementById("prod-original-price").value = p.originalPrice;
      document.getElementById("prod-sizes").value = p.sizes.join(", ");
      document.getElementById("prod-desc").value = p.description;
      document.getElementById("prod-trending").checked = !!p.isTrending;
      document.getElementById("prod-bestseller").checked = !!p.isBestSeller;

      const modal = document.getElementById("product-modal");
      if (modal) modal.classList.add("active");
    };

    window.app.deleteProduct = (id) => {
      if (confirm("Are you sure you want to delete this product?")) {
        let activeProds = window.Store.getProducts();
        activeProds = activeProds.filter(p => p.id !== id);
        window.Store.saveProducts(activeProds);
        this.showToast("Product deleted successfully.");
        this.renderAdmin();
      }
    };

    // Modal submit handler
    window.app.handleProductSubmit = (e) => {
      e.preventDefault();
      const id = document.getElementById("prod-form-id").value;
      const name = document.getElementById("prod-name").value.trim();
      const category = document.getElementById("prod-category").value;
      const image = document.getElementById("prod-image").value.trim() || "assets/crocs_navy.png";
      const price = parseFloat(document.getElementById("prod-price").value);
      const originalPrice = parseFloat(document.getElementById("prod-original-price").value);
      const sizes = document.getElementById("prod-sizes").value.split(",").map(s => s.trim()).filter(Boolean);
      const description = document.getElementById("prod-desc").value.trim();
      const isTrending = document.getElementById("prod-trending").checked;
      const isBestSeller = document.getElementById("prod-bestseller").checked;

      let activeProds = window.Store.getProducts();

      if (id) {
        // Edit existing product
        activeProds = activeProds.map(p => {
          if (p.id === id) {
            return {
              ...p,
              name,
              category,
              images: [image],
              price,
              originalPrice,
              discount: Math.round(((originalPrice - price) / originalPrice) * 100),
              sizes,
              description,
              isTrending,
              isBestSeller
            };
          }
          return p;
        });
        this.showToast("Product updated successfully!");
      } else {
        // Add new product
        const newProd = {
          id: "prod-" + Date.now(),
          name,
          category,
          price,
          originalPrice,
          discount: Math.round(((originalPrice - price) / originalPrice) * 100),
          rating: 5.0,
          reviewsCount: 1,
          images: [image],
          sizes,
          description,
          inStock: true,
          isTrending,
          isBestSeller
        };
        activeProds.push(newProd);
        this.showToast("Product added successfully!");
      }

      window.Store.saveProducts(activeProds);
      window.app.closeProductModal();
      this.renderAdmin();
    };

    // Category CRUD actions
    window.app.openAddCategoryModal = () => {
      const catName = prompt("Enter new Category Name:");
      if (!catName || catName.trim() === "") return;
      const cleanName = catName.trim();
      const activeCats = window.Store.getCategories();
      
      if (activeCats.some(c => c.toLowerCase() === cleanName.toLowerCase())) {
        alert("This category already exists!");
        return;
      }

      activeCats.push(cleanName);
      window.Store.saveCategories(activeCats);
      this.showToast("Category added successfully.");
      this.renderAdmin();
    };

    window.app.deleteCategory = (catName) => {
      if (confirm(`Are you sure you want to delete category "${catName}"? This will not delete products under it, but they won't have a category filter.`)) {
        let activeCats = window.Store.getCategories();
        activeCats = activeCats.filter(c => c !== catName);
        window.Store.saveCategories(activeCats);
        this.showToast("Category deleted.");
        this.renderAdmin();
      }
    };

    // Settings submit handler
    window.app.handleSettingsSubmit = (e) => {
      e.preventDefault();
      const waNum = document.getElementById("set-wanum").value.trim();
      const address = document.getElementById("set-address").value.trim();
      const timings = document.getElementById("set-timings").value.trim();
      const delivery = document.getElementById("set-delivery").value.trim();
      const insta = document.getElementById("set-insta").value.trim();

      const updated = {
        storeName: "AS GADGETS STORE",
        whatsappNumber: waNum,
        whatsappNumberAlt: settings.whatsappNumberAlt || "7036622494",
        instagram: insta,
        address: address,
        googleMapsLink: settings.googleMapsLink || "https://maps.google.com/?q=AS+Gadgets+Store+Jangareddygudem",
        googleRating: settings.googleRating || "5.0",
        businessTimings: timings,
        deliveryInfo: delivery
      };

      window.Store.saveSettings(updated);
      this.showToast("Store settings saved!");
      
      // Update global footer links instantly
      const footerAddr = document.getElementById("footer-address-text");
      if (footerAddr) footerAddr.textContent = address;
      const footerTimings = document.getElementById("footer-timings-text");
      if (footerTimings) footerTimings.textContent = timings;

      this.renderAdmin();
    };
  }

  // Admin login screen
  renderAdminLogin() {
    this.viewport.innerHTML = `
      <div class="container section-padding flex-center" style="min-height: calc(100vh - var(--header-height));">
        <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: 40px; width: 100%; max-width: 400px; box-shadow: var(--shadow-md);">
          <div class="text-center mb-6">
            <h2 style="font-size: 1.5rem; margin-bottom: 4px;">Owner Dashboard</h2>
            <p style="color: var(--text-secondary); font-size: 0.88rem;">Access AS Gadgets catalog management</p>
          </div>
          <form onsubmit="window.app.handleAdminLogin(event)">
            <div class="form-group">
              <label class="form-label" for="admin-pass">Access Code</label>
              <input type="password" id="admin-pass" class="form-control" placeholder="Enter access password" required autofocus>
              <span style="font-size: 0.75rem; color: var(--text-muted); display:block; margin-top: 6px;">💡 Try password: <strong>admin123</strong></span>
            </div>
            <button type="submit" class="btn btn-primary btn-full mt-4">Login Dashboard</button>
          </form>
        </div>
      </div>
    `;

    window.app.handleAdminLogin = (e) => {
      e.preventDefault();
      const code = document.getElementById("admin-pass").value;
      if (code === "admin123") {
        sessionStorage.setItem("admin_authenticated", "true");
        this.showToast("Access Authorized!");
        this.renderAdmin();
      } else {
        alert("Invalid access password! Please use 'admin123'.");
      }
    };
  }

  // Renders correct lists inside the admin sub-viewports
  compileAdminTabHTML() {
    const products = window.Store.getProducts();
    const categories = window.Store.getCategories();
    const settings = window.Store.getSettings();

    if (this.adminTab === "products") {
      return `
        <div class="admin-table-wrapper">
          <table class="admin-table">
            <thead>
              <tr>
                <th width="80">Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Selling Price</th>
                <th>Original Price</th>
                <th>Stock / Status</th>
                <th width="140">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${products.map(p => `
                <tr>
                  <td>
                    <div class="admin-table-img">
                      <img src="${p.images[0]}" alt="${p.name}">
                    </div>
                  </td>
                  <td>
                    <strong style="display:block;">${p.name}</strong>
                    ${p.isTrending ? '<span style="background-color: var(--bg-tertiary); font-size: 0.7rem; font-weight:700; padding: 2px 6px; border-radius: 4px; margin-right:4px;">Trending</span>' : ''}
                    ${p.isBestSeller ? '<span style="background-color: var(--bg-dark); color: #fff; font-size: 0.7rem; font-weight:700; padding: 2px 6px; border-radius: 4px;">Best Seller</span>' : ''}
                  </td>
                  <td>${p.category}</td>
                  <td><strong>₹${p.price}</strong></td>
                  <td style="text-decoration: line-through; color: var(--text-muted);">₹${p.originalPrice}</td>
                  <td>
                    <span style="color: var(--whatsapp-color); font-weight:700;">● Active In Stock</span>
                  </td>
                  <td>
                    <div class="admin-actions-cell">
                      <span class="admin-edit-btn" onclick="window.app.openEditProductModal('${p.id}')">Edit</span>
                      <span class="admin-delete-btn" onclick="window.app.deleteProduct('${p.id}')">Delete</span>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    } 
    
    if (this.adminTab === "categories") {
      return `
        <div class="admin-table-wrapper" style="max-width: 600px;">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Category Name</th>
                <th width="120" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              ${categories.map(c => `
                <tr>
                  <td><strong>${c}</strong></td>
                  <td class="text-center">
                    <span class="admin-delete-btn" onclick="window.app.deleteCategory('${c}')">Delete</span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    if (this.adminTab === "settings") {
      return `
        <div style="background-color: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: 36px; max-width: 700px;">
          <h2 class="mb-6" style="font-size: 1.35rem;">Store Configurations</h2>
          <form onsubmit="window.app.handleSettingsSubmit(event)">
            
            <div class="form-group">
              <label class="form-label" for="set-wanum">WhatsApp Business Phone (Primary)</label>
              <input type="text" id="set-wanum" class="form-control" value="${settings.whatsappNumber}" required placeholder="e.g. 8555939592">
              <span style="font-size: 0.75rem; color: var(--text-muted); display:block; margin-top: 4px;">Enter Indian phone number without country code or spaces.</span>
            </div>

            <div class="form-group">
              <label class="form-label" for="set-insta">Instagram Handle</label>
              <input type="text" id="set-insta" class="form-control" value="${settings.instagram}" placeholder="as_gadget_store_jrg">
            </div>

            <div class="form-group">
              <label class="form-label" for="set-address">Store Physical Address</label>
              <textarea id="set-address" class="form-control" rows="3" required placeholder="Enter full address...">${settings.address}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label" for="set-timings">Store Timing Info</label>
              <input type="text" id="set-timings" class="form-control" value="${settings.businessTimings}" placeholder="9:30 AM - 9:30 PM (All Days)">
            </div>

            <div class="form-group">
              <label class="form-label" for="set-delivery">Delivery Information Summary</label>
              <textarea id="set-delivery" class="form-control" rows="3" placeholder="Enter delivery conditions...">${settings.deliveryInfo}</textarea>
            </div>

            <button type="submit" class="btn btn-primary mt-4">Save Store Settings</button>
          </form>
        </div>
      `;
    }

    return "";
  }
}

// Instantiate App on Load
window.addEventListener("DOMContentLoaded", () => {
  window.app = new AppController();
});
