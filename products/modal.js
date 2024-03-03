const shadow= document.getElementById("shadow");
const modal = document.getElementById("modal");
const paymentShadow = document.getElementById("shadoww");
const paymentModal = document.getElementById("paymetModal");

function showModal(){
    shadow.style.display = "block";
    modal.style.display = "block";

    paymentModal.style.display = "none";
    paymentShadow.style.display = "none";
    
}
function closeModal(){
    shadow.style.display = "none";
    modal.style.display = "none";
    paymentModal.style.display = "none";
    paymentShadow.style.display = "none";
   
}

function showPayment(){
    paymentShadow.style.display = "block";
    paymentModal.style.display = "block";
    
    modal.style.display ="none";
    shadow.style.display ="none";
}
function closePayment(){
    shadow.style.display = "none";
    modal.style.display = "none";
    paymentModal.style.display = "none";
    paymentShadow.style.display = "none";
}
