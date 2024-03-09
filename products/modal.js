
const shadow= document.getElementById("downShadow");
const modal = document.getElementById("modal");
const paymentShadow = document.getElementById("upperShadow");
const paymentModal = document.getElementById("paymentModal");
const receiptShadow = document.getElementById("receiptShadow");
const receipt_modal = document.getElementById("receipt_modal");

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
function openReceipt(){
    paymentShadow.style.display = "none";
    paymentModal.style.display = "none";
    receiptShadow.style.display = "block";
    receipt_modal.style.display = "block";
  }

function closeReceipt(){
    receiptShadow.style.display = "none";
    receipt_modal.style.display = "none";
   
}


