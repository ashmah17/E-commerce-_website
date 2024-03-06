const shadow= document.getElementById("downShadow");
const modal = document.getElementById("modal");
const paymentShadow = document.getElementById("upperShadow");
const paymentModal = document.getElementById("paymentModal");

function showModal(){
    shadow.style.display = "block";
    modal.style.display = "block";

}
function closeModal(){
    shadow.style.display = "none";
    modal.style.display = "none";
}


function showPayment(){
    shadow.style.display = "none";
    modal.style.display = "none";
    paymentShadow.style.display = "block";
    paymentModal.style.display = "block";
  }

function closePayment(){
    paymentModal.style.display = "none";
    paymentShadow.style.display = "none";
   
}


