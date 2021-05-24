import get from './util/getElement.js'
import navToggler from './util/navToggle.js'
import windowResize from './util/windowResize.js'
import navScroll from './util/navScroll.js'
import setYear from './util/year.js'
import displayTestimonies from './util/displayTestimonies.js'

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
    counter++;
    if(counter > 2){
        counter = 0;
    }
    setTestimonies(counter);
});

prev.addEventListener('click', ()=>{
    counter--;
    if(counter < 0){
        counter = (data.length / 3) - 1;
    }
    setTestimonies(counter);
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