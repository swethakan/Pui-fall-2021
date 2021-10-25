window.shoppingCartProducts = [];

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


//To help our sorting functionality, get all the elements that should leave on dog filter, and ones that should leave on cat filter
var dogElements = document.getElementsByClassName('dog');
var catElements = document.getElementsByClassName('cat');

//Some more elements that will help us adjust the overlay
var productName = document.getElementById("overlayProductName");
var productPrice = document.getElementById("overlayProductPrice");
var productImage = document.getElementById("overlayProductImage");
var productDescription = document.getElementById("overlayProductDescription");


var confirmName = document.getElementById("confirmProductName");
var confirmImage = document.getElementById("confirmProductImage");
var confirmColor = document.getElementById("confirmColor");
var confirmSize = document.getElementById("confirmSize");
var confirmQuantity = document.getElementById("confirmQuantity");

var colorDefaultOnOverlay = document.getElementById("colorDefault");
var sizeDefaultOnOverlay = document.getElementById("sizeDefault");
var quantityDefaultOnOverlay = document.getElementById("quantityDefault");