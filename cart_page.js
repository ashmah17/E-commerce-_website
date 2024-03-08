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
        <div class="favorite_image">
            <img src="${item.Image}" alt="">
        </div>
        <div class="favorite_name">
            ${item.name}
        </div>
        <div class="totalPrice">₦${item.totalPrice}</div>
        <span class="pay_favorite">
            <img src="../icons/trash-list-alt-svgrepo-com.svg" class="deleteFavorite" style="width: 25px;">     
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

