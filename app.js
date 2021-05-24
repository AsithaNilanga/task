import get from './util/getElement.js'
import navToggler from './util/navToggle.js'
import windowResize from './util/windowResize.js'
import navScroll from './util/navScroll.js'
import setYear from './util/year.js'
import displayTestimonies from './util/displayTestimonies.js'
import {data} from './util/data.js'

// NAVBAR VAR
const navbar = get('.navbar');
const navLinks = get('.nav-links');
const navHeading  = get('.nav-heading');
const navLink = document.querySelectorAll('.nav-link');
const navToggle = get('.nav-toggle');
const linksContainer = get('.links-container');

// TESTIMONIES VAR
const next = get('.next');
const prev = get('.prev');
const testimoniesLg = get('.t-lg');
const testimoniesSm = get('.t-sm');
const carouselContainer = get('.carousel-container'); 
const carousel = carouselContainer.querySelectorAll('.carousel'); 

// YEAR VAR
const year = get('.year');  


// FOOTER YEAR
setYear(year);

// NAV TOGGLER
navToggle.addEventListener('click', ()=>{
    navToggler(navLinks, linksContainer);
});

// WINDOW RESIZE
window.addEventListener('resize', ()=>{
    const windowWidth = window.innerWidth;
    windowResize(windowWidth, linksContainer, navbar, navHeading, navLink);
})

// NAV SCROLL
window.addEventListener('scroll', ()=>{
    const windowWidth = window.innerWidth;
    const windowHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    
    navScroll(windowWidth, windowHeight, navbarHeight, navbar, navHeading, navLink);
});


// TESTIMONIES
displayTestimonies(testimoniesSm, testimoniesLg);

const singleTestimony = testimoniesLg.querySelectorAll('.single-testimony');
const singleTestimonySm = testimoniesSm.querySelectorAll('.single-testimony');

let counter = 0;

next.addEventListener('click', ()=>{
    counterPlus();
});

prev.addEventListener('click', ()=>{
    counterMinus();
});

carousel.forEach((item, index) => {
    item.addEventListener('click', (e)=>{
        counter = index * 3;
        carouselClass();
        e.target.classList.add('selected');
        setTestimonies(index);
    })
})

const setTestimonies = (count)=>{  
    let counts = count * 3;
    singleTestimony.forEach(item => {
        item.style.transform = `translateX(-${counts*100}%)`;
    });
    singleTestimonySm.forEach(item => {
        item.style.transform = `translateX(-${count*100}%)`;
    });
    carouselClass();
    carousel[count].classList.add('selected');
}

const carouselClass = ()=>{
    carousel.forEach(items=>{
        items.classList.remove('selected');
    });
}

// SWIPE
let startPos = 0;
let endPos = 0;

singleTestimonySm.forEach(item =>{
    item.addEventListener('touchstart', (e)=>{
        console.log('start');
        startPos = e.touches[0].clientX;
        console.log(startPos);
    });
    item.addEventListener('touchmove', (e)=>{
        console.log('move');
        endPos = e.touches[0].clientX;
        console.log(endPos);
    });
    item.addEventListener('touchend', (e)=>{
        console.log('end');
        let finalPos = startPos - endPos;
        if(finalPos > 10){
            counterPlus();
        }
        else if(finalPos < -10){
            counterMinus();
            }
    });
})

const counterPlus = ()=>{
    counter++;
    if(counter > 2){
        counter = 0;
    }
    setTestimonies(counter);
}

const counterMinus = ()=>{
    counter--;
    if(counter < 0){
        counter = (data.length / 3) - 1;
    }
    setTestimonies(counter);
}