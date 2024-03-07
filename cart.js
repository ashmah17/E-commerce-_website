document.addEventListener('DOMContentLoaded', function () {
let favoriteItems = localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')) : [];

function updateFavoriteIcon() {
const favoriteCount = document.getElementById('favorite').querySelector('span');
let totalCounts = 0;

favoriteItems.forEach(item => {
totalCounts += item.quantity;
});

favoriteCount.textContent = totalCounts;
}

function addToFavorite(savedProducts) {
const existingIndex = favoriteItems.findIndex(item =>
item.name === savedProducts.name && item.Image === savedProducts.Image
);

if (existingIndex === -1) {
favoriteItems.push(savedProducts);
localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
updateFavoriteIcon();
}
}

function renderFavoriteItems() {
const favoriteContainer = document.querySelector('.favorite_listCarts');
favoriteContainer.innerHTML = '';

favoriteItems.forEach(item => {
if (item.quantity > 0) {
    const productItem = document.createElement('div');
    productItem.classList.add('favorite_item');
    productItem.innerHTML = `
       <a href=""> 
        <div class="favorite_image">
            <img src="${item.Image}" alt="">
        </div>
       </a>
        <div class="favorite_name">
            ${item.name}
        </div>
        <div class="totalPrice">₦${item.totalPrice}</div>
        <span class="pay_favorite">
            <img src="./icons/trash-list-alt-svgrepo-com.svg" class="deleteFavorite" style="width: 25px;">     
            <a href="product_50.html"><button id="moveChart" >View Product</button></a>
        </span>
    `;

    productItem.querySelector('.deleteFavorite').addEventListener('click', function () {
        favoriteItems = favoriteItems.filter(favorite => 
            favorite.name !== item.name || favorite.Image !== item.Image
        );

        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

        updateFavoriteIcon();
        renderFavoriteItems();
    });

    favoriteContainer.appendChild(productItem);
}
});
}

document.getElementById('addFavorite').addEventListener('click', function () {
const product_id = document.querySelector('.product_container').getAttribute('data-id');
const product = document.querySelector('#product_id');
const details = document.querySelector('.sample_details');
const sizeDropdown = document.getElementById("size");
const selectedSize = sizeDropdown ? sizeDropdown.value : '';
const savedProducts = {
id: product_id,
name: product.querySelector('#product_name').textContent,
price: parseInt(details.querySelector('#money').textContent.replace(/\D/g, '')),
Image: product.querySelector('#main-image').src,
size: selectedSize,
quantity: parseInt(details.querySelector('input').value) || 1,
totalPrice: parseInt(details.querySelector('#money').textContent.replace(/\D/g, '')) * parseInt(details.querySelector('input').value) || parseInt(details.querySelector('#money').textContent.replace(/\D/g, ''))
};

addToFavorite(savedProducts);
});

updateFavoriteIcon();
renderFavoriteItems();
});



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

let totalAmount = 0; // Initialize total amount

cartItems.forEach(item => {
    if (item.quantity > 0) { // Only render items with quantity greater than 0
        const productItem = document.createElement('div');
        productItem.classList.add('items');
        productItem.innerHTML = `
            <a href=""> 
                <div class="favorite_image">
                    <img src="${item.Image}" alt="">
                </div>
            </a>
            <div class="namy">
                ${item.name}
            </div>
            <div class="totalPrice">₦${item.totalPrice}
            </div>
            <div class="quantity">
                <span class="decrease">-</span>
                <span class="quantity_span" style="color:rgb(24, 36, 58); font-size:1.2rem; text-align:center;">${item.quantity}</span>
                <span class="increase">+</span>
            </div>
           
            <span class="pay">
                <img src="./icons/trash-list-alt-svgrepo-com.svg" style="width: 20px;">
                <img src="./icons/checkout-svgrepo-com.svg" style="width: 20px;" onclick="showModal()">
                </span>
        `;

        totalAmount += item.totalPrice; // Add current item's total price to total amount


        // productItem.querySelector('.pay').addEventListener('click', function () {
          
        // });

        productItem.querySelector('.increase').addEventListener('click', function () {
            item.quantity++; // Increase quantity
            item.totalPrice = item.price * item.quantity; // Update total price
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems();
            updateCartIcon();
        });

        productItem.querySelector('.decrease').addEventListener('click', function () {
            if (item.quantity > 0) { // Ensure quantity doesn't go below 0
                item.quantity--; // Decrease quantity
                if (item.quantity === 0) {
                    const index = cartItems.indexOf(item);
                    cartItems.splice(index, 1); // Remove product if quantity is reduced to 0
                }
                item.totalPrice = item.price * item.quantity; // Update total price
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                renderCartItems();
                updateCartIcon();
            }
        });

        paymentWay.appendChild(productItem);
    }
});

// Update the total amount element with the calculated total amount
const totalAmountElement = document.getElementById('total_amount');
totalAmountElement.textContent = ` ₦${totalAmount.toFixed(2)}`;
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

function deleteAllProducts() {
cartItems = []; 
localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
renderCartItems(); 
updateCartIcon(); // Update the cart icon
}

// Add event listener to the delete all button
document.getElementById('delete_all_button').addEventListener('click', deleteAllProducts);


});


