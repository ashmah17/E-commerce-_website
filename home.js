
function toggleSidebar(){
    var sidebar = document.getElementById('sidebarr');
    var mainContent = document.getElementById('main-content');
    var openBtn = document.querySelector('#icon_btn');


    if (sidebar.style.left === '0px'){
        sidebar.style.left = '-250px';
        mainContent.style.marginLeft = '0';
        openBtn.innerHTML = '&#9776;';


    }else{
        sidebar.style.left = '0px';
        mainContent.style.marginLeft = '250px';
        openBtn.innerHTML = '&times;';
        
    }
}

document.getElementById("next").onclick = function(){
    let lists = document.querySelectorAll(".item"); 
    document.getElementById("slide").appendChild(lists[0]); 
    setInterval(1000); 
}

document.getElementById("prev").onclick = function(){
    let lists = document.querySelectorAll(".item"); 
    document.getElementById("slide").prepend(lists[lists.length = 1]); 
}
setInterval(function(){
    let lists = document.querySelectorAll(".item"); 
    document.getElementById("slide").appendChild(lists[0]); 

},5000);
// SEARCH ENGINE

const search_container = document.getElementById("search-result");
const input = document.getElementById("search_input");

const search_icon = document.getElementById("fa-search");
const hide_search = document.getElementById("fa-angle-left");

input.addEventListener('input', function(event){
    search_container.style.display = "block";
    search_icon.style.display = "none";
    hide_search.style.display = "inline";
});

// HIDE SEARCH 

function hideSearch(){
    const search_container = document.getElementById("search-result");
    const hide_search = document.getElementById("fa-angle-left");
    const search_icon = document.getElementById("fa-search");
    
    search_container.style.display ="none";
   

    if(hide_search.style.display = "none"){
        search_icon.style.display ="inline";
 
    }
}

// SEARCH PRODUCT

const search = () => {
   const searchBox = document.getElementById("search_input").value.toUpperCase();
   const storeItems = document.getElementById("product_list")
   const product = document.querySelectorAll(".product")
   const pname = document.getElementsByTagName("h2")

    for( var i =0; i <  pname.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
          let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }
    }

  
}

// ********TOGGLE FAVORITE***********
function toggleFavorite(){
    var saved_products = document.getElementById('saved_products');
    var closeFavorite = document.getElementById('close_favorite');


    if (saved_products.style.right === '0px'){
        saved_products.style.right = '-91vh';


    }else{
        saved_products.style.right = '0px';
        closeFavorite.innerHTML = 'Close &times;';

        
    }
}

function closeFavorite(){
    var saved_products = document.getElementById('saved_products');
    // var closeFavorite = document.getElementById('close_favorite');


    if (saved_products.style.right === '-91vh'){
        saved_products.style.right = '0px';


    }else{
        saved_products.style.right = '-91vh';
        // closeFavorite.innerHTML = 'x';

        
    }
}


// **************Toggle cart**************
function toggleCart(){
    var payment_way = document.getElementById('payment_way');
    var closeCart = document.getElementById('close');


    if (payment_way.style.right === '0px'){
        payment_way.style.right = '-91vh';


    }else{
        payment_way.style.right = '0px';
        closeCart.innerHTML = 'Close &times;';

        
    }
}

function closeCart(){
    var payment_way = document.getElementById('payment_way');
    var closeCart = document.getElementById('close');


    if (payment_way.style.right === '-91vh'){
        payment_way.style.right = '0px';


    }else{
        payment_way.style.right = '-91vh';
        closeCart.innerHTML = '';

        
    }
}


// ADDTO CART
// 
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
                <div class="imagy">
                    <img src="${item.Image}" alt="">
                </div>
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
                    <img src="../icons/trash-list-alt-svgrepo-com.svg" style="width: 20px;">
                    <img src="../icons/checkout-svgrepo-com.svg" style="width: 20px;" onclick="showModal()">
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


// *************STAR RATING*************


    // favorite

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

// CHANGE PAYMENT CARDS

function changeMasterCard(){
    const master = document.getElementById("master_card");
    const visa = document.getElementById("visa_card");
    const paypal = document.getElementById("paypal_card");
    
    master.style.display ="block";
    visa.style.display ="none";
    paypal.style.display ="none";
}
function changeVisaCard(){
    const master = document.getElementById("master_card");
    const visa = document.getElementById("visa_card");
    const paypal = document.getElementById("paypal_card");
    
    master.style.display ="none";
    visa.style.display ="block";
    paypal.style.display ="none";
}
function changePaypalCard(){
    const master = document.getElementById("master_card");
    const visa = document.getElementById("visa_card");
    const paypal = document.getElementById("paypal_card");
    
    master.style.display ="none";
    visa.style.display ="none";
    paypal.style.display ="block";
}



document.addEventListener('DOMContentLoaded', function(){
 for (let i = 1; i <= 10; i++){
     let rating = parseInt(localStorage.getItem(`product${i}Rating`)) || 0;
     displayRating(i, rating);
 }
});

function rate(productId, rating){
 localStorage.setItem(`product${productId}Rating`, rating);
 displayRating(productId, rating);
}

function displayRating(productId, rating){
 const starsContainer = document.getElementById(`stars${productId}`);

 starsContainer.innerHTML = ""; 

 for (let i = 1; i <= 5; i++){
     const star = document.createElement("span");
     star.classList.add('star');

     if (i <= rating){
         star.classList.add('rated-star');
         star.textContent = "★"; // Filled star
     } else {
         star.textContent = "☆"; // Empty star
     }

     star.onclick = function(){
         rate(productId, i);
     };

     starsContainer.appendChild(star);
 }
}

// Getime
function getDeliveryStation() {
    const currentDate = new Time();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    // Calculate delivery end time correctly
    const deliveryEnd = new Date(currentDate.getTime() + (42 * 60 * 60 * 1000));

    // Return dates instead of formatted strings
    return { start: currentDate, end: deliveryEnd };
}

window.onload = function() {
    console.log("Window loaded");
    const deliveryDates = getDeliveryStation();
    console.log("Delivery dates:", deliveryDates);
    const deliveryStartStr = deliveryDates.start.toLocaleString('en-US', options);
    const deliveryEndStr = deliveryDates.end.toLocaleString('en-US', options);

    // Set delivery station and door elements
    document.getElementById("deliveryStation").innerHTML = `Delivery Date ${deliveryStartStr} to ${deliveryEndStr}`;
    document.getElementById("deliveryDoor").innerText = `Delivery Date ${deliveryStartStr} to ${deliveryEndStr}`;
};

