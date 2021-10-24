const templateElement = document.getElementById("template-shopping-cart");
var cartItems = document.getElementById("cartItems");

var userItems = JSON.parse(localStorage.getItem("shoppingCart"));

function populateCart(){
    for(let i = 0; i < userItems.length; i++){ 
        const cartElement = templateElement.cloneNode(true);
        cartElement.classList.remove("hide");
        console.log (userItems[i]);
        
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

populateCart();