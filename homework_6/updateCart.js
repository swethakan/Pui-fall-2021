let userItems = JSON.parse(localStorage.getItem("shoppingCart"));
let myCartNumber = document.getElementById("cartNumItems");

function updateCart(){
  if(userItems!=null){
    myCartNumber.innerText = userItems.length;
  }
}
document.addEventListener("load", updateCart());
