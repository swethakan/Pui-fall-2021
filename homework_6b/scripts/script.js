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

//opens an overlay once user selects a product
function openOverlay() {
  color = "Black";
  Size = "Tiny";
  quantity = 1;
  var productNumber = parseInt( this.id[this.id.length -1] );
  image = products[productNumber].image;

  colorDefaultOnOverlay.innerText = color;
  sizeDefaultOnOverlay.innerText = size;
  quantityDefaultOnOverlay.innerText = quantity;
  imageDefaultOnOverlay.src = "images/"+image;

  currentProduct = products[productNumber].product_name;
  price = products[productNumber].Price;
  productName.innerHTML = ""+products[productNumber].product_name+"";
  productDescription.innerHTML = ""+products[productNumber].Description+"";
  productPrice.innerText = price;

  confirmName.innerHTML = ""+products[productNumber].product_name+"";


  shoppingOverlay.style.display = "block";
}

//once you add to cart, this function takes care of the cart and opens a confirmation overlay
const templateElement = document.getElementById("template-shopping-cart");
function addToCart(product, color, size, quantity, price) {
  if( window.shoppingCartProducts.length == 0){
    checkoutButton.disabled = false;
    checkoutWarning.classList.remove("on");
    cartItems.innerHTML = "";
  }

  //this is using adding the new shopping cart element to our global array 
  let array = [{
    "product": ""+product+"",
    "color": ""+color+"",
    "size": ""+size+"",
    "quantity": ""+quantity+"",
    "price": ""+price+"",
    "image": ""+image+"",
  }];

  //here's the global array. Just pushing our new value into it
  window.shoppingCartProducts.push(array);

  //Here, I use the method we learned in lab to add to the shopping cart
  const cartElement = templateElement.cloneNode(true);
  cartElement.id = ""
  const nameElement = cartElement.getElementsByClassName("product")[0];
    nameElement.innerHTML = product;
  const priceElement = cartElement.getElementsByClassName("price")[0];
    priceElement.innerHTML = (price*quantity);
  const sizeElement = cartElement.getElementsByClassName("size")[0].getElementsByClassName("change")[0];
    sizeElement.innerHTML = size;
  const colorElement = cartElement.getElementsByClassName("color")[0].getElementsByClassName("change")[0];
    colorElement.innerText = color;
  const quantityElement = cartElement.getElementsByClassName("quantity")[0].getElementsByClassName("input")[0];
  quantityElement.innerText = quantity;
  //now add our edited template item to the cart
  cartItems.appendChild(cartElement);

  //this takes care of the cart icon at the top of the page
  itemsInCart +=1;
  cartNumItems.innerHTML = "<span>"+itemsInCart+"</span>";

  //here's where we take care of the total price on the bottom cart
  totalPrice  += parseInt(price*quantity); 
  totalPriceDiv.innerHTML = "$"+ totalPrice +"";
}
//closes the overlay that confirms you've added somehting to the cart
function closeConfirm() {
  color = 
  addToCart(currentProduct, color, size, quantity, price);
  confirmOverlay.style.display = "none";
  currentProduct = "";
}

//closes the first overlay onscreen and opens up the confirm screen
function closeOverlay() {
  shoppingOverlay.style.display = "none";

  confirmColor.innerText = color;
  confirmSize.innerText = size;
  confirmQuantity.innerText = quantity;
  confirmImage.src = "images/"+image;
  confirmOverlay.style.display = "block";
}

//closes the first overlay onscreen and does NOT opens up the confirm screen
function closeOverlayNoBuy() {
  shoppingOverlay.style.display = "none";
  confirmOverlay.style.display = "none";
}

//like it says, when a user wants to get rid of an item, this function deletes it from the cart
function deleteCartItem(item) {
  //very complicated way to get the price of what was deleted. This would only work if the price is the last element in the description
  let takeawayPrice = item.parentNode.getElementsByClassName('price')[0].innerText;
  
  //delete from our global json array
  let indexOfItemDeleted = Array.prototype.indexOf.call(cartItems.children, item.parentNode.parentNode);

  window.shoppingCartProducts.splice(indexOfItemDeleted, 1);

  item.parentNode.parentNode.remove();
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

function newPage(){
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartProducts));
}