//This handles selections when you interact with the dropdown
function selectDropdown(selection, item, isNewItem){
  console.log("DROPDOWN");
  let displayedSelection = selection.parentNode.parentNode.querySelector('.dropbtn');
  let value = displayedSelection.innerText;
  let newValue = selection.innerText;

  updateCartItem(item, newValue, isNewItem, selection);

  displayedSelection.innerText = newValue;
  console.log(window.shoppingCartProducts);
  // selection.innerText = value;
}

function updateCartItem(item, newValue, isNewItem, selection){
  if(item == "color"){
    if(isNewItem == true){
      color = newValue;
    }
    else{
      let indexOfItemUpdated = Array.prototype.indexOf.call(cartItems.children, selection.parentNode.parentNode.parentNode.parentNode.parentNode);
      window.shoppingCartProducts[indexOfItemUpdated ][0].color = newValue;
    }
  }
  if(item == "size"){
    if(isNewItem == true)
      size = newValue;
    else{
      let indexOfItemUpdated = Array.prototype.indexOf.call(cartItems.children, selection.parentNode.parentNode.parentNode.parentNode.parentNode);
      window.shoppingCartProducts[indexOfItemUpdated][0].size = newValue;
    }
  }
}

//This handles the subtraction sign when adjusting cart items
function lowerQuantity(sign){
  let quantityDiv = sign.parentNode.querySelector('.quantity');
  currentQ = quantityDiv.innerText;
  newQuantity = parseInt(quantityDiv.innerText)-1;

  if(newQuantity >=1){
    quantityDiv.innerText = newQuantity;
    quantity -=1;
    productPrice.innerText = price*newQuantity;
  }
}

//This handles the addition sign when adjusting cart items
function addQuantity(sign){
  let quantityDiv = sign.parentNode.querySelector('.quantity');
  currentQ = quantityDiv.innerText;
  newQuantity = parseInt(quantityDiv.innerText)+1;

  productPrice.innerText = price*newQuantity ;
  quantityDiv.innerText = newQuantity;
  quantity = parseInt(quantity)+1;
}

function addQuantityCart(sign){
  let quantityDiv = sign.parentNode;
  let indexOfItemUpdated = Array.prototype.indexOf.call(cartItems.children, quantityDiv.parentNode.parentNode);

  //update quantity in json
  window.shoppingCartProducts[indexOfItemUpdated][0].quantity = parseInt(window.shoppingCartProducts[indexOfItemUpdated][0].quantity)+1;
  //update quantity shown for item in cart
  quantityDiv.getElementsByClassName("input")[0].innerText = window.shoppingCartProducts[indexOfItemUpdated][0].quantity;

  //update total price fot the item element inside the cart
  let itemPrice = quantityDiv.parentNode.parentNode.getElementsByClassName('price')[0];
  itemPrice.innerText = window.shoppingCartProducts[indexOfItemUpdated][0].quantity*window.shoppingCartProducts[indexOfItemUpdated][0].price;

  //update total price at the bottom of the cart
  let newPrice = parseInt( totalPriceDiv.innerText.slice(1, totalPriceDiv.innerText.length))+ parseInt(window.shoppingCartProducts[indexOfItemUpdated][0].price);
  totalPriceDiv.innerText = "$"+newPrice;
}

function lowerQuantityCart(sign){
  let quantityDiv = sign.parentNode;
  let indexOfItemUpdated = Array.prototype.indexOf.call(cartItems.children, quantityDiv.parentNode.parentNode);
  
  let newQuantity = parseInt(window.shoppingCartProducts[indexOfItemUpdated][0].quantity)-1;
  if(newQuantity >= 1){
      //update quantity in json
      window.shoppingCartProducts[indexOfItemUpdated][0].quantity = parseInt(window.shoppingCartProducts[indexOfItemUpdated][0].quantity)-1;
      //update quantity shown for item in cart
      quantityDiv.getElementsByClassName("input")[0].innerText = window.shoppingCartProducts[indexOfItemUpdated][0].quantity;

      //update total price fot the item element inside the cart
      let itemPrice = quantityDiv.parentNode.parentNode.getElementsByClassName('price')[0];
      itemPrice.innerText = window.shoppingCartProducts[indexOfItemUpdated][0].quantity*window.shoppingCartProducts[indexOfItemUpdated][0].price;

      //update total price at the bottom of the cart
      let newPrice = parseInt( totalPriceDiv.innerText.slice(1, totalPriceDiv.innerText.length))- parseInt(window.shoppingCartProducts[indexOfItemUpdated][0].price);
      totalPriceDiv.innerText = "$"+newPrice;
  }
}