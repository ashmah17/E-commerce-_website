
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


// PRODUCT SAMPLING 
    // var mainImage = document.getElementById("main-image");
    // var otherImage = document.getElementsByClassName("other-image");

    // otherImage[0].onclick = function(){
    //     mainImage.src = otherImage[0].src;
    // }
    // otherImage[1].onclick = function(){
    //     mainImage.src = otherImage[1].src;
    // }
    // otherImage[2].onclick = function(){
    //     mainImage.src = otherImage[2].src;
    // }
    // otherImage[3].onclick = function(){
    //     mainImage.src = otherImage[3].src;
    // }


    // PRODUCT VALIDATE
    function validate(){
        var size = document.getElementById("size").value;
        var number = document.getElementById("input").value;
    
    var sizeError = document.getElementById("sizeError").innerHTML = "";
    var numberError = document.getElementById("numberError").innerHTML = "";
    
 
        if (size === ''){
            document.getElementById("sizeError").innerText = "Select Size";
            return false;
        }
    
        if (number === ''){
            document.getElementById("numberError").innerText = "Select Quantity";
                return false;
        }
        if(size !='' & number !='' ){
        }
    }

    // // ADD TO CART ICON INCREMENT
    //     // Function to add item to cart
    //     function addToCart(productName, productPrice) {
    //         // Get the existing cart items from local storage
    //         let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
    //         // Add the new product to the cart items array
    //         cartItems.push({ name: productName, price: productPrice });
        
    //         // Save the updated cart items array to local storage
    //         localStorage.setItem('cart', JSON.stringify(cartItems));
        
    //         // Update the cart count display
    //         updateCartCount(cartItems.length);
    //     }
        
    //     // Function to update the cart count display
    //     function updateCartCount(count) {
    //         const add_to_chart = document.getElementById("add_to_chart");
    //         add_to_chart.classList.add('show-count');
    //         add_to_chart.setAttribute('data-count', count);
    //         add_to_chart.classList.remove('not');
    //         add_to_chart.offsetWidth = add_to_chart.offsetWidth;
    //         add_to_chart.classList.add('not');
    //     }
        
    //     // Event listener for the "Add to Cart" button
    //     document.getElementById("addChart").addEventListener('click', () => {
    //         addToCart("Product Name", "Product Price"); // Replace with actual product name and price
    //     });
        
    //     // Update cart count on page load
    //     document.addEventListener('DOMContentLoaded', () => {
    //         // Get the existing cart items from local storage
    //         let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
    //         // Update the cart count display
    //         updateCartCount(cartItems.length);
    //     });
        