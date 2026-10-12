// ===================================================================
// SoleStride Shoes - Interactive Product Catalogue (Week 5 Lab)
// ===================================================================

// Shoe products dataset
const products = [
    {
        id: 1,
        name: "Nike Air Zoom Pegasus 40",
        brand: "Nike",
        category: "Running",
        price: 130.00,
        description: "Responsive everyday workhorse running shoe with dual Zoom Air units."
    },
    {
        id: 2,
        name: "Adidas Ultraboost Light",
        brand: "Adidas",
        category: "Running / Lifestyle",
        price: 190.00,
        description: "Epic energy return with lightest-ever Boost midsole cushioning."
    },
    {
        id: 3,
        name: "Puma Smash V2 Classic",
        brand: "Puma",
        category: "Casual Sneaker",
        price: 55.00,
        description: "Clean tennis-inspired silhouette made with soft durable leather."
    },
    {
        id: 4,
        name: "Reebok Club C 85 Vintage",
        brand: "Reebok",
        category: "Casual Sneaker",
        price: 85.00,
        description: "Retro court shoe featuring soft garment leather upper and terry lining."
    },
    {
        id: 5,
        name: "New Balance Fresh Foam 1080",
        brand: "New Balance",
        category: "Max Cushion Running",
        price: 160.00,
        description: "Plush comfort underfoot engineered for long-distance marathon training."
    },
    {
        id: 6,
        name: "Timberland 6-Inch Premium Boot",
        brand: "Timberland",
        category: "Outdoor Boot",
        price: 210.00,
        description: "Waterproof seam-sealed nubuck leather boot with rugged rubber lug outsole."
    },
    {
        id: 7,
        name: "Converse Chuck Taylor All Star",
        brand: "Converse",
        category: "Canvas High-Top",
        price: 65.00,
        description: "Iconic high-top silhouette with lightweight canvas and ankle patch."
    },
    {
        id: 8,
        name: "Vans Old Skool Skate Shoes",
        brand: "Vans",
        category: "Skate / Casual",
        price: 70.00,
        description: "Classic skate shoe with signature side stripe and reinforced toe caps."
    }
];

// Shopping Cart state
let cart = [];

// DOM references
const productContainer = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const cartCountBadge = document.getElementById("cartCount");
const toastElement = document.getElementById("toast");

/**
 * Render shoe product cards dynamically inside productGrid
 * @param {Array} items - List of products to display
 */
function renderProducts(items) {
    productContainer.innerHTML = "";

    if (items.length === 0) {
        productContainer.innerHTML = `
            <div class="no-results">
                <h3>No shoes found matching your search.</h3>
                <p>Try searching with another keyword like "Nike", "Running", or "Boot".</p>
            </div>
        `;
        return;
    }

    items.forEach(product => {
        const card = document.createElement("article");
        card.className = "shoe-card";

        card.innerHTML = `
            <div>
                <span class="shoe-tag">${product.category}</span>
                <h3 class="shoe-title">${product.name}</h3>
                <p class="shoe-brand">Brand: <strong>${product.brand}</strong></p>
                <p class="shoe-description">${product.description}</p>
            </div>
            <div class="shoe-footer">
                <span class="shoe-price">$${product.price.toFixed(2)}</span>
                <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productContainer.appendChild(card);
    });

    // Attach Add to Cart event listeners to all generated buttons
    const addButtons = document.querySelectorAll(".btn-add-cart");
    addButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = parseInt(this.getAttribute("data-id"));
            addToCart(productId);
        });
    });
}

/**
 * Filter and sort products according to user input
 */
function filterAndSortProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const sortValue = sortSelect.value;

    // 1. Search filtering (by name or brand)
    let filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    // 2. Sorting by price
    if (sortValue === "low-to-high") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high-to-low") {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

/**
 * Add product to cart and update cart count
 * @param {number} productId 
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    cartCountBadge.textContent = cart.length;

    showToast(`Added "${product.name}" to your cart!`);
}

/**
 * Show temporary toast alert
 * @param {string} message 
 */
function showToast(message) {
    toastElement.textContent = message;
    toastElement.classList.add("show");
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 2200);
}

// Event Listeners for search and sort controls
document.addEventListener("DOMContentLoaded", () => {
    // Initial render
    renderProducts(products);

    // Real-time search filter
    searchInput.addEventListener("input", filterAndSortProducts);

    // Sort selection change
    sortSelect.addEventListener("change", filterAndSortProducts);
});
