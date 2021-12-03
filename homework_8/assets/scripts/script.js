//import AOS from 'aos';
// import AOS from '../node_modules/aos/dist/aos.js';

let portfolioElement = document.getElementById("portfolio");
let contactElement = document.getElementById("contact");

let aboutButton = document.getElementById("about-btn");
let portfolioButton = document.getElementById("projects-btn");
let contactButton = document.getElementById("contact-btn");

let distanceFromTop = document.documentElement.scrollTop;
let aboutLocation = 0;
let portfolioLocation = portfolioElement.getBoundingClientRect().top+distanceFromTop-(window.innerHeight/2);
let contactLocation = portfolioElement.getBoundingClientRect().bottom+distanceFromTop-(window.innerHeight/2);
console.log("contactLocation = "+contactLocation);

document.addEventListener('scroll', function(e) {
    if(document.documentElement.scrollTop <portfolioLocation){
        if(!aboutButton.classList.contains("active")){
            clearSelection();
            aboutButton.classList.add("active");
        }
    }
    if(document.documentElement.scrollTop >= portfolioLocation && document.documentElement.scrollTop < contactLocation){
        if(!portfolioButton.classList.contains("active")){
            clearSelection();
            portfolioButton.classList.add("active");
        }

    }
    if(document.documentElement.scrollTop >= contactLocation){
        if(!contactButton.classList.contains("active")){
            clearSelection();
            contactButton.classList.add("active");
        }
    }
});

function clearSelection(){
    if(aboutButton.classList.contains("active")){
        aboutButton.classList.remove("active");
    }
    if(portfolioButton.classList.contains("active")){
        portfolioButton.classList.remove("active");
    }
    if(contactButton.classList.contains("active")){
        contactButton.classList.remove("active");
    }
}