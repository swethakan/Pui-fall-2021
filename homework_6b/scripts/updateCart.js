let shoppingCartNumItems = JSON.parse(localStorage.getItem("shoppingCart"));
let myCartNumber = document.getElementById("cartNumItems");

function updateCart(){
  if(shoppingCartNumItems!=null){
    myCartNumber.innerText = shoppingCartNumItems.length;
  }
  //check if there are previous elements that exist in the cart
  let bottomCart = document.getElementById("cartItems");
  if(bottomCart != undefined){
    let templateElementBottom = templateElement;
    cartItems.innerHTML = "";
    checkoutButton.disabled = false;
    checkoutWarning.classList.remove("on");
    for(let i = 0; i < shoppingCartNumItems.length; i++){ 
        //Here, I use the method we learned in lab to add to the shopping cart
        let cartElement = templateElementBottom.cloneNode(true);
        cartElement.id = ""
        let nameElement = cartElement.getElementsByClassName("product")[0];
          nameElement.innerHTML = shoppingCartNumItems[i][0].product;
        let priceElement = cartElement.getElementsByClassName("price")[0];
          priceElement.innerHTML = (shoppingCartNumItems[i][0].price*shoppingCartNumItems[i][0].quantity);
        let sizeElement = cartElement.getElementsByClassName("size")[0].getElementsByClassName("change")[0];
          sizeElement.innerHTML = shoppingCartNumItems[i][0].size;
        let colorElement = cartElement.getElementsByClassName("color")[0].getElementsByClassName("change")[0];
          colorElement.innerText = shoppingCartNumItems[i][0].color;
        let quantityElement = cartElement.getElementsByClassName("quantity")[0].getElementsByClassName("input")[0];
        quantityElement.innerText = shoppingCartNumItems[i][0].quantity;
        //now add our edited template item to the cart
        cartItems.appendChild(cartElement);
      }
  }
}
document.addEventListener("load", updateCart());
