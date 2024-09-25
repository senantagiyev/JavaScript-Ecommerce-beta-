const products = [
    { id: 1, name: "Ağıllı Telefon", price: 4999.99, image: "https://via.placeholder.com/150", description: "Son model ağıllı telefon" },
    { id: 2, name: "Noutbuk", price: 6499.99, image: "https://via.placeholder.com/150", description: "Yüksək performanslı noutbuk" },
    { id: 3, name: "Simsiz Qulaqlıq", price: 799.99, image: "https://via.placeholder.com/150", description: "Səsboğucu xüsusiyyətli qulaqlıq" },
    { id: 4, name: "Ağıllı Saat", price: 1299.99, image: "https://via.placeholder.com/150", description: "Fitness izləyici ağıllı saat" },
    { id: 5, name: "Planşet", price: 2999.99, image: "https://via.placeholder.com/150", description: "Yüngül və portativ planşet" },
    { id: 6, name: "Bluetooth Dinamik", price: 399.99, image: "https://via.placeholder.com/150", description: "Portativ simsiz dinamik" },
    { id: 7, name: "Oyun Konsolu", price: 5499.99, image: "https://via.placeholder.com/150", description: "Yeni nəsil oyun konsolu" },
    { id: 8, name: "Rəqəmsal Kamera", price: 3499.99, image: "https://via.placeholder.com/150", description: "Yüksək keyfiyyətli rəqəmsal kamera" },
    { id: 9, name: "Elektron Kitab Oxuyucu", price: 999.99, image: "https://via.placeholder.com/150", description: "Uzun batareya ömürlü elektron kitab oxuyucu" },
    { id: 10, name: "Ağıllı Ev Köməkçisi", price: 599.99, image: "https://via.placeholder.com/150", description: "Səsli komanda ilə işləyən ağıllı ev köməkçisi" },
    { id: 11, name: "Dron", price: 2499.99, image: "https://via.placeholder.com/150", description: "4K kameraya malik dron" },
    { id: 12, name: "Oyun Klaviaturası", price: 799.99, image: "https://via.placeholder.com/150", description: "Mexaniki RGB oyun klaviaturası" },
    { id: 13, name: "Oyun Siçanı", price: 449.99, image: "https://via.placeholder.com/150", description: "Yüksək DPI'lı oyun siçanı" },
    { id: 14, name: "Monitor", price: 1799.99, image: "https://via.placeholder.com/150", description: "27 düym 4K monitor" },
    { id: 15, name: "Xarici SSD", price: 899.99, image: "https://via.placeholder.com/150", description: "1TB tutumlu sürətli xarici SSD" },
    { id: 16, name: "Qrafik Planşet", price: 1299.99, image: "https://via.placeholder.com/150", description: "Həssas çəkmə üçün qrafik planşet" },
    { id: 17, name: "VR Eynək", price: 3999.99, image: "https://via.placeholder.com/150", description: "Yüksək keyfiyyətli VR eynək" },
    { id: 18, name: "Ağıllı Termostat", price: 699.99, image: "https://via.placeholder.com/150", description: "Enerji qənaətli ağıllı termostat" },
    { id: 19, name: "Simsiz Şarj Padı", price: 199.99, image: "https://via.placeholder.com/150", description: "Sürətli simsiz şarj padı" },
    { id: 20, name: "Portativ Proyektor", price: 2999.99, image: "https://via.placeholder.com/150", description: "Kompakt HD proyektor" },
    { id: 21, name: "Ağıllı Tərəzi", price: 299.99, image: "https://via.placeholder.com/150", description: "Bədən analizini həyata keçirən ağıllı tərəzi" },
    { id: 22, name: "Səs Sistemi", price: 1499.99, image: "https://via.placeholder.com/150", description: "5.1 kanal ev kinoteatr sistemi" },
    { id: 23, name: "Oyun Kreslosu", price: 1299.99, image: "https://via.placeholder.com/150", description: "Erqonomik dizaynlı oyun kreslosu" },
    { id: 24, name: "Ağıllı Lampa Dəsti", price: 399.99, image: "https://via.placeholder.com/150", description: "Rəngli və proqramlaşdırıla bilən ağıllı lampa dəsti" },
    { id: 25, name: "Elektrikli Scooter", price: 3499.99, image: "https://via.placeholder.com/150", description: "Yığıla bilən elektrikli skuter" },
    { id: 26, name: "Ağıllı Biləklik", price: 399.99, image: "https://via.placeholder.com/150", description: "Nəbz və aktivlik izləyici ağıllı biləklik" },
    { id: 27, name: "Portativ Printer", price: 799.99, image: "https://via.placeholder.com/150", description: "Kompakt və simsiz portativ printer" },
    { id: 28, name: "Ağıllı Təhlükəsizlik Kamerası", price: 599.99, image: "https://via.placeholder.com/150", description: "Hərəkət sensorlu Wi-Fi təhlükəsizlik kamerası" },
    { id: 29, name: "Oyun Pultu", price: 499.99, image: "https://via.placeholder.com/150", description: "Çox platformalı simsiz oyun pultu" },
    { id: 30, name: "Powerbank", price: 249.99, image: "https://via.placeholder.com/150", description: "20000mAh tutumlu sürətli şarj powerbank" },
    { id: 31, name: "Klaviatura", price: 129.99, image: "https://via.placeholder.com/150", description: "Sürətli və funksional klaviatura" },
    { id: 32, name: "Turan Başlığı", price: 19.99, image: "https://via.placeholder.com/150", description: "Turan başlıqlı termo hermetik" }
];


const productsContainer = document.getElementById("products");
const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalItems = document.getElementById("total-items");
const totalPrice = document.getElementById("total-price");
const closeCartButton = document.getElementById("close-cart");
const checkoutButton = document.getElementById("checkout-button");

let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toFixed(2)} TL</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Sepete Ekle</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();

    alertify.success(`${product.name} sepete eklendi!`);
}

function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    
    alertify.confirm('Ürünü Sil', `"${product.name}" məhsulunu sebəttən silmək istədiyinizə əminsiniz?`,
        function() {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            saveCart();
            alertify.success('Məhsul səbəttən silindi');
        },
        function() {
            alertify.error('Silme ləğv edildi');
        }
    ).set('labels', {ok:'Hə', cancel:'Yox'});
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
            saveCart();
        }
    }
}

function updateCart() {
    cartItems.innerHTML = "";
    let itemCount = 0;
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price.toFixed(2)} TL</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Sil</button>
        `;
        cartItems.appendChild(cartItem);

        itemCount += item.quantity;
        total += item.price * item.quantity;
    });

    cartCount.textContent = itemCount;
    totalItems.textContent = itemCount;
    totalPrice.textContent = total.toFixed(2);

    checkoutButton.disabled = cart.length === 0;
}

function openCart() {
    cartSidebar.classList.add("open");
}

function closeCart() {
    cartSidebar.classList.remove("open");
}

function goToCheckout() {
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        alertify.error('Sepetiniz boş. Lütfen ürün ekleyin.');
    }
}

cartIcon.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
checkoutButton.addEventListener("click", goToCheckout);

alertify.set('notifier','position', 'top-right');
alertify.set('notifier','delay', 3);

window.addEventListener('load', () => {
    loadCart();
    renderProducts();
});