/* Interactivity - Nest Grocery Stores */

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeSwitch = document.querySelector('#theme-switch');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark' && themeSwitch) {
            themeSwitch.checked = true;
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', function (e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Mobile Menu Toggle logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('fa-bars');
            mobileToggle.classList.toggle('fa-times');
        });
    }

    // Pagination Data (Shop - 5 Pages of 8 Products Each)
    const shopProductsData = [
        // Page 1
        [
            { name: 'Red Delicious Apples', price: '$4.99', cat: 'Fruits', img: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5 },
            { name: 'Pure Organic Milk', price: '$3.50', cat: 'Dairy', img: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Roasted Almond Mix', price: '$12.00', cat: 'Snacks', img: 'https://images.pexels.com/photos/1660010/pexels-photo-1660010.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.0 },
            { name: 'Iced Lemon Tea', price: '$2.99', cat: 'Beverages', img: 'https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Sweet Strawberries', price: '$6.80', cat: 'Fruits', img: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Whole Wheat Bread', price: '$3.75', cat: 'Bakery', img: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.0 },
            { name: 'Natural Greek Yogurt', price: '$5.25', cat: 'Dairy', img: 'https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Fresh Green Broccoli', price: '$2.40', cat: 'Vegetables', img: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 }
        ],
        // Page 2
        [
            { name: 'Cavendish Bananas', price: '$1.99', cat: 'Fruits', img: 'https://images.pexels.com/photos/2286777/pexels-photo-2286777.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 },
            { name: 'Farm Fresh Eggs', price: '$5.50', cat: 'Dairy', img: 'https://images.pexels.com/photos/4913361/pexels-photo-4913361.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Cheddar Cheese Block', price: '$7.20', cat: 'Dairy', img: 'https://images.pexels.com/photos/4187779/pexels-photo-4187779.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6 },
            { name: 'Espresso Coffee Beans', price: '$14.99', cat: 'Beverages', img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 },
            { name: 'Organic Oranges', price: '$3.99', cat: 'Fruits', img: 'https://images.pexels.com/photos/2090901/pexels-photo-2090901.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5 },
            { name: 'Fresh-Baked Bagels', price: '$4.50', cat: 'Bakery', img: 'https://images.pexels.com/photos/209214/pexels-photo-209214.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
            { name: 'Churned Salted Butter', price: '$4.25', cat: 'Dairy', img: 'https://images.pexels.com/photos/2539091/pexels-photo-2539091.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Sweet Baby Carrots', price: '$1.80', cat: 'Vegetables', img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 }
        ],
        // Page 3
        [
            { name: 'Honey Mango', price: '$2.50', cat: 'Fruits', img: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 },
            { name: 'Organic Chicken Breast', price: '$8.99', cat: 'Meat', img: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
            { name: 'Premium Beef Steak', price: '$15.50', cat: 'Meat', img: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Organic Penne Pasta', price: '$3.20', cat: 'Pantry', img: 'https://images.pexels.com/photos/8066/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400', rating: 4.5 },
            { name: 'Basmati Rice (5kg)', price: '$18.00', cat: 'Pantry', img: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 },
            { name: 'Red Cherry Tomatoes', price: '$3.75', cat: 'Vegetables', img: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
            { name: 'Purple Red Onions', price: '$1.25', cat: 'Vegetables', img: 'https://images.pexels.com/photos/144248/potatoes-vegetables-market-fresh-144248.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.4 },
            { name: 'Golden Russet Potatoes', price: '$2.40', cat: 'Vegetables', img: 'https://images.pexels.com/photos/172424/pexels-photo-172424.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6 }
        ],
        // Page 4
        [
            { name: 'Fresh Tropical Pineapple', price: '$5.50', cat: 'Fruits', img: 'https://images.pexels.com/photos/4412921/pexels-photo-4412921.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 },
            { name: 'Wild Atlantic Salmon', price: '$12.99', cat: 'Meat', img: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Jumbo Pacific Shrimp', price: '$14.20', cat: 'Meat', img: 'https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 },
            { name: 'Garden Caesar Salad', price: '$7.99', cat: 'Vegetables', img: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6 },
            { name: 'Balsamic Herb Dressing', price: '$4.50', cat: 'Pantry', img: 'https://images.pexels.com/photos/4113222/pexels-photo-4113222.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5 },
            { name: 'Extra Virgin Olive Oil', price: '$16.75', cat: 'Pantry', img: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Fresh Peeled Garlic', price: '$3.25', cat: 'Vegetables', img: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
            { name: 'Natural Ginger Root', price: '$2.40', cat: 'Vegetables', img: 'https://images.pexels.com/photos/161556/ginger-root-food-health-161556.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 }
        ],
        // Page 5
        [
            { name: 'Sweet Black Grapes', price: '$5.99', cat: 'Fruits', img: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
            { name: 'Pure Clover Honey', price: '$9.50', cat: 'Pantry', img: 'https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5.0 },
            { name: 'Organic Strawberry Jam', price: '$6.20', cat: 'Pantry', img: 'https://images.pexels.com/photos/4109910/pexels-photo-4109910.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 },
            { name: 'Whole Grain Cornflakes', price: '$4.99', cat: 'Snacks', img: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5 },
            { name: 'Rolled Oats (1kg)', price: '$5.50', cat: 'Pantry', img: 'https://images.pexels.com/photos/1310151/pexels-photo-1310151.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
            { name: 'Organic Almond Milk', price: '$3.75', cat: 'Dairy', img: 'https://images.pexels.com/photos/1155982/pexels-photo-1155982.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 },
            { name: 'Premium Shelled Walnuts', price: '$11.25', cat: 'Snacks', img: 'https://images.pexels.com/photos/129555/pexels-photo-129555.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6 },
            { name: 'Swiss Dark Chocolate', price: '$4.40', cat: 'Snacks', img: 'https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 }
        ]
    ];

    // Pagination Data (Categories - 3 Pages)
    const categoriesData = [
        // Page 1
        [
            { title: 'Fruits & Vegetables', dsc: 'Freshly harvested daily. Discover local and exotic produce for your healthy lifestyle.', img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { title: 'Dairy Products', dsc: 'Organic milk, artisanal cheeses, and fresh butter sourced from the finest local dairies.', img: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { title: 'Crunchy Snacks', dsc: 'Nutritious nuts, organic chips, and healthy bars for your between-meal cravings.', img: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800' }
        ],
        // Page 2
        [
            { title: 'Refreshing Beverages', dsc: 'Cold-pressed juices, pure spring water, coffee beans, and premium tea collections.', img: 'https://images.pexels.com/photos/1209462/pexels-photo-1209462.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { title: 'Household Essentials', dsc: 'Eco-friendly cleaning supplies and sustainable kitchen essentials for your home.', img: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { title: 'Fresh Bakery', dsc: 'Warm loaves, artisanal pastries, and whole-grain breads baked fresh every morning.', img: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=800' }
        ],
        // Page 3
        [
            { title: 'Frozen Foods', dsc: 'Premium ice creams, quick-thaw meals, and farm-fresh frozen vegetables.', img: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { title: 'Organic Pantry', dsc: 'Gluten-free grains, cold-pressed oils, and artisanal spices for gourmet cooking.', img: 'https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { title: 'Baby Care', dsc: 'Gentle organic baby food, chemical-free wipes, and safe personal care products.', img: 'https://images.pexels.com/photos/3845492/pexels-photo-3845492.jpeg?auto=compress&cs=tinysrgb&w=800' }
        ]
    ];

    function renderProducts(page) {
        const grid = document.querySelector('#shop-products');
        if (!grid) return;

        grid.style.opacity = '0';
        setTimeout(() => {
            const products = shopProductsData[page - 1];
            if (!products) {
                console.error(`No products data found for page ${page}`);
                return;
            }
            grid.innerHTML = products.map(p => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&w=400'">
                        <button class="wishlist-btn"><i class="far fa-heart"></i></button>
                    </div>
                    <div class="product-info">
                        <span class="product-cat">${p.cat}</span>
                        <h3 class="product-name">${p.name}</h3>
                        <div class="product-rating">${Array(Math.floor(p.rating)).fill('<i class="fas fa-star"></i>').join('')}${p.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''} (${p.rating})</div>
                        <div class="product-price-row"><span class="product-price">${p.price}</span><button class="add-btn">Add to Cart</button></div>
                    </div>
                </div>
            `).join('');
            if (typeof syncWishlistBtns === 'function') syncWishlistBtns();
            grid.style.opacity = '1';
        }, 300);
    }

    function renderCategories(page) {
        const grid = document.querySelector('#category-grid');
        if (!grid) return;

        grid.style.opacity = '0';
        setTimeout(() => {
            const categories = categoriesData[page - 1];
            if (!categories) {
                console.error(`No categories data found for page ${page}`);
                return;
            }
            grid.innerHTML = categories.map(c => `
                <div class="blog-card">
                    <div class="blog-image">
                        <img src="${c.img}" alt="${c.title}" onerror="this.src='https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&w=400'">
                    </div>
                    <div class="blog-content" style="text-align: center;">
                        <h2 class="blog-title" style="font-size: 1.8rem;">${c.title}</h2>
                        <p class="blog-desc">${c.dsc}</p>
                        <a href="shop.html" class="btn btn-pink">Explore Now</a>
                    </div>
                </div>
            `).join('');
            grid.style.opacity = '1';
        }, 300);
    }

    // Simple URL Parameter helper
    function getPageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('page')) || 1;
    }

    // Pagination Click Events
    let currentShopPage = 1;
    let currentCatPage = 1;

    const shopPagesContainer = document.querySelector('#shop-pages');
    if (shopPagesContainer) {
        currentShopPage = getPageFromURL();
        renderProducts(currentShopPage);
        updateShopUI(); // sync the active states

        shopPagesContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.page-number');
            if (btn) {
                e.preventDefault(); // prevent actual link navigation
                currentShopPage = parseInt(btn.getAttribute('data-page'));
                // Use pushState to update URL without reload
                const newURL = window.location.pathname + '?page=' + currentShopPage;
                window.history.pushState({ page: currentShopPage }, '', newURL);
                updateShopUI();
            }
        });
    }

    function updateShopUI() {
        renderProducts(currentShopPage);
        const allShopBtns = document.querySelectorAll('#shop-pages .page-number');
        allShopBtns.forEach(p => p.classList.remove('active'));
        const activeBtn = document.querySelector(`#shop-pages .page-number[data-page="${currentShopPage}"]`);
        if (activeBtn) activeBtn.classList.add('active');
        window.scrollTo({ top: 300, behavior: 'smooth' });
    }

    const catPagesContainer = document.querySelector('#cat-pages');
    if (catPagesContainer) {
        currentCatPage = getPageFromURL();
        renderCategories(currentCatPage);
        updateCatUI(); // sync active states

        catPagesContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.page-number');
            if (btn) {
                e.preventDefault(); // prevent actual link navigation
                currentCatPage = parseInt(btn.getAttribute('data-page'));
                // Use pushState to update URL without reload
                const newURL = window.location.pathname + '?page=' + currentCatPage;
                window.history.pushState({ page: currentCatPage }, '', newURL);
                updateCatUI();
            }
        });
    }

    function updateCatUI() {
        renderCategories(currentCatPage);
        const allCatBtns = document.querySelectorAll('#cat-pages .page-number');
        allCatBtns.forEach(p => p.classList.remove('active'));
        const activeBtn = document.querySelector(`#cat-pages .page-number[data-page="${currentCatPage}"]`);
        if (activeBtn) activeBtn.classList.add('active');
        window.scrollTo({ top: 200, behavior: 'smooth' });
    }

    // Handle back/forward buttons
    window.addEventListener('popstate', (event) => {
        if (shopPagesContainer) {
            currentShopPage = getPageFromURL();
            updateShopUI();
        }
        if (catPagesContainer) {
            currentCatPage = getPageFromURL();
            updateCatUI();
        }
    });

    // =====================================================
    // CART & WISHLIST SYSTEM (localStorage + live badges)
    // =====================================================

    // --- Data helpers ---
    function getCart() {
        return JSON.parse(localStorage.getItem('nestCart')) || [];
    }
    function saveCart(cart) {
        localStorage.setItem('nestCart', JSON.stringify(cart));
    }
    function getWishlist() {
        return JSON.parse(localStorage.getItem('nestWishlist')) || [];
    }
    function saveWishlist(wishlist) {
        localStorage.setItem('nestWishlist', JSON.stringify(wishlist));
    }

    // --- Badge injection ---
    // Make sure every header icon-btn has a badge span
    function ensureBadges() {
        const wishlistBtns = document.querySelectorAll('a[title="Wishlist"].icon-btn');
        const cartBtns = document.querySelectorAll('a[title="Cart"].icon-btn');
        [...wishlistBtns, ...cartBtns].forEach(btn => {
            if (!btn.querySelector('.badge')) {
                const badge = document.createElement('span');
                badge.className = 'badge';
                badge.textContent = '0';
                btn.appendChild(badge);
            }
        });
    }

    // --- Badge update ---
    function updateCartBadge() {
        const cart = getCart();
        const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        document.querySelectorAll('a[title="Cart"].icon-btn .badge').forEach(b => {
            b.textContent = count;
            b.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function updateWishlistBadge() {
        const count = getWishlist().length;
        document.querySelectorAll('a[title="Wishlist"].icon-btn .badge').forEach(b => {
            b.textContent = count;
            b.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // --- Add to cart (no duplicates — increases qty instead) ---
    function addToCart(productName, productPrice, productImg, productCat) {
        const cart = getCart();
        const existing = cart.find(i => i.name === productName);
        if (existing) {
            existing.qty = (existing.qty || 1) + 1;
        } else {
            cart.push({ name: productName, price: productPrice, img: productImg, cat: productCat, qty: 1 });
        }
        saveCart(cart);
        updateCartBadge();
        showToast(`🛒 "${productName}" added to cart!`, 'cart');
    }

    // --- Add / Remove wishlist ---
    function toggleWishlist(productName, productPrice, productImg, productCat, btn) {
        const wishlist = getWishlist();
        const idx = wishlist.findIndex(i => i.name === productName);
        if (idx === -1) {
            wishlist.push({ name: productName, price: productPrice, img: productImg, cat: productCat });
            saveWishlist(wishlist);
            if (btn) { btn.innerHTML = '<i class="fas fa-heart"></i>'; btn.style.color = 'var(--primary-pink)'; }
            showToast(`❤️ "${productName}" added to wishlist!`, 'wishlist');
        } else {
            wishlist.splice(idx, 1);
            saveWishlist(wishlist);
            if (btn) { btn.innerHTML = '<i class="far fa-heart"></i>'; btn.style.color = ''; }
            showToast(`💔 "${productName}" removed from wishlist.`, 'wishlist');
        }
        updateWishlistBadge();
    }

    // --- Toast notification ---
    function showToast(msg, type) {
        const old = document.querySelector('.nest-toast');
        if (old) old.remove();
        const toast = document.createElement('div');
        toast.className = 'nest-toast';
        toast.style.cssText = `
            position:fixed; bottom:25px; right:25px; z-index:9999;
            background: ${type === 'cart' ? 'linear-gradient(135deg,#ff4d8d,#ff8fab)' : 'linear-gradient(135deg,#ffd60a,#ffb300)'};
            color: ${type === 'cart' ? 'white' : '#333'};
            padding:12px 22px; border-radius:12px; font-weight:600; font-size:0.9rem;
            box-shadow:0 8px 25px rgba(0,0,0,0.2); animation: slideInToast 0.3s ease;
        `;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; setTimeout(() => toast.remove(), 400); }, 2200);
    }

    // --- Sync wishlist-btn states after products render ---
    function syncWishlistBtns() {
        const wishlist = getWishlist();
        document.querySelectorAll('.product-card').forEach(card => {
            const nameEl = card.querySelector('.product-name');
            const btn = card.querySelector('.wishlist-btn');
            if (!nameEl || !btn) return;
            const name = nameEl.textContent.trim();
            const inWishlist = wishlist.some(i => i.name === name);
            btn.innerHTML = inWishlist ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
            if (inWishlist) btn.style.color = 'var(--primary-pink)';
        });
    }

    // --- Global click delegation ---
    document.addEventListener('click', (e) => {
        // Add to Cart button
        const addBtn = e.target.closest('.add-btn');
        if (addBtn) {
            const card = addBtn.closest('.product-card');
            if (card) {
                const name = card.querySelector('.product-name')?.textContent.trim() || 'Product';
                const price = card.querySelector('.product-price')?.textContent.trim() || '';
                const img = card.querySelector('.product-image img')?.src || '';
                const cat = card.querySelector('.product-cat')?.textContent.trim() || '';
                addToCart(name, price, img, cat);
            }
            return;
        }

        // Wishlist button on product card
        const wBtn = e.target.closest('.wishlist-btn');
        if (wBtn && !wBtn.classList.contains('remove-wishlist')) {
            const card = wBtn.closest('.product-card');
            if (card) {
                const name = card.querySelector('.product-name')?.textContent.trim() || 'Product';
                const price = card.querySelector('.product-price')?.textContent.trim() || '';
                const img = card.querySelector('.product-image img')?.src || '';
                const cat = card.querySelector('.product-cat')?.textContent.trim() || '';
                toggleWishlist(name, price, img, cat, wBtn);
            }
            return;
        }
    });

    // --- Wishlist page rendering ---
    function renderWishlist() {
        const wishlistContainer = document.querySelector('#wishlist-container');
        if (!wishlistContainer) return;
        const wishlistData = getWishlist();

        if (wishlistData.length === 0) {
            wishlistContainer.innerHTML = `
                <div class="empty-state" style="text-align:center;padding:60px 0;">
                    <i class="far fa-heart" style="font-size:5rem;color:var(--primary-pink);opacity:0.2;margin-bottom:20px;display:block;"></i>
                    <h2 style="margin-bottom:15px;">Your wishlist is empty</h2>
                    <p style="color:var(--text-muted);margin-bottom:30px;">Save your favourite items to keep track of them.</p>
                    <a href="shop.html" class="btn btn-pink">Shop Now</a>
                </div>`;
            return;
        }

        wishlistContainer.innerHTML = `
            <div class="products-grid">
                ${wishlistData.map((p, idx) => `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&w=400'">
                            <button class="wishlist-btn remove-wishlist" data-index="${idx}" style="color:var(--primary-pink);" title="Remove from wishlist"><i class="fas fa-trash-alt"></i></button>
                        </div>
                        <div class="product-info">
                            <span class="product-cat">${p.cat}</span>
                            <h3 class="product-name">${p.name}</h3>
                            <div class="product-price-row">
                                <span class="product-price">${p.price}</span>
                                <button class="add-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>`).join('')}
            </div>`;

        document.querySelectorAll('.remove-wishlist').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                const wishlist = getWishlist();
                wishlist.splice(idx, 1);
                saveWishlist(wishlist);
                updateWishlistBadge();
                renderWishlist();
            });
        });
    }

    // --- Dashboard nav ---
    const dashboardNavLinks = document.querySelectorAll('.dashboard-nav-link');
    if (dashboardNavLinks.length > 0) {
        dashboardNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const target = link.getAttribute('data-target');
                if (target) {
                    e.preventDefault();
                    dashboardNavLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    // --- Auth forms ---
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registration Successful! Redirecting to Login page...');
            window.location.href = 'login.html';
        });
    }
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }

    // --- Init ---
    ensureBadges();
    updateCartBadge();
    updateWishlistBadge();
    renderWishlist();
});

