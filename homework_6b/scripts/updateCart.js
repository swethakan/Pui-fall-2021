let shoppingCartNumItems = JSON.parse(localStorage.getItem("shoppingCart"));
let myCartNumber = document.getElementById("cartNumItems");

function updateCart(){
  if(shoppingCartNumItems!=null){
    myCartNumber.innerText = shoppingCartNumItems.length;
  }
}
document.addEventListener("load", updateCart());
