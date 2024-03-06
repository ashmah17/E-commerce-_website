
document.addEventListener('DOMContentLoaded', async function () {
    try {
    const response = await fetch("json.json");
    const dataJson = await response.json();

    if (dataJson && dataJson.length > 0) {
        const firstData = dataJson[0];


        const itemElement = document.createElement("div");
        itemElement.classList.add('product-info');
        itemElement.innerHTML =`
        <div class="product_container" id="product_id" data-id="1">
         <div class="product-info">
            <div class="product_sample">
                <div class="main-sample">
                    <img src="${firstData.image}" alt="" id="main-image">
                </div>
            </div>

               
            <div class="small">
                <h4 class="small-label">Choose Another Sample</h4>
                <div class="pictures">
                    <img src="${firstData.image}" class="other-image">
                    <img src="${firstData.image2}"  class="other-image">
                    <img src="${firstData.image3}"  class="other-image">                    
            
                </div>
            </div>
        </div>
       

        <div class="sample_details">
            <div class="product_details">
                <h1 id="product_name">${firstData.name} </h1>
                
                <fieldset class="select-details1">
                    <h2><b>Price:</b> </h2>&nbsp; &nbsp;
                    <h2 id="money">&#8358;${firstData.price}</h2>
                </fieldset>
                
                <fieldset class="select-details1">
                    <h2><b>Size:</b> </h2>&nbsp; &nbsp;
                   <h2 id="size">${firstData.size}</h2>
                </fieldset>

                <fieldset class="select-details1">
                    <h2><b>Color:</b> </h2>&nbsp; &nbsp;
                   <h2 id="color">${firstData.color}</h2>
                </fieldset>
                

                <fieldset class="select-input-details">
                    <span id="numberError"></span>
                    <input type="number" placeholder="1" id="input">
                    <button id="addChart">Add to chart</button>
                </fieldset>

                <h3 class="product-des">Product Details</h3>
                <p class="product-des" id="product-des">
                    ${firstData.description}                         
                    </p>
            
                
            </div>

            <div class="paymentDetails">
                    <select class="ship_to">
                        <option value="">
                            <p>Ship To <i class="fas fa-angle-down"></i></p>
                        </option>
                        <option>Nigeria</option>
                        <option>South Africa</option>
                        <option>China</option>
                        <option>Canada</option>
                    </select>

                <select class="delivery">
                    <option value="">
                        <p>Delivery Choice &nbsp; &nbsp;<i class="fas fa-angle-down"></i></p>                        <span>
                    </option>
                    <option> Free Delivery</option>
                    <option> Paid Delivery</option>
                </select>

                <select class="buyer_right" readonly="true">
                    <option>
                        <p>Buyer Rights &nbsp; &nbsp;<i class="fas fa-angle-down"></i></p> 
                    </option>
                    <option>When the product you selected, was not the one delivered, you have the right to return it.</option>
                    <option> When the delivery time exceeded.</option>
                </select>
            </div>
        </div>

        `;
    document.getElementById("product_id").appendChild(itemElement);
} else {
    alert("No data found in the JSON file.");
}
} catch (error) {
console.error("Error fetching data:", error);
}


var mainImage = document.getElementById("main-image");
var otherImages = document.getElementsByClassName("other-image");
var price = document.getElementById("money");
var productName = document.getElementById("product_name");
var sizeDropdown = document.getElementById("size");
var productDes= document.getElementById("product-des");
var sizes= document.getElementById("size");
var color= document.getElementById("color");


otherImages[0].onclick = function(){
    mainImage.src = otherImages[0].src;
    price.innerHTML = '&#8358;1,000';
    productName.innerHTML = 'keiky Cucumber';
    sizes.innerHTML = '500g';
    color.innerHTML = 'White';
    productDes.innerHTML = 'White Cauliflower is popular and versatile vegetable for its mild flavour and dense, crunchy texture. Its harvested when thehead is compact and creamy white in color with tightly packed florets. Its rich in vitamins, it can be enjoyes raw as crunchy snack or slad ingredient, or cooked in various ways including steaming, roasting, sauteing or even marsh as low-carb alternate for marsh potates.';
}

otherImages[1].onclick = function(){
    mainImage.src = otherImages[1].src;
    price.innerHTML = '&#8358;10,000';
    productName.innerHTML = 'Cheddar Cauliflower';
    productDes.innerHTML = 'Orange Cauliflower also knowan as"Cheddar Cauliflower" is a vibrant and colorful variation of white cauliflower, unlike the white cauliflower that has a creamy head cheddar has a bright orange hue due to its higher level of beta-carotene" a pigment found in veges. such as carrot its mild and sweet as the white cauliflower but with added benefit of an increased value due to its higher beta-carotine content, it can be prepared as steaming, roasting,sauteing or even enjoyed as raw.';
    sizes.innerHTML = '250g';
    color.innerHTML = 'Orange';
}

otherImages[2].onclick = function(){
    mainImage.src = otherImages[2].src;
    price.innerHTML = '&#8358;210,900';
    productName.innerHTML = 'Graffiti Cauliflower';
    productDes.innerHTML = 'Its stunning variant of cauliflower, the purple color comes from the presence of anthocyanins with is antioxidant also found in red cabbage, its mild and slightly swwet taste with ';
    sizes.innerHTML = '250g';
    color.innerHTML = 'Purple';
}










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