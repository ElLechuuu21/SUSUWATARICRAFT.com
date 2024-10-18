let cart = [];
let cartCount = 0;
let cartTotal = 0;

const cartLink = document.getElementById('cart-link');
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');
const cartSection = document.querySelector('.cart-section');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productId = productElement.dataset.id;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Bs', ''));

        addToCart(productId, productName, productPrice);
    });
});

function addToCart(id, name, price) {
    const existingProduct = cart.find(product => product.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    cartCount++;
    cartTotal += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    cartCountElement.textContent = cartCount;
    cartItemsElement.innerHTML = '';
    
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${product.name} - Bs${product.price.toFixed(2)} x ${product.quantity}`;
        cartItemsElement.appendChild(cartItem);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    cartSection.classList.toggle('hidden');
});

checkoutButton.addEventListener('click', () => {
    window.location.href = 'file:///C:/Proyecto/P%C3%A1gina2.html'; 
});
