//Json of all our products
var products = [
  {
    "product_name": "GPS tracker",
    "Price": 100,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": "",
  },
  {
    "product_name": "Food Storage",
    "Price": 20,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": ""
  },
  {
    "product_name": "Water Storage",
    "Price": 15,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": ""
  },
  {
    "product_name": "Cat Backpack",
    "Price": 45,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": "dog"
  },
  {
    "product_name": "Dog Harness",
    "Price": 23,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": "cat"
  },
  {
    "product_name": "Cat Harness",
    "Price": 23,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": "dog"
  }
];

//Setting up variables that will help the shopping cart functionality
var itemsInCart = 0;
var cartNumItems = document.getElementById("cartNumItems");
var totalPrice = 0;
var totalPriceDiv = document.getElementById("totalPrice");
var currentProduct = "";
var myShoppingCart = document.getElementById("shoppingCart");
var cartItems = document.getElementById("cartItems");
var checkoutWarning = document.getElementById("checkoutWarning");

//preferences for each item will be held in these variables
let color = "Black"; 
let size = "Tiny"; 
let quantity = 1;
let price = 45;

//two overlay scenes
var shoppingOverlay = document.getElementById("shoppingOverlay");
var confirmOverlay = document.getElementById("confirmationOverly");

//all our buttons for step 1 and for checkout
var catDogButton = document.getElementById('dogCatButton');
var catButton = document.getElementById('catButton');
var dogButton = document.getElementById('dogButton');
var checkoutButton = document.getElementById("checkoutButton");

//When we load the page, we want the javascript to auto populate the products section based on the json at the top of this file
var myProductHTML = "<div class = 'allProduct'>"
for(x = 0; x < products.length; x++){
    myProductHTML += "<div id =product"+x+" tabindex='0' class = 'oneProduct "+products[x].remove_on+"'>"
    myProductHTML += "<img alt='pproduct show with color selected' src='images/"+products[x].image+"'>";
    myProductHTML += "<p class = 'price'>$"+products[x].Price+"</p>";
    myProductHTML += "<h1>"+products[x].product_name+"</h1>";
    myProductHTML += "</div>"
    if(x == 2){
      myProductHTML += "</div><div class = 'allProduct'>"
    }
  }
myProductHTML += "</div>"
document.getElementById("products").innerHTML = myProductHTML;

//Now add an event listener to each product div. This will make them buttons
var productList = document.getElementsByClassName('oneProduct');
for(x = 0; x < productList.length; x++){
    productList[x].addEventListener("click", openOverlay);
  }

//To help our sorting functionality, get all the elements that should leave on dog filter, and ones that should leave on cat filter
var dogElements = document.getElementsByClassName('dog');
var catElements = document.getElementsByClassName('cat');

//This handles the visuals of the sorting functionality in step 1
function turnOffCheck(){
  if(catButton.classList.contains('checked')){
    catButton.classList.remove("checked");
  }
  if(dogButton.classList.contains("checked")){
    dogButton.classList.remove("checked");
  }

  if(catDogButton.classList.contains("checked")){
    catDogButton.classList.remove("checked");
  }
}
//This takes out all products that are dog-only
function filterOutDog(){
  turnOffCheck();
  catButton.classList.add ("checked");
  for(x = 0; x < dogElements.length; x++){
    dogElements[x].classList.add( "remove" );
  }
  for(x = 0; x < catElements.length; x++){
    catElements[x].classList.remove( "remove" );
  }
}
//This takes out all products that are cat-only
function filterOutCat(){
  turnOffCheck();
  dogButton.classList.add ("checked");
  for(x = 0; x < dogElements.length; x++){
    dogElements[x].classList.remove( "remove" );
  }
  for(x = 0; x < catElements.length; x++){
    catElements[x].classList.add( "remove" );
  }
}
//This takes out all products that are for both dogs and cats
function filterNone(){
  turnOffCheck();
  catDogButton.classList.add ("checked");

  for(x = 0; x < dogElements.length; x++){
    dogElements[x].classList.remove( "remove" );
  }
  for(x = 0; x < catElements.length; x++){
    catElements[x].classList.remove( "remove" );
  }
}

//Some more elements that will help us adjust the overlay
productName = document.getElementById("overlayProductName");
productPrice = document.getElementById("overlayProductPrice");
productImage = document.getElementById("overlayProductImage");
productDescription = document.getElementById("overlayProductDescription");

confirmName = document.getElementById("confirmProductName");
confirmImage = document.getElementById("confirmProductImage");

//opens an overlay once user selects a product
function openOverlay() {
  var productNumber = parseInt( this.id[this.id.length -1] );
  currentProduct = products[productNumber].product_name;
  price = products[productNumber].Price;
  productName.innerHTML = ""+products[productNumber].product_name+"";
  productDescription.innerHTML = ""+products[productNumber].Description+"";

  confirmName.innerHTML = ""+products[productNumber].product_name+"";

  shoppingOverlay.style.display = "block";
}
//once you add to cart, this function takes care of the cart and opens a confirmation overlay
function addToCart(product, color, size, quantity, price) {
  if(itemsInCart == 0){
    checkoutButton.disabled = false;
    checkoutWarning.classList.remove("on");
    cartItems.innerHTML = "";
  }
  itemsInCart +=1;
  totalPrice  += parseInt(price); 
  totalPriceDiv.innerHTML = "$"+ totalPrice +"";
  cartNumItems.innerHTML = "<span>"+itemsInCart+"</span>";
  cartItems.innerHTML += "<div><p><span class ='delete' onclick= 'deleteCartItem(this)'>X</span>\
                        <span class ='product'>"+product+"</span>\
                        <span class ='quantity'>Q:<span class='plus'>+</span><span class='input'>"+quantity+"</span><span class='plus'>-</span>\
                        </span> <span class ='color'>Color: <span class='input '><span class = '"+color+"'></span>"+color+"<img alt='dropdown icon' src = 'images/icons/dropdownArrows.svg'></span></span>\
                        <span class ='size'>Size: <span class='input'>"+size+"<img alt='dropdown icon' src = 'images/icons/dropdownArrows.svg'></span></span><span class = 'cartPrice'>Price: <b>$</b><b>"+price+"</b></span></p></div>";
}
//closes the overlay that confirms you've added somehting to the cart
function closeConfirm() {
  addToCart(currentProduct, color, size, quantity, price);
  confirmOverlay.style.display = "none";
  currentProduct = "";
}

//closes all overlays onscreen
function closeOverlay() {
  shoppingOverlay.style.display = "none";
  confirmOverlay.style.display = "block";
}

//like it says, when a user wants to get rid of an item, this function deletes it from the cart
function deleteCartItem(item) {
  //very complicated way to get the price of what was deleted. This would only work if the price is the last element in the description
  let takeawayPrice = item.parentNode.lastChild.lastChild.innerText;
  item.parentNode.remove();
  itemsInCart -=1;
  totalPrice  -= parseInt(takeawayPrice); 
  totalPriceDiv.innerHTML = "$"+ totalPrice +"";
  cartNumItems.innerHTML= "<span>"+itemsInCart+"</span>";

  if(itemsInCart == 0){
    checkoutButton.disabled = true;
    checkoutWarning.classList.add("on");
    cartItems.innerHTML = "<div><p>No items in cart</p></div>";
  }

}