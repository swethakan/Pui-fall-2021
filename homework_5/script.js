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

var shoppingOverlay = document.getElementById("shoppingOverlay");

var myProductHTML = "<div class = 'allProduct'>"
for(x = 0; x < products.length; x++){
    myProductHTML += "<div class = 'oneProduct "+products[x].remove_on+"'>"
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

function filterOutDog(){
  var dogElements = document.getElementsByClassName('dog');
  var catElements = document.getElementsByClassName('cat');
  
  for(x = 0; x < dogElements.length; x++){
    dogElements[x].classList.add( "remove" );
  }
  for(x = 0; x < catElements.length; x++){
    catElements[x].classList.remove( "remove" );
  }
}
function filterOutCat(){
  var dogElements = document.getElementsByClassName('dog');
  var catElements = document.getElementsByClassName('cat');
  
  for(x = 0; x < dogElements.length; x++){
    dogElements[x].classList.remove( "remove" );
  }
  for(x = 0; x < catElements.length; x++){
    catElements[x].classList.add( "remove" );
  }
}
function filterNone(){
  var dogElements = document.getElementsByClassName('dog');
  var catElements = document.getElementsByClassName('cat');
  
  for(x = 0; x < dogElements.length; x++){
    dogElements[x].classList.remove( "remove" );
  }
  for(x = 0; x < catElements.length; x++){
    catElements[x].classList.remove( "remove" );
  }
}


function openOverlay() {
  shoppingOverlay.style.display = "block";
}

function closeOverlay() {
  shoppingOverlay.style.display = "none";
}