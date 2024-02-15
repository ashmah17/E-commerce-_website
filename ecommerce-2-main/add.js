/*  const product=[
    {


    "id":1,
    "image":"./1.0.1.jpg",
    "title":"black jacket",
    "price":5000
},
    {
        "id":2,
    "image":"./Banner-05.jpeg",
    "title":" jacket",
    "price":4000
    },
    {
        "id":3,
    "image":"./1_1.jpg",
    "title":"camour flag  ",
    "price":6000
    },
    {
        "id":4,
    "image":"./130.jpg",
    "title":"flag jacket",
    "price":3000
    },
    {
        "id":5,
    "image":"./7_1.jpg",
    "title":"gray jacket",
    "price":5000
    },
    {
        "id":7,
    "image":"./8.0.3.jpg",
    "title":"yellow jacket",
    "price":2000
    }
] */
var show =document.getElementById("show")

let lists = [];
const addtohtml = () => {
    show.innerHTML = "";
    
    let total = document.getElementById("total");
    let i = 0;
    if (lists.length > 0) {
        lists.forEach(product => {
            let newproduct = document.createElement('div');
            newproduct.classList.add("show");
            newproduct.dataset.id = product.id;
            newproduct.innerHTML = ` <div class="content-2">
            <div class="inner2"> 
                 <img src=${product.image} alt="" width="100px" height="100px">
             <p class='xe'>$${product.price}</p>
                  <h3 class='sen'>${product.title}</h3>`+
                  "<svg class='addcart svg' onclick='add(" + (i++) + ")'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' </svg>"+
              `</div>
            </div>
             `;
            show.appendChild(newproduct)
        })
    }
}
show.addEventListener("click", (event) => {
    let postionclick = event.target;
    if(postionclick.classList.contains('addcart')) {
        let product_id=postionclick.parentElement.dataset.id;
        alert(product_id)
    }
})
const init= async()=>{
    const cate =await fetch("add.json")
    const data = await cate.json();
    return data;
   
}

const omit = async () => {
    const product =await init()
    lists=product
    console.log(lists)
    localStorage.setItem("llo", JSON.stringify(list))
    addtohtml();
}
omit()
const cate=[... new Set(lists.map((item)=>{     return item
 }))]
    
// let i =0;
// let show = document.getElementById("show").innerHTML = cate.map((item) => {
//     var { image, title, price } = item;
   
//     return ` 
//     <div class="content-2">
//     <div class="inner2"> 
//          <img src=${image} alt="" width="100px" height="100px">` + "<svg class='svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' onclick='add(" + (i++) + ")' /></svg>" + `<p class='xe'>$${price}</p>
//           <h3 class='sen'>${title}</h3>
//       </div>
//     </div>
//     </div>
//     `
// }).join("");


var list = [];

const add=(a)=>{
    list.push({ ...cate[a] })
    displaycart()

}

const delelement=(a)=>{
    list.splice(a,1)
    displaycart()
}

const  displaycart =(a)=>{
    let j=0;
    let total = 0;
    document.getElementById("count").innerHTML=list.length;
    if(list.length==0){
        document.getElementById("opo").innerHTML = "your cart is empty"
         document.getElementById("total").innerHTML=`${total}`;
        
    } else {

        //const geet = JSON.parse(localStorage.getItem("list"))
        //onsole.log(geet)
        document.getElementById("opo").innerHTML=list.map((user)=>{
            var { image, title, price } = user;
            total = total+price;
            document.getElementById("total").innerHTML=`${total}`
            
    return`
    <div class="cart">   
        <img class='round' height=80px" src=${image}></img>
        <br>
        <p class="text">${title}</p>
            <h2 class="text"> $${price}</h2>`+
            
            " <svg class='g' xmlns='http://www.w3.org/2000/svg' onclick='delelement("+(j++)+")' viewBox='0 0 448 512'><path d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z'/></svg>"  +
            `</div>

            </div>
            `
}).join('')
        
    }
}
const opo = document.getElementById("opo");
const force = document.getElementById("force");
const sec3 = document.getElementById("sec3");
force.addEventListener("click", (event) => {
        opo.classList.toggle("sse")
    })

