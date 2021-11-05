window.shoppingCartProducts = [];

//Json of all our products
var products = [
  {
    "product_name": "GPS tracker",
    "Price": 100,
    "image": "products/gpsTracker.jpg",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.",
    "remove_on": "",
  },
  {
    "product_name": "Food Storage",
    "Price": 20,
    "image": "products/foodStorage.jpg",
    "Description": "A cute box to hold your pet's food. Leak-proof and insulated! Dry food will stay fresh in here. The cover of the bottle doubles as a eating dish!",
    "remove_on": ""
  },
  {
    "product_name": "Water Storage",
    "Price": 15,
    "image": "products/waterStorage.jpg",
    "Description": "A water bottle to store water for your furry pal! The top doubles as a bowl for your friend to drink from.",
    "remove_on": ""
  },
  {
    "product_name": "Cat Backpack",
    "Price": 45,
    "image": "products/catBackpack.jpg",
    "Description": "A back designed to carry your cat. Designed with safety in mind and available in a variety of colors!",
    "remove_on": "cat"
  },
  {
    "product_name": "Dog Harness",
    "Price": 23,
    "image": "products/dogHarness.jpg",
    "Description": "A harness for large and small dogs alike. How harnesses are made with natural materials and are durable enough to weather the elements. It is water resistant, and comfortable for your pets to wear.",
    "remove_on": "dog"
  },
  {
    "product_name": "Cat Harness",
    "Price": 23,
    "image": "products/catHarness.jpg",
    "Description": "A harness that is adjustable for all types of cats. We design with safety as the highest priority! Who said kitties can't use leashes too?",
    "remove_on": "cat"
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
let image = "products/catBackpack.jpg";

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
var imageDefaultOnOverlay = document.getElementById("overlayProductImage");

var userItems = JSON.parse(localStorage.getItem("shoppingCart"));

console.log(userItems);
window.shoppingCartProducts = userItems;