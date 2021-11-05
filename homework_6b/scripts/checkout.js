const templateElement = document.getElementById("template-shopping-cart");
var cartItems = document.getElementById("cartItems");

var userItems = JSON.parse(localStorage.getItem("shoppingCart"));
window.shoppingCartProducts = userItems;

let totalPriceDiv = document.getElementById("totalPrice");
let totalPriceWithTaxDiv = document.getElementById("totalPriceTax");

let totalPrice = parseInt(totalPriceDiv.innerText);
let totalPriceWithTax = parseInt(totalPriceWithTaxDiv.innerText);

let shippingPrice = 5.45;
let tax = 3.45;

//this function takes our template and populates our cart
function populateCart(){
    for(let i = 0; i < userItems.length; i++){ 
        const cartElement = templateElement.cloneNode(true);
        cartElement.classList.remove("hide");
        
        const imageElement = cartElement.getElementsByClassName("image")[0];
        imageElement.src = "../images/"+userItems[i][0].image;
        console.log(imageElement);

        const nameElement = cartElement.getElementsByClassName("product")[0];
        nameElement.innerHTML = userItems[i][0].product;
        
        const priceElement = cartElement.getElementsByClassName("price")[0];
        priceElement.innerHTML = (userItems[i][0].price*userItems[i][0].quantity);
        
        const sizeElement = cartElement.getElementsByClassName("size")[0].getElementsByClassName("change")[0];
        sizeElement.innerHTML = userItems[i][0].size;
        
        const colorElement = cartElement.getElementsByClassName("color")[0].getElementsByClassName("change")[0];
        colorElement.innerText = userItems[i][0].color;
        
        const quantityElement = cartElement.getElementsByClassName("quantity")[0].getElementsByClassName("input")[0];
        quantityElement.innerText = userItems[i][0].quantity;
        
        //now add our product to the cart
        cartItems.append(cartElement);
  }
}

function adjustPrice(){
  totalPrice = 0;
  for(let i = 0; i <userItems.length; i++){
    totalPrice += parseInt(userItems[i][0].price)*parseInt(userItems[i][0].quantity);
  }
  totalPriceDiv.innerText = totalPrice.toFixed(2);
  totalPriceWithTax =(parseFloat(totalPrice)+shippingPrice+tax).toFixed(2);
  totalPriceWithTaxDiv.innerText = totalPriceWithTax;
}

adjustPrice();
populateCart();

function selectDropdown(selection, item, isNewItem){
  let displayedSelection = selection.parentNode.parentNode.querySelector('.dropbtn');
  let value = displayedSelection.innerText;
  let newValue = selection.innerText;

  updateCartItem(item, newValue, isNewItem, selection);

  displayedSelection.innerText = newValue;
  // selection.innerText = value;
}

function updateCartItem(item, newValue, isNewItem, selection){
  let parent = selection.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
  let child = selection.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
  let indexOfItemUpdated = Array.prototype.indexOf.call(parent.children, child)-1;//minus 1 accunts for template div

  if(item == "color"){
      color = newValue;
      userItems[indexOfItemUpdated ][0].color = newValue;
  }
  if(item == "size"){
      size = newValue;
      userItems[indexOfItemUpdated][0].size = newValue;
  }
}

//This handles the subtraction sign when adjusting cart items
function lowerQuantity(sign){
  let parent = sign.parentNode.parentNode.parentNode.parentNode.parentNode;
  let child = sign.parentNode.parentNode.parentNode.parentNode;
  let indexOfItemUpdated = Array.prototype.indexOf.call(parent.children, child)-1;//minus 1 accunts for template div

  let quantityDiv = sign.parentNode.querySelector('.input');
  currentQ = quantityDiv.innerText;
  newQuantity = parseInt(quantityDiv.innerText)-1;

  if(newQuantity >=1){
    quantityDiv.innerText = newQuantity;
    userItems[indexOfItemUpdated][0].quantity = parseInt(userItems[indexOfItemUpdated][0].quantity)-1;
    adjustPrice();
  }
  
}

//This handles the addition sign when adjusting cart items
function addQuantity(sign){
  let parent = sign.parentNode.parentNode.parentNode.parentNode.parentNode;
  let child = sign.parentNode.parentNode.parentNode.parentNode;
  let indexOfItemUpdated = Array.prototype.indexOf.call(parent.children, child)-1;//minus 1 accunts for template div
  
  let quantityDiv = sign.parentNode.querySelector('.input');
  currentQ = quantityDiv.innerText;
  newQuantity = parseInt(quantityDiv.innerText)+1;

  quantityDiv.innerText = newQuantity;
  userItems[indexOfItemUpdated][0].quantity = parseInt(userItems[indexOfItemUpdated][0].quantity)+1;
  adjustPrice();
}

//like it says, when a user wants to get rid of an item, this function deletes it from the cart
function deleteCartItem(item) {  
  //delete from our global json array
  let indexOfItemDeleted = Array.prototype.indexOf.call(item.parentNode.parentNode.parentNode.children, item.parentNode.parentNode)-1;
  let takeawayPrice = userItems[indexOfItemDeleted][0].price *userItems[indexOfItemDeleted][0].quantity
  userItems.splice(indexOfItemDeleted, 1);

  item.parentNode.parentNode.remove();

  adjustPrice();

}
