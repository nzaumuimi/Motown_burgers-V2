/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

/*=============== ADD SHADOW HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('shadow-header');
    else header.classList.remove('shadow-header');
  }
  window.addEventListener('scroll', scrollHeader);
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewpoirt height, add the show-scroll class to the a tag with the scrollup class
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); // Fixed querySelector to match class

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            if (sectionClass) {
                sectionClass.classList.add('active-link');
            }
        } else {
            if (sectionClass) {
                sectionClass.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({ // Ensure the ScrollReveal library is properly included
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true, // Animations repeat
});

// Reveal animations for different elements
sr.reveal('.home__data');
sr.reveal('.home__dish', {
    delay: 500,
    distance: '100px',
    origin: 'bottom'
});
sr.reveal('.home__burger', {
    delay: 1200,
    distance: '100px',
    duration: 1500
});
sr.reveal('.home__ingredient', { // Fixed typo from 'home__ingridient' to 'home__ingredient'
    delay: 1600,
    interval: 100
});
sr.reveal('.recipe__img', { 
    origin: 'left' // Corrected syntax
});
sr.reveal('.delivery__img', { // Fixed missing quote
    origin: 'left'
});
sr.reveal('.contact__image', { // Fixed missing quote
    origin: 'left'
});
sr.reveal('.recipe__data', { 
    origin: 'right'
});
sr.reveal('.delivery__data', { 
    origin: 'right'
});
sr.reveal('.contact__data', { 
    origin: 'right'
});
sr.reveal('.popular__card', { 
    interval: 100
});