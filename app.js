// Variables globales
let cart = [];
let filteredProducts = [...products];
let currentCategory = "all";
let selectedBrands = [];
let selectedRopaTypes = [];
let selectedPrice = 300;
let selectedSize = "";
let selectedRopaSize = "";

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const checkoutModal = document.getElementById("checkoutModal");
const closeButtons = document.querySelectorAll(".close-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
const brandFilters = document.querySelectorAll(".brand-filter");
const ropaTypeFilters = document.querySelectorAll(".ropa-type-filter");
const sizeFilter = document.getElementById("sizeFilter");
const sizeRopaFilter = document.getElementById("sizeRopaFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutForm = document.getElementById("checkoutForm");
const zapatillasFilters = document.getElementById("zapatillasFilters");
const ropaFilters = document.getElementById("ropaFilters");

// Event Listeners
cartBtn.addEventListener("click", () => {
    cartModal.classList.remove("hidden");
    renderCart();
});

checkoutBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
});

closeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.closest(".modal").classList.add("hidden");
    });
});

window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.classList.add("hidden");
    }
    if (e.target === checkoutModal) {
        checkoutModal.classList.add("hidden");
    }
});

// Filtros de categoría
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        
        // Mostrar/ocultar filtros específicos
        if (currentCategory === "zapatillas") {
            zapatillasFilters.classList.remove("hidden");
            ropaFilters.classList.add("hidden");
        } else if (currentCategory === "ropa") {
            ropaFilters.classList.remove("hidden");
            zapatillasFilters.classList.add("hidden");
        } else {
            zapatillasFilters.classList.add("hidden");
            ropaFilters.classList.add("hidden");
        }
        
        applyFilters();
    });
});

// Filtros de marca (zapatillas)
brandFilters.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        selectedBrands = Array.from(brandFilters)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        applyFilters();
    });
});

// Filtros de tipo (ropa/accesorios)
ropaTypeFilters.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        selectedRopaTypes = Array.from(ropaTypeFilters)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        applyFilters();
    });
});

// Filtro de talle (zapatillas)
sizeFilter.addEventListener("change", () => {
    selectedSize = sizeFilter.value;
    applyFilters();
});

// Filtro de talle (ropa)
sizeRopaFilter.addEventListener("change", () => {
    selectedRopaSize = sizeRopaFilter.value;
    applyFilters();
});

// Filtro de precio
priceRange.addEventListener("input", () => {
    selectedPrice = parseInt(priceRange.value);
    priceValue.textContent = selectedPrice;
    applyFilters();
});

// Función para aplicar todos los filtros
function applyFilters() {
    let filtered = [...products];

    // Filtro de categoría
    if (currentCategory !== "all") {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Filtro de marca (solo para zapatillas)
    if (currentCategory === "zapatillas" && selectedBrands.length > 0) {
        filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Filtro de tipo de ropa
    if (currentCategory === "ropa" && selectedRopaTypes.length > 0) {
        filtered = filtered.filter(p => selectedRopaTypes.includes(p.type));
    }

    // Filtro de talle (zapatillas)
    if (currentCategory === "zapatillas" && selectedSize) {
        filtered = filtered.filter(p => p.sizes.includes(selectedSize));
    }

    // Filtro de talle (ropa)
    if (currentCategory === "ropa" && selectedRopaSize) {
        filtered = filtered.filter(p => p.sizes.includes(selectedRopaSize));
    }

    // Filtro de precio
    filtered = filtered.filter(p => p.price <= selectedPrice);

    filteredProducts = filtered;
    renderProducts();
}

// Función para renderizar productos
function renderProducts() {
    productsGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">
                <p style="font-size: 18px;">No hay productos que coincidan con tus filtros</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        let sizeOptions = product.sizes.map(size => 
            `<option value="${size}">${size}</option>`
        ).join("");

        card.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-details">${product.description}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="size-selector">
                    <select class="size-select" data-product-id="${product.id}">
                        <option value="">Seleccionar talle</option>
                        ${sizeOptions}
                    </select>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    Agregar al carrito
                </button>
            </div>
        `;

        productsGrid.appendChild(card);

        // Event listener para agregar al carrito
        const addBtn = card.querySelector(".add-to-cart-btn");
        const sizeSelect = card.querySelector(".size-select");

        addBtn.addEventListener("click", () => {
            const selectedSize = sizeSelect.value;
            if (!selectedSize) {
                alert("Por favor selecciona un talle");
                return;
            }
            addToCart(product, selectedSize);
            sizeSelect.value = "";
        });
    });
}

// Función para agregar productos al carrito
function addToCart(product, size) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            size: size,
            quantity: 1
        });
    }

    updateCartCount();
    showNotification(`${product.name} agregado al carrito`);
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").textContent = totalItems;
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Función para renderizar el carrito
function renderCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceSpan = document.getElementById("totalPrice");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>🛒 Tu carrito está vacío</p>
            </div>
        `;
        totalPriceSpan.textContent = "0.00";
        document.querySelector(".checkout-btn").disabled = true;
        return;
    }

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">${item.brand} - Talle: ${item.size}</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" data-index="${index}" data-action="decrease">−</button>
                    <input type="number" value="${item.quantity}" min="1" class="qty-input" data-index="${index}" readonly>
                    <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
                </div>
            </div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            <button class="remove-btn" data-index="${index}">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Event listeners para cantidad
    document.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(btn.dataset.index);
            const action = btn.dataset.action;

            if (action === "increase") {
                cart[index].quantity += 1;
            } else if (action === "decrease" && cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }

            updateCartCount();
            renderCart();
        });
    });

    // Event listeners para eliminar
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            updateCartCount();
            renderCart();
        });
    });

    totalPriceSpan.textContent = total.toFixed(2);
    document.querySelector(".checkout-btn").disabled = false;
}

// Formulario de checkout
checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        postalCode: document.getElementById("postalCode").value,
        cardNumber: document.getElementById("cardNumber").value,
        expiryDate: document.getElementById("expiryDate").value,
        cvv: document.getElementById("cvv").value,
        items: cart,
        total: calculateTotal(),
        timestamp: new Date().toLocaleString()
    };

    // Guardar en localStorage
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(formData);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Mostrar confirmación
    showSuccessMessage(formData);
});

// Función para calcular el total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Función para mostrar mensaje de compra exitosa
function showSuccessMessage(formData) {
    const total = calculateTotal();
    const itemsText = cart.map(item => `${item.name} (${item.quantity}x $${item.price})`).join("\n");

    let message = `✅ ¡COMPRA REALIZADA CON ÉXITO!\n\n`;
    message += `Datos del cliente:\n`;
    message += `Nombre: ${formData.fullName}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Teléfono: ${formData.phone}\n`;
    message += `Dirección: ${formData.address}, ${formData.city}\n`;
    message += `Código Postal: ${formData.postalCode}\n\n`;
    message += `Productos:\n${itemsText}\n\n`;
    message += `Total: $${total.toFixed(2)}\n\n`;
    message += `Fecha: ${formData.timestamp}`;

    alert(message);

    // Limpiar
    cart = [];
    checkoutForm.reset();
    checkoutModal.classList.add("hidden");
    updateCartCount();
    renderCart();
    applyFilters();
}

// Función para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Agregar estilos de animación
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Cargar carrito guardado al iniciar
window.addEventListener("DOMContentLoaded", () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
    renderProducts();
});
