

var sec3 = document.getElementById("sec3")
var listcart =document.getElementById("opo")
//const h1 =document.getElementById("loder")
var div =document.getElementById("loder")  
console.log(div)
let time = 0;
let list = [];
let cart = [];
const addtohtml = () => {
    show.innerHTML = "";
    if (list.length > 0) {
            setTimeout(() => {
                list.forEach(product => {
  
                    let newproduct = document.createElement('div');
                    newproduct.classList.add("show");
                    newproduct.dataset.id = product.id;
                    newproduct.innerHTML = ` <div class="content-2">
            <div class="inner2"> 
                 <img class="zi" src=${product.image} alt="" width="100px" height="100px">
             <p class='xe'>$${product.price}</p>
                  <h3 class='sen'>${product.title}</h3>
                  
              </div>
              
            </div>
            <button class="addcar">add to cart </button>
            
             `;
                    show.appendChild(newproduct)
                })
                console.log(list)
            }, 100)

         } 
    }

show.addEventListener("click", (event) => {
    let postionclick = event.target;
    if (postionclick.classList.contains('addcar')) {
        let product_id = postionclick.parentElement.dataset.id;
        addtocart(product_id)
    }
});
const addtocart = (product_id) => {
    let position=cart.findIndex((value)=>value.product_id===product_id)
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity:1
        }]
        console.log(cart)
    } else if (position < 0) {
        cart.push({
            product_id: product_id,
            quantity:1
        })
    } else {
        cart[position].quantity = cart[position].quantity + 1
        
    }
    displaycart()
    addmemomry()
}
const addmemomry = () => {
    localStorage.setItem("cart",JSON.stringify(cart))
    
}

function displaycart() {
    
    let total = 0;
   
    document.getElementById("count").innerHTML = cart.length;
    listcart.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach(carts => {
            let newcart = document.createElement("div");
            newcart.classList.add("inner-4");
            newcart.dataset.id = carts.product_id;
            let positionproduct = list.findIndex((value) => value.id == carts.product_id);
            let info = list[positionproduct];
            total = total + info.price * carts.quantity
            document.getElementById("total").innerHTML = `${total}`;
            newcart.innerHTML = `
            <div class="inner-4">
            <img class='img' width:80px height=80px" src=${info.image}>
            <p style="margin:10px; postion:relative; top:10px;" >${info.title}</p>
            
            <h2> $${info.price * carts.quantity}</h2>                         
       
        </div>
        <div class="contain">
        <button class="dc ">-</button>
        <span>${carts.quantity}</span>
        <button class="inc">+</button>
    </div>                       `
                                     
            listcart.appendChild(newcart)
        })
    } else {
        document.getElementById("total").innerHTML = '00'
        document.getElementById("opo").innerHTML = "your cart is empty"
      
    }
   
    
}
//let rem=document.getElementById("fott")
//rem.addEventListener("submit",payWithPaystack,false);
function payWithPaystack() {
    e.preventDefault();
    let amount;
    let email;
    let handler = PaystackPop.setup({
      key: 'pk_test_3c2eb085ac13fee921542e0019af56e40e62ce33', // Replace with your public key
      email: email.classList.contains("email").value,
      amount: amount.classList.contains("amount").value * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
      }
    });
  
    handler.openIframe();
  }
listcart.addEventListener("click",(event)=>{
    let positionclick = event.target;
    if (positionclick.classList.contains('dc') || positionclick.classList.contains('inc')) {
        let product_id=positionclick.parentElement.parentElement.dataset.id;
        console.log(product_id)
        let type = "dc";
        if (positionclick.classList.contains("inc")) {
            type='inc'
        }
        changequantity(product_id, type);
    }
})
const changequantity = (product_id, type) => {
    let positionitem=cart.findIndex((value)=>value.product_id ==product_id)
    if (positionitem >= 0) {
        switch (type) {
            case 'inc':
                cart[positionitem].quantity = cart[positionitem].quantity + 1;

                break;
            default:
                let valuechange = cart[positionitem].quantity - 1
                if (valuechange > 0) {
                    cart[positionitem].quantity = valuechange;
                } else {
                    cart.splice(positionitem, 1);
                }
                break;
        }
        addmemomry();
        displaycart();
 
    }
}
const init= async()=>{
    const cate =await fetch("add.json")
    const data = await cate.json();
    return data;
   
}

const omit = async () => {
    const product =await init()
    list = product;   
    console.log(list)
    addtohtml();
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"))
     displaycart();
    }
}
omit()



function toggleSidebar(){
    var sidebar = document.getElementById('sidebar');
    // var mainContent = document.getElementById('main-content');
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
    let listss = document.querySelectorAll(".item"); 
    document.getElementById("slide").appendChild(listss[0]); 
}

document.getElementById("prev").onclick = function(){
    let mores = document.querySelectorAll(".item"); 
    document.getElementById("slide").prepend(mores[mores.length = 1]); 
}

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

    for( let i =0; i <  pname.length; i++){
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


function movee()  {
    sec3.style.right = "0px";
}
function hidee()  {
    sec3.style.right = "-1000px";
}
