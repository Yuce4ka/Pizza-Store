window.onload = function() {
    let overlayText = document.querySelector('.overlay-text');
    overlayText.classList.add('active');
};



const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;


document.addEventListener("DOMContentLoaded", inicilazeSlider);

function inicilazeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId=setInterval(nextSlide,5000);
    }
   
    
}

function showSlides(index){
    if(index>=slides.length){
        slideIndex=0;
    }else if(index<0){
        slideIndex=slides.length-1;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlides(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlides(slideIndex);
}


// --------------------------------------Choose crust--------------------------------
const params = new URLSearchParams(window.location.search);
const crust = params.get('crust');

const crustImage = document.getElementById('crustImage');
switch (crust) {
    case 'original':
        crustImage.src = 'https://www.papajohns.com/static-assets/a/images/web/product/cyo/Original-Crust-Cheese-105369.jpg';
        break;
    case 'garlic':
        crustImage.src = 'https://www.papajohns.com/static-assets/a/img/builder/modifications/2023-P4-EGSC-Menu-Cheese.jpg';
        break;
    case 'epic':
        crustImage.src = 'https://www.papajohns.com/static-assets/a/img/builder/modifications/ESC-Cheese-105418.jpg';
        break;
    case 'thin':
        crustImage.src = 'https://www.papajohns.com/static-assets/a/images/web/product/cyo/Thin-Crust-Cheese-105206.jpg';
        break;
    default:
        crustImage.src = 'https://www.papajohns.com/static-assets/a/images/web/product/cyo/Original-Crust-Cheese-105369.jpg';
    }

    