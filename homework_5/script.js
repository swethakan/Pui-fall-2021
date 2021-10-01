var products = [
  {
    "product_name": "GPS tracker",
    "Price": 100,
    "image": "test.png",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.\nTiny - Good for dogs less than 10 inches high<br>Small - for dogs above 10 inches high<br>Medium - For dogs above 20 inches high<br>Large - For dogs above 30 inches high",
    "remove_on": ""
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

var itemsInCart = false;
var currentProduct = "";
var cartItems = document.getElementById("cartItems");

var shoppingOverlay = document.getElementById("shoppingOverlay");

var myProductHTML = "<div class = 'allProduct'>"
for(x = 0; x < products.length; x++){
    myProductHTML += "<div id =product"+x+" class = 'oneProduct "+products[x].remove_on+"'>"
    myProductHTML += "<img src='images/"+products[x].image+"'>";
    myProductHTML += "<p class = 'price'>$"+products[x].Price+"</p>";
    myProductHTML += "<h1>"+products[x].product_name+"</h1>";
    myProductHTML += "</div>"
    if(x == 2){
      myProductHTML += "</div><div class = 'allProduct'>"
    }
  }
myProductHTML += "</div>"
document.getElementById("products").innerHTML = myProductHTML;

var dogElements = document.getElementsByClassName('dog');
var catElements = document.getElementsByClassName('cat');
var catDogButton = document.getElementById('dogCatButton');
var catButton = document.getElementById('catButton');
var dogButton = document.getElementById('dogButton');

var productList = document.getElementsByClassName('oneProduct');
for(x = 0; x < productList.length; x++){
    productList[x].addEventListener("click", openOverlay);
  }

var myShoppingCart = document.getElementById("shoppingCart");

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

productName = document.getElementById("overlayProductName");
productPrice = document.getElementById("overlayProductPrice");
productImage = document.getElementById("overlayProductImage");
productDescription = document.getElementById("overlayProductDescription");

function openOverlay() {
  console.log(this);
  var productNumber = parseInt( this.id[this.id.length -1] );
  currentProduct = products[productNumber].product_name;
  productName.innerHTML = ""+products[productNumber].product_name+""
  productDescription.innerHTML = ""+products[productNumber].Description+""


  shoppingOverlay.style.display = "block";
}

function closeOverlay() {
  shoppingOverlay.style.display = "none";
  currentProduct = "";
}
function submit() {
  addToCart(currentProduct, "Black", "Tiny", 1);
  closeOverlay();
}

function addToCart(product, color, size, quantity) {
  if(itemsInCart == 0){
    cartItems.innerHTML = "";
  }
  itemsInCart +=1; 
  cartItems.innerHTML += "<div><p><span class ='delete' onclick= 'deleteCartItem(this)'>X</span>\
                        <span class ='product'>"+product+"</span>\
                        <span class ='quantity'>Q:<span class='plus'>+</span><span class='input'>"+quantity+"</span><span class='plus'>-</span>\
                        </span> <span class ='color'>Color: <span class='input '><span class = '"+color+"'></span>"+color+"<img alt='dropdown icon' src = 'images/icons/dropdownArrows.svg'></span></span>\
                        <span class ='size'>Size: <span class='input'>"+size+"<img alt='dropdown icon' src = 'images/icons/dropdownArrows.svg'></span></span></p></div>";
}

function deleteCartItem(item) {
  item.parentNode.remove();
  itemsInCart -=1;

  if(itemsInCart == 0){
    cartItems.innerHTML = "<div><p>No items in cart</p></div>";
  }

}