document.addEventListener('DOMContentLoaded', function () {
    let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

    function updateCartIcon() {
        const cartIcon = document.getElementById('shopping_cart');
        const cartCount = document.getElementById('add_to_chart').querySelector('span');
        let totalCount = 0;

        cartItems.forEach(item => {
            totalCount += item.quantity;
        });

        cartCount.textContent = totalCount;
    }


    function addToPaymentWay(product_info) {
        const paymentWay = document.querySelector('.listCart');

        const existingIndex = cartItems.findIndex(item => 
            item.name === product_info.name && item.size === product_info.size
        );

        if (existingIndex !== -1) {
            cartItems[existingIndex].quantity += product_info.quantity;
            cartItems[existingIndex].totalPrice += product_info.price * product_info.quantity;
        } else {
            cartItems.push(product_info);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartIcon();
        renderCartItems();
    }

    function renderCartItems() {
        const paymentWay = document.querySelector('.listCart');
        paymentWay.innerHTML = '';

        cartItems.forEach(item => {
            const productItem = document.createElement('div');
            productItem.classList.add('items');
            productItem.innerHTML = `
                <div class="imagy">
                    <img src="${item.Image}" alt="">
                </div>
                <div class="namy">
                    ${item.name}
                </div>
                <div class="totalPrice">
                    ${item.totalPrice}
                </div>
                <div class="quantity">
                    <span>${item.quantity}</span>
                </div>
                <button class="delete">Delete</button>
                <button class="pay"  onclick="showModal()">Pay</button>
            `;

            productItem.querySelector('.delete').addEventListener('click', function () {
                const index = cartItems.findIndex(cartItem => cartItem.id === item.id && cartItem.size === item.size);
                if (index !== -1) {
                    cartItems.splice(index, 1);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderCartItems();
                    updateCartIcon();
                }
            });

            productItem.querySelector('.pay').addEventListener('click', function () {
            });

            paymentWay.appendChild(productItem);
        });
    }

    document.getElementById('addChart').addEventListener('click', function () {
    const product_id = document.querySelector('.product_container').getAttribute('data-id');
    const product = document.querySelector('#product_id');
    const details = document.querySelector('.sample_details');

    const sizeDropdown = document.getElementById("size");
    const selectedSize = sizeDropdown ? sizeDropdown.value : '';

    const product_info = {
        id: product_id,
        name: product.querySelector('#product_name').textContent,
        price: parseInt(details.querySelector('#money').textContent.replace(/\D/g, '')),
        Image: product.querySelector('#main-image').src,
        size: selectedSize,
        quantity: parseInt(details.querySelector('input').value) || 1,
        totalPrice: parseInt(details.querySelector('#money').textContent.replace(/\D/g, '')) * parseInt(details.querySelector('input').value) || parseInt(details.querySelector('#money').textContent.replace(/\D/g, ''))
    };

    addToPaymentWay(product_info);
});

    updateCartIcon();
    renderCartItems();
});