
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
        search_icon.style.display ="block";
 
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
        closeCart.innerHTML = 'Close &times;';

        
    }
}
// ADDTO CART
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


// CHANGE IMAGE

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










