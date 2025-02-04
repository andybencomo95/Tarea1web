const productsSection = document.querySelector('.products');
const cartItemsList = document.querySelector('.cart-items');
const cartCountSpan = document.querySelector('.cart-count');
const totalPriceSpan = document.querySelector('.total-price');
const subtotalPriceSpan = document.querySelector('.subtotal-price');
const filterButtons = document.querySelectorAll('.filter-button');
const checkoutBtn = document.querySelector('.checkout-btn');

let cart = [];
let currentCategory = 'all';

const products = [
    { 
        id: 1, 
        name: 'Reloj Inteligente Pro', 
        price: 199.99, 
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400' 
    },
    { 
        id: 2, 
        name: 'Chaqueta de Mezclilla', 
        price: 89.99, 
        category: 'clothing',
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400' 
    },
    { 
        id: 3, 
        name: 'Auriculares Inalámbricos', 
        price: 129.99, 
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400' 
    },
    { 
        id: 4, 
        name: 'Mochila de Cuero', 
        price: 79.99, 
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' 
    },
    { 
        id: 5, 
        name: 'Zapatillas Premium', 
        price: 149.99, 
        category: 'clothing',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400' 
    },
    { 
        id: 6, 
        name: 'Gafas de Sol Elegantes', 
        price: 59.99, 
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400' 
    }
];

// Filter products by category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.dataset.category;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProducts();
    });
});

function renderProducts() {
    productsSection.innerHTML = '';
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
        `;
        productsSection.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({ product, quantity: 1 });
        }
    }
    
    // Add animation to cart icon
    cartCountSpan.style.animation = 'none';
    setTimeout(() => {
        cartCountSpan.style.animation = 'fadeIn 0.3s ease';
    }, 10);
    
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCart();
}

function updateQuantity(productId, delta) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity = Math.max(0, cartItem.quantity + delta);
        if (cartItem.quantity === 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    renderCartItems();
    updateCartCount();
    updateTotalPrice();
}

function renderCartItems() {
    cartItemsList.innerHTML = '';
    cart.forEach(({product, quantity}) => {
        const cartItemLi = document.createElement('li');
        cartItemLi.classList.add('cart-item');
        cartItemLi.innerHTML = `
            <div class="cart-item-info">
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <span class="cart-item-name">${product.name}</span>
                    <span class="cart-item-price">$${product.price.toFixed(2)}</span>
                </div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)" aria-label="Disminuir cantidad">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity">${quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)" aria-label="Aumentar cantidad">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        cartItemsList.appendChild(cartItemLi);
    });
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;
}

function updateTotalPrice() {
    const subtotal = cart.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0);
    const tax = subtotal * 0.10; // 10% tax
    const total = subtotal + tax;
    
    subtotalPriceSpan.textContent = subtotal.toFixed(2);
    totalPriceSpan.textContent = total.toFixed(2);
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('¡Gracias por tu compra! Tu pedido ha sido realizado.');
        cart = [];
        updateCart();
    } else {
        alert('Tu carrito está vacío. Por favor, agrega algunos productos antes de finalizar la compra.');
    }
});

renderProducts();
updateCart();
